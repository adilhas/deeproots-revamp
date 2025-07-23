import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  const isAdmin = session?.user?.role === 'admin';

  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid blog ID' });
  }

  // GET /api/blogs/[id] - fetch single blog
  if (req.method === 'GET') {
    try {
      const blog = await prisma.blog.findUnique({ where: { id } });
      if (!blog) return res.status(404).json({ error: 'Blog not found' });
      return res.status(200).json(blog);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error fetching blog', error: err });
    }
  }

  // PUT /api/blogs/[id] - update blog
  if (req.method === 'PUT') {
    if (!isAdmin) return res.status(401).json({ error: 'Unauthorized' });

    const { title, content, thumbnail, published } = req.body;

    try {
      const updated = await prisma.blog.update({
        where: { id },
        data: {
          title,
          content,
          thumbnail,
          published,
          slug: title
            ?.toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, ''),
        },
      });

      return res.status(200).json(updated);
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error updating blog', error: err });
    }
  }

  // DELETE /api/blogs/[id] - delete blog
  if (req.method === 'DELETE') {
    if (!isAdmin) return res.status(401).json({ error: 'Unauthorized' });

    try {
      await prisma.blog.delete({ where: { id } });
      return res.status(204).end();
    } catch (err) {
      return res
        .status(500)
        .json({ message: 'Error deleting blog', error: err });
    }
  }

  res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}
