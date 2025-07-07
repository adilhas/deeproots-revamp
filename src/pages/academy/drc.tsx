import AppLayout from '@/Shared/AppLayout';
import DrcHero from '@/components/academy_page/drc_page/DrcHero';
import WhatIsDrc from '@/components/academy_page/drc_page/WhatIsDrc';
import UtilitySection from '@/components/academy_page/drc_page/UtilitySection';
import FoundationSection from '@/components/academy_page/drc_page/FoundationSection';
import TokenomicsSection from '@/components/academy_page/drc_page/TokenomicsSection';
import CTASection from '@/components/academy_page/drc_page/CTASection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import Seo from '@/Shared/Seo';

const DRCPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-white dark:bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 text-gray-900 dark:text-gray-100">
        <Seo
          title="dRC - The Native Currency of DEEPROOTS"
          description="dRC powers everything in DEEPROOTS ecosystem: transactions, rewards, governance, staking, referrals, NFT economies, and more."
        />

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
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'academy/drc',
        'common',
      ])),
    },
  };
};
