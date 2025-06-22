import React from 'react';
import { Lock, Users, Zap, Code } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const OurBeliefs = () => {
  const { t } = useTranslation('our_story');

  const ourBelief = [
    {
      icon: <Lock className="w-8 h-8 text-[#0085a8]" />,
      text: t('beliefs.privacy'),
    },
    {
      icon: <Users className="w-8 h-8 text-[#ad1aaf]" />,
      text: t('beliefs.ownership'),
    },
    {
      icon: <Zap className="w-8 h-8 text-[#0085a8]" />,
      text: t('beliefs.simplicity'),
    },
    {
      icon: <Users className="w-8 h-8 text-[#ad1aaf]" />,
      text: t('beliefs.community'),
    },
    {
      icon: <Code className="w-8 h-8 text-[#0085a8]" />,
      text: t('beliefs.working_web3'),
    },
  ];

  return (
    <section className="mb-24 bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
      <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('beliefs.title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
        {ourBelief.map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700 flex items-start"
          >
            <div className="mx-4 mt-0.5">{item.icon}</div>
            <p className="text-xl font-medium text-gray-900 dark:text-white">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBeliefs;
