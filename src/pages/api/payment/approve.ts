import type { NextApiRequest, NextApiResponse } from 'next';
import { IncomingForm, File, Fields, Files } from 'formidable';
import fs from 'fs/promises';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { v4 as uuidv4 } from 'uuid';
import { prisma } from '@/lib/prisma';
// import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import PaymentApprovalMail from '@/emails/PaymentApprovalMail';
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth/next';
import { transporter } from '@/lib/mailer';

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (
  req: NextApiRequest
): Promise<{ fields: Fields; files: Files }> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm({
      keepExtensions: true,
      multiples: false,
    });

    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
};

const uploadToSupabase = async (
  file: File,
  folder: string
): Promise<string> => {
  if (!file.filepath) {
    throw new Error('Uploaded file has no filepath.');
  }

  const buffer = await fs.readFile(file.filepath);
  const fileExt = file.originalFilename?.split('.').pop() || 'pdf';
  const fileName = `${folder}/${uuidv4()}.${fileExt}`;

  const { error } = await supabaseAdmin.storage
    .from('deeproots-upload')
    .upload(fileName, buffer, {
      contentType: file.mimetype || 'application/octet-stream',
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload file to Supabase: ${error.message}`);
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/deeproots-upload/${fileName}`;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ message: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { fields, files } = await parseForm(req);
    const fileArray = files.file as File[] | File | undefined;
    const file = Array.isArray(fileArray) ? fileArray[0] : fileArray;
    const submissionId = fields.submissionId?.toString();

    if (!file || !file.filepath || !submissionId) {
      return res.status(400).json({
        message: 'Missing file or submissionId',
      });
    }

    const allowedMimeTypes = ['application/pdf', 'image/png', 'image/jpeg'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    // ✅ Check size
    if (file.size > maxSize) {
      return res.status(400).json({
        message: 'File size must be under 5MB.',
      });
    }

    // ✅ Check type
    if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
      return res.status(400).json({
        message: 'Only PDF, PNG, and JPEG files are allowed.',
      });
    }

    const receiptUrl = await uploadToSupabase(file, `receipts/${submissionId}`);

    const updated = await prisma.paymentDetails.update({
      where: { submissionId: submissionId as string },
      data: {
        receiptUrl: receiptUrl,
        paymentStatus: 'approved',
      },
    });

    await prisma.privateSeedSubmission.update({
      where: { id: submissionId },
      data: {
        dealRoom: 'approved',
      },
    });

    const submission = await prisma.privateSeedSubmission.findUnique({
      where: { id: submissionId },
      select: {
        fullName: true,
        email: true,
      },
    });

    if (!submission) {
      return res.status(404).json({ message: 'Submission not found' });
    }

    const subject = 'Payment Approved – DEEPROOTS';
    const text = `Hi ${submission.fullName},

We’ve received your payment and your allocation has been approved.

Thank you for securing your seat in DEEPROOTS!

- DEEPROOTS Team`;
    const html = await render(
      PaymentApprovalMail({
        name: submission.fullName,
        url: process.env.NEXTAUTH_URL || '',
      }),
      { pretty: true }
    );
    await transporter.sendMail({
      from: `Team DEEPROOTS`,
      to: submission.email,
      subject,
      text,
      html,
    });
    return res.status(200).json({
      receiptUrl: updated.receiptUrl,
      paymentStatus: updated.paymentStatus,
    });
  } catch (err) {
    console.error('Merged Submission Error:', err);
    return res.status(500).json({
      message: 'Upload failed',
      error: (err as Error).message,
    });
  }
}
