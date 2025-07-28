// pages/api/announcement/index.ts
import CheckInboxMail from '@/emails/CheckInboxMail';
import { transporter } from '@/lib/mailer';
import { prisma } from '@/lib/prisma';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const announcements = await prisma.announcement.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(announcements);
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to fetch announcements' });
    }
  }

  if (req.method === 'POST') {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    try {
      const announcement = await prisma.announcement.create({
        data: { message },
      });
      // 2. Fetch all emails from submissions table
      const submissions = await prisma.privateSeedSubmission.findMany({
        select: { email: true },
      });

      const allEmails = submissions.map((s) => s.email).filter(Boolean);
      const link = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://deeproots.earth'}/seeder/application`;

      if (allEmails.length > 0) {
        // 3. Render email
        const html = await render(
          CheckInboxMail({
            link,
          }),
          {
            pretty: true,
          }
        );

        // 4. Send bulk email
        await transporter.sendMail({
          from: 'Team DEEPROOTS <noreply@deeproots.earth>',
          bcc: allEmails,
          subject: 'New Announcement on DEEPROOTS',
          html,
        });
      }
      return res.status(201).json(announcement);
    } catch (err) {
      return res
        .status(500)
        .json({ err, message: 'Failed to create announcement' });
    }
  }

  // Catch all other methods
  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
