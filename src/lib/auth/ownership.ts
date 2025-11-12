import { prisma } from '@/lib/prisma';

export async function assertSubmissionOwnerOrAdmin(
  session: any,
  submissionId: string
) {
  if (session.user.role === 'admin') return true;
  const sub = await prisma.privateSeedSubmission.findUnique({
    where: { id: submissionId },
    select: { id: true },
  });
  if (!sub) throw new Error('Not found');
  if (sub.id !== session.user.id) throw new Error('Forbidden');
  return true;
}
