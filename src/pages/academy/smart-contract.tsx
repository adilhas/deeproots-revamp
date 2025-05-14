import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import SmartContractHero from '@/components/academy_page/smart_contract_page/SmartContractHero';
import SmartContractOverview from '@/components/academy_page/smart_contract_page/SmartContractOverview';
import SmartContractHighlights from '@/components/academy_page/smart_contract_page/SmartContractHighlights';
import SmartContractCTA from '@/components/academy_page/smart_contract_page/SmartContractCTA';

const SmartContractsPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-200 dark:bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <Head>
          <title>Smart Contracts - The Code That Powers DeWorld</title>
          <meta
            name="description"
            content="Deep Roots smart contracts are self-executing agreements of trust designed to protect, empower, and scale a decentralized world."
          />
        </Head>
        <div className="max-w-6xl mx-auto">
          <SmartContractHero />
          <div className="space-y-12">
            <SmartContractOverview />
            <SmartContractHighlights />
            <SmartContractCTA />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default SmartContractsPage;
