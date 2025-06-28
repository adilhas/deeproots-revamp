'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

const WhatDrivesUs = () => {
  const { t } = useTranslation('identity/who_we_are');

  const rawItems = t('whatDrivesUs.items', { returnObjects: true });
  const items: string[] = Array.isArray(rawItems) ? (rawItems as string[]) : [];

  const styleData = [
    {
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },
    {
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
  ];

  return (
    <div className="my-20 text-[#737373] dark:text-[#F1F5F9]">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        {t('whatDrivesUs.heading')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {items.map((title, index) => (
          <div
            key={index}
            className={`${styleData[index].bgColor} border ${styleData[index].borderColor} rounded-3xl text-center p-4`}
          >
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
        ))}
      </div>

      <p className="my-8">{t('whatDrivesUs.description')}</p>
    </div>
  );
};

export default WhatDrivesUs;
