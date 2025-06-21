import { useThemeContext } from '@/context/ThemeContext';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface WhatAreWeBuildingType {
  title: string;
  description: string;
  icon: string;
  darkIcon: string;
  bgColor: string;
  borderColor: string;
}

const WhatAreWeBuildingData: WhatAreWeBuildingType[] = [
  {
    title: 'The Address Wallet',
    description: 'Web3 gateway',
    icon: '/identity/address-logo.png',
    darkIcon: '/identity/address-logo-dark.png',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'TelexCoin DEX',
    description: 'on-chain liquidity',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    icon: '/identity/telexcoin-logo.png',
    darkIcon: '/identity/telexcoin-logo-dark.png',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    title: 'Ocean Bazaar',
    description: 'NFT economy',
    icon: '/identity/oceanbazaar-logo.png',
    darkIcon: '/identity/oceanbazaar-logo-dark.png',
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    title: 'RootOpia GameFi',
    description: 'earn by playing and seeding',
    icon: '/identity/rootopia-logo.png',
    darkIcon: '/identity/rootopia-logo-dark.png',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
];

const WhatAreWeBuilding = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        What We’re Building
      </h2>
      <p className="my-4">
        We’re building an ecosystem of over 20 products all connected by one
        chain, one token, and one mission:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {WhatAreWeBuildingData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div>
              <Image
                src={isDark ? item.darkIcon : item.icon}
                alt={item.title}
                width={24}
                height={24}
              />
            </div>
            <h3 className="font-semibold my-4 text-lg">{item.title}</h3>

            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
        <div
          className={`bg-[#FFE3F2] dark:bg-[#831843] border border-[#F472B6] dark:border-[#F472B6] p-3 rounded-3xl`}
        >
          <div>
            <Image
              src={
                isDark
                  ? '/identity/remaining-logos-dark.png'
                  : '/identity/remaining-logos.png'
              }
              alt={'reamaining-logos'}
              height={24}
              width={152}
            />
          </div>

          <p className="text-[#737373] dark:text-[#F8FAFC] my-4">
            MetaFabric, GiveFi, InnoLaunch, and more...
          </p>
          <div className="flex flex-row justify-between items-center">
            Explore <ChevronRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatAreWeBuilding;
