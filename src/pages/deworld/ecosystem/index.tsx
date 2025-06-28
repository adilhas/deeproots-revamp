import DeWorldExosystemList from '@/components/deworld/ecosystem/DeWorldEcosystemList';
import Filter from '@/components/deworld/ecosystem/Filter';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const DeworldEcosystemPage = () => {
  return (
    <AppLayout className="dark:bg-primary-dark bg-neutral-300">
      <Seo
        title="DeWorld Ecosystem"
        description="Explore a connected world of decentralized products, services, and tools, all rooted in innovation and trust."
      />

      <main className="min-h-screen max-w-[1200px] mx-auto">
        <div className="py-32 px-5">
          <h1 className="text-5xl font-semibold leading-normal font-orbitron w-fit mx-auto text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            DeWorld Ecosystem
          </h1>
          <p className="md:text-center md:max-w-[500px] mx-auto text-[#4B5563] dark:text-[#E2E8F0]">
            Explore a connected world of decentralized products, services, and
            tools, all rooted in innovation and trust.
          </p>
        </div>
        <div>
          <Filter />
        </div>
        <div>
          <DeWorldExosystemList />
        </div>
      </main>
    </AppLayout>
  );
};

export default DeworldEcosystemPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'landing_page',
        'common',
      ])),
    },
  };
};
