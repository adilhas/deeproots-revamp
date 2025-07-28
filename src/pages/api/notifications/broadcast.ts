import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { render } from '@react-email/render';
import CheckInboxMail from '@/emails/CheckInboxMail';
import { transporter } from '@/lib/mailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session || session.user.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const {
    title,
    message,
    type = 'INFO',
    link = `${process.env.NEXTAUTH_URL}/seeder/dashboard`,
  } = req.body;

  if (!title || !message) {
    return res.status(400).json({ error: 'Missing title or message' });
  }

  try {
    // Get all submissions with user email
    const submissions = await prisma.privateSeedSubmission.findMany({});

    if (!submissions.length) {
      return res.status(404).json({ error: 'No approved submissions found.' });
    }

    // Bulk create notifications
    await prisma.notification.createMany({
      data: submissions.map(({ id }) => ({
        title,
        message,
        sender: 'ADMIN',
        type,
        link,
        submissionId: id,
      })),
    });

    // Send email to each user
    const html = await render(CheckInboxMail({ link }), { pretty: true });

    const emailPromises = submissions
      .filter((sub) => sub.email)
      .map((sub) =>
        transporter.sendMail({
          from: 'Team DEEPROOTS <noreply@deeproots.earth>',
          to: sub.email!,
          subject: 'New Notification on our dashboard',
          html,
        })
      );

    await Promise.all(emailPromises);

    return res.status(201).json({
      success: true,
      message: `Notification sent to ${submissions.length} users.`,
    });
  } catch (error) {
    console.error('Broadcast error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
