import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { declineReason, submissionId } = req.body;

    if (!declineReason || typeof declineReason !== 'string') {
      return res.status(400).json({ message: 'Decline reason is required.' });
    }

    if (!submissionId || typeof submissionId !== 'string') {
      return res
        .status(400)
        .json({ message: 'Valid submissionId is required.' });
    }

    await prisma.privateSeedSubmission.update({
      where: { id: submissionId },
      data: {
        dealRoom: 'declined',
      },
    });
    const updated = await prisma.paymentDetails.update({
      where: { submissionId },
      data: {
        paymentStatus: 'declined',
        declineReason,
      },
    });

    return res.status(200).json({
      message: 'Payment declined successfully.',
      paymentStatus: updated.paymentStatus,
      declineReason: updated.declineReason,
    });
  } catch (err) {
    console.error('Decline Submission Error:', err);
    return res
      .status(500)
      .json({ message: 'Decline failed', error: (err as Error).message });
  }
}
