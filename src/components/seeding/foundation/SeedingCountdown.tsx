'use client';

import Image from 'next/image';
import React from 'react';
import CountdownTimer from './CountDownTimer';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const SeedingCountdown = () => {
  const { t } = useTranslation('seeding/foundation');
  const { isArabic } = useLocaleDirection();

  return (
    <div className="relative w-full flex my-16 lg:flex-row max-w-[400px] lg:max-w-none mx-auto flex-col min-h-[411px] bg-[#1F2937] text-white rounded-3xl overflow-hidden">
      <div
        className={`absolute top-[-20px]  w-full h-[40%] lg:w-[50%] lg:h-full bg-[#3f2e78] blur-3xl opacity-80 pointer-events-none z-0 ${isArabic ? 'lg:right-[-100px]' : 'lg:left-[-100px]'}`}
      />

      <div className="lg:w-1/2 lg:min-h-[411px] flex flex-col justify-between z-10 lg:p-8 p-4">
        <div>
          <h2 className="text-3xl font-orbitron">{t('countdown.heading')}</h2>
          <p className="text-lg my-4">{t('countdown.description')}</p>
        </div>
        <div>
          <div>{t('countdown.label')}</div>
          <div>
            <CountdownTimer />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 h-full relative min-h-[411px] rounded-3xl lg:inline-block hidden">
        <Image
          src="/seeding/foundation-tree.png"
          alt="foundation tree"
          fill
          className={`object-cover rounded-3xl ${isArabic ? 'scale-x-[-1]' : ''}`}
        />
      </div>

      <div className="lg:w-1/2 h-full relative rounded-3xl inline-block lg:hidden min-h-[645px]">
        <Image
          src="/seeding/foundation-tree-sm.png"
          alt="foundation tree"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SeedingCountdown;
