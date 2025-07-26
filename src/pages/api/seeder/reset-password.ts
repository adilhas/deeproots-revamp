import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token, password } = req.body;

  const record = await prisma.passwordResetToken.findUnique({
    where: { token },
  });

  if (!record || record.expiresAt < new Date() || record.used) {
    return res.status(400).json({ message: 'Invalid or expired token.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.privateSeedSubmission.updateMany({
    where: { email: record.email },
    data: { passwordHash: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { token },
  });
  return res
    .status(200)
    .json({ message: 'Password has been reset successfully.' });
}
