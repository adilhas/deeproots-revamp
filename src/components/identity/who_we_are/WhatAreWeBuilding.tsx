'use client';

import { useThemeContext } from '@/context/ThemeContext';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React from 'react';
import Link from 'next/link';

const styleData = [
  {
    icon: '/identity/address-logo.png',
    darkIcon: '/identity/address-logo-dark.png',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    icon: '/identity/telexcoin-logo.png',
    darkIcon: '/identity/telexcoin-logo-dark.png',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    icon: '/identity/oceanbazaar-logo.png',
    darkIcon: '/identity/oceanbazaar-logo-dark.png',
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    icon: '/identity/rootopia-logo.png',
    darkIcon: '/identity/rootopia-logo-dark.png',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
];

const WhatAreWeBuilding = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('identity/who_we_are');

  const rawItems = t('whatWeAreBuilding.items', { returnObjects: true });
  const items: { title: string; description: string }[] = Array.isArray(
    rawItems
  )
    ? (rawItems as { title: string; description: string }[])
    : [];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        {t('whatWeAreBuilding.heading')}
      </h2>
      <p className="my-4">{t('whatWeAreBuilding.intro')}</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${styleData[index].bgColor} border ${styleData[index].borderColor} p-3 rounded-3xl`}
          >
            <div>
              <Image
                src={isDark ? styleData[index].darkIcon : styleData[index].icon}
                alt={item.title}
                width={24}
                height={24}
              />
            </div>
            <h3 className="font-semibold my-4 text-lg">{item.title}</h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}

        <div className="bg-[#FFE3F2] dark:bg-[#831843] border border-[#F472B6] dark:border-[#F472B6] p-3 rounded-3xl">
          <div>
            <Image
              src={
                isDark
                  ? '/identity/remaining-logos-dark.png'
                  : '/identity/remaining-logos.png'
              }
              alt="remaining-logos"
              height={24}
              width={152}
            />
          </div>

          <p className="text-[#737373] dark:text-[#F8FAFC] my-4">
            {t('whatWeAreBuilding.extra.description')}
          </p>
          <Link
            href="/deworld/ecosystem"
            className="flex flex-row justify-between items-center"
          >
            {t('whatWeAreBuilding.extra.cta')}{' '}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatAreWeBuilding;
