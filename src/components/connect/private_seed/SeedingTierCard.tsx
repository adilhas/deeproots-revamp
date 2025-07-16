import Image from 'next/image';
import React from 'react';

interface SeedingTierCardProps {
  tierName: string;
  priceRange: string;
  imageSrc: string;
  features: string[];
  badgeLabel: string;
  isDark?: boolean;
  tierCardClass?: string;
  lightGradientClass?: string;
  darkGradientClass?: string;
  title1Class?: string;
  title2Class?: string;
}

const SeedingTierCard: React.FC<SeedingTierCardProps> = ({
  tierName,
  priceRange,
  imageSrc,
  features,
  badgeLabel,
  isDark = true,
  tierCardClass,
  title1Class,
  title2Class,
}) => {
  const allowDark = isDark;

  return (
    <div
      className={`min-h-[500px] z-10 rounded-4xl p-3 w-full max-w-[368px] mx-auto border ${
        allowDark
          ? 'border-[#D4D4D4] dark:border-[#737373] bg-white dark:bg-[#303030]'
          : 'border-[#D4D4D4] bg-white'
      }`}
    >
      <div
        className={`overflow-hidden border w-full h-[174px] rounded-[20px] p-3 relative ${tierCardClass ?? ''}`}
      >
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className={`text-2xl font-medium max-w-[90%] ${title1Class}`}>
            {tierName}
          </div>
          <div className={`text-3xl font-semibold ${title2Class}`}>
            {priceRange}
          </div>
          <div className="bg-[#DBEAFE] text-[#2563EB] text-md rounded-[40px] w-fit py-1 px-2">
            {badgeLabel}
          </div>
        </div>
        <div className="w-5 h-5 border border-[#A1A1A1] absolute top-3 right-3 rounded-full bg-white"></div>
        <Image
          src={imageSrc}
          width={115}
          height={300}
          alt={`seeding ${tierName}`}
          className="absolute bottom-0 right-0 z-0"
        />
      </div>
      <div className="mt-4 z-10">
        <div
          className={`text-2xl z-10 ${
            allowDark ? 'text-[#525252] dark:text-[#F1F5F9]' : 'text-[#525252]'
          }`}
        >
          Benefits
        </div>
        <ul
          className={`list-disc ml-6 mt-3 text-xl z-10 space-y-[16px] ${
            allowDark ? 'text-[#525252] dark:text-[#F1F5F9]' : 'text-[#525252]'
          }`}
        >
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeedingTierCard;
