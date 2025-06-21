import LearnMore from '@/components/academy_page/LearnMore';
import HowSeedingWorks from '@/components/identity/what-is-seeding/HowSeedingWorks';
import SeedingBenefits from '@/components/identity/what-is-seeding/SeedingBenefits';
import SeedingSoon from '@/components/identity/what-is-seeding/SeedingLiveSoon';
import WhySeedingMatters from '@/components/identity/what-is-seeding/WhySeedingMatters';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { ChevronRight, Home } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';

const WhatIsSeedingPage = () => {
  return (
    <AppLayout className="bg-white dark:bg-[#303030] text-on-primary dark:text-on-primary-dark">
      <section className="min-h-screen">
        <div className="max-w-[1200px] mx-auto py-10 px-3">
          <div className="flex flex-row justify-start gap-1 my-10 text-md items-center text-[#737373] dark:text-[#F1F5F9]">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-5" />
            <div>Learn</div>
            <ChevronRight className="w-4 h-5" />
            <div className="text-[#A855F7] font-semibold">What is Seeding?</div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <h1 className="text-4xl font-orbitron font-semibold">
              What is Seeding?
            </h1>
          </div>
          <div className="w-full relative min-h-[446px] my-4">
            <Image
              src={'/identity/what-is-seeding.png'}
              alt="what is web3"
              fill
              className="w-full h-full"
            />
          </div>
          <HowSeedingWorks />
          <WhySeedingMatters />
          <SeedingBenefits />
          <SeedingSoon />
          <div className="max-w-[550px] text-transparent bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-2xl font-orbitron font-bold text-center">
            From roots to rewards — it all begins with seeding.
          </div>
        </div>
        <LearnMore />
        <SocialLinks />
      </section>
    </AppLayout>
  );
};

export default WhatIsSeedingPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
