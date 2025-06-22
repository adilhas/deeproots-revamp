import React from 'react';
import { useTranslation } from 'next-i18next';

const COHIntro = () => {
  const { t } = useTranslation('code_of_honor');

  return (
    <section className="mb-20 text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
            {t('intro.title')}
          </span>
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {t('intro.description')}
        </p>
      </div>
    </section>
  );
};

export default COHIntro;
