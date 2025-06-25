import LegalDisclaimer from '@/components/disclaimer/LegalDesclaimer';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const DisclaimerPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-white dark:bg-primary-dark text-[#303030] dark:text-[#F8FAFC]">
        <LegalDisclaimer />
      </div>
    </AppLayout>
  );
};

export default DisclaimerPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
