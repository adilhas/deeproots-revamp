import AccessCriteria from '@/components/connect/private_seed/AccessCriteria';
import PrivateSeedForm from '@/components/connect/private_seed/PrivateSeedForm';
import PrivateSeedHero from '@/components/connect/private_seed/PrivateSeedHero';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Volunteer() {
  return (
    <>
      <Head>
        <title>Private Seed</title>
        <meta
          name="description"
          content="Only 100 qualified individuals will be pre-approved to join the Foundation Full Seat round."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://deeproots.earth/connect/volunteer"
        />
      </Head>
      <AppLayout>
        <section className="py-16 bg-primary-light dark:bg-primary-dark text-[#696969] dark:text-[#F1F5F9]">
          <div className="max-w-[1200px] mx-auto px-3">
            <PrivateSeedHero />
            <AccessCriteria />
            <PrivateSeedForm />
          </div>
        </section>
        <SocialLinks />
      </AppLayout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'connect/private_seed',
      ])),
    },
  };
};
