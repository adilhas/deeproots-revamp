import AppLayout from '@/Shared/AppLayout';
import PRHero from '@/components/public_relations_page/PRHero';
import PROffers from '@/components/public_relations_page/PROffers';
import TopicsWeSpeak from '@/components/public_relations_page/TopicsWeSpeak';
import PressKit from '@/components/public_relations_page/PressKit';
import PRContactSection from '@/components/public_relations_page/PRContactSection';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/Seo';

const PublicRelationsPage = () => {
  return (
    <>
      <Seo
        title="Public Relations - DEEPROOTS"
        description="Our voice. Our vision. Shared with the world."
      />
      <AppLayout>
        <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
          <PRHero />
          <div className="max-w-4xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
            <PROffers />
            <TopicsWeSpeak />
            <PressKit />
            <PRContactSection />
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export default PublicRelationsPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'public_relations',
        'common',
      ])),
    },
  };
};
