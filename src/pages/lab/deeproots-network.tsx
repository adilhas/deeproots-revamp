import AppLayout from '@/Shared/AppLayout';
import DeworldNetworkHero from '@/components/deworld/deworld_network_page/DeworldNetworkHero';
import PublicNetwork from '@/components/deworld/deworld_network_page/PublicNetwork';
import PrivateNetwork from '@/components/deworld/deworld_network_page/PrivateNetwork';
import DeworldNetworkCTA from '@/components/deworld/deworld_network_page/DeworldNetworkCTA';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/Seo';

const NetworkPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark transition-colors duration-300">
        <Seo
          title="DeWorld Networks - Public & Private"
          description={`Compare DeWorld's public and private blockchain networks.`}
        />

        <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <DeworldNetworkHero />

          <div className="grid md:grid-cols-2 gap-8">
            <PublicNetwork />

            <PrivateNetwork />
          </div>

          <DeworldNetworkCTA />
        </div>
      </div>
    </AppLayout>
  );
};

export default NetworkPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'lab/network',
        'common',
      ])),
    },
  };
};
