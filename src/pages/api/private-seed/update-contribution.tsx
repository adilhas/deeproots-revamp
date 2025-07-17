import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id, contributionAmount, seedTier } = req.body;

  if (!id) {
    return res.status(400).json({ message: 'Missing submission ID' });
  }

  try {
    const updatedSubmission = await prisma.privateSeedSubmission.update({
      where: { id },
      data: {
        contributionAmount,
        seedTier,
      },
      select: {
        id: true,
        contributionAmount: true,
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
