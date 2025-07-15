import { Settings } from 'lucide-react';
import { getDrcUtilities } from './constant';
import { useTranslation } from 'next-i18next';

const UtilitySection = () => {
  const { t } = useTranslation('academy/drc');
  const drcUtilities = getDrcUtilities(t);
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-blue-100 dark:bg-blue-500/10 p-3 rounded-lg mb-4 sm:mb-0 sm:mr-4">
          <Settings className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-1">
          {t('utilities.title')}
        </h2>
      </div>
      <div className="pl-0 sm:pl-14">
        {/* <p className="text-gray-700 dark:text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
          {t('utilities.title')}
        </p> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {drcUtilities.map((item) => (
            <div
              key={item.title}
              className="bg-gray-200 dark:bg-gray-700/30 hover:bg-gray-300 dark:hover:bg-gray-700/50 p-4 sm:p-5 rounded-xl border border-gray-300 dark:border-gray-600 transition-all duration-300"
            >
              <div className="flex items-center mb-2">
                <div className="mr-3 flex-shrink-0">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-400 ml-9 text-sm sm:text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
