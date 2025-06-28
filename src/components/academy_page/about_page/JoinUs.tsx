'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const JoinUs = () => {
  const { t } = useTranslation('academy/about');

  return (
    <section className="text-center py-16 w-full max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
        {t('join_us.title')}
      </h2>
      <p className="text-xl dark:text-white mb-10 max-w-2xl mx-auto">
        {t('join_us.subtitle')}
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
        <Link
          href={'/connect/private-seed'}
          className="group relative px-8 py-4 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white rounded-full font-bold text-lg transition-all duration-300"
        >
          <span className="relative z-10">{t('join_us.cta')}</span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] opacity-0 group-hover:opacity-100 transition duration-300"></div>
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
