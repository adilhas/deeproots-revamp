import Head from 'next/head';
import Hero from '@/components/academy_page/about_page/Hero';
import WhatIsDeepRoots from '@/components/academy_page/about_page/WhatIsDeepRoots';
import VisionMission from '@/components/academy_page/about_page/VisionMission';
import FounderNote from '@/components/academy_page/about_page/FounderNote';
import JoinUs from '@/components/academy_page/about_page/JoinUs';
import AppLayout from '@/Shared/AppLayout';

export default function AboutAcademy() {
  return (
    <>
      <Head>
        <title>Deep Roots | DeWorld</title>
        <meta
          name="description"
          content="We Are the Next. We Are the DeWorld. Discover Deep Roots – a bold decentralized movement reshaping the internet."
        />
      </Head>

      <AppLayout>
        <main className="relative w-full overflow-x-hidden max-w-[100vw] z-10 dark:bg-primary-dark">
          <Hero />

          <div className="w-full px-4 sm:px-6 lg:px-8 py-20">
            <WhatIsDeepRoots />

            <VisionMission />

            <FounderNote />

            <JoinUs />
          </div>
        </main>
      </AppLayout>
    </>
  );
}
