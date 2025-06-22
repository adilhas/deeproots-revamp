import { Code, Users, Wallet, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BuildersSection = () => {
  const { t } = useTranslation('identity/contact_us');
  return (
    <div className="dark:bg-gray-800/50 bg-white/30 backdrop-blur-sm p-8 rounded-2xl border dark:border-gray-700 border-[#ad1aaf]/30 shadow-xl">
      <div className="flex items-center mb-6">
        <Code className="w-8 h-8 text-[#ad1aaf] mx-3" />
        <h2 className="text-3xl font-bold  dark:text-white text-primary-dark">
          {t('buildersSection.heading')}{' '}
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('buildersSection.description')}
      </p>
      <div className="flex flex-wrap gap-4">
        <div className="bg-gradient-to-r from-[#00c6ff]/10 to-[#00c6ff]/20 p-4 rounded-lg border border-[#00c6ff]/30">
          <Zap className="w-6 h-6 text-[#00c6ff] mb-2" />
          <h3 className="text-gray-900 dark:text-white font-medium">
            {t('buildersSection.cards.integration')}
          </h3>
        </div>
        <div className="bg-gradient-to-r from-[#ad1aaf]/10 to-[#ad1aaf]/20 p-4 rounded-lg border border-[#ad1aaf]/30">
          <Users className="w-6 h-6 text-[#ad1aaf] mb-2" />
          <h3 className="text-gray-900 dark:text-white font-medium">
            {t('buildersSection.cards.growth')}
          </h3>
        </div>
        <div className="bg-gradient-to-r from-[#00c6ff]/10 to-[#0085a8]/20 p-4 rounded-lg border border-[#0085a8]/30">
          <Wallet className="w-6 h-6 text-[#0085a8] mb-2" />
          <h3 className="text-gray-900 dark:text-white font-medium">
            {t('buildersSection.cards.wallet')}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BuildersSection;
