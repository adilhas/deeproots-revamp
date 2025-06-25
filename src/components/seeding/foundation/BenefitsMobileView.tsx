'use client';

import React from 'react';
import BenefitCard from './BenefitCard';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const BenefitsMobileView = () => {
  const { t } = useTranslation('seeding/foundation');

  const benefitsTop = t('mobile_benefits.top', {
    returnObjects: true,
  }) as string[];
  const benefitsBottom = t('mobile_benefits.bottom', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="inline-block lg:hidden mx-auto w-full text-center">
      <div>
        {benefitsTop.map((item, i) => (
          <BenefitCard key={`top-${i}`} className="max-w-[400px] mx-auto my-6">
            {item}
          </BenefitCard>
        ))}

        <Image
          src="/seeding/benefit-tree.png"
          alt="benefits tree"
          width={800}
          height={400}
          className="max-w-[300px] max-h-auto object-contain mx-auto"
        />

        {benefitsBottom.map((item, i) => (
          <BenefitCard
            key={`bottom-${i}`}
            className="max-w-[400px] mx-auto my-6"
          >
            {item}
          </BenefitCard>
        ))}
      </div>
    </div>
  );
};

export default BenefitsMobileView;
