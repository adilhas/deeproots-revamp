import React from 'react';

const HackathonCulture = () => {
  return (
    <section className="text-center">
      <div className="bg-white dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Culture, Not Competition
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
          This isn&apos;t a race. It&apos;s a ritual of creativity where anyone
          can lead, and everyone can learn.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-xl border border-[#0085a8]/30 bg-[#0085a8]/5 dark:bg-[#0085a8]/10">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Build what you dream.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-[#ad1aaf]/30 bg-[#ad1aaf]/5 dark:bg-[#ad1aaf]/10">
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Ship what we believe in.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonCulture;
