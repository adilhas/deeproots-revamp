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

import {
  Orbitron,
  Gloria_Hallelujah,
  Nunito,
  EB_Garamond,
  Archivo,
} from 'next/font/google';
import '@/styles/globals.css';

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-orbitron',
});
const gloria = Gloria_Hallelujah({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gloria',
});
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['200', '400', '700', '1000'],
  variable: '--font-nunito',
});
const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-garamond',
});
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-archivo',
});

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
            <main
              className={`${orbitron.variable} ${gloria.variable} ${nunito.variable} ${garamond.variable} ${archivo.variable} font-sans`}
            >
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
