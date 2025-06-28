import { Mail } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const GeneralContact = () => {
  const { t } = useTranslation('identity/contact_us');
  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-[#00c6ff] dark:border-gray-700 shadow-xl">
      <div className="flex items-center mb-6">
        <Mail className="w-8 h-8 text-[#00c6ff] mx-3" />
        <h2 className="text-xl md:text-3xl font-bold text-primary-dark dark:text-white">
          {t('generalContact.heading')}{' '}
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('generalContact.description')}
      </p>
      <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-[#00c6ff] transition-colors">
        <Mail className="w-6 h-6 text-[#ad1aaf] mx-3" />
        <a
          href="mailto:hello@deeproots.earth"
          className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#00c6ff] transition-colors"
        >
          {t('generalContact.email')}
        </a>
      </div>
    </div>
  );
};

export default GeneralContact;
