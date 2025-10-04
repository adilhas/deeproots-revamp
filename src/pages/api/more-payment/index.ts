import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma'; // Adjust the path if needed
import { uploadToSupabase } from '@/lib/uploadToSupabase';
import formidable, { File as FormidableFile, Fields, Files } from 'formidable';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

// Disable Next.js's default body parsing to handle FormData
export const config = {
  api: {
    bodyParser: false,
  },
};

// Helper to parse form data using formidable
const parseForm = (req: NextApiRequest): Promise<[Fields, Files]> => {
  const form = formidable({ multiples: false, keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });
};

// Validate uploaded file
const isValidFile = (file: FormidableFile) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
    return {
      valid: false,
      message: 'Invalid file type. Only JPG, PNG, and PDF are allowed.',
    };
  }

  if (file.size > maxSize) {
    return {
      valid: false,
      message: 'File too large. Maximum size is 5MB.',
    };
  }

  return { valid: true };
};

// API handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user.role !== 'seeder') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const [fields, files] = await parseForm(req);

    const transactionLink = fields.transactionLink?.[0];
    const submissionId = fields.submissionId?.[0];
    const paymentFile = files.paymentImage?.[0] as FormidableFile | undefined;
    const amountSent = fields.amountSent?.[0];

    if (!transactionLink || !submissionId || !paymentFile || !amountSent) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Validate file
    const { valid, message } = isValidFile(paymentFile);
    if (!valid) {
      return res.status(400).json({ message });
    }

    // Upload to Supabase
    const uploadedUrl = await uploadToSupabase(
      paymentFile,
      paymentFile.originalFilename || 'payment-proof'
    );

    // Save record to database
    const payment = await prisma.morePayment.create({
      data: {
        transactionLink,
        paymentImage: uploadedUrl,
        paymentStatus: 'under-review',
        submissionId: submissionId,
        amountSent,
      },
    });

    await prisma.privateSeedSubmission.update({
      where: { id: submissionId },
      data: {
        canAddFund: 'not-submitted',
      },
    });

    return res.status(200).json({
      message: 'Payment submitted successfully!',
      fileUrl: uploadedUrl,
      payment, // ✅ return the created payment
    });
  } catch (error) {
    console.error('Error submitting payment:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
