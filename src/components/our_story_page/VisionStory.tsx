import { Leaf } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'next-i18next';

const VisionStory = () => {
  const { t } = useTranslation('our_story');

  return (
    <section className="mb-24">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-6 rounded-2xl">
          <Leaf className="w-12 h-12 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
              {t('vision.title')}
            </span>
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            <p>{t('vision.p1')}</p>
            <p>{t('vision.p2')}</p>
            <p>{t('vision.p3')}</p>
            <p className="text-2xl font-bold text-[#0085a8] dark:text-[#00c6ff]">
              {t('vision.highlight')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionStory;
