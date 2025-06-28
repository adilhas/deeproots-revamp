'use client';

import { Shield, Check } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

interface IPrivacyItem {
  icon: ReactNode;
  key: string;
}

const PrivacyDoes = () => {
  const { t } = useTranslation('identity/privacy_policy');

  const doList: IPrivacyItem[] = [
    { icon: <Check className="w-5 h-5 text-green-500" />, key: 'do.store' },
    { icon: <Check className="w-5 h-5 text-green-500" />, key: 'do.encrypt' },
    { icon: <Check className="w-5 h-5 text-green-500" />, key: 'do.anonymous' },
    { icon: <Check className="w-5 h-5 text-green-500" />, key: 'do.manage' },
    { icon: <Check className="w-5 h-5 text-green-500" />, key: 'do.ai' },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="flex items-center">
          <Shield className="w-8 h-8 text-green-500 mx-3" />
          {t('do.title')}
        </span>
      </h2>

      <div className="space-y-4">
        {doList.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-green-50/50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30"
          >
            <div className="mx-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{t(item.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDoes;
