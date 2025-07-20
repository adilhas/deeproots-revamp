'use client';

import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

const TokenomicsUtility = () => {
  const { isDark } = useThemeContext();

  const tokenomicsUitility = [
    { title: 'Seed & Earn', description: '12% annual rewards on chain' },
    { title: 'Refer & Grow', description: 'Multi-tier referral rewards' },
    { title: 'Play & Win', description: 'GameFi prize pools (RootOpia)' },
    { title: 'Vote & Govern', description: 'On-chain governance rights' },
    {
      title: 'Access & Unlock',
      description: 'Private seed, exclusive rewards',
    },
    {
      title: 'Fuel the Ecosystem',
      description: 'Used across 20+ Web3 products',
    },
  ];

  return (
    <section className="pb-16">
      <div className="relative mx-auto">
        {/* Desktop Background */}
        <Image
          priority
          height={869}
          width={1201}
          src={
            isDark
              ? '/connect/access-benefit-bg-dark.png'
              : '/connect/access-benefit-bg.png'
          }
          alt="background"
          className="md:inline-block hidden"
        />

        {/* Mobile Background */}
        <Image
          priority
          height={370}
          width={1469}
          src={
            isDark
              ? '/academy/utility-bg-mob-dark.png'
              : '/academy/utility-bg-mob-light.png'
          }
          alt="background-mobile"
          className="inline-block md:hidden w-full mx-auto scale-y-110 sm:scale-y-100"
        />
        <div className="absolute top-[20%] md:top-[38%] md:left-[50px] left-1/2 -translate-x-1/2 w-full md:-translate-0">
          <div className="w-full md:w-fit text-center md:text-left z-10">
            <h1 className=" text-3xl md:text-2xl lg:text-4xl leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] md:text-nowrap w-fit mx-auto">
              REAL UTILITY
            </h1>

            <p className="text-lg md:text-sm lg:text-lg font-semibold text-[#303030] dark:text-gray-300 md:mx-0 w-dit mx-auto">
              NOT JUST A TOKEN
            </p>
          </div>
        </div>
        <div className="absolute top-[25%] md:top-[55%] w-full  gap-0 md:gap-10">
          <div className="grid grid-cols-1 w-fit md:grid-cols-3 gap-4 md:gap-0 md:flex-row items-center md:w-[85%] justify-between mx-auto">
            {tokenomicsUitility.map((item, index) => (
              <div key={index} className={`relative }`}>
                <Image
                  priority
                  height={311}
                  width={350}
                  src={
                    isDark
                      ? '/connect/access-benefit-card-dark-v2.png'
                      : '/connect/access-benefit-card.png-v2'
                  }
                  alt="card background"
                  className="scale-x-90 sm:scale-x-100 "
                />

                <div className="absolute top-[50%] text-center left-1/2 -translate-x-1/2 text-md md:text-xs lg:text-lg w-[87%]">
                  <div className="font-semibold">{item.title}</div>
                  <div>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsUtility;
