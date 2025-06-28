import LegalDisclaimer from '@/components/disclaimer/LegalDesclaimer';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const DisclaimerPage = () => {
  return (
    <AppLayout>
      <Seo
        title="Legal Disclaimer - DEEPROOTS BLOCKCHAIN"
        description="This legal disclaimer applies to all users, contributors, participants, and partners engaging with the Deep Roots Blockchain, its digital assets (including dRC tokens), and all Web3 products and services within the DeWorld Ecosystem."
      />
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
