import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { render } from '@react-email/render';
import ApplicationApproveEmail from '@/emails/ApplicationApprove';
import ApplicationDeclineEmail from '@/emails/ApplicationDecline';
import PreApprovalApproveEmail from '@/emails/PreApprovalApproveMail';
import PreApprovalDeclineEmail from '@/emails/PreApprovalDecline';
import { transporter } from '@/lib/mailer';
import ImmediateDealRoomUpdate from '@/emails/ImmediateDealRoomUpdate';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  const session = await getServerSession(req, res, authOptions);
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid application ID' });
  }

  if (method === 'GET') {
    try {
      const submission = await prisma.privateSeedSubmission.findUnique({
        where: { id: id as string },
        include: {
          kycDocuments: true,
          ndaSubmission: true,
          paymentDetails: true,
          // morePayments: true,
          morePayments: {
            orderBy: {
              createdAt: 'desc', // assuming you have a `createdAt` field
            },
          },
        },
      });

      if (!submission) {
        return res.status(404).json({ message: 'Submission not found' });
      }

      return res.status(200).json(submission);
    } catch (error) {
      console.error('Error fetching submission by ID:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }
  if (method === 'PATCH') {
    const { applicationStatus, preApproval, reason, usdcAddress, usdtAddress } =
      req.body;

    const dataToUpdate: Prisma.PrivateSeedSubmissionUpdateInput = {};

    if (applicationStatus) {
      if (!['approved', 'declined'].includes(applicationStatus)) {
        return res.status(400).json({ message: 'Invalid applicationStatus' });
      }

      dataToUpdate.applicationStatus = applicationStatus;
      if (applicationStatus === 'approved') {
        dataToUpdate.applicationApprovedAt = new Date();
      }
    }

    if (preApproval) {
      if (!['approved', 'declined'].includes(preApproval)) {
        return res.status(400).json({ message: 'Invalid preApproval' });
      }

      dataToUpdate.preApproval = preApproval;
      dataToUpdate.preApprovalUpdatedAt = new Date();
    }

    if (usdtAddress !== undefined) {
      if (typeof usdtAddress !== 'string' || usdtAddress.trim() === '') {
        return res.status(400).json({ message: 'usdtAddress cannot be empty' });
      }
      dataToUpdate.usdtAddress = usdtAddress;
    }

    if (usdcAddress !== undefined) {
      if (typeof usdcAddress !== 'string' || usdcAddress.trim() === '') {
        return res.status(400).json({ message: 'usdcAddress cannot be empty' });
      }
      dataToUpdate.usdcAddress = usdcAddress;
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return res
        .status(400)
        .json({ message: 'No valid fields provided for update' });
    }
    try {
      const updated = await prisma.privateSeedSubmission.update({
        where: { id },
        data: dataToUpdate,
        include: {
          kycDocuments: true,
          ndaSubmission: true,
          paymentDetails: true,
        },
      });

      const { fullName: applicantName, email: applicantEmail } = updated;

      if ('applicationStatus' in req.body) {
        let subject = '';
        let text = '';
        let html = await render(
          ApplicationApproveEmail({
            name: applicantName,
            url: process.env.NEXTAUTH_URL || 'https://deeproots.earth',
          }),
          {
            pretty: true,
          }
        );
        if (applicationStatus === 'approved') {
          subject = 'Your Application Has Been Approved!';
          text = `Hi ${applicantName},\n\nCongratulations—your application has been approved! Please log in to your dashboard now to complete the next steps and secure your Full Seat in the Foundation.\n\nThank you for your patience and welcome aboard.\n\n- DeepRoots Team`;
        } else {
          html = await render(
            ApplicationDeclineEmail({
              name: applicantName,
              reason,
              url: process.env.NEXTAUTH_URL || 'https://deeproots.earth',
            }),
            {
              pretty: true,
            }
          );
          subject = 'Your Application Has Been Declined';
          text = `Hi ${applicantName},\n\nWe’re sorry to inform you that your application has been declined.\n\nReason: ${reason}\n\nThank you for your interest.\n\n- DeepRoots Team`;
        }

        await transporter.sendMail({
          from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
          to: applicantEmail,
          subject,
          text,
          html,
        });
      }

      if ('preApproval' in req.body) {
        let subject = '';
        let text = '';
        let html = await render(
          PreApprovalApproveEmail({
            name: applicantName,
            url: process.env.NEXTAUTH_URL || 'https://deeproots.earth',
          }),
          {
            pretty: true,
          }
        );

        const dealRoomHtml = await render(
          ImmediateDealRoomUpdate({
            name: applicantName,
            url: process.env.NEXTAUTH_URL || '',
          }),
          {
            pretty: true,
          }
        );

        if (preApproval === 'approved') {
          subject = 'You Have Been Pre-Approved!';
          text = `Hi ${applicantName},\n\nCongratulations! You have been pre-approved for the next stage.\n\nYour Deal Room is now unlocked.\n\n- DeepRoots Team`;
        } else {
          html = await render(
            PreApprovalDeclineEmail({
              name: applicantName,
              reason,
              url: process.env.NEXTAUTH_URL || '',
            }),
            {
              pretty: true,
            }
          );
          subject = 'Pre-Approval Declined';
          text = `Hi ${applicantName},\n\nUnfortunately, your pre-approval request was declined.\n\nReason: ${reason}\n\nIf you have any questions, feel free to reach out.\n\n- DeepRoots Team`;
        }

        await transporter.sendMail({
          from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
          to: applicantEmail,
          subject,
          text,
          html,
        });

        if (preApproval === 'approved') {
          await transporter.sendMail({
            from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
            to: applicantEmail,
            subject: 'Action Needed: Your Foundation Seat is Waiting',
            text: `Hi ${applicantName},\n\nYou’ve unlocked access to the DeepRoots Foundation Deal Room — but your submission is still incomplete. This is a private allocation, and your seat is currently held.\n\nTo secure your position, please complete your submission before the access window expires.\n\nReturn to Deal Room\n\n- DeepRoots Team`,
            html: dealRoomHtml,
          });
        }
      }

      return res.status(200).json(updated);
    } catch (error) {
      console.error('Error updating application or preApproval:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
