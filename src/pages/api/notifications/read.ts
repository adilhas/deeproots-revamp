// this is currently not in use in future it can be used if needed
// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/lib/prisma';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../auth/[...nextauth]';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const session = await getServerSession(req, res, authOptions);
//   if (!session) {
//     return res.status(401).json({ error: 'Unauthorized' });
//   }
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { id } = req.body;

//   if (!id) {
//     return res.status(400).json({ error: 'Notification ID is required' });
//   }

//   try {
//     const updated = await prisma.notification.update({
//       where: { id },
//       data: { isRead: true },
//     });

//     return res.status(200).json(updated);
//   } catch (err) {
//     console.error('[Mark Notification Read]', err);
//     return res.status(500).json({ error: 'Something went wrong' });
//   }
// }
