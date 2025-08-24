import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm } from 'formidable';
import { prisma } from '@/lib/prisma';
import { KycDocumentType } from '@prisma/client';
import type { File } from 'formidable';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { uploadToSupabase } from '@/lib/uploadToSupabase';

export const config = {
  api: { bodyParser: false },
};

const fieldToKycEnum: Record<string, KycDocumentType> = {
  passport: KycDocumentType.PASSPORT,
  proof_of_address: KycDocumentType.PROOF_OF_ADDRESS,
  selfie_with_note: KycDocumentType.SELFIE_WITH_NOTE,
  business_license: KycDocumentType.BUSINESS_LICENSE,
  company_address: KycDocumentType.COMPANY_ADDRESS,
  authorization_letter: KycDocumentType.AUTHORIZATION_LETTER,
  rep_id_selfie: KycDocumentType.REP_ID_SELFIE,
};

import type { Fields, Files } from 'formidable';
import { uploadRateLimiter } from '@/lib/rateLimiter';
import { enqueueFileScan } from '@/services/scanService';

const parseForm = (req: NextApiRequest) =>
  new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
    const form = new IncomingForm({ keepExtensions: true, multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket?.remoteAddress ||
    'unknown';

  const { success, blocked, retryAfter } = await uploadRateLimiter(ip);
  if (!success) {
    return res.status(429).json({
      error: blocked
        ? `Too many uploads. Try again after ${Math.ceil(
            ((retryAfter ?? Date.now()) - Date.now()) / 1000 / 60
          )} minutes.`
        : 'Upload limit exceeded. Please try later.',
    });
  }

  try {
    const { fields, files } = await parseForm(req);

    const userId = fields.userId?.toString();
    const fullName = fields.fullName?.toString();

    if (!userId || !fullName) {
      return res.status(400).json({
        message: 'Missing required NDA details',
      });
    }

    const allowedMimeTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    let signatureUrl: string | null = null;
    const sigFile = files.signature;
    const isFile = (val: unknown): val is File =>
      typeof val === 'object' && val !== null && 'filepath' in val;

    if (sigFile) {
      const file = Array.isArray(sigFile) ? sigFile[0] : sigFile;
      if (isFile(file)) {
        if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
          return res.status(400).json({
            message: 'Signature must be an image or PDF.',
          });
        }
        if (file.size > maxSize) {
          return res.status(400).json({
            message: 'Signature file size must be under 5MB.',
          });
        }
        signatureUrl = await uploadToSupabase(file, `nda/${userId}`);
      }
    }

    await prisma.ndaSubmission.upsert({
      where: { userId },
      update: {
        typedSignature: fullName,
        signatureImage: signatureUrl ?? '',
        acceptedAt: new Date(),
      },
      create: {
        userId,
        typedSignature: fullName,
        signatureImage: signatureUrl ?? '',
        acceptedAt: new Date(),
      },
    });

    // ✅ Step 1: Delete existing KYC documents for this user
    await prisma.kycDocument.deleteMany({
      where: { userId },
    });

    // ✅ Step 2: Upload new KYC documents
    const fileEntries = Object.entries(files);
    const uploadedDocs = [];

    for (const [key, fileVal] of fileEntries) {
      const isSignature = key === 'signature';
      if (isSignature) continue;

      const enumKey = fieldToKycEnum[key];
      if (!enumKey) {
        console.warn(`Unknown KYC field: ${key}`);
        return res.status(400).json({
          message: `Unknown KYC field: ${key}`,
        });
      }

      const file = Array.isArray(fileVal) ? fileVal[0] : fileVal;
      if (!file || !isFile(file)) {
        console.warn(`Invalid or missing file for: ${key}`);
        return res.status(400).json({
          message: `Invalid or missing file for: ${key}`,
        });
      }

      if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
        return res.status(400).json({
          message: `Invalid file type for ${key}: ${file.originalFilename}. Allowed types: PDF, PNG, JPEG.`,
        });
      }

      if (file.size > maxSize) {
        console.warn(`Rejected KYC file for ${key} due to size: ${file.size}`);
        return res.status(400).json({
          message: `File ${file.originalFilename} exceeds 5MB limit.`,
        });
      }

      // const isSafe = await scanFileWithOPSWAT(file.filepath);
      // if (!isSafe) {
      //   return res.status(400).json({
      //     message: `Malware detected in ${file.originalFilename} file.`,
      //   });
      // }
      await enqueueFileScan(file.filepath);

      const url = await uploadToSupabase(file, 'kyc/' + userId);

      const doc = await prisma.kycDocument.create({
        data: {
          userId,
          type: enumKey,
          url,
        },
      });

      uploadedDocs.push(doc);
    }
    await prisma.privateSeedSubmission.updateMany({
      where: { id: userId },
      data: { preApproval: 'under-review' },
    });
    // ✅ Fetch full NDA from DB
    const updatedNda = await prisma.ndaSubmission.findUnique({
      where: { userId },
    });

    // ✅ Fetch all KYC documents for the user
    const updatedKyc = await prisma.kycDocument.findMany({
      where: { userId },
    });

    return res.status(200).json({
      message: 'NDA and KYC submitted successfully',
      nda: updatedNda,
      kyc: updatedKyc,
      preApproval: 'under-review',
    });
  } catch (err) {
    console.error('Merged Submission Error:', err);
    return res
      .status(500)
      .json({ message: 'Upload failed', error: (err as Error).message });
  }
}
