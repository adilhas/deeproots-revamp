import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import TermsHero from '@/components/identity/terms_of_service_page/TermsHero';
import TermsWelcomeSection from '@/components/identity/terms_of_service_page/TermsWelcomeSection';
import TermsSection from '@/components/identity/terms_of_service_page/TermsSection';
import DataPrivacy from '@/components/identity/terms_of_service_page/DataPrivacy';
import TermsContactSection from '@/components/identity/terms_of_service_page/TermsContactSection';
import TermsFinalNote from '@/components/identity/terms_of_service_page/TermsFinalNote';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const TermsOfServicePage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark transition-colors duration-300">
        <Head>
          <title>Terms of Service - Deep Roots</title>
          <meta
            name="description"
            content="Terms governing your use of Deep Roots products and services."
          />
        </Head>

        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <TermsHero />
          <div className="space-y-16">
            <TermsWelcomeSection />
            <TermsSection />
            <DataPrivacy />
            <TermsContactSection />
            <TermsFinalNote />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default TermsOfServicePage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'identity/terms_of_service',
        'common',
      ])),
    },
  };
};
