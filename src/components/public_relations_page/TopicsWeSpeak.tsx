'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Brain,
  ShieldCheck,
  Globe,
  Coins,
  Lock,
  Gamepad2,
  Lightbulb,
} from 'lucide-react';

const TopicsWeSpeak = () => {
  const { t } = useTranslation('public_relations');

  const topicsWeSpeakData = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0085a8]" />,
      text: t('topics.items.decentralization'),
    },
    {
      icon: <Globe className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('topics.items.ai_web3'),
    },
    {
      icon: <Coins className="w-6 h-6 text-[#0085a8]" />,
      text: t('topics.items.financial'),
    },
    {
      icon: <Lock className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('topics.items.privacy'),
    },
    {
      icon: <Gamepad2 className="w-6 h-6 text-[#0085a8]" />,
      text: t('topics.items.gamefi'),
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('topics.items.longterm'),
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Brain className="w-8 h-8 text-[#ad1aaf] mx-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('topics.title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {topicsWeSpeakData.map((item, i) => (
          <div
            key={i}
            className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="mx-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopicsWeSpeak;
