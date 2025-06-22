import { Check, Lock } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const CookieCommitment = () => {
  const { t } = useTranslation('cookie_policy');

  const commitments = [
    t('commitment.essentialOnly'),
    t('commitment.consentRequired'),
    t('commitment.dataStays'),
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Lock className="w-8 h-8 text-[#0085a8] mx-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('commitment.title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {commitments.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <Check className="w-5 h-5 text-green-500 mx-3" />
            <p className="text-gray-700 dark:text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookieCommitment;
