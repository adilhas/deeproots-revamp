'use client';

import FoundationBenefits from '@/components/seeding/foundation/FoundationBenefits';
import SeedingCountdown from '@/components/seeding/foundation/SeedingCountdown';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Seo from '@/Shared/Seo';

const FoundationPage = () => {
  const { t } = useTranslation('seeding/foundation');

  return (
    <>
      <Seo
        title="Full Seat Of DEEPROOTS Foundation"
        description="Limited access to the FullSeat Foundation within the DEEPROOTS Ecosystem."
      />
      <AppLayout className="bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
        <div className="max-w-[1200px] mx-auto py-16 px-3">
          <h1 className="text-5xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-center w-fit mx-auto font-orbitron font-semibold leading-tight">
            {t('title.line1')}
            <br />
            <span>{t('title.line2')}</span>
          </h1>
          <SeedingCountdown />
          <FoundationBenefits />
        </div>
      </AppLayout>
    </>
  );
};

export default FoundationPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'seeding/foundation',
        'common',
      ])),
    },
  };
};
