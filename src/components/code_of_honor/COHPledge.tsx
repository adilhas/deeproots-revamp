import React from 'react';
import { pledges } from './data';

const COHPledge = () => {
  return (
    <section className="mb-20 bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          Our Pledge
        </span>
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pledges.map((pledge, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800/70 p-4 rounded-xl border border-gray-200 dark:border-gray-700 flex items-center"
          >
            <div className="mr-3">{pledge.icon}</div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              {pledge.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
          &quot;Honor is not branding. It&apos;s behavior.&quot;
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          It&apos;s how we treat each other — and what we&apos;re willing to
          defend.
        </p>
      </div>
    </section>
  );
};

export default COHPledge;
