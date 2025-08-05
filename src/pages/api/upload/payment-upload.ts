import type { NextApiRequest, NextApiResponse } from 'next';
// import { IncomingForm, File } from 'formidable';
// import fs from 'fs/promises';
// import { v4 as uuidv4 } from 'uuid';
import { prisma } from '@/lib/prisma';
// import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { IncomingForm } from 'formidable';

export const config = {
  api: { bodyParser: false },
};

// const uploadPaymentFileToSupabase = async (file: File, folder: string) => {
//   const buffer = await fs.readFile(file.filepath);
//   const fileExt = file.originalFilename?.split('.').pop() || 'pdf';
//   const fileName = `${folder}/${uuidv4()}.${fileExt}`;

//   const { error } = await supabaseAdmin.storage
//     .from('deeproots-upload')
//     .upload(fileName, buffer, {
//       contentType: file.mimetype || 'application/octet-stream',
//       upsert: true,
//     });

//   if (error) throw new Error(error.message);

//   return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/deeproots-upload/${fileName}`;
// };

import type { Fields, Files } from 'formidable';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { uploadToSupabase } from '@/lib/uploadToSupabase';

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

  try {
    const { fields, files } = await parseForm(req);

    const amountSent = fields.amountSent?.toString();
    const transactionLink = fields.transactionLink?.toString();
    const submissionId = fields.submissionId?.toString();
    const paymentFile = files.paymentImage;
    // const file = Array.isArray(paymentFile) ? paymentFile[0] : paymentFile;

    // if (!amountSent || !transactionLink || !file || !submissionId) {
    //   return res.status(400).json({ error: 'Missing required payment fields' });
    // }

    const file = Array.isArray(paymentFile) ? paymentFile[0] : paymentFile;

    const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    const isFile = (val: unknown): val is File =>
      typeof val === 'object' && val !== null && 'filepath' in val;

    if (
      !amountSent ||
      !transactionLink ||
      !submissionId ||
      !file ||
      !isFile(file)
    ) {
      return res
        .status(400)
        .json({ error: 'Missing or invalid payment fields' });
    }

    if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
      return res.status(400).json({
        error: 'Invalid file type. Only JPG, PNG, and PDF are allowed.',
      });
    }

    if (file.size > maxSize) {
      return res.status(400).json({
        error: 'File too large. Maximum size is 5MB.',
      });
    }

    const paymentImageUrl = await uploadToSupabase(
      file,
      `payments/${submissionId}`
    );

    const payment = await prisma.paymentDetails.create({
      data: {
        amountSent,
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
