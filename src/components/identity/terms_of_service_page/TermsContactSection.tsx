'use client';

import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const TermsContactSection = () => {
  const { t } = useTranslation('identity/terms_of_service');

  return (
    <section className="text-center bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        {t('contact.title')}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('contact.description')}
      </p>
      <div className="flex items-center justify-center">
        <Mail className="w-5 h-5 text-[#0085a8] mx-2" />
        <a
          href="mailto:hello@deeproots.earth"
          className="text-lg font-medium text-[#0085a8] hover:text-[#ad1aaf] dark:text-[#ad1aaf] dark:hover:text-[#0085a8] transition-colors"
        >
          hello@deeproots.earth
        </a>
      </div>
    </section>
  );
};

export default TermsContactSection;
