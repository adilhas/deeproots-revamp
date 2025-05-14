import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import DrcHero from '@/components/academy_page/drc_page/DrcHero';
import WhatIsDrc from '@/components/academy_page/drc_page/WhatIsDrc';
import UtilitySection from '@/components/academy_page/drc_page/UtilitySection';
import FoundationSection from '@/components/academy_page/drc_page/FoundationSection';
import TokenomicsSection from '@/components/academy_page/drc_page/TokenomicsSection';
import CTASection from '@/components/academy_page/drc_page/CTASection';

const DRCPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-white dark:bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
        <Head>
          <title>dRC - The Native Currency of Deep Roots</title>
          <meta
            name="description"
            content="dRC powers everything in Deep Roots ecosystem: transactions, rewards, governance, staking, referrals, NFT economies, and more."
          />
        </Head>

        <div className="max-w-5xl mx-auto">
          <DrcHero />

          <div className="space-y-12">
            <WhatIsDrc />

            <UtilitySection />

            <FoundationSection />

            <TokenomicsSection />

            <CTASection />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DRCPage;
