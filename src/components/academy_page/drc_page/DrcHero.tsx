import Image from 'next/image';
import React from 'react';

const DrcHero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        The Pulse of <span className="whitespace-nowrap">Deep Roots</span>
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        dRC isn&apos;t just currency—it&apos;s the lifeblood of a decentralized
        economy designed to last generations.
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-full border-4 border-blue-400/30 shadow-lg shadow-purple-500/20">
          <Image
            src="/academy/drc.png"
            alt="dRC - Deep Roots Currency"
            width={220}
            height={220}
            className="rounded-full"
          />
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
        Get Started with dRC
      </button>
    </div>
  );
};

export default DrcHero;
