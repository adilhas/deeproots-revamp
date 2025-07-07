'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const WhatIsDeepRoots = () => {
  const { t } = useTranslation('academy/about');

  return (
    <section className="mb-24 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-2 md:flex-row items-center mb-12">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0085a8]/20 to-[#ad1aaf]/20 flex items-center justify-center mx-6 shadow-lg">
          <span className="text-4xl">🌍</span>
        </div>
        <h2 className=" text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] via-[#0085a8] to-[#ad1aaf]">
          {t('what_is_deep_roots.title')}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        <div className="lg:w-1/2 flex flex-col">
          <div className="p-10 bg-gradient-to-br from-gray-900/90 via-gray-900/70 to-gray-800/80 rounded-3xl border border-gray-700 hover:border-[#0085a8]/40 shadow-2xl transition-all duration-500 hover:shadow-[#0085a8]/10 h-full flex flex-col justify-center">
            <div className="space-y-8">
              <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                {t('what_is_deep_roots.p1.before')}{' '}
                <span className="text-[#0085a8] font-bold">
                  {t('what_is_deep_roots.p1.highlight')}
                </span>
                {t('what_is_deep_roots.p1.after')}
              </p>
              <p className="text-2xl leading-relaxed text-gray-300 font-medium">
                {t('what_is_deep_roots.p2.before')}{' '}
                <span className="font-extrabold text-[#ad1aaf]">
                  {t('what_is_deep_roots.p2.highlight')}
                </span>{' '}
                {t('what_is_deep_roots.p2.after')}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 relative group h-full min-h-[400px]">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#0085a8]/40 via-[#ad1aaf]/40 to-[#0085a8]/40 blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/academy/about-deeproots.jpeg"
              alt="DEEPROOTS Team"
              width={1200}
              height={675}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-3xl font-bold text-white mb-3">
                {t('what_is_deep_roots.imageTitle')}
              </h3>
              <p className="text-gray-300 text-lg max-w-md">
                {t('what_is_deep_roots.imageSubtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDeepRoots;
