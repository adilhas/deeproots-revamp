import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import HackathonHero from '@/components/lab/internal_hackathon_page/HackathonHero';
import HackathonInro from '@/components/lab/internal_hackathon_page/HackathonInro';
import HackathonFeatures from '@/components/lab/internal_hackathon_page/HackathonFeatures';
import HackathonProcess from '@/components/lab/internal_hackathon_page/HackathonProcess';
import HackathonOutcome from '@/components/lab/internal_hackathon_page/HackathonOutcome';
import HackathonCulture from '@/components/lab/internal_hackathon_page/HackathonCulture';
import HackathonCTA from '@/components/lab/internal_hackathon_page/HackathonCTA';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HackathonPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark transition-colors duration-300">
        <Head>
          <title>Internal Hackathon - Where Ideas Take Root</title>
          <meta
            name="description"
            content="Deep Roots hackathons turn sparks into systems through collaborative building sprints."
          />
        </Head>

        <div className="max-w-5xl mx-auto relative z-10 py-16 px-4 sm:px-6 lg:px-8">
          <HackathonHero />
          <div className="space-y-20">
            <HackathonInro />
            <HackathonFeatures />
            <HackathonProcess />
            <HackathonOutcome />
            <HackathonCulture />
            <HackathonCTA />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default HackathonPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'connect/internal_hackathon',
        'common',
      ])),
    },
  };
};
