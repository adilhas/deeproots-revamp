import { ArrowRight, Calendar, Globe, Users, Zap } from 'lucide-react';
import Link from 'next/link';

const ContactUsEventsSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 shadow-xl">
      <div className="flex items-center mb-6">
        <Calendar className="w-8 h-8 text-[#ad1aaf] mr-3" />
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Want to Meet?
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Join our events and meetups to connect with the community in person or
        virtually.
      </p>
      <div className="space-y-4">
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Globe className="w-6 h-6 text-[#00c6ff] mr-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              Virtual Town Halls
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Monthly updates and AMAs
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Users className="w-6 h-6 text-[#00c6ff] mr-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              Local Meetups
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Global community gatherings
            </p>
          </div>
        </div>
        <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 group hover:border-[#ad1aaf] transition-colors">
          <Zap className="w-6 h-6 text-[#00c6ff] mr-3" />
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium">
              Builder Workshops
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Technical deep dives
            </p>
          </div>
        </div>
      </div>
      <Link
        href="/connect/events"
        className="mt-6 inline-flex items-center bg-gradient-to-r from-[#00c6ff] to-[#ad1aaf] text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Join Events & Meetups
        <ArrowRight className="ml-2 w-5 h-5" />
      </Link>
    </div>
  );
};

export default ContactUsEventsSection;
