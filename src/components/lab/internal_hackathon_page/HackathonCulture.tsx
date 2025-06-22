import React from 'react';
import { useTranslation } from 'next-i18next';

const HackathonCulture = () => {
  const { t } = useTranslation('connect/internal_hackathon');

  return (
    <section className="text-center">
      <div className="bg-white dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('culture.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          {t('culture.subtitle')}
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[#0085a8]/30 bg-[#0085a8]/5 dark:bg-[#0085a8]/10">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {t('culture.point1')}
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#ad1aaf]/30 bg-[#ad1aaf]/5 dark:bg-[#ad1aaf]/10">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {t('culture.point2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCulture;
