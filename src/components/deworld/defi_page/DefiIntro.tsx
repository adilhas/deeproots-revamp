import { Coins } from 'lucide-react';
import React from 'react';

const DefiIntro = () => {
  return (
    <section className="bg-white dark:bg-gray-800/90 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0 bg-[#0085a8]/10 p-4 rounded-xl w-16 h-16 flex items-center justify-center">
          <Coins className="w-8 h-8 text-[#0085a8]" />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            DeFi — Finance Without Borders
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              We make decentralized finance simple, open, and built for life —
              from staking to swapping, earning to seeding.
            </p>
            <p className="font-medium">
              No wallet tricks. No hidden fees. You see it. You own it. You
              control it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DefiIntro;
