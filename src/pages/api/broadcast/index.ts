import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  try {
    if (req.method === 'GET') {
      const broadcasts = await prisma.boradcastMessage.findMany({
        orderBy: {
          createdAt: 'desc',
        },
      });
      return res.status(200).json(broadcasts);
    }

    if (req.method === 'POST') {
      if (session?.user?.role !== 'admin') {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { message } = req.body;

      if (!message || typeof message !== 'string') {
        return res
          .status(400)
          .json({ error: 'Message is required and must be a string.' });
      }

      const newBroadcast = await prisma.boradcastMessage.create({
        data: {
          message,
        },
      });

      return res.status(201).json(newBroadcast);
    }

    // Method not allowed
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  } catch (error) {
    console.error('Broadcast API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
