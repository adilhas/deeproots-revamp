import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { transporter } from '@/lib/mailer';
import { render } from '@react-email/render';

import MoreFundReqApproveMail from '@/emails/MoreFundReqApproveMail';
import MoreFundReqDeclineMail from '@/emails/MoreFundReqDeclineMail';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (session?.user.role !== 'admin') {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method !== 'PATCH') {
    return res
      .status(405)
      .json({ success: false, message: 'Method not allowed' });
  }

  const { seederId, status } = req.body;

  if (!seederId || !status) {
    return res
      .status(400)
      .json({ success: false, message: 'Seeder ID and status are required' });
  }

  if (!['approved', 'declined'].includes(status)) {
    return res
      .status(400)
      .json({ success: false, message: 'Invalid status value' });
  }

  try {
    const seeder = await prisma.privateSeedSubmission.update({
      where: { id: seederId },
      data: {
        canAddFund: status === 'approved' ? 'approved' : 'not-submitted',
      },
    });

    if (!seeder?.email) {
      console.warn('Seeder email not found.');
      return res.status(200).json({ success: true });
    }

    // ✅ Prepare email content
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL || 'https://www.deeproots.earth';
    let subject = '';
    let html = '';

    if (status === 'approved') {
      subject = 'Your Fund Addition Request has been Approved 🎉';
      html = await render(
        MoreFundReqApproveMail({ name: seeder.fullName, url: baseUrl })
      );
    } else if (status === 'declined') {
      subject = 'Your Fund Addition Request could not be Approved';
      html = await render(
        MoreFundReqDeclineMail({ name: seeder.fullName, url: baseUrl })
      );
    }

    await transporter.sendMail({
      from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
      to: seeder.email,
      subject,
      html,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating status:', error);
    return res
      .status(500)
      .json({ success: false, message: 'Error updating status' });
  }
}
