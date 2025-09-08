import CheckInboxMail from '@/emails/CheckInboxMail';
import { prisma } from '@/lib/prisma';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { resend } from '@/lib/resend';
import { htmlToText } from 'html-to-text';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

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
    if (session?.user.role !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: 'Message is required' });

    try {
      const announcement = await prisma.announcement.create({
        data: { message },
      });
      // 2. Fetch all emails from submissions table
      const submissions = await prisma.privateSeedSubmission.findMany({
        where: {
          NOT: {
            OR: [
              { applicationStatus: 'declined' },
              { dealRoom: 'declined' },
              { preApproval: 'declined' },
              { paymentDetails: { paymentStatus: 'declined' } },
            ],
          },
        },
        select: { email: true },
      });

      const allEmails = submissions.map((s) => s.email).filter(Boolean);
      const link = `${process.env.NEXTAUTH_URL || 'https://deeproots.earth'}/seeder/application`;

      // function sleep(ms: number) {
      //   return new Promise((resolve) => setTimeout(resolve, ms));
      // }
      // if (allEmails.length > 0) {
      //   const html = await render(CheckInboxMail({ link }), { pretty: true });
      //   const text = htmlToText(html);

      //   // Resend has batch size limits (usually 100), so we might need to chunk
      //   const batchSize = 100;
      //   for (let i = 0; i < allEmails.length; i += batchSize) {
      //     const batch = allEmails.slice(i, i + batchSize);
      //     const emails = batch.map((email) => ({
      //       to: email,
      //       from: 'Team DEEPROOTS',
      //       subject: 'New Announcement on DEEPROOTS',
      //       html,
      //       text,
      //     }));

      //     try {
      //       await resend.batch.send(emails);
      //       await sleep(2000);
      //     } catch (emailError) {
      //       console.error(
      //         `Failed to send batch starting at index ${i}:`,
      //         emailError
      //       );
      //     }
      //   }
      // }
      if (allEmails.length > 0) {
        const html = await render(CheckInboxMail({ link }), { pretty: true });
        const text = htmlToText(html);

        try {
          await resend.emails.send({
            from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
            to: allEmails,
            subject: 'New Announcement on DEEPROOTS',
            html,
            text,
          });
        } catch (emailError) {
          console.error('Failed to send emails:', emailError);
        }
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
