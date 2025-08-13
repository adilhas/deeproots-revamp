import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@/context/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import { SessionProvider } from 'next-auth/react';
import { ApplicationProvider } from '@/context/ApplicationContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BroadcastProvider } from '@/context/BroadcastContext';

import '@/styles/globals.css';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) => {
  useLocaleDirection();
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <ApplicationProvider>
          <BroadcastProvider>
            <Head>
              <title>DEEPROOTS</title>
              <link rel="icon" href="/landing/logo.png" />
            </Head>
            <main className={`font-sans`}>
              <ToastContainer position="top-right" autoClose={3000} />
              <Component {...pageProps} />
            </main>
          </BroadcastProvider>
        </ApplicationProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default appWithTranslation(MyApp);
