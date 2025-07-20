import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token, email, password, confirmPassword } = req.body;

  if (!token || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // Step 1: Validate token
    const tokenRecord = await prisma.seederAccountToken.findUnique({
      where: { token },
    });

    if (
      !tokenRecord ||
      tokenRecord.used ||
      new Date(tokenRecord.expiresAt) < new Date()
    ) {
      return res.status(400).json({ error: 'Invalid or expired token' });
    }

    // Step 2: Email should match token
    if (tokenRecord.email !== email) {
      return res.status(400).json({ error: 'Email does not match token' });
    }

    // Step 3: Find matching PrivateSeedSubmission
    const submission = await prisma.privateSeedSubmission.findUnique({
      where: { email },
    });

    if (!submission) {
      return res.status(400).json({ error: 'Application not found' });
    }

    if (submission.passwordHash) {
      return res.status(400).json({ error: 'Account already created' });
    }

    // Step 4: Hash and store password
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.privateSeedSubmission.update({
      where: { email },
      data: {
        passwordHash: hashedPassword,
      },
    });

    // Step 5: Mark token as used
    await prisma.seederAccountToken.delete({
      where: { token },
    });

    return res
      .status(200)
      .json({ success: true, message: 'Account created successfully' });
  } catch (err) {
    console.error('Account creation failed:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
