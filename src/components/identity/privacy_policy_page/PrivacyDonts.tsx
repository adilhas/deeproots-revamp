'use client';

import { EyeOff, X } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { ReactNode } from 'react';

interface IPrivacyItem {
  icon: ReactNode;
  key: string;
}

const PrivacyDonts = () => {
  const { t } = useTranslation('identity/privacy_policy');

  const dontDoList: IPrivacyItem[] = [
    { icon: <X className="w-5 h-5 text-red-500" />, key: 'dont.track' },
    { icon: <X className="w-5 h-5 text-red-500" />, key: 'dont.sell' },
    { icon: <X className="w-5 h-5 text-red-500" />, key: 'dont.store' },
    { icon: <X className="w-5 h-5 text-red-500" />, key: 'dont.thirdParty' },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        <span className="flex items-center">
          <EyeOff className="w-8 h-8 text-red-500 mx-3" />
          {t('dont.title')}
        </span>
      </h2>

      <div className="space-y-4">
        {dontDoList.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-red-50/50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30"
          >
            <div className="mx-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{t(item.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDonts;
