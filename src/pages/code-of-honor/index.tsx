import AppLayout from '@/Shared/AppLayout';
import COHHero from '@/components/code_of_honor/COHHero';
import COHIntro from '@/components/code_of_honor/COHIntro';
import COHPrinciple from '@/components/code_of_honor/COHPrinciple';
import COHPledge from '@/components/code_of_honor/COHPledge';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

const CodeOfHonorPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Seo
          title="Code of Honor - DEEPROOTS"
          description="The values that guide everything we create, protect, and grow."
        />

        <COHHero />
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <COHIntro />
          <COHPrinciple />
          <COHPledge />
          {/* <COHFinalSection /> */}
        </div>
      </div>
    </AppLayout>
  );
};

export default CodeOfHonorPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'code_of_honor',
        'common',
      ])),
    },
  };
};
