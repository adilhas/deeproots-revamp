import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

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
    const { applicationStatus, preApproval, reason } = req.body;

    const dataToUpdate: Prisma.PrivateSeedSubmissionUpdateInput = {};

    if (applicationStatus) {
      if (!['approved', 'declined'].includes(applicationStatus)) {
        return res.status(400).json({ message: 'Invalid applicationStatus' });
      }

      dataToUpdate.applicationStatus = applicationStatus;
    }

    if (preApproval) {
      if (!['approved', 'declined'].includes(preApproval)) {
        return res.status(400).json({ message: 'Invalid preApproval' });
      }

      dataToUpdate.preApproval = preApproval;
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

        if (applicationStatus === 'approved') {
          subject = '🎉 Your Application Has Been Approved!';
          text = `Hi ${applicantName},\n\nWe’re excited to inform you that your application has been approved successfully.\n\nThank you for your patience.\n\n- DeepRoots Team`;
        } else {
          subject = '❌ Your Application Has Been Declined';
          text = `Hi ${applicantName},\n\nWe’re sorry to inform you that your application has been declined.\n\nReason: ${reason}\n\nThank you for your interest.\n\n- DeepRoots Team`;
        }

        await transporter.sendMail({
          from: `"DeepRoots" <${process.env.EMAIL_USER}>`,
          to: applicantEmail,
          subject,
          text,
        });
      }

      if ('preApproval' in req.body) {
        let subject = '';
        let text = '';

        if (preApproval === 'approved') {
          subject = '✅ You Have Been Pre-Approved!';
          text = `Hi ${applicantName},\n\nGreat news! You have been pre-approved for the next stage.\n\nWe’ll follow up shortly with further instructions.\n\n- DeepRoots Team`;
        } else {
          subject = '⚠️ Pre-Approval Declined';
          text = `Hi ${applicantName},\n\nUnfortunately, your pre-approval request was declined.\n\nReason: ${reason}\n\nIf you have any questions, feel free to reach out.\n\n- DeepRoots Team`;
        }

        await transporter.sendMail({
          from: `"DeepRoots" <${process.env.EMAIL_USER}>`,
          to: applicantEmail,
          subject,
          text,
        });
      }

      return res.status(200).json(updated);
    } catch (error) {
      console.error('Error updating application or preApproval:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
