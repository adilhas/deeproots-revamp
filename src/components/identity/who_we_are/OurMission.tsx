'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';
import parse from 'html-react-parser';

const OurMission = () => {
  const { t } = useTranslation('identity/who_we_are');

  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/2">
        <div className="font-semibold text-3xl text-black dark:text-white">
          {parse(t('ourMission.title'))}
        </div>

        <div
          className="my-4"
          // dangerouslySetInnerHTML={{ __html: t('ourMission.line1') }}
        >
          {parse(t('ourMission.line1'))}
        </div>

        <div className="my-4">{t('ourMission.line2')}</div>

        <div className="text-transparent font-orbitron text-3xl my-3 font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          {t('ourMission.footer')}
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src="/identity/our-mission.png"
          alt={t('ourMission.image_alt')}
          width={422}
          height={422}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default OurMission;
