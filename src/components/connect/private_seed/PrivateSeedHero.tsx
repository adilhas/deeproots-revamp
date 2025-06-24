'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivateSeedHero = () => {
  const { t } = useTranslation('connect/private_seed');
  const features = t('hero.features', { returnObjects: true }) as string[];
  const featuresIcons = ['🔒', '🌐', '📈'];
  return (
    <div className="relative w-full min-h-screen rounded-3xl overflow-hidden">
      <div className="z-20 bg-gradient-to-b from-[#CCCCCC] to-[#FFFFFF] dark:from-[#070707] dark:to-[#252525]  px-2 py-2 border-3 border-[#D4D4D4] w-fit mx-auto rounded-4xl">
        <div className="text-center">
          <div
            className="border-3 border-[#D4D4D4] dark:border-[#3F3F3F] mb-6 bg-white dark:bg-[#171717]  px-4 py-2 rounded-4xl text-md md:text-xl lg:text-3xl font-semibold inline-block"
            style={{
              boxShadow: `0px 12px 42px -4px #14171A1F,0px 8px 18px -6px #14171A1F`,
            }}
          >
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
            {t('hero.title')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
            -Foundation Full Seat
          </h1>
        </div>
        <div className="text-center ">
          <button
            className="mt-8 bg-[#C2410C] w-fit text-white px-6 py-3 mb-4 rounded-2xl text-lg font-semibold font-orbitron hover:opacity-90 shadow-md"
            style={{ boxShadow: `0px 12px 20px 0px #0000008C` }}
          >
              {t('hero.button')}
          </button>
        </div>
      </div>
      <div className="relative w-full mx-auto my-10 overflow-hidden bg-white dark:bg-[#303030] py-2 max-w-[800px]">
        <div className="absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-primary-light dark:from-primary-dark via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l dark:from-primary-dark from-primary-light via-transparent to-transparent pointer-events-none" />

        <div className="marquee text-lg font-medium whitespace-nowrap w-fit">
          {t('hero.description')}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3 items-center justify-center my-10">
        {features.map((feature, index) => (
          <div
            key={feature}
            className="bg-white dark:bg-gradient-to-b w-full md:w-fit max-w-[300px] md:max-w-none text-center dark:from-[#070707] dark:to-[#252525] text-lg  md:text-xl lg:text-2xl py-2 px-4 rounded-2xl"
          >
            {featuresIcons[index]} {feature}
          </div>
        ))}
      </div>

      <div className="relative min-h-[900px]">
        <Image
          src="/connect/private-seed-access.png"
          alt="Private Seed Access"
          fill
          className="object-cover object-center hidden md:inline-block rounded-3xl border-6 border-black"
          priority
        />
        <Image
          src="/connect/private-seed-access-sm.png"
          alt="Private Seed Access"
          fill
          className="object-cover object-center inline-block md:hidden rounded-3xl border-6 border-black"
          priority
        />
      </div>
    </div>
  );
};

export default PrivateSeedHero;
