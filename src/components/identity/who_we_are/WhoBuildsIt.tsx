'use client';

import React from 'react';
import {
  PiCodeBlock,
  PiGlobeHemisphereWest,
  PiPenNib,
  PiUsersFour,
} from 'react-icons/pi';
import { useTranslation } from 'next-i18next';

const WhoBuildsIt = () => {
  const { t } = useTranslation('identity/who_we_are');
  const rawItems = t('whoBuildsIt.items', { returnObjects: true });
  const items: string[] = Array.isArray(rawItems) ? (rawItems as string[]) : [];

  const icons = [
    <PiCodeBlock
      className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
      key="code"
    />,
    <PiPenNib
      className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]"
      key="pen"
    />,
    <PiUsersFour
      className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]"
      key="users"
    />,
    <PiGlobeHemisphereWest
      className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]"
      key="globe"
    />,
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        {t('whoBuildsIt.heading')}
      </h2>
      <div className="grid md:grid-cols-2 max-w-[400px] md:max-w-none lg:grid-cols-4 gap-8 mx-auto bg-[#F1F1F1] dark:bg-[#525252] w-full p-3 rounded-3xl">
        {items.map((desc, index) => (
          <div key={index} className="p-3 rounded-3xl">
            <div>{icons[index]}</div>
            <p className="mt-4">{desc}</p>
          </div>
        ))}
      </div>
      <div className="text-transparent font-orbitron text-3xl my-3 font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        {t('whoBuildsIt.footer')}
      </div>
    </div>
  );
};

export default WhoBuildsIt;
