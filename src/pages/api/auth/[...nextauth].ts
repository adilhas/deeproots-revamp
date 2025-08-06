import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';
import { loginRateLimiter } from '@/lib/rateLimiter';
import { NextApiRequest } from 'next';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials || {};
        const _req = req as unknown as NextApiRequest;

        const ip =
          (_req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
          _req.socket?.remoteAddress ||
          'unknown';

        if (!username || !password) {
          await loginRateLimiter.consume(ip).catch(() => {}); // still rate limit on empty attempt
          return null;
        }

        if (
          username === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: '1',
            name: 'Admin',
            email: username,
            role: 'admin',
          };
        }

        const seeder = await prisma.privateSeedSubmission.findUnique({
          where: { email: username },
        });

        if (!seeder || !seeder.passwordHash) {
          await loginRateLimiter.consume(ip).catch(() => {});
          return null;
        }

        const isValid = await bcrypt.compare(password, seeder.passwordHash);

        if (!isValid) {
          await loginRateLimiter.consume(ip).catch(() => {});
          return null;
        }

        // ✅ SUCCESS — reset rate limiter
        await loginRateLimiter.delete(ip).catch(() => {});

        return {
          id: seeder.id,
          name: seeder.fullName || 'Seeder',
          email: seeder.email,
          role: 'seeder',
          applicationId: seeder.id,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.applicationId = user.applicationId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role!;
        session.user.id = token.id!;
        session.user.name = token.name!;
        session.user.email = token.email!;
        session.user.applicationId = token.applicationId!;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
