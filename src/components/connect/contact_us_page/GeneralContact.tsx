import { Mail } from 'lucide-react';

const GeneralContact = () => {
  return (
    <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-[#00c6ff] dark:border-gray-700 shadow-xl">
      <div className="flex items-center mb-6">
        <Mail className="w-8 h-8 text-[#00c6ff] mr-3" />
        <h2 className="text-3xl font-bold text-primary-dark dark:text-white">
          Contact Us Anytime
        </h2>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        For support, partnerships, media, or general inquiries:
      </p>
      <div className="flex items-center bg-gray-200 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-[#00c6ff] transition-colors">
        <Mail className="w-6 h-6 text-[#ad1aaf] mr-3" />
        <a
          href="mailto:hello@deeproots.earth"
          className="text-lg font-medium text-gray-900 dark:text-white hover:text-[#00c6ff] transition-colors"
        >
          hello@deeproots.earth
        </a>
      </div>
    </div>
  );
};

export default GeneralContact;
