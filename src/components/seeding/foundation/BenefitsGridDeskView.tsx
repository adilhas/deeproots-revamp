'use client';

import Image from 'next/image';
import React from 'react';
import BenefitCard from './BenefitCard';
import { useTranslation } from 'next-i18next';

const BenefitsGridDeskView = () => {
  const { t } = useTranslation('seeding/foundation');

  const benefitsData1 = t('desk-benefits.col1', {
    returnObjects: true,
  }) as string[];
  const benefitsData2 = t('desk-benefits.col2', {
    returnObjects: true,
  }) as string[];
  const benefitsData3 = t('desk-benefits.col3', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="text-[#4B5563] dark:text-[#F1F5F9] text-center lg:inline-block hidden">
      <div className="grid grid-cols-4 gap-4">
        {benefitsData1.map((benefit, index) => (
          <BenefitCard key={index}>{benefit}</BenefitCard>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-4 items-start">
        <div>
          {benefitsData2.map((benefit, index) => (
            <BenefitCard key={index} className="my-6">
              {benefit}
            </BenefitCard>
          ))}
        </div>

        <div className="col-span-2 p-8">
          <Image
            src="/seeding/benefit-tree.png"
            alt="benefits tree"
            width={800}
            height={400}
            className="w-full max-h-[670px] object-contain"
          />
        </div>

        <div>
          {benefitsData3.map((benefit, index) => (
            <BenefitCard key={index} className="my-6">
              {benefit}
            </BenefitCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGridDeskView;
