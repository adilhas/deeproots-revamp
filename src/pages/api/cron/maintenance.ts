import { NextApiRequest, NextApiResponse } from 'next';
import { sendSeedReminder } from '@/lib/sendReminder';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end();

  const authHeader = req.headers.authorization;
  const expectedSecret = process.env.CRON_SECRET;

  // if (!authHeader || authHeader !== `Bearer ${expectedSecret}`) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

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
  const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
  const deletedSubmissions = await prisma.privateSeedSubmission.deleteMany({
    where: {
      passwordHash: null,
      createdAt: { lt: twelveHoursAgo },
    },
  });

  // 3. Delete expired PasswordResetTokens (older than 1h)
  const oneHourAgo = new Date(Date.now() - 1 * 60 * 60 * 1000);
  const deletedTokens = await prisma.passwordResetToken.deleteMany({
    where: {
      createdAt: { lt: oneHourAgo },
    },
  });

  return res.status(200).json({
    ok: true,
    deletedInactiveSubmissions: deletedSubmissions.count,
    deletedExpiredResetTokens: deletedTokens.count,
  });
}
