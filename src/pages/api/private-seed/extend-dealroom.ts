import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { render } from '@react-email/render';
import DealRoomExtended from '@/emails/DealRoomExtended';
import { transporter } from '@/lib/mailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session || session?.user?.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { submissionId } = req.body;

  if (!submissionId) {
    return res.status(400).json({ message: 'Missing submissionId' });
  }

  try {
    const updatedSubmission = await prisma.privateSeedSubmission.update({
      where: { id: submissionId },
      data: {
        dealRoomExpireIn: new Date(Date.now() + 24 * 60 * 60 * 1000),
        isDealRoomExpired: false,
        firstReminderSent: false,
        secondReminderSent: false,
        dealRoom: 'not-submitted',
      },
    });

    const subject = 'Your Deal Room Expiry is Extended';
    const html = await render(
      DealRoomExtended({
        name: updatedSubmission.fullName,
        url: process.env.NEXTAUTH_URL || 'https://deeproots.earth',
      }),
      {
        pretty: true,
      }
    );

    await transporter.sendMail({
      from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
      to: updatedSubmission.email,
      subject,
      html,
    });

    return res.status(200).json({
      message: 'dealRoomExpireIn updated successfully',
      data: updatedSubmission,
    });
  } catch (error) {
    console.error('Error updating dealRoomExpireIn:', error);
    return res
      .status(500)
      .json({ message: 'Error updating dealRoomExpireIn', error });
  }
}
