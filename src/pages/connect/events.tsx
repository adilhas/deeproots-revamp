import AppLayout from '@/Shared/AppLayout';
import useEventForm from '@/components/connect/events_page/useEventForm';
import EventsHeroSection from '@/components/connect/events_page/EventsHeroSection';
import EventsIntroSection from '@/components/connect/events_page/EventsIntroSection';
import EventsRegistrationForm from '@/components/connect/events_page/EventsRegistrationForm';
import SuccessMessage from '@/components/connect/events_page/SuccessMessage';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

const EventsPage = () => {
  const { formData } = useEventForm();

  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Seo
          title="Events & Meetups - DEEPROOTS"
          description="Connect with the DEEPROOTS community through events and meetups."
        />

        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-12">
          <EventsHeroSection />
          <EventsIntroSection />
          {!formData.submitted ? (
            <EventsRegistrationForm />
          ) : (
            <SuccessMessage />
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default EventsPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'connect/events',
        'common',
      ])),
    },
  };
};
