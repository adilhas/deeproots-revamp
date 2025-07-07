import { ChevronRight, RocketIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const InnolaunchSection = () => {
  const { t } = useTranslation('landing_page');
  const rawFundingRounds = t('innolaunch_section.funding_rounds', {
    returnObjects: true,
  });
  const fundingRounds: string[] = Array.isArray(rawFundingRounds)
    ? (rawFundingRounds as string[])
    : [];

  return (
    <section className="relative py-16 bg-[#82A3AA] dark:bg-transparent overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[300px] h-[500px] bg-[#CA544F] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[500px] bg-[#79D9F8] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />

      <div className="flex max-w-[1200px] w-full mx-auto justify-between px-5 lg:px-0 items-center flex-col lg:flex-row gap-x-8">
        {/* desk image */}
        <div className="hidden lg:block my-5 lg:w-1/2 lg:mx-8">
          <Image
            src="/landing/innolaunch.webp"
            alt="Launch"
            className="rounded-2xl w-full h-auto max-h-[600px]"
            width={768}
            height={768}
          />
        </div>
        <div className="flex justify-between w-full md:items-start bor flex-col lg:w-1/2">
          <div className="font-[600] text-4xl lg:text-5xl leading-[40px] text-[#ADF2F2] font-orbitron">
            {t('innolaunch_section.title')}
          </div>
          {/* mobile image */}
          <div className="inline-block lg:hidden my-5 w-full">
            <Image
              src="/landing/innolaunch.webp"
              alt="Launch"
              className="rounded-2xl w-full h-auto"
              width={768}
              height={768}
            />
          </div>
          <div className="font-[600] text-start text-2xl font-orbitron text-[#ADF2F2]">
            {t('innolaunch_section.subtitle')}
          </div>

          <div className="flex items-start justify-center flex-col my-14">
            {fundingRounds.map((round, index) => (
              <div className="flex items-center my-1" key={index}>
                <div className="inline-block text-[#f68082] mr-3">
                  <RocketIcon />
                </div>
                <p className="lg:w-[500px] font-sans text-lg md:w-[70vw]">
                  {round}
                </p>
              </div>
            ))}
          </div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://innolaunch.earth/"
          >
            <button className="py-3 font-bold mt-5 font-sans text-neutral-200 text-lg px-5 bg-[#f68082] hover:scale-105 rounded-lg flex justify-center items-center">
              {t('innolaunch_section.button')}
              <ChevronRight />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default InnolaunchSection;
