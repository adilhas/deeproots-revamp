import AppLayout from '@/Shared/AppLayout';
import PrivacyHero from '@/components/identity/privacy_policy_page/PrivacyHero';
import PrivacyCommitment from '@/components/identity/privacy_policy_page/PrivacyCommitment';
import PrivacyDonts from '@/components/identity/privacy_policy_page/PrivacyDonts';
import PrivacyDoes from '@/components/identity/privacy_policy_page/PrivacyDoes';
import PrivacyDataHandling from '@/components/identity/privacy_policy_page/PrivacyDataHandling';
import PhilosopySection from '@/components/identity/privacy_policy_page/PhilosopySection';
import ContactSection from '@/components/identity/privacy_policy_page/ContactSection';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

const PrivacyPolicyPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark transition-colors duration-300">
        <Seo
          title="Privacy Policy - DEEPROOTS"
          description="Our commitment to protecting your privacy and data in DeWorld"
        />

        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <PrivacyHero />
          <div className="space-y-16">
            <PrivacyCommitment />
            <PrivacyDonts />
            <PrivacyDoes />
            <PrivacyDataHandling />
            <PhilosopySection />
            <ContactSection />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicyPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'identity/privacy_policy',
        'common',
      ])),
    },
  };
};
