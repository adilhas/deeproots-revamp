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

  const { morePaymentId, status } = req.body;

  if (!morePaymentId || !status) {
    return res.status(400).json({
      success: false,
      message: 'MorePayment ID and status are required',
    });
  }

  // ✅ Validate allowed statuses for this phase
  if (!['approved', 'declined'].includes(status)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid status value. Must be "approved" or "declined".',
    });
  }

  try {
    const payment = await prisma.morePayment.findUnique({
      where: { id: morePaymentId },
      include: { submission: true },
    });

    if (!payment) {
      return res
        .status(404)
        .json({ success: false, message: 'MorePayment not found' });
    }

    // Update the payment status
    const updatedPayment = await prisma.morePayment.update({
      where: { id: morePaymentId },
      data: {
        status: status === 'approved' ? 'request_approved' : 'request_rejected',
        requestApprovedAt: new Date(),
      },
      include: { submission: true },
    });

    await prisma.privateSeedSubmission.update({
      where: { id: updatedPayment.submissionId },
      data: {
        canAddFund: status === 'approved' ? 'under-review' : 'not-submitted',
      },
    });

    const seeder = updatedPayment.submission;

    if (!seeder?.email) {
      console.warn('Seeder email not found.');
      return res.status(200).json({ success: true, data: updatedPayment });
    }

    // email
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

    // Send notification email
    await transporter.sendMail({
      from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
      to: seeder.email,
      subject,
      html,
    });

    return res.status(200).json({
      success: true,
      message: `Fund addition request ${status}.`,
      data: updatedPayment,
    });
  } catch (error) {
    console.error('Error updating payment status:', error);
    return res.status(500).json({
      success: false,
      message: 'Error updating payment request status.',
    });
  }
}
