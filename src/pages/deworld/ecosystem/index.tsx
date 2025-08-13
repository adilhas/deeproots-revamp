import { DeWorldEcosysData } from '@/components/deworld/ecosystem/data';
import DeWorldExosystemList from '@/components/deworld/ecosystem/DeWorldEcosystemList';
import Filter from '@/components/deworld/ecosystem/Filter';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React, { useState } from 'react';

const DeworldEcosystemPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = DeWorldEcosysData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AppLayout className="dark:bg-primary-dark bg-neutral-300">
      <Seo
        title="DeWorld Ecosystem"
        description="Explore a connected world of decentralized products, services, and tools, all rooted in innovation and trust."
      />

      <main className="min-h-screen max-w-[1200px] mx-auto">
        <div className="py-32 px-5">
          <p className="mb-2.5 md:text-center md:max-w-[500px] mx-auto text-lg text-[#4B5563] dark:text-[#E2E8F0]">
            ROOTLAB
          </p>
          <div className="relative w-full max-w-[1024px] h-[203px] mx-auto overflow-hidden">
            <Image
              src={'/deworld/de_ecosystem.png'}
              alt="deworld ecosystem"
              width={1024}
              height={203}
              className="w-full h-full object-cover object-center rounded-3xl"
            />

            <h1 className="absolute bottom-4 left-4 md:left-1/2 md:text-nowrap -translate-x-0 md:-translate-x-1/2 text-3xl md:text-5xl font-semibold font-orbitron text-white">
              DeWorld Ecosystem
            </h1>
          </div>
          <p className="mt-2.5 text-lg md:text-center md:max-w-[500px] mx-auto text-[#4B5563] dark:text-[#E2E8F0]">
            Explore a connected world of decentralized products, services, and
            tools, all rooted in innovation and trust.
          </p>
        </div>
        <div>
          <Filter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
        </div>
        <div>
          <DeWorldExosystemList data={filteredData} />
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
