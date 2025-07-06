import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  if (method === 'GET') {
    try {
      const submission = await prisma.privateSeedSubmission.findUnique({
        where: { id: id as string },
      });

      if (!submission) {
        return res.status(404).json({ message: 'Submission not found' });
      }

      return res.status(200).json(submission);
    } catch (error) {
      console.error('Error fetching submission by ID:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
