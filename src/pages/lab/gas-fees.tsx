import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import GasFeesHero from '@/components/academy_page/gas_fees_page/GasFeesHero';
import GasFeesUitility from '@/components/academy_page/gas_fees_page/GasFeesUitility';
import GasFeesCTA from '@/components/academy_page/gas_fees_page/GasFeesCTA';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const GasFeesPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
        <Head>
          <title>Gas Fees - Powering DeWorld for Everyone</title>
          <meta
            name="description"
            content="Deep Roots offers fixed 0.01 gas fees - affordable, predictable, and fair for all users."
          />
        </Head>

        <div className="max-w-5xl mx-auto">
          <GasFeesHero />
          <div className="space-y-12">
            <GasFeesUitility />
            <GasFeesCTA />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default GasFeesPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'lab/gas_fees',
        'common',
      ])),
    },
  };
};
