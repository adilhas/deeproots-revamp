import React from 'react';
import TotalSupplyChart from './TotalSupplyChart';
import Image from 'next/image';
import TotalSupply from './TotalSupply';
import CTAGlowButton from '@/Shared/CTAGlowButton';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

const DRCDesktop = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const tokenFeatures: string[] = t('drc.features', {
    returnObjects: true,
  }) as string[];

  return (
    <div className="relative">
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
          {t('drc.heading')}
        </h2>
      </div>
      <div className="flex  flex-row items-center gap-2 w-full justify-between">
        <TotalSupplyChart />
        <div className="font-orbitron text-3xl text-center font-[500] max-w-sm">
          {t('drc.distributed')}
        </div>
        <Image
          src={`/landing/drc-token-frame-${isDark ? 'dark' : 'light'}.png`}
          alt="drc token"
          width={250}
          height={250}
        />
      </div>
      <div className="h-[580px] relative">
        <div className="flex items-center h-max justify-between relative z-10">
          <TotalSupply />

          <div className="text-center">
            <div className="text-3xl font-orbitron font-[500] max-w-xs mx-auto">
              {t('drc.built_for_use')}
            </div>
            <div className="mt-5">
              <CTAGlowButton className="text-xl mr-2">
                {/* {t('drc.cta_seed_now')} */}
                Seed Now
              </CTAGlowButton>
              <button className="px-3 border border-[#BFAAFB] text-[#303030] dark:text-white dark:border-white py-[8px] rounded-3xl ml-2">
                {t('drc.cta_learn_more')}
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center my-2 h-full">
            <ul className="space-y-[23px] h-full justify-start flex flex-col text-center text-2xl font-orbitron text-[#5C5F62] dark:text-[#94A3B8]">
              {tokenFeatures.map((item, index) => (
                <li
                  key={index}
                  className="py-[8px] px-8 rounded-2xl bg-[#EBEBEB] dark:bg-[#212121]"
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
