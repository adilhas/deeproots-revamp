'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

const WhySeedingMatters = () => {
  const { t } = useTranslation('identity/what_is_seeding');
  const items = t('why_matters.items', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <div className="my-20">
      <div className="flex flex-row items-center gap-3 font-semibold mb-8">
        <div className="text-3xl text-black dark:text-white">
          {t('why_matters.title')}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-5 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-[#F1F1F1] dark:bg-[#525252] min-h-[153px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl"
          >
            <div className="font-semibold text-lg mb-2">{item.title}</div>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySeedingMatters;
