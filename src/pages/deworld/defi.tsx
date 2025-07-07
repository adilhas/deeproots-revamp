import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import DefiHero from '@/components/deworld/defi_page/DefiHero';
import DefiIntro from '@/components/deworld/defi_page/DefiIntro';
import DefiFeatures from '@/components/deworld/defi_page/DefiFeatures';
import DefiPrinciples from '@/components/deworld/defi_page/DefiPrinciples';
import DefiBenefits from '@/components/deworld/defi_page/DefiBenefits';
import DefiCTA from '@/components/deworld/defi_page/DefiCTA';

const DeFiPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark transition-colors duration-300">
        <Head>
          <title>DeFi - Finance Without Borders</title>
          <meta
            name="description"
            content="DEEPROOTS DeFi gives you real control over your value, income, and opportunity."
          />
        </Head>

        <DefiHero />
        <div className="max-w-5xl mx-auto relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            <DefiIntro />
            <DefiFeatures />
            <DefiPrinciples />
            <DefiBenefits />
            <DefiCTA />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DeFiPage;
