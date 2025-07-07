'use client';

import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const Hero = () => {
  const { t } = useTranslation('academy/about');

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 sm:px-6 pt-20 w-full">
      <div className="w-full mx-auto text-center">
        <div className="animate-fade-in mb-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
              {t('hero.title.part1')}
            </span>
            <div className="overflow-hidden h-24 md:h-32 my-2">
              <span className="block text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
                {t('hero.title.part2')}
              </span>
            </div>
          </h1>
          <p className="text-xl md:text-3xl text-black dark:text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t('hero.subtitle.line1')}
            <span className="block mt-1 text-[#ad1aaf] font-medium">
              {t('hero.subtitle.line2')}
            </span>
          </p>
        </div>

        <div className="mt-12 relative group inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-300"></div>
          <Link
            href={'/connect/private-seed'}
            className="relative px-8 py-4 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
