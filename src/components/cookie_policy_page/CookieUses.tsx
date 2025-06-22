import { Cookie, Lock, Settings, Shield } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const CookieUses = () => {
  const { t } = useTranslation('cookie_policy');

  const cookieUses = [
    {
      icon: <Settings className="w-6 h-6 text-[#0085a8]" />,
      text: t('uses.preference'),
    },
    {
      icon: <Lock className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('uses.session'),
    },
    {
      icon: <Shield className="w-6 h-6 text-[#0085a8]" />,
      text: t('uses.performance'),
    },
    {
      icon: <Cookie className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('uses.navigation'),
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
        <Cookie className="w-8 h-8 text-[#0085a8] mr-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('uses.title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {cookieUses.map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="mr-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookieUses;
