import React from 'react';
import { principles } from './data';

const COHPrinciple = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          What Guides Us
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {principles.map((principle, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {principle.title}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 ml-12">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default COHPrinciple;
