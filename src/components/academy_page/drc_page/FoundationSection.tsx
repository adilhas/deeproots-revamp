import { CheckCircle, Landmark } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const FoundationSection = () => {
  const { t } = useTranslation('academy/drc');

  const rawBenefits = t('foundation.benefits', { returnObjects: true });
  const benefits: string[] = Array.isArray(rawBenefits)
    ? (rawBenefits as string[])
    : [];

  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <Landmark className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
          {t('foundation.title')}
        </h2>
      </div>

      <div className="pl-0 sm:pl-14">
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
          {t('foundation.description')}
        </p>

        <div className="bg-purple-100 dark:bg-gradient-to-r dark:from-purple-900/40 dark:to-blue-900/40 p-5 sm:p-6 rounded-xl mb-8 border border-purple-200 dark:border-purple-500/30">
          <p className="text-neutral-800 dark:text-white font-medium text-center text-base sm:text-lg">
            {t('foundation.highlight')}
          </p>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
          {t('foundation.benefitsTitle')}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {benefits.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="bg-green-100 dark:bg-green-500/10 p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-gray-200 dark:bg-gray-700/50 p-4 sm:p-5 rounded-xl border-l-4 border-purple-500">
          <p className="text-gray-900 dark:text-white font-medium text-base sm:text-lg">
            {t('foundation.finalNote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
