import { ArrowRight } from 'lucide-react';

const SmartContractCTA = () => {
  return (
    <section className="text-center">
      <div className="bg-gradient-to-r from-[#0085a8]/40 to-[#ad1aaf]/40 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Experience Trustless Logic?
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Discover how our smart contracts can power your decentralized journey.
        </p>
        <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
          Explore Contracts <ArrowRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default SmartContractCTA;
