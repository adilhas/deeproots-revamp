import { NextApiRequest, NextApiResponse } from 'next';
import { sendSeedReminder } from '@/lib/sendReminder';
import { render } from '@react-email/render';

import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/mailer';
import React from 'react';
import CompleteAccountReminderEmail from '@/emails/CompleteAccountReminder';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end();

  const authHeader = req.headers.authorization;
  const expectedSecret = process.env.CRON_SECRET;

  if (!authHeader) {
    return res.status(401).json({ error: 'Missing Authorization header' });
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Invalid Authorization format, expected Bearer token',
    });
  }

  if (authHeader !== `Bearer ${expectedSecret}`) {
    return res.status(401).json({ error: 'Invalid CRON_SECRET' });
  }

  const now = new Date();
  const clientUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  // 0. Pre-Approval Reminder Logic (every 12h after applicationApprovedAt)
  const preApprovalPending = await prisma.privateSeedSubmission.findMany({
    where: {
      applicationStatus: 'approved',
      preApproval: 'not-submitted',
      applicationApprovedAt: { not: null },
    },
  });

  for (const s of preApprovalPending) {
    const approvedAt = s.applicationApprovedAt!;
    const hours = (now.getTime() - approvedAt.getTime()) / (1000 * 60 * 60);

    // Send a reminder every 12 hours (12h, 24h, 36h, etc.)
    if (hours % 12 < 0.2) {
      await sendSeedReminder(s.email, 'preApproval_pending', {
        fullName: s.fullName || 'Seeder',
        url: clientUrl,
      });
    }
  }

  // 1. Deal Room Reminder Logic
  const pending = await prisma.privateSeedSubmission.findMany({
    where: {
      preApproval: 'approved',
      preApprovalUpdatedAt: { not: null },
      dealRoom: 'not-submitted',
    },
  });

  for (const s of pending) {
    const updatedAt = s.preApprovalUpdatedAt!;
    const hours = (now.getTime() - updatedAt.getTime()) / (1000 * 60 * 60);

    const reminderProps = {
      fullName: s.fullName || 'Seeder',
      url: clientUrl,
    };

    if (!s.firstReminderSent && hours >= 12 && hours < 22) {
      await sendSeedReminder(s.email, '12h', reminderProps);
      await prisma.privateSeedSubmission.update({
        where: { id: s.id },
        data: { firstReminderSent: true },
      });
    }

    if (!s.secondReminderSent && hours >= 22 && hours < 24) {
      await sendSeedReminder(s.email, '22h', reminderProps);
      await prisma.privateSeedSubmission.update({
        where: { id: s.id },
        data: { secondReminderSent: true },
      });
    }

    if (hours >= 24 && s.dealRoom !== 'declined') {
      await prisma.privateSeedSubmission.update({
        where: { id: s.id },
        data: { dealRoom: 'declined', isDealRoomExpired: true },
      });
      await sendSeedReminder(s.email, 'declined_by_system', reminderProps);
    }
  }

  // 2. Delete submissions older than 12h without passwordHash
  // const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
  // const deletedSubmissions = await prisma.privateSeedSubmission.deleteMany({
  //   where: {
  //     passwordHash: null,
  //     createdAt: { lt: twelveHoursAgo },
  //   },
  // });

  const fourDaysAgo = new Date(Date.now() - 4 * 24 * 60 * 60 * 1000);
  const inactiveSubmissions = await prisma.privateSeedSubmission.findMany({
    where: {
      passwordHash: null,
      createdAt: { gte: fourDaysAgo },
    },
  });

  let remindersSent = 0;

  for (const s of inactiveSubmissions) {
    const createdAt = s.createdAt;
    const hours = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);

    // Send reminder every 12 hours, up to 4 days (96 hours)
    if (hours <= 96 && hours % 12 < 0.2) {
      // Get the token from SeederAccountToken table
      const tokenRecord = await prisma.seederAccountToken.findFirst({
        where: { submissionId: s.id },
      });

      if (!tokenRecord) {
        console.warn(`No SeederAccountToken found for submission ${s.email}`);
        continue; // skip if no token
      }

      const token = tokenRecord.token;
      const accountLink = `${process.env.NEXTAUTH_URL}/seeder/create-account?token=${token}`;

      const subject = 'Reminder: Complete Your Account Setup to Proceed';
      const html = await render(
        React.createElement(CompleteAccountReminderEmail, {
          link: accountLink,
        })
      );

      await transporter.sendMail({
        from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
        to: s.email,
        subject,
        html,
      });
      remindersSent += 1;
    }
  }

  // 3. Delete expired PasswordResetTokens (older than 1h)
  const oneHourAgo = new Date(Date.now() - 1 * 60 * 60 * 1000);
  const deletedTokens = await prisma.passwordResetToken.deleteMany({
    where: {
      createdAt: { lt: oneHourAgo },
    },
  });

  return res.status(200).json({
    ok: true,
    // deletedInactiveSubmissions: deletedSubmissions.count,
    inactiveSubmissionReminders: remindersSent,
    deletedExpiredResetTokens: deletedTokens.count,
  });
}
