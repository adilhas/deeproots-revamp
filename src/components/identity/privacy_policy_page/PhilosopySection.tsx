'use client';

import { Key } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const PhilosopySection = () => {
  const { t } = useTranslation('identity/privacy_policy');

  return (
    <section className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md">
          <Key className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('philosophy.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('philosophy.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosopySection;
