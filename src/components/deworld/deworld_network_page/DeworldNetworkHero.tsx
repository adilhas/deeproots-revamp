import React from 'react';
import { useTranslation } from 'next-i18next';

const DeworldNetworkHero = () => {
  const { t } = useTranslation('lab/network');
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        {t('network.hero.title')}
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        {t('network.hero.description')}
      </p>
    </div>
  );
};

export default DeworldNetworkHero;
