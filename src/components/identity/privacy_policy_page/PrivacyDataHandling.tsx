import React from 'react';
import { dataPractices } from './data';

const PrivacyDataHandling = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        How Your Data Is Handled
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {dataPractices.map((item, index) => (
          <div
            key={index}
            className="flex items-start p-4 rounded-lg bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <div className="mr-3 mt-0.5">{item.icon}</div>
            <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PrivacyDataHandling;
