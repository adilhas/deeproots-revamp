import Image from 'next/image';
import React from 'react';

const RRHero = () => {
  return (
    <div className="w-full min-h-screen relative font-ed-garamond">
      <Image
        src="/lab/rootopia-bg.png"
        fill
        alt="rootopia reward syteme"
        className="object-cover z-0"
        priority
      />
      <div className="absolute bottom-0 md:bottom-[10%] left-1/2 -translate-x-1/2 z-10 w-full max-w-[250px]  md:max-w-[789px]">
        <div className="relative w-full aspect-[333/464] md:aspect-[789/288]">
          {/* Desktop frame */}
          <Image
            src="/lab/rootopia-bg-frame.svg"
            alt="bg-frame"
            fill
            className="object-contain hidden md:block"
            priority
          />

          {/* Mobile frame */}
          <Image
            src="/lab/rootopia-bg-frame-mob.svg"
            alt="bg-frame"
            fill
            className="object-contain block md:hidden"
            priority
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
            <h1 className="text-[#DD9D15] text-2xl md:text-5xl font-bold leading-tight">
              The First Full Web3 2D Animated GameFi Experience
            </h1>
            <p className="text-[#E9A151] text-sm sm:text-lg mt-2">
              Launching with $1M–$20M in Reward Pools. <br />
              The Largest GameFi Prize System on the Market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RRHero;
