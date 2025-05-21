import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import AuthGuard from '../components/AuthGuard';
import Head from 'next/head';

const publicRoutes = ['/auth/signin'];

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isPublic = publicRoutes.includes(router.pathname);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>DeepRoots</title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>
      {isPublic ? (
        <Component {...pageProps} />
      ) : (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      )}
    </SessionProvider>
  );
}
