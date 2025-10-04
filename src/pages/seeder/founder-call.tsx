import { useEffect, useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import AuthLoader from '@/components/AuthLoader';

const MeetPage = () => {
  const { application, setApplication } = useApplication();
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const fetchApplication = async () => {
      if (!session?.user?.applicationId) return;

      try {
        const res = await fetch(
          `/api/private-seed/${session.user.applicationId}`
        );
        const data = await res.json();
        setApplication(data);
      } catch (error) {
        console.error('Failed to fetch application', error);
      } finally {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchApplication();
    }
  }, [session, status, setApplication]);

  if (loading) {
    return <AuthLoader />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center p-1 md:p-5 bg-primary-dark font-poppins text-white">
      <div className="w-full max-w-[900px] bg-[#111a3c] rounded-2xl p-2 md:p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <Image
            src="/landing/logo.png"
            alt="DeepRoots"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h1 className="mt-2 font-orbitron text-2xl md:text-3xl text-transparent bg-gradient-to-r bg-gradient-from to-gradient-to bg-clip-text w-fit mx-auto font-bold">
            DEEPROOTS Founders Call
          </h1>
          <p className="text-gray-300 text-sm md:text-base mt-1">
            From Silence → Voice. Book your time to build the DeWorld.
          </p>
        </div>

        {application?.seedTier === 'tier-2' ||
        application?.seedTier === 'tier-3' ? (
          <>
            <div className="w-full">
              <div
                className="calendly-inline-widget w-full h-[700px] md:h-[800px] lg:h-[900px]"
                data-url={`https://calendly.com/team-deeproots/30min?email=${application.email}&name=${application.fullName}`}
              />
            </div>

            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />

            <p className="text-center mt-5 text-gray-300 text-sm md:text-base">
              100 Foundation Seats only — your Voice matters.
            </p>
          </>
        ) : (
          <p className="text-center mt-10 text-red-500">
            You do not have access to book a Founders Call.
          </p>
        )}
      </div>
    </section>
  );
};

export default MeetPage;
