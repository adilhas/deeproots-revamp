import { ArrowRight } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const GasFeesCTA = () => {
  const { t } = useTranslation('lab/gas_fees');
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/40 to-[#ad1aaf]/40 p-8 rounded-2xl border border-[#0085a8]/20 dark:border-[#0085a8]/30 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('cta.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
          {t('cta.button')} <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default GasFeesCTA;
