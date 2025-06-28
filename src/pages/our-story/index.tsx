import AppLayout from '@/Shared/AppLayout';
import OurStoryHero from '@/components/our_story_page/OurStoryHero';
import VisionStory from '@/components/our_story_page/VisionStory';
import OurJourney from '@/components/our_story_page/OurJourney';
import OurBeliefs from '@/components/our_story_page/OurBeliefs';
import OurProducts from '@/components/our_story_page/OurProducts';
import OurStoryCTA from '@/components/our_story_page/OurStoryCTA';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

const StoryPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark px-3">
        <Seo
          title="Our Story - DEEPROOTS"
          description="The story of Deep Roots - from vision to movement."
        />

        <OurStoryHero />
        <div className="max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <VisionStory />
          <OurJourney />
          <OurBeliefs />
          <OurProducts />
          <OurStoryCTA />
        </div>
      </div>
    </AppLayout>
  );
};

export default StoryPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'our_story',
        'common',
      ])),
    },
  };
};
