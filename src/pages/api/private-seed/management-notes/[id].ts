import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    return res
      .status(400)
      .json({ error: 'Invalid or missing submission ID in URL.' });
  }

  try {
    if (req.method === 'GET') {
      // 🔍 Fetch all notes for a submission
      const notes = await prisma.managementNotes.findMany({
        where: { submissionId: id },
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(notes);
    }

    if (req.method === 'POST') {
      const { note, sender } = req.body;

      if (!note || note.trim().length === 0) {
        return res.status(400).json({ error: 'Note content is required.' });
      }

      if (!sender || !['ADMIN', 'SEEDER'].includes(sender)) {
        return res.status(400).json({ error: 'Valid sender is required.' });
      }

      // ✅ Create a new note for submission
      const newNote = await prisma.managementNotes.create({
        data: {
          note: note.trim(),
          sender,
          submissionId: id,
        },
      });

      return res.status(201).json(newNote);
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (error) {
    console.error('[ManagementNotes API Error]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
