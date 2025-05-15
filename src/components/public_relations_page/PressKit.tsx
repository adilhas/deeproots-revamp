import React from 'react';
import { pressKitData } from './data';
import { Box } from 'lucide-react';

const PressKit = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
        <Box className="w-8 h-8 text-[#0085a8] mr-3" />
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          Press & Media Kit
        </span>
      </h2>
      <div className="space-y-8">
        {pressKitData.map((title, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-xl border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              ✅ {i + 1}. {title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PressKit;
