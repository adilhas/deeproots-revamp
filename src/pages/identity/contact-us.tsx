import AppLayout from '@/Shared/AppLayout';
import ContactUsHero from '@/components/connect/contact_us_page/ContactUsHero';
import GeneralContact from '@/components/connect/contact_us_page/GeneralContact';
import BuildersSection from '@/components/connect/contact_us_page/BuildersSection';
import ContactUsEventsSection from '@/components/connect/contact_us_page/ContactUsEventsSection';
import ContactUsCTA from '@/components/connect/contact_us_page/ContactUsCTA';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/Seo';

const ContactPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark py-16 px-4 sm:px-6 lg:px-8">
        <Seo
          title="What is Seeding? - Seeding is the Deep Roots way to grow, not just invest."
          description="Seeding is the Deep Roots way to grow, not just invest. It’s how users plant value into the ecosystem and earn real rewards in return."
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <ContactUsHero />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <GeneralContact />
              <BuildersSection />
            </div>
            <ContactUsEventsSection />
          </div>
          <ContactUsCTA />
        </div>
      </div>
    </AppLayout>
  );
};

export default ContactPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'identity/contact_us',
        'common',
      ])),
    },
  };
};
