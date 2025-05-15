import Image from 'next/image';
import React from 'react';

const CPHero = () => {
  return (
    <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6 leading-tight">
          Simple, Transparent, and Respectful
        </h1>
        <div className="flex justify-center mb-8">
          <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden max-w-2xl">
            <Image
              src="/cookie-policy.jpeg"
              alt="Cookie Policy - Deep Roots"
              width={800}
              height={450}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPHero;
