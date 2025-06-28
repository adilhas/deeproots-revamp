import Image from 'next/image';
import React from 'react';

const RRHero = () => {
  return (
    <div className="w-full min-h-screen relative font-ed-garamond overflow-hidden">
      <Image
        src="/lab/rootopia-bg.png"
        fill
        alt="rootopia reward syteme"
        className="object-cover z-0"
        priority
      />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[140%] md:w-[80%] rounded-full h-[300px] md:h-[400px] bg-[#3B2104] blur-3xl opacity-100 md:opacity-70 pointer-events-none z-0" />

      <div className="absolute bottom-[10px] md:bottom-[20px] left-1/2 -translate-x-1/2 z-10 w-full max-w-[250px]  md:max-w-[789px]">
        <h1
          className="text-[#DD9D15] text-4xl md:text-5xl font-bold w-fit mx-auto mb-2 text-center"
          style={{
            textShadow: '0px 5px 5px  #0000008C',
          }}
        >
          Rootopia Reward System
        </h1>
        <div className="relative w-full aspect-[333/384] md:aspect-[789/240] ">
          {/* Desktop frame */}
          <Image
            src="/lab/rootopia-bg-frame.svg"
            alt="bg-frame"
            fill
            className="object-contain hidden md:block scale-x-110"
            priority
          />

          {/* Mobile frame */}
          <Image
            src="/lab/rootopia-bg-frame-mob.svg"
            alt="bg-frame"
            fill
            className="object-contain block md:hidden scale-x-150"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:px-5">
            <h1 className="text-[#DD9D15] text-2xl md:text-5xl font-bold leading-tight">
              The First Full Web3 2D <br className="hidden md:inline-block" />{' '}
              Animated GameFi Experience
            </h1>
            <p className="text-[#E9A151] text-md sm:text-lg mt-2">
              Launching with <span className="text-[#047C5E]">$1M–$20M</span> in
              Reward Pools. <br className="hidden md:inline-block" />
              The Largest GameFi Prize System on the Market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRHero;
