import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = req.query;

  if (typeof token !== 'string') {
    return res.status(400).json({ error: 'Invalid token format' });
  }

  const record = await prisma.seederAccountToken.findUnique({
    where: { token },
  });

  if (!record || record.used || new Date(record.expiresAt) < new Date()) {
    return res.status(400).json({ error: 'Invalid or expired token' });
  }

  return res.status(200).json({ email: record.email });
}
