import React from 'react';
import { BenefitsData } from './constant';

const BenefitsSection = () => {
  return (
    <section className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm p-8 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center flex flex-col items-center">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          Why It Matters
        </span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {BenefitsData.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px] group"
          >
            <div className="mb-4 flex items-center space-x-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
