import '@/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import AuthGuard from '../components/AuthGuard';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const publicRoutes = ['/auth/signin'];

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const isPublic = publicRoutes.includes(router.pathname);

  return (
    <SessionProvider session={session}>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-1 md:mt-[88px] mt-[70px] lg:mt-[93px]">
          {isPublic ? (
            <Component {...pageProps} />
          ) : (
            <AuthGuard>
              <Component {...pageProps} />
            </AuthGuard>
          )}
        </main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
