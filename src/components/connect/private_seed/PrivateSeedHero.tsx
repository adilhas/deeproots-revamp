'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivateSeedHero = () => {
  const { t } = useTranslation('connect/private_seed');

  return (
    <div className="relative w-full min-h-screen rounded-3xl overflow-hidden">
      <Image
        src="/connect/private-seed-access.png"
        alt="Private Seed Access"
        fill
        className="object-cover object-center hidden md:inline-block"
        priority
      />
      <Image
        src="/connect/private-seed-access-sm.png"
        alt="Private Seed Access"
        fill
        className="object-cover object-center inline-block md:hidden"
        priority
      />

      <div className="absolute inset-0 hidden md:inline-block bg-black/20 z-10" />
      <div className="absolute inset-0 z-10 md:hidden bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      <div className="absolute inset-0 z-20 flex flex-col items-center md:justify-start justify-between py-4 md:py-10 text-white px-4">
        <div className="text-center max-w-3xl mt-8">
          <div className="border border-[#D4D4D4] mb-6 bg-white/20 backdrop-blur-xl px-3 py-1 rounded-3xl text-sm md:text-base font-medium inline-block">
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
        </div>
        <div className="text-center max-w-3xl mt-8">
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            {t('hero.description1')}
          </p>
          <p className="text-base md:text-lg leading-relaxed text-white/90">
            {t('hero.description2')}
          </p>
          <button className="mt-8 bg-gradient-to-r w-full max-w-[300px] from-gradient-from to-gradient-to  px-6 py-3 rounded-xl text-lg font-semibold font-orbitron hover:opacity-90 shadow-md">
            {t('hero.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateSeedHero;
