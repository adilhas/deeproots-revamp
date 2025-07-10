import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { addHours } from 'date-fns';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import SeederTokenEmail from '@/emails/SeederTokenEmail';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // e.g. your Gmail address
    pass: process.env.EMAIL_PASS, // App-specific password or actual password
  },
});

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
        !linkedin ||
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

      if (existingSubmission) {
        return res.status(400).json({
          message: 'An application with this email has already been submitted.',
        });
      }

      // ✅ Create application
      const submission = await prisma.privateSeedSubmission.create({
        data: {
          fullName,
          email,
          contact,
          country,
          website: linkedin,
          capital: String(capital),
          value,
          whyJoin,
          indvOrOrg,
        },
      });

      // ✅ Generate token
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = addHours(new Date(), 1);

      await prisma.seederAccountToken.create({
        data: {
          email,
          token,
          expiresAt,
        },
      });

      // ✅ Log the token link (for testing locally)
      const link = `${process.env.NEXTAUTH_URL}/seeder/create-account?token=${token}`;
      console.log('🔗 Seeder Account Creation Link:', link);
      // ✅ Render the HTML email
      const html = await render(SeederTokenEmail({ fullName, link }), {
        pretty: true,
      });

      // ✅ Send email via Nodemailer
      await transporter.sendMail({
        from: `"DeepRoots" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'Create Your Seeder Account - DeepRoots',
        html,
      });

      return res.status(200).json({
        message: 'Form submitted successfully',
        submission,
        link, // optional if you want to show it in frontend
      });
    } catch (error) {
      console.error('Error saving form submission:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const submissions = await prisma.privateSeedSubmission.findMany({
        orderBy: { createdAt: 'desc' },
        select: {
          createdAt: true,
          id: true,
          fullName: true,
          email: true,
          capital: true,
          applicationStatus: true,
        },
      });
      return res.status(200).json(submissions);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
