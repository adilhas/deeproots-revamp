import { Wallet } from 'lucide-react';
import React from 'react';
import {
  PiArrowsLeftRight,
  PiCoins,
  PiGameController,
  PiGlobeHemisphereWest,
  PiShieldCheck,
  PiWaves,
} from 'react-icons/pi';

const testData = [
  {
    title: 'dRC Smart Contracts (staking, referrals, liquidity, etc.)',
    icon: <PiCoins className="w-8 h-8 text-[#10B981] dark:text-[#34D399]" />,
  },
  {
    title: 'The Address Wallet (frontend + API)',
    icon: <Wallet className="w-8 h-8 text-[#F43F42] dark:text-[#FB7173]" />,
  },
  {
    title: 'TelexCoin DEX (swaps, pools, router)',
    icon: (
      <PiArrowsLeftRight className="w-8 h-8 text-[#F97316] dark:text-[#FB923C]" />
    ),
  },
  {
    title: 'RootOpia GameFi contracts',
    icon: (
      <PiGameController className="w-8 h-8 text-[#8B5CF6] dark:text-[#8B5CF6]" />
    ),
  },
  {
    title: 'Ocean Bazaar (NFT logic)',
    icon: <PiWaves className="w-8 h-8 text-[#3B82F6] dark:text-[#3B82F6]" />,
  },
  {
    title: 'Website & backend APIs (input validation, authentication)',
    icon: (
      <PiGlobeHemisphereWest className="w-8 h-8 text-[#DB2777] dark:text-[#DB2777]" />
    ),
  },
];

const WhatYouCanTest = () => {
  return (
    <div className="py-16">
      <div className="flex flex-row items-center gap-3 text-3xl font-semibold w-fit">
        <PiShieldCheck className="text-[#9333EA]" />
        <span className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          What You Can Test
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {testData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 py-8 px-10 text-center text-lg bg-[#FFFFFF] dark:bg-[#1C1C1C] border border-[#D4D4D4] dark:border-[#303030] rounded-2xl"
          >
            {item.icon}
            <div>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatYouCanTest;
