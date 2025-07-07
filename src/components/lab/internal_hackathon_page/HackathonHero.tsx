import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const HackathonHero = () => {
  const { t } = useTranslation('connect/internal_hackathon');

  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        {t('hero.title1')} <br /> {t('hero.title2')}
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        {t('hero.subtitle')}
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden bg-white dark:bg-gray-800">
          <Image
            src="/lab/internal-hackathon.jpeg"
            alt="DEEPROOTS Internal Hackathon"
            width={800}
            height={450}
            className="object-cover"
            priority
          />
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto group">
        {t('hero.cta')}
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};

export default HackathonHero;
