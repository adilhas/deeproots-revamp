import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import useEventForm from '@/components/connect/events_page/useEventForm';
import EventsHeroSection from '@/components/connect/events_page/EventsHeroSection';
import EventsIntroSection from '@/components/connect/events_page/EventsIntroSection';
import EventsRegistrationForm from '@/components/connect/events_page/EventsRegistrationForm';
import SuccessMessage from '@/components/connect/events_page/SuccessMessage';

const EventsPage = () => {
  const { formData } = useEventForm();

  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Head>
          <title>Events & Meetups - Deep Roots</title>
          <meta
            name="description"
            content="Connect with the Deep Roots community through events and meetups."
          />
        </Head>
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
