import LearnMore from '@/components/academy_page/LearnMore';
import OurCorePrinciple from '@/components/academy_page/what_is_web3/OurCorePrinciple';
import WebEvolution from '@/components/academy_page/what_is_web3/WebEvolution';
import WhyWeb3Matters from '@/components/academy_page/what_is_web3/WhyWeb3Matters';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { ChevronRight, Home } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Web3Page = () => {
  const { t } = useTranslation('academy/web3');
  return (
    <AppLayout className="bg-white dark:bg-[#303030] text-on-primary dark:text-on-primary-dark">
      <Seo
        title="What is Web3"
        description="Web3 puts power in the hands of users and Deep Roots is building the foundation to make it real."
      />
      <section className="min-h-screen">
        <div className="max-w-[1200px] mx-auto py-10 px-3">
          <div className="flex flex-row justify-start gap-1 my-10 text-md items-center text-[#737373] dark:text-[#F1F5F9]">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-5" />
            <div>{t('web3.breadcrumb.learn')}</div>
            <ChevronRight className="w-4 h-5" />
            <div className="text-[#A855F7] font-semibold">
              {t('web3.breadcrumb.title')}
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <h1 className="text-4xl font-orbitron font-semibold">
              {t('web3.header.title')}
            </h1>
            <div className="badge badge-outline bg-[#EEF4FF] border-[#818CF8] text-[#3538CD] rounded-3xl text-xs">
              {t('web3.header.badge')}
            </div>
          </div>
          <div className="w-full relative min-h-[262px] my-4">
            <Image
              src={'/what-is-web3.png'}
              alt="what is web3"
              fill
              className="w-full h-full"
            />
          </div>
          <div className="my-20">
            <h2 className="text-3xl font-semibold my-4">
              {t('web3.introduction.title')}
            </h2>
            <p className="my-4 text-[#737373] dark:text-[#F1F5F9]">
              {t('web3.introduction.paragraph1')}
            </p>
            <p className="my-4 text-[#737373] dark:text-[#F1F5F9]">
              {t('web3.introduction.paragraph2')}
            </p>
          </div>
          <div>
            <WebEvolution />
            <OurCorePrinciple />
            <WhyWeb3Matters />
          </div>
          <div className="text-2xl max-w-[530px] w-fit mx-auto bg-gradient-to-r from-gradient-from to-gradient-to text-transparent bg-clip-text text-center font-bold font-orbitron">
            {t('web3.conclusion.highlight')}
          </div>
        </div>
        <LearnMore />
        <SocialLinks />
      </section>
    </AppLayout>
  );
};

export default Web3Page;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'learn_more',
        'academy/web3',
      ])),
    },
  };
};
