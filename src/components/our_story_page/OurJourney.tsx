import useLocaleDirection from '@/hooks/useLocaleDirection';
import { Globe } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const OurJourney = () => {
  const { t } = useTranslation('our_story');
  const { isArabic } = useLocaleDirection();

  return (
    <section className="mb-24">
      <div
        className={`flex flex-col gap-12 items-center ${isArabic ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      >
        <div className="md:order-2 flex-shrink-0 bg-[#ad1aaf]/10 p-6 rounded-2xl">
          <Globe className="w-12 h-12 text-[#ad1aaf]" />
        </div>
        <div className="md:order-1 flex-1">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-transparent bg-clip-text">
              {t('journey.title')}
            </span>
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
            <p>{t('journey.p1')}</p>
            <p>{t('journey.p2')}</p>
            <p>{t('journey.p3')}</p>
            <p className="font-bold">{t('journey.highlight')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
