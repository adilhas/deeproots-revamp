import { Calendar, Mail } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ContactUsCTA = () => {
  const { t } = useTranslation('identity/contact_us');
  return (
    <div className="mt-16 text-center">
      <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-[#ad1aaf] dark:border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-primary-dark dark:text-white mb-4">
          {t('cta.heading')}
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {t('cta.description')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@deeproots.earth"
            className="flex items-center  bg-gray-400 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-[#ad1aaf] px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 mx-2 text-[#00c6ff]" />
            <span className="text-white">{t('cta.email')}</span>
          </a>
          <Link
            href="/connect/events"
            className="flex items-center bg-gray-400 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-[#00c6ff] px-6 py-3 rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5 mx-2 text-[#ad1aaf]" />
            <span className="text-white">{t('cta.events')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCTA;
