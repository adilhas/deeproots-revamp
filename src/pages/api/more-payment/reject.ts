import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

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
    const { paymentId, comment } = req.body;

    if (!paymentId || !comment) {
      return res
        .status(400)
        .json({ message: 'paymentId and comment required' });
    }

    const updatedPayment = await prisma.morePayment.update({
      where: { id: paymentId },
      data: {
        paymentStatus: 'declined',
        comment,
      },
    });

    return res.status(200).json({
      message: 'Payment rejected successfully',
      payment: updatedPayment,
    });
  } catch (err) {
    console.error('Error rejecting payment:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
