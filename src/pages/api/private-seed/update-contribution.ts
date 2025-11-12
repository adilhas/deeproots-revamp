import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || session?.user?.role !== 'seeder') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, capital, seedTier } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Missing submission ID' });
  }
  if (id !== session.user.id) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const numericAmount = Number(capital);
  if (!capital || isNaN(numericAmount) || numericAmount <= 0) {
    return res
      .status(400)
      .json({ message: 'Please enter a valid contribution amount' });
  }

  try {
    const updatedSubmission = await prisma.privateSeedSubmission.update({
      where: { id },
      data: {
        capital,
        seedTier,
      },
      select: {
        id: true,
        capital: true,
        seedTier: true,
      },
    });

    return res.status(200).json(updatedSubmission);
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Error updating submission', error });
  }
}
