'use client';

import { BookOpen } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const TermsWelcomeSection = () => {
  const { t } = useTranslation('identity/terms_of_service');

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <BookOpen className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('welcome.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('welcome.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsWelcomeSection;
