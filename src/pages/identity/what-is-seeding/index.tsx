import LearnMore from '@/components/academy_page/LearnMore';
import HowSeedingWorks from '@/components/identity/what-is-seeding/HowSeedingWorks';
import SeedingBenefits from '@/components/identity/what-is-seeding/SeedingBenefits';
import SeedingSoon from '@/components/identity/what-is-seeding/SeedingLiveSoon';
import WhySeedingMatters from '@/components/identity/what-is-seeding/WhySeedingMatters';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import AppLayout from '@/Shared/AppLayout';
import { ChevronRight, Home } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const WhatIsSeedingPage = () => {
  const { t } = useTranslation('identity/what_is_seeding');
  const { isArabic } = useLocaleDirection();
  return (
    <AppLayout className="bg-white dark:bg-[#303030] text-on-primary dark:text-on-primary-dark">
      <section className="min-h-screen">
        <div className="max-w-[1200px] mx-auto py-10 px-3">
          <div className="flex flex-row justify-start gap-1 my-10 text-md items-center text-[#737373] dark:text-[#F1F5F9]">
            <Home className="w-5 h-5" />
            <ChevronRight
              className={`w-4 h-5 ${isArabic ? 'scale-x-[-1]' : ''}`}
            />
            <div>{t('breadcrumbs.learn')}</div>
            <ChevronRight
              className={`w-4 h-5 ${isArabic ? 'scale-x-[-1]' : ''}`}
            />
            <div className="text-[#A855F7] font-semibold">
              {t('breadcrumbs.page')}
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <h1 className="text-4xl font-orbitron font-semibold">
              {t('hero.title')}
            </h1>
          </div>
          <p className="md:hidden inline-block mt-3">{t('hero.text')}</p>
          <div
            className="relative w-full my-4"
            style={{ aspectRatio: '996 / 446' }}
          >
            <Image
              src="/identity/what-is-seeding.png"
              alt="what is web3"
              fill
              className="object-cover object-center rounded-3xl"
            />
            <div className="absolute p-3 top-[30px] left-1/2 -translate-x-1/2 md:inline-block hidden bg-white rounded-3xl max-w-[492] text-[#696969] text-center">
              {t('hero.text')}
            </div>
          </div>
          <HowSeedingWorks />
          <WhySeedingMatters />
          <SeedingBenefits />
          <SeedingSoon />
          <div className="max-w-[550px] text-transparent bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-2xl font-orbitron font-bold text-center">
            {t('hero.footer')}
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
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'learn_more',
        'identity/what_is_seeding',
      ])),
    },
  };
};
