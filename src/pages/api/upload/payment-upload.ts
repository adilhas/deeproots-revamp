import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { IncomingForm } from 'formidable';

export const config = {
  api: { bodyParser: false },
};

import type { Fields, Files } from 'formidable';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { uploadToSupabase } from '@/lib/uploadToSupabase';
import { uploadRateLimiter } from '@/lib/rateLimiter';
// import { scanFileWithOPSWAT } from '@/lib/scanFileWithOPSWAT';
import { enqueueFileScan } from '@/services/scanService';

const parseForm = (req: NextApiRequest) =>
  new Promise<{ fields: Fields; files: Files }>((resolve, reject) => {
    const form = new IncomingForm({ keepExtensions: true });
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
  if (req.method !== 'POST') return res.status(405).end();

  // 1️⃣ Rate limit check before doing heavy parsing
  const ip =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
    req.socket?.remoteAddress ||
    'unknown';

  const { success, blocked, retryAfter } = await uploadRateLimiter(ip);
  if (!success) {
    return res.status(429).json({
      error: blocked
        ? typeof retryAfter === 'number'
          ? `Too many uploads. Try again after ${Math.ceil(
              (retryAfter - Date.now()) / 1000 / 60
            )} minutes.`
          : 'Too many uploads. Please try again later.'
        : 'Upload limit exceeded. Please try later.',
    });
  }

  try {
    const { fields, files } = await parseForm(req);

    // const amountSent = fields.amountSent?.toString();
    const transactionLink = fields.transactionLink?.toString();
    const submissionId = fields.submissionId?.toString();
    const paymentFile = files.paymentImage;

    const file = Array.isArray(paymentFile) ? paymentFile[0] : paymentFile;

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    const isFile = (val: unknown): val is File =>
      typeof val === 'object' && val !== null && 'filepath' in val;

    if (!transactionLink || !submissionId || !file || !isFile(file)) {
      return res
        .status(400)
        .json({ message: 'Missing or invalid payment fields' });
    }

    if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
      return res.status(400).json({
        message: 'Invalid file type. Only JPG, PNG, and PDF are allowed.',
      });
    }

    if (file.size > maxSize) {
      return res.status(400).json({
        message: 'File too large. Maximum size is 5MB.',
      });
    }

    // const isSafe = await scanFileWithOPSWAT(file.filepath);
    // if (!isSafe) {
    //   return res.status(400).json({
    //     message: `Malware detected in ${file.originalFilename} file.`,
    //   });
    // }

    await enqueueFileScan(file.filepath);

    const paymentImageUrl = await uploadToSupabase(
      file,
      `payments/${submissionId}`
    );

    const capitalAmount = await prisma.privateSeedSubmission.findUnique({
      where: {
        id: submissionId,
      },
      select: {
        capital: true,
      },
    });

    if (!capitalAmount) {
      return res.status(400).json({
        message: 'Cannot Find capital amount for this account.',
      });
    }

    const payment = await prisma.paymentDetails.create({
      data: {
        amountSent: capitalAmount.capital,
        transactionLink,
        paymentImage: paymentImageUrl,
        submissionId,
      },
    });

    await prisma.privateSeedSubmission.update({
      where: { id: submissionId },
      data: {
        dealRoom: 'under-review',
      },
    });

    return res
      .status(200)
      .json({ message: 'Payment submitted successfully', payment });
  } catch (error) {
    console.error('[PAYMENT_UPLOAD_ERROR]', error);
    return res.status(500).json({
      message: 'Failed to upload payment',
      error: (error as Error).message,
    });
  }
}
