import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { token, email, password, confirmPassword } = req.body;

  if (!token || !email || !password || !confirmPassword) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }

  try {
    // ✅ Step 1: Check if token is valid
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

    // ✅ Step 2: Verify email matches token
    if (tokenRecord.email !== email) {
      return res.status(400).json({ error: 'Email does not match token' });
    }

    // ✅ Step 3: Check if user already exists
    const existingUser = await prisma.seederUser.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // ✅ Step 4: Find the original application
    const application = await prisma.privateSeedSubmission.findFirst({
      where: { email },
    });

    if (!application) {
      return res.status(400).json({ error: 'Application not found' });
    }

    // ✅ Step 5: Create the SeederUser
    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.seederUser.create({
      data: {
        email,
        passwordHash: hashedPassword,
        applicationId: application.id,
      },
    });

    // ✅ Step 6: Mark token as used
    await prisma.seederAccountToken.update({
      where: { token },
      data: { used: true },
    });

    return res
      .status(200)
      .json({ success: true, message: 'Account created successfully' });
  } catch (err) {
    console.error('Account creation failed:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
