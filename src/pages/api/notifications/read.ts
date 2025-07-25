// pages/api/notifications/read.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'Notification ID is required' });
  }

  try {
    const updated = await prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });

    return res.status(200).json(updated);
  } catch (err) {
    console.error('[Mark Notification Read]', err);
    return res.status(500).json({ error: 'Something went wrong' });
  }
}
