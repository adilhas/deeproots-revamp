'use client';

import React from 'react';
import {
  PiCirclesFour,
  PiGavel,
  PiOfficeChair,
  PiPlantLight,
  PiUsersFour,
} from 'react-icons/pi';
import { useTranslation } from 'next-i18next';

const iconsMap = [
  <PiPlantLight
    className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
    key="plant"
  />,
  <PiUsersFour
    className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]"
    key="users"
  />,
  <PiOfficeChair
    className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]"
    key="chair"
  />,
  <PiGavel
    className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]"
    key="gavel"
  />,
  <PiCirclesFour
    className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]"
    key="connection"
  />,
];

const styles = [
  {
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
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

const SeedingBenefits = () => {
  const { t } = useTranslation('identity/what_is_seeding');
  const items = t('benefits.items', { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">{t('benefits.title')}</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styles[index].bgColor} border ${styles[index].borderColor} p-3 rounded-3xl`}
          >
            <div>{iconsMap[index]}</div>
            <h3 className="font-semibold my-4 text-lg">{item.title}</h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeedingBenefits;
