import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const isAdmin = session?.user?.role === 'admin';

  if (req.method === 'POST') {
    if (!isAdmin) return res.status(401).json({ error: 'Unauthorized' });

    const { title, content, thumbnail, tags } = req.body;
    if (!title || !content)
      return res.status(400).json({ error: 'Missing required fields' });

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    try {
      const newBlog = await prisma.blog.create({
        data: {
          title,
          slug,
          content,
          thumbnail,
          published: true,
          tags,
        },
      });
      return res.status(201).json(newBlog);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Failed to create blog', error: err });
    }
  }

  if (req.method === 'GET') {
    try {
      const blogs = await prisma.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' },
      });
      return res.status(200).json(blogs);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Failed to fetch blogs', error: err });
    }
  }

  res.setHeader('Allow', ['POST', 'GET']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
