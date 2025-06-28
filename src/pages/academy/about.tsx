import Hero from '@/components/academy_page/about_page/Hero';
import WhatIsDeepRoots from '@/components/academy_page/about_page/WhatIsDeepRoots';
import VisionMission from '@/components/academy_page/about_page/VisionMission';
import FounderNote from '@/components/academy_page/about_page/FounderNote';
import JoinUs from '@/components/academy_page/about_page/JoinUs';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

export default function AboutAcademy() {
  return (
    <>
      <Seo />

      <AppLayout>
        <main className="relative w-full overflow-x-hidden max-w-[100vw] z-10 bg-neutral-300 dark:bg-primary-dark text-gray-900 dark:text-gray-100">
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
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'academy/about',
        'common',
      ])),
    },
  };
};
