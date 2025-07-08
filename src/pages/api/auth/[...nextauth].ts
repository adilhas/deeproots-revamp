import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username or Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        role: { label: 'Role', type: 'text' },
      },
      async authorize(credentials) {
        const { username, password, role } = credentials || {};

        if (role === 'admin') {
          if (username === 'admin' && password === 'pass12345') {
            return { id: '1', name: 'Admin', role: 'admin' };
          }
        }

        if (role === 'seeder') {
          if (username === 'seeder@example.com' && password === 'seed12345') {
            return { id: '2', name: 'Seeder', role: 'seeder', email: username };
          }
        }

        return null;
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
