import React from 'react';
import CountdownTimer from './CountDownTimer';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';
import { PiRocketLaunch } from 'react-icons/pi';

const HeroPrivateSeedAccess = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="relative scale-80 md:scale-100 w-[450px] h-[252px] translate-y-[-40px] overflow-visible">
      {/* Background eclipse */}
      <Image
        width={1000}
        height={1000}
        alt="eclipse"
        className="scale-150  absolute top-[-35%] lg:top-[70%] lg:-translate-y-1/2 lg:left-[-160px] lg:scale-x-[143%] z-0 pointer-events-none"
        src={`${isDark ? '/landing/eclipse-dark.png' : '/landing/eclipse-light-v2.png'}`}
        priority
      />

      {/* Card background */}
      <Image
        src={`${isDark ? '/landing/private-seed-card-bg-dark.png' : '/landing/private-seed-card-bg-light.png'}`}
        alt="private seed card"
        fill
        className="rounded-xl object-cover z-10"
        priority
      />

      {/* Text content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center  text-center max-w-[350px] mx-auto">
        <div className="translate-y-[25px]">
          <div className="flex justify-end mx-2 translate-y-[-6px]">
            <span className="bg-[#FFD5B71A] py-1 px-2 rounded-lg font-semibold text-xs">
              Limited Seat
            </span>
          </div>
          <div className="text-2xl font-semibold mb-1 font-orbitron dark:text-white text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Private Seed Access
          </div>
          <div className="text-xs px-3">
            Only 100 seats, Backed by 20+ Web3 products. Application close
            automatically when full.
          </div>
          <div className="flex flex-row scale-x-[108%] justify-between items-center mt-6 mx-2 bg-[#E9E9E9] text-black dark:bg-[#161616] dark:text-white px-2 py-1 rounded-xl translate-y-[-2px]">
            <div className="">
              <CountdownTimer />
            </div>
            <Link
              href="/connect/private-seed"
              className="btn flex flex-row font-semibold items-center gap-1 text-xl bg-gradient-to-r from-gradient-from to-gradient-to dark:from-[#696969] dark:to-[#696969] border-0"
            >
              Apply Now{' '}
              <PiRocketLaunch className="w-5 h-5 text-white dark:text-[#ff92fbe7]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPrivateSeedAccess;
