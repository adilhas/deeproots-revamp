'use client';

import { CircleDollarSignIcon, Eye, Wallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PiPlant } from 'react-icons/pi';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const SeedingSoon = () => {
  const { t } = useTranslation('identity/what_is_seeding');
  const { isArabic } = useLocaleDirection();

  const stepIcons = [
    <Wallet
      className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
      key="wallet"
    />,
    <CircleDollarSignIcon
      className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
      key="amount"
    />,
    <Eye
      className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
      key="preview"
    />,
    <PiPlant
      className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
      key="grow"
    />,
  ];

  const steps = t('seedingSoon.steps', { returnObjects: true }) as string[];

  return (
    <div className="my-20">
      <div className="text-3xl text-black dark:text-white font-semibold">
        {t('seedingSoon.title')}
      </div>
      <div className="my-8">{t('seedingSoon.description')}</div>
      <div className="flex flex-col md:flex-row items-center w-full gap-2 mx-auto justify-between">
        {steps.map((text, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl">
              <div className="mb-4">{stepIcons[index]}</div>
              <p className="text-[#737373] dark:text-[#F8FAFC]">{text}</p>
            </div>
            {index < steps.length - 1 && (
              <Image
                src="/academy/right-arrow.png"
                width={44}
                height={20}
                alt="arrow"
                className={`rotate-90 md:rotate-0 my-5 md:my-0 ${isArabic ? 'scale-x-[-1]' : ''}`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SeedingSoon;
