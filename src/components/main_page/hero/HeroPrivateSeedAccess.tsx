import React from 'react';
import CountdownTimer from './CountDownTimer';
import Link from 'next/link';
import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

const HeroPrivateSeedAccess = () => {
  const { t } = useTranslation('landing_page');
  const { isDark } = useThemeContext();
  return (
    <div className="relative scale-80 md:scale-100 w-[450px] h-[252px] translate-y-[-40px] overflow-visible">
      {/* Background eclipse */}
      <Image
        width={1000}
        height={1000}
        alt="eclipse"
        className="scale-150  absolute top-[-35%] lg:top-[70%] lg:-translate-y-1/2 lg:left-[-150px] z-0 pointer-events-none"
        src={`${isDark ? '/landing/eclipse-dark.png' : '/landing/eclipse-light.png'}`}
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
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center max-w-[350px] mx-auto">
        <div className="translate-y-[25px]">
          <div className="flex justify-end mx-2 translate-y-[-10px]">
            <span className="bg-[#FFD5B71A] py-1 px-2 rounded-lg font-semibold text-xs">
              Limited Seat
            </span>
          </div>
          <div className="text-lg font-semibold font-orbitron dark:text-white text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Private Seed Access
          </div>
          <div className="text-xs">
            {/* Become one of 100 early visionaries shaping the future of
                      DeWorld */}
            {t('hero-section.private_access.description')}
          </div>
          <div className="flex flex-row scale-x-[108%] justify-between items-center mt-6 mx-2 bg-[#E9E9E9] text-black dark:bg-[#161616] dark:text-white px-2 py-1 rounded-xl translate-y-[-2px]">
            <div className="">
              <CountdownTimer />
            </div>
            <Link
              href="/connect/private-seed"
              className="btn text-sm btn-sm bg-gradient-to-r from-gradient-from to-gradient-to dark:from-[#696969] dark:to-[#696969] border-0"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPrivateSeedAccess;
