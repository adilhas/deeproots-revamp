import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (
          credentials?.username === 'Deeproots' &&
          credentials?.password === 'DeWorld deeproots'
        ) {
          return { id: '1', name: 'Admin' };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signin',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
