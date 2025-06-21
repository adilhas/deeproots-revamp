import React, { JSX } from 'react';
import {
  PiCirclesFour,
  PiGavel,
  PiOfficeChair,
  PiPlantLight,
  PiUsersFour,
} from 'react-icons/pi';

interface SeedingBenefitsType {
  title: string;
  description: string;
  icons: JSX.Element;
  bgColor: string;
  borderColor: string;
}

export const SeedingBenefitsData: SeedingBenefitsType[] = [
  {
    title: '12% APY',
    description: 'Earn 12% APY on More on your Seed..',
    icons: (
      <PiPlantLight
        className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
        key="plant"
      />
    ),
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'Referral Boosts',
    description: 'Earn referral reward, Boosts and bonuses for invites',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    icons: (
      <PiUsersFour
        className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]"
        key="users"
      />
    ),
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    title: 'Access',
    description: 'Enjoy Exclusive Foundation Seat Access',
    icons: (
      <PiOfficeChair
        className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]"
        key="chair"
      />
    ),
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    title: 'DAO power',
    description: 'Gain Future DAO power (Governance + Reputation)',
    icons: (
      <PiGavel
        className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]"
        key="Gavel"
      />
    ),
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
  {
    title: 'Connection',
    description: 'Connection to GameFi, Launchpad, and beyond',
    icons: (
      <PiCirclesFour
        className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]"
        key="eye"
      />
    ),
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
];

const SeedingBenefits = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">
        What You Get When You Seed
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {SeedingBenefitsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div>{item.icons}</div>
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
