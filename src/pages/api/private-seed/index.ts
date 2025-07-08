import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

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
        canPassKyc,
        indvOrOrg,
        confidentiality,
        acknowledgement,
        disclosureTerm, // ✅ NEW
        nonUsCitizen,
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
        !indvOrOrg ||
        disclosureTerm === undefined ||
        nonUsCitizen === undefined
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
          capital: String(capital),
          value,
          whyJoin,
          canPassKyc,
          indvOrOrg,
          confidentiality: Boolean(confidentiality),
          acknowledgement: Boolean(acknowledgement),
          disclosureTerm: Boolean(disclosureTerm),
          nonUsCitizen: Boolean(nonUsCitizen),
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
