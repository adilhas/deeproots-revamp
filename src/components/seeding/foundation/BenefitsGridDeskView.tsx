import Image from 'next/image';
import React from 'react';
import BenefitCard from './BenefitCard';

const benefitsData1 = [
  'Earn from each project  built on  Deeproots  Blockchain.',
  'Earn 12% annually as a full seat founder.',
  'seat are limited and onchain, Tied to your Identity',
  'Full referral system for 365 days.',
];
const benefitsData2 = [
  'Full  access to the full ecosystem',
  'Legacy and prestige.',
  'Full access to the GameFi Weekly and daily rewards with the 1 million Pool Price.',
];
const befitsData3 = [
  'Get full access to the AI ',
  'Only Full seat founders can invite users',
  'Make the decision of DeepRoots future get Access in a full whitelist and any innovative project before launch',
];
const BenefitsGridDeskView = () => {
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
          {befitsData3.map((benefit, index) => (
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
