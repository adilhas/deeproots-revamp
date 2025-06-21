import PhasesList from '@/components/academy_page/roadmap/PhasesList';
import AppLayout from '@/Shared/AppLayout';
import Head from 'next/head';
import Image from 'next/image';

export default function Roadmap() {
  return (
    <>
      <Head>
        <title>roadmap</title>
        <meta name="description" content="description" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deeproots.earth/academy/roadmap" />
      </Head>

      <AppLayout className="bg-primary-light dark:bg-primary-dark relative ">
        <div className="relative min-h-screen text-[#404040] dark:text-neutral-200 w-full overflow-hidden">
          <div className="absolute inset-0 max-h-[2803px] w-[1966.4029541015625] left-0 top-[50px] z-0 hidden lg:inline-block">
            <Image
              src="/roadmap-tree.png"
              alt="roadmap-tree"
              fill
              priority
              className="object-contain object-top-left"
            />
          </div>

          <PhasesList />
          <div className="lg:my-20 py-16 text-center max-w-[800px] mx-auto px-3">
            <h2 className="w-fit font-orbitron font-bold mx-auto text-3xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              Tech Access Note
            </h2>
            <p className="">
              Deep Roots will operate in closed development mode until 2027.  In
              Year 3, we will open full documentation, SDKs, and dev tools to
              empower builders across the ecosystem once the foundation is fully
              established, audited, and secured.
            </p>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
