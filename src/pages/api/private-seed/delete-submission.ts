import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { prisma } from '@/lib/prisma';
import { deleteFoldersFromSupabase } from '@/lib/deleteFromSupabase';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session || session?.user?.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res
      .status(400)
      .json({ message: 'Invalid or missing submission ID' });
  }

  try {
    await prisma.$transaction([
      prisma.notification.deleteMany({ where: { submissionId: id } }),
      prisma.managementNotes.deleteMany({ where: { submissionId: id } }),
      prisma.kycDocument.deleteMany({ where: { userId: id } }),
      prisma.ndaSubmission.deleteMany({ where: { userId: id } }),
      prisma.paymentDetails.deleteMany({ where: { submissionId: id } }),
      prisma.morePayment.deleteMany({ where: { submissionId: id } }),
      prisma.privateSeedSubmission.delete({ where: { id } }),
    ]);

    await deleteFoldersFromSupabase(id, ['kyc', 'payments', 'receipts', 'nda']);

    return res.status(200).json({
      success: true,
      message: 'Submission and related data deleted successfully.',
    });
  } catch (error: unknown) {
    console.error('Delete submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to delete submission.',
      error:
        typeof error === 'object' && error !== null && 'message' in error
          ? (error as { message: string }).message
          : 'Unknown error',
    });
  }
}
