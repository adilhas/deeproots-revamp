import Image from 'next/image';
import React from 'react';

const TermsHero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        We Are the Terms <br /> We Are the Trust.
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Simple, fair, and human terms for using Deep Roots.
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden bg-white dark:bg-gray-800">
          <Image
            src="/identity/terms-of-service.jpeg"
            alt="Terms of Service - Deep Roots"
            width={800}
            height={450}
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TermsHero;
