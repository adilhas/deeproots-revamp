import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

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
      canPassKyc,
      indvOrOrg,
      confidentiality,
      acknowledgement,
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
      !canPassKyc ||
      !indvOrOrg
    ) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const submission = await prisma.privateSeedSubmission.create({
      data: {
        fullName,
        email,
        contact,
        country,
        website: linkedin,
        capital,
        value,
        whyJoin,
        canPassKyc,
        indvOrOrg,
        confidentiality: Boolean(confidentiality),
        acknowledgement: Boolean(acknowledgement),
      },
    });

    return res
      .status(200)
      .json({ message: 'Form submitted successfully', submission });
  } catch (error) {
    console.error('Error saving form submission:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
