import { NextApiRequest, NextApiResponse } from 'next';
import { sendSeedReminder } from '@/lib/sendReminder';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return res.status(405).end();

  const now = new Date();
  const clientUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';

  const pending = await prisma.privateSeedSubmission.findMany({
    where: {
      preApproval: 'approved',
      preApprovalUpdatedAt: { not: null },
      // NOT: [{ dealRoom: 'approved' }, { dealRoom: 'declined' }],
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

  return res.status(200).json({ ok: true });
}
