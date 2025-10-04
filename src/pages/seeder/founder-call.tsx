import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

const MEET_URL = 'https://calendly.com/team-deeproots/30min';

const MeetPage = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className=" min-h-screen flex flex-col items-center justify-center p-5 text-white font-poppins">
      <div className="max-w-[900px] w-fit md:w-full bg-[#111a3c] rounded-2xl p-5 shadow-lg">
        {/* Header */}
        <div className="text-center mb-5">
          <Image
            src="/landing/logo.png"
            alt="DeepRoots"
            width={70}
            height={70}
            className="mx-auto"
          />
          <h1 className="mt-2 text-2xl text-[#6a0dad] font-bold">
            DEEPROOTS Founders Call
          </h1>
          <p className="text-gray-300 text-sm mt-1">
            From Silence → Voice. Book your time to build the DeWorld.
          </p>
        </div>

        {/* Calendly Inline Widget */}
        <div
          className="calendly-inline-widget"
          data-url={MEET_URL}
          style={{ minWidth: '320px', height: '700px' }}
        ></div>

        {/* Load Calendly script safely */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />

        {/* Footer CTA */}
        <p className="text-center mt-5 text-gray-300 text-sm">
          100 Foundation Seats only — your Voice matters.
        </p>
      </div>
    </section>
  );
};

export default MeetPage;
