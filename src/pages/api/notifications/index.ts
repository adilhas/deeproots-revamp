// this is currently not in use in future it can be used if needed
// import type { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/lib/prisma';
// import { getServerSession } from 'next-auth';
// import { authOptions } from '../auth/[...nextauth]';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     const session = await getServerSession(req, res, authOptions);

//     if (!session) {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }

//     const { submissionId } = req.query;

//     if (typeof submissionId !== 'string') {
//       return res.status(400).json({ error: 'Invalid submission ID.' });
//     }

//     // const currentUserRole = session.user.role;
//     // const filterSender = currentUserRole === 'admin' ? 'SEEDER' : 'ADMIN';
//     try {
//       const notifications = await prisma.notification.findMany({
//         where: {
//           submissionId,
//           // sender: filterSender,
//         },
//         orderBy: { createdAt: 'desc' },
//       });
//       return res.status(200).json(notifications);
//     } catch (error) {
//       console.error('Error fetching notifications:', error);
//       return res.status(500).json({ error: 'Failed to fetch notifications' });
//     }
//   }

//   if (req.method === 'POST') {
//     const session = await getServerSession(req, res, authOptions);

//     if (!session || session.user.role !== 'admin') {
//       return res.status(401).json({ error: 'Unauthorized' });
//     }
//     const { title, message, sender, type, link, submissionId } = req.body;

//     if (!title || !message || !sender) {
//       return res
//         .status(400)
//         .json({ error: 'Missing required fields: title, message, or sender' });
//     }

//     try {
//       const newNotification = await prisma.notification.create({
//         data: {
//           title,
//           message,
//           sender,
//           type: type || 'INFO',
//           link: link || null,
//           submissionId: submissionId,
//         },
//       });

//       return res.status(201).json(newNotification);
//     } catch (error) {
//       console.error('Error creating notification:', error);
//       return res.status(500).json({ error: 'Failed to create notification' });
//     }
//   }

//   return res.status(405).json({ error: 'Method Not Allowed' });
// }
