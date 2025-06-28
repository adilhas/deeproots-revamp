'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';

const WhoIsThisFor = () => {
  const { t } = useTranslation('academy/what_is_fullseat');
  const rawPoints = t('fullseat.who.points', { returnObjects: true });
  const points: string[] = Array.isArray(rawPoints)
    ? (rawPoints as string[])
    : [];

  const cardStyles = [
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
    <div>
      <div className="flex flex-row items-center gap-3 font-semibold my-3">
        <div className="text-3xl text-black dark:text-white">
          {t('fullseat.who.title')}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto my-8">
        {points.map((point, index) => (
          <div
            key={index}
            className={`${cardStyles[index].bgColor} border ${cardStyles[index].borderColor} rounded-3xl text-center p-4`}
          >
            <h3 className="font-semibold text-black dark:text-white">
              {point}
            </h3>
          </div>
        ))}
      </div>

      <p className="font-orbitron text-2xl font-semibold">
        {t('fullseat.who.cta')}
      </p>
    </div>
  );
};

export default WhoIsThisFor;
