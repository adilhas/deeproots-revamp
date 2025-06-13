import React from 'react';
import TotalSupplyChart from './TotalSupplyChart';
import Image from 'next/image';
import TotalSupply from './TotalSupply';
import CTAGlowButton from '@/Shared/CTAGlowButton';
import { useThemeContext } from '@/context/ThemeContext';

const Data = [
  'Gas Chain',
  'Seeding',
  'Governance',
  'Referral',
  'Gamefi',
  'NFT & More',
];

const DRCDesktop = () => {
  const { isDark } = useThemeContext();

  return (
    <div className="relative ">
      <div
        className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full blur-[324px] opacity-30 pointer-events-none z-0"
        style={{
          background: 'linear-gradient(90deg, #9E2CA9 0%, #3B82A4 100%)',
          filter: 'blur(70px)',
        }}
      ></div>
      <div
        className="dark:bg-[#212121] bg-[#F0F0F0] w-fit mx-auto px-3 rounded-2xl"
        style={{
          boxShadow: `${isDark ? '0px 6px 20px 0px #00000045' : ''}`,
        }}
      >
        <h2 className="w-fit font-[600] text-center rounded-md p-3 mx-auto text-4xl md:text-3xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          What is dRC?
        </h2>
      </div>
      <div className="flex flex-row items-center gap-2 w-full justify-between">
        <TotalSupplyChart />
        <div className="font-orbitron text-3xl text-center font-[500]">
          dRC token distributed <br /> over 41 years
        </div>
        <Image
          src={`/landing/drc-token-frame-${isDark ? 'dark' : 'light'}.png`}
          alt="drc token"
          width={250}
          height={250}
        />
      </div>
      <div className="h-[580px] relative">
        <div className="flex items-center h-full justify-between relative z-10">
          <TotalSupply />

          <div className="text-center">
            <div className="text-3xl font-orbitron font-[500]">
              Built for Real Use – <br /> Not Just Trading
            </div>
            <div className="mt-5">
              <CTAGlowButton className="text-xl mr-2">Seed Now</CTAGlowButton>
              <button className="px-3 border border-[#BFAAFB] text-[#303030] dark:text-white dark:border-white py-[8px] rounded-3xl ml-2">
                Learn More About dRC
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center p-4 h-full">
            <ul className="space-y-4 mt-3 h-full flex flex-col justify-start text-center text-2xl font-orbitron text-[#5C5F62] dark:text-[#94A3B8]">
              {Data.map((item, index) => (
                <li
                  key={index}
                  className="py-2.5 px-8 rounded-2xl"
                  style={{
                    boxShadow: isDark
                      ? '0px 15px 31px 0px #000000'
                      : '0px 15px 31px 0px #A4A4A466',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DRCDesktop;
