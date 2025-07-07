import Image from 'next/image';
import React from 'react';

const TokenomicsHero = () => {
  return (
    <div className=" relative flex flex-col pb-16 lg:flex-row items-center gap-10 z-10">
      <div className="z-0">
        <div className="absolute bottom-[5%] md:top-[5%] right-[-20%] w-[200px] md:w-[500px] h-[500px] bg-[#EB9542] dark:bg-[#542C05] blur-3xl opacity-50 dark:opacity-30  pointer-events-none rounded-full z-0 " />
        <div className="absolute top-[30px] left-[-10%] w-[200px] md:w-[500px] h-[500px] bg-[#D8B4FE] dark:bg-[#581C87] blur-3xl opacity-50 dark:opacity-30  pointer-events-none rounded-full z-0 " />
        <div className="absolute top-[130px] left-[60%] -translate-x-1/2 w-[200px] md:w-[500px] h-[500px] bg-[#FDEF62] dark:bg-[#8E5F00] blur-3xl opacity-50 dark:opacity-30  pointer-events-none rounded-full z-0 " />
      </div>
      <div className="w-full lg:w-1/2 lg:text-left z-10">
        <h1 className="text-4xl sm:text-5xl leading-tight lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
          TOKENOMICS – <br /> <span className="font-orbitron">DEEPROOTS</span>{' '}
          (dRC)
        </h1>

        <p className="text-lg sm:text-2xl mt-4 font-semibold text-[#303030] dark:text-gray-300 mb-8 max-w-4xl mx-auto lg:mx-0">
          Built for Generations.
          <br /> Designed to Empower.
        </p>
      </div>
      <div className="w-full lg:w-1/2 z-10">
        <div className="rounded-4xl overflow-hidden bg-white dark:bg-gray-900">
          <Image
            src="/academy/tokenomics.png"
            alt="security bug bounty"
            width={589}
            height={589}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenomicsHero;
