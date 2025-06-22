'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';

const OurStoryCTA = () => {
  const { t } = useTranslation('our_story');

  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {t('cta.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto whitespace-pre-line">
          {t('cta.description')}
        </p>
        <p className="text-3xl font-bold bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('cta.footer')}
        </p>
      </div>
    </section>
  );
};

export default OurStoryCTA;
