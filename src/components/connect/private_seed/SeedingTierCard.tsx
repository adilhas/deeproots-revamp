import Image from 'next/image';
import React from 'react';

interface SeedingTierCardProps {
  tierName: string;
  priceRange: string;
  imageSrc: string;
  features: string[];
  isExclusive?: boolean;
  badgeLabel: string;
}

const SeedingTierCard: React.FC<SeedingTierCardProps> = ({
  tierName,
  priceRange,
  imageSrc,
  features,
  isExclusive = false,
  badgeLabel,
}) => {
  return (
    <div className="min-h-[500px] z-10 rounded-4xl p-3 w-full max-w-[368px] mx-auto border border-[#D4D4D4] dark:border-[#737373] bg-white dark:bg-[#303030]">
      <div
        className={`${isExclusive ? 'bg-gradient-to-r from-gradient-from2 to-gradient-to2' : 'bg-[#F6F6F6] dark:bg-[#1C1D20]'} overflow-hidden border border-[#D4D4D4] dark:border-[#737373]  w-full h-[174px] rounded-[20px] p-3 relative`}
      >
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div
            className={`${isExclusive ? 'text-white' : 'text-[#696969] dark:text-[#F8FAFC]'} text-2xl font-medium dark:text-neutral-300`}
          >
            {tierName}
          </div>
          <div
            className={`${isExclusive ? 'text-white' : 'text-[#303030] dark:text-[#F8FAFC]'}  text-3xl font-semibold`}
          >
            {priceRange}
          </div>
          <div className="bg-[#DBEAFE] text-[#2563EB] text-md rounded-[40px] w-fit py-1 px-2">
            {badgeLabel}
          </div>
        </div>
        <Image
          src={imageSrc}
          width={115}
          height={300}
          alt={`seeding ${tierName}`}
          className="absolute bottom-0 right-0 z-0"
        />
      </div>
      <div className="mt-4 z-10">
        <div className="text-[#525252] dark:text-[#F1F5F9] text-2xl z-10">
          Benefits
        </div>
        <ul className="list-disc ml-6 mt-3 text-[#525252] dark:text-[#F1F5F9] text-xl z-10 space-y-[16px]">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeedingTierCard;
