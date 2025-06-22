import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const COHHero = () => {
  const { t } = useTranslation('code_of_honor');

  return (
    <div className="text-center py-16 px-4 max-w-4xl mx-auto">
      <div className="my-9">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          <span className="text-[#ad1aaf]">{t('hero.line1')}</span>
          <br />
          <span className="text-[#0085a8]">{t('hero.line2')}</span>
        </h1>
        <div className="bg-white/50 dark:bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-gray-200 dark:border-white/20 inline-block max-w-2xl">
          <p className="text-xl text-gray-800 dark:text-gray-100">
            {t('hero.description')}
          </p>
        </div>
      </div>
      <Image
        src="/code-of-honor.jpeg"
        alt={t('hero.imageAlt')}
        width={600}
        height={300}
        className="rounded-2xl mx-auto mb-8 shadow-lg"
        priority
      />
    </div>
  );
};

export default COHHero;
