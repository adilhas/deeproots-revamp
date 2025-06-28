import LearnMore from '@/components/academy_page/LearnMore';
import OurMission from '@/components/identity/who_we_are/OurMission';
import WhatAreWeBuilding from '@/components/identity/who_we_are/WhatAreWeBuilding';
import WhatDrivesUs from '@/components/identity/who_we_are/WhatDrivesUs';
import WhoBuildsIt from '@/components/identity/who_we_are/WhoBuildsIt';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { ChevronRight, Home } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const WhoWeArePage = () => {
  const { t } = useTranslation('identity/who_we_are');
  const { isArabic } = useLocaleDirection();
  return (
    <AppLayout className="bg-white dark:bg-[#303030] text-on-primary dark:text-on-primary-dark">
      <Seo
        title="Who We Are"
        description="We are not a company. We are not a brand. We are a movement."
      />
      <section className="min-h-screen text-[#737373] dark:text-[#F1F5F9]">
        <div className="max-w-[1200px] mx-auto py-10 px-3">
          <div className="flex flex-row justify-start gap-1 my-10 text-md items-center ">
            <Home className="w-5 h-5" />
            <ChevronRight
              className={`w-4 h-5 ${isArabic ? 'scale-x-[-1]' : ''}`}
            />
            <div>{t('whoWeAre.breadcrumb.learn')}</div>
            <ChevronRight
              className={`w-4 h-5 ${isArabic ? 'scale-x-[-1]' : ''}`}
            />
            <div className="text-[#A855F7] font-semibold">
              {t('whoWeAre.breadcrumb.current')}
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <h1 className="text-4xl font-orbitron font-semibold text-black dark:text-white">
              {t('whoWeAre.title')}
            </h1>
          </div>
          <Image
            src={'/identity/who-we-are.png'}
            alt="what is web3"
            width={996}
            height={464}
            className="w-full h-full my-8"
          />
          <div className="text-2xl text-center font-orbitron font-semibold  items-center mx-auto w-fit mb-10">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="line-through text-[#696969]">
                {t('whoWeAre.strike_lines.company')}
              </div>
              <div className="line-through text-[#696969]">
                {t('whoWeAre.strike_lines.brand')}
              </div>
            </div>
            <div className="mx-auto w-fit  text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
                {t('whoWeAre.movement')}
            </div>
          </div>
          <div className="text-center">{t('whoWeAre.description')}</div>
          <WhatDrivesUs />
          <WhatAreWeBuilding />
          <WhoBuildsIt />
          <OurMission />
        </div>
        <LearnMore />
        <SocialLinks />
      </section>
    </AppLayout>
  );
};

export default WhoWeArePage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'learn_more',
        'identity/who_we_are',
      ])),
    },
  };
};
