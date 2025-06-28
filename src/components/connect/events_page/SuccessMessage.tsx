import { CheckCircle } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const SuccessMessage = () => {
  const { t } = useTranslation("'connect/events'");
  return (
    <section className="bg-green-50 dark:bg-green-900/10 p-8 rounded-2xl border border-green-200 dark:border-green-900/30 text-center">
      <div className="flex flex-col items-center">
        <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {t('form.success-message.title')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          {t('form.success-message.description')}
        </p>
      </div>
    </section>
  );
};

export default SuccessMessage;
