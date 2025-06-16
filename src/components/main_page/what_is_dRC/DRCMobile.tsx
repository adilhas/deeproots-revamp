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

const DRCMobile = () => {
  const { isDark } = useThemeContext();

  return (
    <>
      <h2
        className="w-fit font-[600] text-center rounded-md p-3 mx-auto text-2xl bg-[#212121] md:text-3xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text"
        style={{
          boxShadow: `${isDark ? '0px 6px 20px 0px #00000045' : '0px 16px 31px 0px #CCCCCC'}`,
        }}
      >
        What is dRC?
      </h2>
      <div className="w-fit mx-auto my-5">
        <TotalSupplyChart showGradient={false} />
        <div className="mt-6">
          <TotalSupply />
        </div>
      </div>
      <div className="text-xl font-orbitron text-center my-10">
        Built for Real Use – Not Just Trading
      </div>

      <Image
        src={`/landing/drc-token-frame-${isDark ? 'dark' : 'light'}.png`}
        alt="drc token"
        width={250}
        height={250}
        className="mx-auto my-5"
      />
      <ul className="max-w-[400px] mx-auto text-center text-lg text-[#5C5F62] dark:text-[#94A3B8] px-3">
        {Data.map((item, index) => (
          <li
            key={index}
            className="py-2.5 px-8 rounded-2xl my-5 bg-[#EBEBEB] dark:bg-[#212121]"
            style={{
              boxShadow: `${isDark ? '0px 15px 31px 0px #000000' : '0px 15px 31px 0px #A4A4A466'}`,
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-10 w-fit mx-auto flex flex-row gap-3">
        <CTAGlowButton className="text-md w-1/2  whitespace-nowrap flex items-center justify-center">
          Seed Now
        </CTAGlowButton>

        <button
          className="inline-flex w-1/2 items-center justify-center  py-2 text-center text-md whitespace-nowrap border border-[#BFAAFB] text-[#303030] dark:text-white dark:border-[#BFAAFB] rounded-3xl"
          style={{
            boxShadow: `0px 0px 18px 0px #B082FF, 0px 0px 1px 0px #B082FF`,
          }}
        >
          Learn About dRC
        </button>
      </div>
    </>
  );
};

export default DRCMobile;
