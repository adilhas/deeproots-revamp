import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import AuthGuard from '../components/AuthGuard';
import Head from 'next/head';
import { ThemeProvider } from '@/context/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const publicRoutes = ['/auth/signin'];

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  const router = useRouter();
  const isPublic = publicRoutes.includes(router.pathname);

  useLocaleDirection();
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <Head>
          <title>DEEPROOTS</title>
          <link rel="icon" href="/landing/logo.png" />
        </Head>
        <Component {...pageProps} />
        {isPublic ? (
          <Component {...pageProps} />
        ) : (
          <AuthGuard>
            <Component {...pageProps} />
          </AuthGuard>
        )}
      </ThemeProvider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp);
