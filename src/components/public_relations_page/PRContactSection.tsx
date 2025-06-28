'use client';

import { Mail } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const PRContactSection = () => {
  const { t } = useTranslation('public_relations');

  return (
    <section className="text-center bg-white dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center justify-center">
        <Mail className="w-6 h-6 text-[#ad1aaf] mr-3" />
        {t('contact.title')}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('contact.description')}
      </p>
      <a
        href="mailto:hello@deeproots.earth"
        className="inline-flex items-center text-lg font-medium text-[#0085a8] dark:text-[#ad1aaf] hover:underline"
      >
        <Mail className="w-5 h-5 mr-2" />
        hello@deeproots.earth
      </a>
    </section>
  );
};

export default PRContactSection;
