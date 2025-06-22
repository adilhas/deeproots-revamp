import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const COHFinalSection = () => {
  const { t } = useTranslation('code_of_honor');

  return (
    <section className="text-center">
      <div className="bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {t('final_section.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('final_section.description')}
        </p>
        <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center">
          {t('final_section.button')} <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default COHFinalSection;
