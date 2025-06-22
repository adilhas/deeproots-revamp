import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SmartContractOverview = () => {
  const { t } = useTranslation('lab/smart_contract');
  return (
    <section className="bg-gray-50 dark:bg-gray-900 backdrop-blur-sm p-6 sm:p-10 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-[#0085a8]/10 dark:bg-[#0085a8]/20 p-3 rounded-lg mr-4 self-center mb-2 sm:mb-0">
          <Code className="w-8 h-8 text-[#0085a8]" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
          {t('overview.title')}
        </h2>
      </div>
      <div className="pl-0 md:pl-14">
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
          {t('overview.paragraph1')}
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {t('overview.paragraph2')}
        </p>
      </div>
    </section>
  );
};

export default SmartContractOverview;
