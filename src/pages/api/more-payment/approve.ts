import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { uploadToSupabase } from '@/lib/uploadToSupabase';
import formidable, { File as FormidableFile, Fields, Files } from 'formidable';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { getSeedTierFromCapital } from '@/lib/getSeedTierFromCapital';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest): Promise<[Fields, Files]> => {
  const form = formidable({ multiples: false, keepExtensions: true });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve([fields, files]);
    });
  });
};

const isValidFile = (file: FormidableFile) => {
  const allowedMimeTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  const maxSize = 5 * 1024 * 1024; // 5MB

  if (!file.mimetype || !allowedMimeTypes.includes(file.mimetype)) {
    return {
      valid: false,
      message: 'Invalid file type. Only JPG, PNG, PDF allowed.',
    };
  }
  if (file.size > maxSize) {
    return { valid: false, message: 'File too large. Max 5MB.' };
  }
  return { valid: true };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const [fields, files] = await parseForm(req);

    const paymentId = fields.paymentId?.[0];
    const receiptFile = files.receipt?.[0] as FormidableFile | undefined;

    if (!paymentId || !receiptFile) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    const { valid, message } = isValidFile(receiptFile);
    if (!valid) return res.status(400).json({ message });

    // Upload receipt to Supabase
    const uploadedUrl = await uploadToSupabase(
      receiptFile,
      receiptFile.originalFilename || 'receipt-proof'
    );

    // Update payment and include submission
    const payment = await prisma.morePayment.update({
      where: { id: paymentId },
      data: {
        paymentStatus: 'approved',
        receiptUrl: uploadedUrl,
      },
      include: {
        submission: true,
      },
    });

    // Update capital
    const approvedAmount = parseFloat(payment.amountSent);
    if (!isNaN(approvedAmount)) {
      const currentCapital = parseFloat(payment.submission?.capital || '0');
      const updatedCapital = currentCapital + approvedAmount;

      const updatedSubmission = await prisma.privateSeedSubmission.update({
        where: { id: payment.submissionId },
        data: {
          capital: updatedCapital.toString(),
          seedTier: getSeedTierFromCapital(updatedCapital.toString()),
        },
      });

      // Attach updated submission to payment for response
      payment.submission = updatedSubmission;
    } else {
      console.warn(
        `Payment ${payment.id} has invalid amountSent: ${payment.amountSent}`
      );
    }

    return res.status(200).json({
      message: 'Payment approved & capital updated',
      payment,
      updatedCapital: payment.submission.capital,
      updatedSeedTier: payment.submission.seedTier,
    });
  } catch (err) {
    console.error('Error approving payment:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
