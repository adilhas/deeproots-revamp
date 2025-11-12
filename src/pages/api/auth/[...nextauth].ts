import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};

        if (!username || !password) {
          return null;
        }

        if (
          username === process.env.ADMIN_EMAIL &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return {
            id: 'admin0x1',
            name: 'Admin',
            email: username,
            role: 'admin',
            applicationId: '',
          };
        }

        const seeder = await prisma.privateSeedSubmission.findUnique({
          where: { email: username },
        });

        if (!seeder || !seeder.passwordHash) {
          return null;
        }

        const isValid = await bcrypt.compare(password, seeder.passwordHash);

        if (!isValid) {
          return null;
        }

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
  session: {
    strategy: 'jwt',
    maxAge: 1800, // 30 minutes
    updateAge: 900, // Rolling refresh every 15 min
  },
  jwt: {
    maxAge: 1800, // 30 min token expiry
  },
  callbacks: {
    async jwt({ token, user }) {
      const now = Math.floor(Date.now() / 1000);
      if (
        !token.iat ||
        typeof token.iat !== 'number' ||
        now - token.iat > 900
      ) {
        token.iat = now;
      }
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
  logger: {
    error(code, metadata) {
      console.error('NEXTAUTH ERROR:', code, metadata);
    },
    warn(code) {
      console.warn('NEXTAUTH WARN:', code);
    },
    debug(code, metadata) {
      console.log('NEXTAUTH DEBUG:', code, metadata);
    },
  },
};

export default NextAuth(authOptions);
