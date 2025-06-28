import { useTranslation } from 'next-i18next';

const DeworldNetworkCTA = () => {
  const { t } = useTranslation('lab/network');
  return (
    <div className="mt-16 text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('network.cta.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('network.cta.paragraph')}
        </p>
      </div>
    </div>
  );
};

export default DeworldNetworkCTA;
