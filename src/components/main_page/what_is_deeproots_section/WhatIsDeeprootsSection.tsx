import { getDeeprootsCards } from '@/constants/whatIsDeeprootsSection';
import Image from 'next/image';
import React from 'react';
import DeepRootsCard from './FeatureCard';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import Link from 'next/link';

const WhatIsDeeprootsSection = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const deeprootsCardsData = getDeeprootsCards(t);
  const { lang } = useLocaleDirection();
  const isArabic = lang === 'ar';
  return (
    <div className="py-16 w-full max-w-[1200px] mx-auto dark:bg-[#161616] bg-[#e8e8e9] ">
      <h2
        className="w-fit font-[600] text-center rounded-xl p-3 mx-auto text-2xl bg-[#212121] md:text-3xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from-light to-gradient-to-light dark:from-gradient-from dark:to-gradient-to bg-clip-text"
        style={{
          boxShadow: `0px 6px 20px 0px ${isDark ? '#00000045' : '#0000001F'}`,
        }}
      >
        {t('what_is_deeproots_section.title')}
      </h2>

      <div
        className={`relative flex flex-col lg:flex-row items-center justify-center gap-8 mt-8 w-fit mx-auto ${
          isArabic ? 'lg:-translate-x-[60px]' : ''
        }`}
      >
        <div className="text-4xl font-orbitron text-[#4B5563] dark:text-[#F8FAFC] whitespace-nowrap">
          {t('what_is_deeproots_section.from_world')}
        </div>

        <div className="relative shrink-0">
          <Image
            src="/landing/logo-big.png"
            priority
            alt="dRC"
            width={150}
            height={150}
          />
        </div>

        <div className="text-4xl font-orbitron font-[600] text-transparent whitespace-nowrap bg-gradient-to-r from-gradient-from-light to-gradient-to-light dark:from-gradient-from dark:to-gradient-to bg-clip-text">
          {t('what_is_deeproots_section.to_deworld')}
        </div>
      </div>
      <div className="mt-2 max-w-[1200px] w-full hidden lg:block mx-auto px-4 my-16">
        <div className=" w-full hidden lg:inline-block ">
          <div className="w-[80%] mx-auto translate-x-5">
            <Image
              src="/landing/branches.png"
              alt="branches"
              layout="responsive"
              width={900}
              height={96}
              className="w-[70%] h-auto"
            />
          </div>
          <div className="w-full grid grid-cols-4  gap-6 flex-wrap">
            {deeprootsCardsData.map((card, index) => (
              <DeepRootsCard
                key={index}
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col lg:hidden items-center justify-center gap-6 mt-12 flex-wrap">
        {deeprootsCardsData.map((card, index) => (
          <DeepRootsCard
            key={index}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
      <div className="w-full mt-8">
        <div className="text-center text-lg  md:text-3xl my-4 text-[#4B5563] dark:text-white">
          {/* {t('what_is_deeproots_section.subtitle')} */}A New Foundation for
          the{' '}
          <span className="text-transparent whitespace-nowrap bg-gradient-to-r font-semibold from-gradient-from to-gradient-to bg-clip-text">
            Decentralized
          </span>{' '}
          World
        </div>
        <Link
          href={'/academy/about'}
          className="block mx-auto cursor-pointer w-fit px-6 font-orbitron py-3 bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] text-center font-bold hover:bg-gradient-to-l transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl text-lg"
        >
          {t('what_is_deeproots_section.button')}
        </Link>
      </div>
    </div>
  );
};

export default WhatIsDeeprootsSection;
