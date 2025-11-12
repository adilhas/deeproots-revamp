import { getServerSession } from 'next-auth';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

type Role = 'admin' | 'seeder';

export function withAuth(handler: NextApiHandler, roles?: Role[]) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions);
    if (!session?.user) return res.status(401).json({ error: 'Unauthorized' });
    if (roles && !roles.includes((session.user.role as Role) || 'seeder')) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    (req as any).session = session;
    return handler(req, res);
  };
}
