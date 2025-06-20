import Image from 'next/image';
import React from 'react';
import SeedingProgram from './SeedingProgram';
import { useTranslation } from 'next-i18next';

const EarnFoundationSection = () => {
  const { t } = useTranslation('landing_page');

  return (
    <div className="dark:bg-[#161616] max-w-[1200px] mx-auto bg-[#e8e8e9] px-3">
      <div className="py-10 w-full">
        <div className="text-center">
          <h2 className="w-fit font-[600] p-3 mx-auto text-3xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            {t('earn_foundation.title')}
          </h2>
          <div className="w-fit mx-auto">{t('earn_foundation.subtitle_1')}</div>
          <div
            className="w-full max-w-[1200px] mx-auto my-3 relative"
            style={{ aspectRatio: 1142 / 220 }}
          >
            <Image
              src="/landing/earn-foundation.png"
              alt="foundation seat"
              fill
              className="rounded-2xl object-contain"
              priority
            />
          </div>
          <div className="w-fit mx-auto">{t('earn_foundation.subtitle_2')}</div>
        </div>
        <SeedingProgram />
      </div>
    </div>
  );
};

export default EarnFoundationSection;
