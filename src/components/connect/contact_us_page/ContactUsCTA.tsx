import { Calendar, Mail } from 'lucide-react';
import Link from 'next/link';

const ContactUsCTA = () => {
  return (
    <div className="mt-16 text-center">
      <div className="bg-white/30 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-[#ad1aaf] dark:border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-primary-dark dark:text-white mb-4">
          This Movement Grows Through Conversation
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Reach out anytime — we&apos;re here to connect and collaborate.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@deeproots.earth"
            className="flex items-center  bg-gray-400 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-[#ad1aaf] px-6 py-3 rounded-lg transition-colors"
          >
            <Mail className="w-5 h-5 mr-2 text-[#00c6ff]" />
            <span className="text-white">Email Us</span>
          </a>
          <Link
            href="/connect/events"
            className="flex items-center bg-gray-400 dark:bg-gray-700 hover:dark:bg-gray-600 hover:bg-[#00c6ff] px-6 py-3 rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5 mr-2 text-[#ad1aaf]" />
            <span className="text-white">Join Events</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCTA;
