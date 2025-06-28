import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@/context/ThemeContext';
import { appWithTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const MyApp = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  useLocaleDirection();
  return (
    <ThemeProvider>
      <Head>
        <title>DEEPROOTS</title>
        <link rel="icon" href="/landing/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
