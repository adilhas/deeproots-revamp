import { Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatIsDrc = () => {
  const { t } = useTranslation('academy/drc');

  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-purple-100 dark:bg-purple-500/10 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
          {t('whatIsDrc.title')}
        </h2>
      </div>
      <div className="pl-0 sm:pl-14">
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg leading-relaxed">
          {t('whatIsDrc.description')}
        </p>
        <div className="bg-gray-200 dark:bg-gray-700/50 p-4 sm:p-5 rounded-xl border-l-4 border-purple-400">
          <p className="text-purple-700 dark:text-purple-400 font-medium text-base sm:text-lg">
            {t('whatIsDrc.quote')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDrc;
