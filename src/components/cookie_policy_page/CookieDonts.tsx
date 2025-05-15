import { X } from 'lucide-react';
import React from 'react';
import { cookieDontData } from './data';

const CookieDonts = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
        <X className="w-8 h-8 text-red-500 mr-3" />
        <span className="bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text">
          What We Never Do
        </span>
      </h2>
      <div className="space-y-4">
        {cookieDontData.map((item, index) => (
          <div
            key={index}
            className="flex items-start bg-red-50/50 dark:bg-red-900/10 p-4 rounded-xl border border-red-200 dark:border-red-900/30"
          >
            <X className="w-5 h-5 text-red-500 mr-3 mt-0.5" />
            <p className="text-gray-700 dark:text-gray-300">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CookieDonts;
