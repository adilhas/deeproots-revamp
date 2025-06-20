import React from 'react';
import BenefitCard from './BenefitCard';
import Image from 'next/image';

const benefitsData1 = [
  'Earn from each project  built on  Deeproots  Blockchain.',
  'Earn 12% annually as a full seat founder.',
  'seat are limited and onchain, Tied to your Identity',
  'Full referral system for 365 days.',
  'Full  access to the full ecosystem',
];
const benefitsData2 = [
  'Legacy and prestige.',
  'Full access to the GameFi Weekly and daily rewards with the 1 million Pool Price.',
  'Get full access to the AI ',
  'Only Full seat founders can invite users',
  'Make the decision of DeepRoots future get Access in a full whitelist and any innovative project before launch',
];

const BenefitsMobileView = () => {
  return (
    <div className="inline-block lg:hidden  mx-auto w-full">
      <div className="">
        {benefitsData1.map((item, i) => (
          <BenefitCard key={i} className="max-w-[400px] mx-auto my-6">
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
        {benefitsData2.map((item, i) => (
          <BenefitCard key={i} className="max-w-[400px] mx-auto my-6">
            {item}
          </BenefitCard>
        ))}
      </div>
    </div>
  );
};

export default BenefitsMobileView;
