import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
// import { addHours } from 'date-fns';
import { render } from '@react-email/render';
import SeederTokenEmail from '@/emails/SeederTokenEmail';
import { getSeedTierFromCapital } from '@/lib/getSeedTierFromCapital';
import { transporter } from '@/lib/mailer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const {
        fullName,
        email,
        contact,
        country,
        linkedin,
        capital,
        value,
        whyJoin,
        indvOrOrg,
      } = req.body;

      if (
        !fullName ||
        !email ||
        !contact ||
        !country ||
        !capital ||
        !value ||
        !whyJoin ||
        !indvOrOrg
      ) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      const existingSubmission = await prisma.privateSeedSubmission.findUnique({
        where: { email },
      });

      if (existingSubmission || email === process.env.ADMIN_EMAIL) {
        return res.status(400).json({
          message: 'An application with this email has already been submitted.',
        });
      }
      const seedTier = getSeedTierFromCapital(String(capital));

      // Create application
      const submission = await prisma.privateSeedSubmission.create({
        data: {
          fullName,
          email,
          contact,
          country,
          website: linkedin || '',
          capital: String(capital),
          value,
          whyJoin,
          indvOrOrg,
          seedTier,
        },
      });

      // Generate token
      const token = crypto.randomBytes(32).toString('hex');
      // const expiresAt = addHours(new Date(), 12);
      const expiresAt = new Date();
      expiresAt.setFullYear(expiresAt.getFullYear() + 1);

      await prisma.seederAccountToken.create({
        data: {
          submissionId: submission.id,
          email,
          token,
          expiresAt,
        },
      });

      const link = `${process.env.NEXTAUTH_URL}/seeder/create-account?token=${token}`;
      const html = await render(SeederTokenEmail({ fullName, link }), {
        pretty: true,
      });

      await transporter.sendMail({
        from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Create Your Seeder Account - DEEPROOTS',
        html,
      });

      await transporter.sendMail({
        from: `"Team DEEPROOTS" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER, // Send to admin
        subject: 'New Seeder Application Submitted',
        html: `
        <p><strong>${fullName}</strong> (${email}) has submitted a seeder application.</p>
        <p>Visit the admin dashboard to review the application:</p>
        <a href="${process.env.NEXTAUTH_URL}/admin/applications" target="_blank">
          Go to Dashboard
        </a>
      `,
      });

      return res.status(200).json({
        message: 'Form submitted successfully',
        submission,
        link,
      });
    } catch (error) {
      console.error('Error saving form submission:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    const session = await getServerSession(req, res, authOptions);
    if (!session || session.user.role !== 'admin') {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
      const submissions = await prisma.privateSeedSubmission.findMany({
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      let errorInfo = {};
      if (error && typeof error === 'object') {
        errorInfo = {
          name: (error as { name?: string }).name,
          clientVersion: (error as { clientVersion?: string }).clientVersion,
          message: (error as { message?: string }).message,
          stack: (error as { stack?: string }).stack,
        };
      }
      return res.status(500).json({
        message: 'Internal Server Error',
        error: errorInfo,
      });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
