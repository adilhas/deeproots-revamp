import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user.role !== 'seeder') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  const { seederId } = req.body;

  if (!seederId) {
    return res
      .status(400)
      .json({ success: false, message: 'Seeder ID is required' });
  }

  try {
    await prisma.privateSeedSubmission.update({
      where: { id: seederId },
      data: { canAddFund: 'under-review' },
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating status:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Error updating status' });
  }
}
