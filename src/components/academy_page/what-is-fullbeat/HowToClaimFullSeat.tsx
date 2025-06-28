'use client';

import { Lock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PiBank, PiOfficeChair, PiPuzzlePiece } from 'react-icons/pi';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const HowToClaimFullSeat = () => {
  const { t } = useTranslation('academy/what_is_fullseat');
  const { isArabic } = useLocaleDirection();
  const rawSteps = t('fullseat.claim.steps', { returnObjects: true });
  const steps: string[] = Array.isArray(rawSteps) ? (rawSteps as string[]) : [];

  const icons = [PiBank, Lock, PiOfficeChair];

  return (
    <div className="my-20">
      <div className="flex flex-row items-center gap-3 font-semibold mb-8">
        <PiPuzzlePiece className="w-10 h-10 text-[#F97316] dark:text-[#FDBA74] p-2 bg-[#FFEDD5] rounded-md dark:bg-[#7C2D12]" />
        <div className="text-3xl text-black dark:text-white">
          {t('fullseat.claim.title')}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full gap-2 mx-auto justify-between">
        {steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <React.Fragment key={index}>
              <div className="bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl">
                <div className="mb-4">
                  <Icon className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
                </div>
                <p className="text-[#737373] dark:text-[#F8FAFC]">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <Image
                  src={'/academy/right-arrow.png'}
                  width={44}
                  height={20}
                  alt="arrow"
                  className={`rotate-90 md:rotate-0 my-5 md:my-0 ${isArabic ? 'scale-x-[-1]' : ''}  `}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>

      <div className="font-bold w-fit text-xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text mt-8">
        {t('fullseat.claim.note')}
      </div>
    </div>
  );
};

export default HowToClaimFullSeat;
