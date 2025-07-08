import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name: string;
      email?: string;
      role: 'admin' | 'seeder';
    } & DefaultSession['user'];
  }

  interface User {
    id: string;
    name: string;
    email?: string;
    role: 'admin' | 'seeder';
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    name: string;
    email?: string;
    role: 'admin' | 'seeder';
  }
}
