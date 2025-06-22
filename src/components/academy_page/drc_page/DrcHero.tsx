import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DrcHero = () => {
  const { t } = useTranslation('academy/drc');
  return (
    <div className="text-center mb-16">
      {/* <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        The Pulse of Deep Roots
      </h1> */}
      <h1
        className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight"
        dangerouslySetInnerHTML={{ __html: t('hero.title') }}
      />
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        {t('hero.description')}
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-full border-4 border-blue-400/30 shadow-lg shadow-purple-500/20">
          <Image
            src="/academy/drc.png"
            alt="dRC - Deep Roots Currency"
            width={220}
            height={220}
            className="rounded-full"
          />
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
        {t('hero.button')}
      </button>
    </div>
  );
};

export default DrcHero;
