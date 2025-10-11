import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  // ✅ Ensure seeder is logged in
  if (!session?.user || session.user.role !== 'seeder') {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }

  // Allow only POST requests
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  const { seederId, requestedAmount, comment } = req.body;

  if (!seederId || !requestedAmount) {
    return res.status(400).json({
      success: false,
      message: 'Seeder ID and requested amount are required.',
    });
  }

  try {
    // ✅ Create a new MorePayment request entry
    const newRequest = await prisma.morePayment.create({
      data: {
        requestedAmount: requestedAmount.toString(),
        comment: comment || null,
        status: 'requested', // first phase
        submission: { connect: { id: seederId } },
      },
    });

    await prisma.privateSeedSubmission.update({
      where: { id: seederId },
      data: {
        canAddFund: 'under-review',
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Fund addition request submitted successfully.',
      data: newRequest,
    });
  } catch (error) {
    console.error('Error creating fund request:', error);
    return res.status(500).json({
      success: false,
      message: 'Error creating fund request.',
    });
  }
}
