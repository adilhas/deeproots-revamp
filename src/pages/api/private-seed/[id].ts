import { Prisma } from '@/generated/prisma';
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

  if (typeof id !== 'string') {
    return res.status(400).json({ message: 'Invalid application ID' });
  }

  if (method === 'GET') {
    try {
      const submission = await prisma.privateSeedSubmission.findUnique({
        where: { id: id as string },
        include: {
          kycDocuments: true,
          ndaSubmission: true,
          paymentDetails: true,
        },
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
  if (method === 'PATCH') {
    const { applicationStatus, preApproval } = req.body;

    const dataToUpdate: Prisma.PrivateSeedSubmissionUpdateInput = {};

    if (applicationStatus) {
      if (!['approved', 'declined'].includes(applicationStatus)) {
        return res.status(400).json({ message: 'Invalid applicationStatus' });
      }

      dataToUpdate.applicationStatus = applicationStatus;
    }

    if (preApproval) {
      if (!['approved', 'declined'].includes(preApproval)) {
        return res.status(400).json({ message: 'Invalid preApproval' });
      }

      dataToUpdate.preApproval = preApproval;
    }

    if (Object.keys(dataToUpdate).length === 0) {
      return res
        .status(400)
        .json({ message: 'No valid fields provided for update' });
    }

    try {
      const updated = await prisma.privateSeedSubmission.update({
        where: { id },
        data: dataToUpdate,
        include: {
          kycDocuments: true,
          ndaSubmission: true,
          paymentDetails: true,
        },
      });

      return res.status(200).json(updated);
    } catch (error) {
      console.error('Error updating application or preApproval:', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
