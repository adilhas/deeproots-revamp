import { deeprootsCards } from '@/constants/whatIsDeeprootsSection';
import Image from 'next/image';
import React from 'react';
import DeepRootsCard from './FeatureCard';
import { useThemeContext } from '@/context/ThemeContext';

const WhatIsDeeprootsSection = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="py-16 w-full max-w-[1200px] mx-auto dark:bg-[#161616] bg-[#e8e8e9]">
      {/* Heading */}
      <h2
        className="w-fit font-[600] text-center rounded-md p-3 mx-auto text-2xl bg-[#212121] md:text-3xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from-light to-gradient-to-light dark:from-gradient-from dark:to-gradient-to bg-clip-text"
        style={{ boxShadow: `0px 6px 20px 0px #00000045` }}
      >
        What is Deep Roots?
      </h2>

      {/* From - Logo - To */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 mt-8 w-full">
        <div className="text-4xl font-orbitron text-[#4B5563] dark:text-[#F8FAFC] whitespace-nowrap">
          From World
        </div>

        {/* Logo with branches */}
        <div className="relative shrink-0">
          <Image
            src="/landing/logo-big.png"
            alt="dRC"
            width={150}
            height={150}
          />
        </div>

        <div className="text-4xl font-orbitron font-[600] text-transparent whitespace-nowrap bg-gradient-to-r from-gradient-from-light to-gradient-to-light dark:from-gradient-from dark:to-gradient-to bg-clip-text">
          To DeWorld
        </div>
      </div>
      <div className="mt-2 max-w-[1200px] w-full hidden lg:block mx-auto px-4">
        <Image
          src={
            isDark
              ? '/landing/what-is-deeproots-v2.png'
              : '/landing/what-is-deeproots-light.png'
          }
          alt="Branches"
          width={1000}
          height={100}
          className="w-full h-auto"
          priority
        />
      </div>

      <div className="w-full flex flex-col lg:hidden items-center justify-center gap-6 mt-12 flex-wrap">
        {deeprootsCards.map((card, index) => (
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
          A New Foundation for the <br className="block md:hidden" />{' '}
          <span className="text-transparent font-[600] bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Decentralized
          </span>{' '}
          World
        </div>
        <button className="block mx-auto cursor-pointer w-fit px-6 font-orbitron py-3 bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] text-center font-bold hover:bg-gradient-to-l transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl text-lg">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhatIsDeeprootsSection;
