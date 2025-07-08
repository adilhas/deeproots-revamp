import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { username, password } = credentials || {};

        if (!username || !password) return null;

        // Admin user
        if (username === 'admin@deeproots.earth' && password === 'pass12345') {
          return {
            id: '1',
            name: 'Admin',
            email: username,
            role: 'admin',
          };
        }

        // Seeder user
        const seeder = await prisma.seederUser.findUnique({
          where: { email: username },
          include: {
            application: true, // optional if you want more info later
          },
        });

        if (!seeder) return null;

        const isValid = await bcrypt.compare(password, seeder.passwordHash);
        if (!isValid) return null;

        return {
          id: seeder.id,
          name: seeder.application?.fullName || 'Seeder', // fallback if no name
          email: seeder.email,
          role: 'seeder',
        }; // Invalid credentials
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
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role!;
        session.user.id = token.id!;
        session.user.name = token.name!;
        session.user.email = token.email;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
