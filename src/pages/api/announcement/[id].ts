// pages/api/announcement/[id].ts
import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid ID' });
  }

  if (req.method === 'PUT') {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    try {
      const updated = await prisma.announcement.update({
        where: { id },
        data: { message },
      });
      return res.status(200).json(updated);
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to update announcement' });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await prisma.announcement.delete({
        where: { id },
      });
      return res.status(204).end();
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to delete announcement' });
    }
  }

  // Handle unsupported methods
  res.setHeader('Allow', ['PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
