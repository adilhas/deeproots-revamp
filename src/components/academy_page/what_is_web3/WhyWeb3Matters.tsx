'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

const bgStyles = [
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
  {
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
];

const WhyWeb3Matters = () => {
  const { t } = useTranslation('academy/web3');
  const rawItems = t('web3.whyWeb3.items', { returnObjects: true });
  const items: { title: string; description: string }[] = Array.isArray(
    rawItems
  )
    ? (rawItems as { title: string; description: string }[])
    : [];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">{t('web3.whyWeb3.title')}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${bgStyles[index].bgColor} border ${bgStyles[index].borderColor} rounded-3xl min-h-[145px] text-center flex flex-col items-center justify-center p-4`}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeb3Matters;
