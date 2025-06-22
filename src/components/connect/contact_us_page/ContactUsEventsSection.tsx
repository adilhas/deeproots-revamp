import { ArrowRight, Calendar, Globe, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const ContactUsEventsSection = () => {
  const { t } = useTranslation('identity/contact_us');
  return (
    <div className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 shadow-xl">
      <div className="flex items-center mb-6">
        <Calendar className="w-8 h-8 text-[#ad1aaf] mx-3" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t('contactUsEvents.heading')}
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {t('contactUsEvents.description')}
      </p>
      <div className="space-y-4">
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Globe className="w-6 h-6 text-[#00c6ff] mx-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              {t('contactUsEvents.events.virtual.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('contactUsEvents.events.virtual.desc')}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Users className="w-6 h-6 text-[#00c6ff] mx-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              {t('contactUsEvents.events.meetups.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('contactUsEvents.events.meetups.desc')}
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Zap className="w-6 h-6 text-[#00c6ff] mx-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              {t('contactUsEvents.events.workshops.title')}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {t('contactUsEvents.events.workshops.desc')}
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/connect/events"
        className="mt-6 inline-flex items-center bg-gradient-to-r from-[#00c6ff] to-[#ad1aaf] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {t('contactUsEvents.cta')} <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default ContactUsEventsSection;
