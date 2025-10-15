import CheckInboxMail from '@/emails/CheckInboxMail';
import { prisma } from '@/lib/prisma';
import { render } from '@react-email/render';
import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { htmlToText } from 'html-to-text';
import { transporter } from '@/lib/mailer';

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

      if (allEmails.length > 0) {
        (async () => {
          try {
            const html = await render(CheckInboxMail({ link }), {
              pretty: true,
            });
            const text = htmlToText(html);

            await Promise.all(
              allEmails.map((email) =>
                transporter
                  .sendMail({
                    from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
                    to: email,
                    subject: 'New Announcement on DEEPROOTS',
                    html,
                    text,
                  })
                  .then(() => console.log(`Email sent to ${email}`))
                  .catch((err) =>
                    console.error(`Failed to send email to ${email}:`, err)
                  )
              )
            );
            console.log('All emails processed');
          } catch (err) {
            console.error('Error sending announcement emails:', err);
          }
        })();
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
