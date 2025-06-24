'use client';

import { Lock, Shield, User, Key, Code } from 'lucide-react';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface IPrivacyItem {
  icon: ReactNode;
  key: string;
}

const PrivacyDataHandling = () => {
  const { t } = useTranslation('identity/privacy_policy');

  const dataPractices: IPrivacyItem[] = [
    {
      icon: <Lock className="w-5 h-5 text-[#0085a8]" />,
      key: 'data.encryption',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#0085a8]" />,
      key: 'data.metadata',
    },
    {
      icon: <User className="w-5 h-5 text-[#0085a8]" />,
      key: 'data.optionalLogin',
    },
    {
      icon: <Code className="w-5 h-5 text-[#0085a8]" />,
      key: 'data.openSource',
    },
    { icon: <Key className="w-5 h-5 text-[#0085a8]" />, key: 'data.did' },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        {t('data.title')}
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {dataPractices.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="mx-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{t(item.key)}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDataHandling;
