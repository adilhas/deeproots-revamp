'use client';

import { Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PrivacyCommitment = () => {
  const { t } = useTranslation('identity/privacy_policy');

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Lock className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {t('commitment.title')}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t('commitment.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyCommitment;
