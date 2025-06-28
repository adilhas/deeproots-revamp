'use client';

import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  Megaphone,
  MessageCircle,
  FileText,
  Download,
  Calendar,
  BookOpen,
} from 'lucide-react';

const PROffers = () => {
  const { t } = useTranslation('public_relations');

  const prOffersData = [
    {
      icon: <MessageCircle className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('offers.items.official'),
    },
    {
      icon: <FileText className="w-6 h-6 text-[#0085a8]" />,
      text: t('offers.items.interviews'),
    },
    {
      icon: <Download className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('offers.items.mediaKits'),
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#0085a8]" />,
      text: t('offers.items.events'),
    },
    {
      icon: <BookOpen className="w-6 h-6 text-[#ad1aaf]" />,
      text: t('offers.items.background'),
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Megaphone className="w-8 h-8 text-[#0085a8] mx-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('offers.title')}
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {prOffersData.map((item, i) => (
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

export default PROffers;
