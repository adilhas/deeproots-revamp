import { ArrowRight } from 'lucide-react';
import React from 'react';

const DefiCTA = () => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/20 to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 shadow-xl">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Take Control of Your Finance
        </h2>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          Open earning opportunities to anyone, anywhere — no limits, no
          gatekeepers.
        </p>
        <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto group">
          Start With DeFi{' '}
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default DefiCTA;
