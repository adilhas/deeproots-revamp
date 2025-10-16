import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (req.method === 'GET') {
    try {
      const mainSiteAnnouncements = await prisma.mainSiteAnnouncement.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(mainSiteAnnouncements);
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to fetch announcements' });
    }
  }

  if (req.method === 'POST') {
    if (session?.user.role !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    try {
      const mainSiteAnnouncement = await prisma.mainSiteAnnouncement.create({
        data: { message },
      });

      return res.status(201).json(mainSiteAnnouncement);
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to create mainSiteAnnouncement' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
