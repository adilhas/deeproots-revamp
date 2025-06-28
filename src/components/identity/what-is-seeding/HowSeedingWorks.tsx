'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

const HowSeedingWorks = () => {
  const { t } = useTranslation('identity/what_is_seeding');
  const rawItems = t('how_works.items', { returnObjects: true });
  const items: { title: string; description: string }[] = Array.isArray(
    rawItems
  )
    ? (rawItems as { title: string; description: string }[])
    : [];

  const bgColorClasses = [
    'bg-[#F1F1F1] dark:bg-[#525252] border-[#D4D4D4] dark:border-[#737373]',
    'bg-[#EFF8FF] dark:bg-[#194185] border-[#B2DDFF] dark:border-[#2E90FA]',
    'bg-[#FFEDD5] dark:bg-[#7C2D12] border-[#FB923C] dark:border-[#FB923C]',
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        {t('how_works.section_title')}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`border flex flex-col justify-center rounded-3xl min-h-[145px] text-center p-4 ${bgColorClasses[index]}`}
          >
            <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-2xl font-orbitron font-semibold flex md:flex-row items-center flex-col w-fit mx-auto mt-8 mb-4 gap-3 text-[#737373] dark:text-[#F1F5F9]">
        <div className="line-through">{t('how_works.strike_1')}</div>
        <div className="line-through">{t('how_works.strike_2')}</div>
        <div className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          {t('how_works.final')}
        </div>
      </div>

      <div className="text-transparent w-fit mx-auto text-center font-orbitron font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        {t('how_works.caption')}
      </div>
    </div>
  );
};

export default HowSeedingWorks;
