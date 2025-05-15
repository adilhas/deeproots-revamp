import { Cookie } from 'lucide-react';
import React from 'react';
import { cookieUses } from './data';

const CookieUses = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
        <Cookie className="w-8 h-8 text-[#0085a8] mr-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          What We Use Cookies For
        </span>
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {cookieUses.map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-white dark:bg-gray-800/50 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <div className="mr-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookieUses;
