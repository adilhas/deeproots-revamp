import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/mailer';
import { render } from '@react-email/render';
import ForgetPasswordEmail from '@/emails/FogetPasswordEmail';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
  try {
    const { email } = req.body;

    const user = await prisma.privateSeedSubmission.findUnique({
      where: { email },
    });
    if (!user) {
      return res.status(404).json({ message: 'No user with that email.' });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60);

    await prisma.passwordResetToken.create({
      data: {
        email,
        token,
        expiresAt,
      },
    });

    const resetLink = `${process.env.NEXTAUTH_URL}/seeder/reset-password?token=${token}`;

    const html = await render(ForgetPasswordEmail({ link: resetLink }), {
      pretty: true,
    });

    await transporter.sendMail({
      from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Reset your password',
      html: html,
    });

    return res.status(200).json({ message: 'Reset link sent to your email.' });
  } catch (error) {
    console.error('Error in forgot-password API:', error);
    return res.status(500).json({ message: 'Internal server error.' });
  }
}
