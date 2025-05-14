import Image from 'next/image';
import React from 'react';

const WhatIsDeepRoots = () => {
  return (
    <section className="mb-24 w-full max-w-7xl mx-auto">
      <div className="flex items-center mb-12">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0085a8]/20 to-[#ad1aaf]/20 flex items-center justify-center mr-6 shadow-lg">
          <span className="text-4xl">🌍</span>
        </div>
        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] via-[#0085a8] to-[#ad1aaf]">
          What is Deep Roots?
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="lg:w-1/2 flex flex-col">
          <div className="p-10 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-800/80 rounded-3xl border border-gray-700 hover:border-[#0085a8]/40 shadow-2xl transition-all duration-500 hover:shadow-[#0085a8]/10 h-full flex flex-col justify-center">
            <div className="space-y-8">
              <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                Deep Roots is{' '}
                <span className="text-[#0085a8] font-bold">
                  not just a blockchain
                </span>
                . It&apos;s a movement. A bold shift from centralized control to
                open collaboration. From silence to voice. From gatekeeping to
                possibility.
              </p>
              <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                We call it{' '}
                <span className="font-extrabold text-[#ad1aaf]">DeWorld</span> —
                the decentralized internet, rebuilt for people, powered by
                blockchain and AI.
              </p>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-700/50">
              <button className="group relative px-6 py-3 bg-transparent border border-gray-600 hover:border-[#0085a8] text-gray-300 rounded-full font-medium text-lg transition-all duration-300 flex items-center">
                <span>Discover More</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative group h-full min-h-[400px]">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0085a8]/40 via-[#ad1aaf]/40 to-[#0085a8]/40 blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/academy/about-deeproots.jpeg"
              alt="Deep Roots Team"
              width={1200}
              height={675}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-3xl font-bold text-white mb-3">
                Building the Future Together
              </h3>
              <p className="text-gray-300 text-lg max-w-md">
                The Deep Roots team pioneering decentralized solutions that
                empower communities worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDeepRoots;
