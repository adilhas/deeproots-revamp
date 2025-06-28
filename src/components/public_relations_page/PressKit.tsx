'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from 'lucide-react';

const PressKit = () => {
  const { t } = useTranslation('public_relations');

  const rawPressKitData = t('press_kit.items', { returnObjects: true });
  const pressKitData: string[] = Array.isArray(rawPressKitData)
    ? (rawPressKitData as string[])
    : [];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Box className="w-8 h-8 text-[#0085a8] mx-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          {t('press_kit.title')}
        </span>
      </h2>
      <div className="space-y-8">
        {pressKitData.map((title, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ✅ {i + 1}. {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressKit;
