import { Shield } from 'lucide-react';

const DefiPrinciples = () => {
  return (
    <section className="bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 dark:from-[#0085a8]/20 dark:to-[#ad1aaf]/20 p-8 rounded-2xl border border-[#0085a8]/30 dark:border-[#ad1aaf]/30 shadow-xl">
      <div className="flex flex-col md:flex-row gap-8 items-center w-fit mx-auto">
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 p-4 rounded-xl w-16 h-16 flex items-center justify-center shadow-md">
          <Shield className="w-8 h-8 text-[#0085a8] dark:text-[#ad1aaf]" />
        </div>
        <div>
          <h2 className="text-3xl text-center md:text-left font-bold text-gray-900 dark:text-white mb-4">
            DeFi in DeWorld
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300 grid md:grid-cols-2">
            <li className="flex items-start">
              <span className="bg-[#0085a8]/10 text-[#0085a8] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>
                <strong>Fast and human-centered</strong> financial tools
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#ad1aaf]/10 text-[#ad1aaf] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>
                <strong>Smart contract protection</strong> for security
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0085a8]/10 text-[#0085a8] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>
                <strong>Connected ecosystem</strong> with seamless integration
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#ad1aaf]/10 text-[#ad1aaf] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>
                <strong>Reward-driven</strong> not rent-driven models
              </span>
            </li>
            <li className="flex items-start">
              <span className="bg-[#0085a8]/10 text-[#0085a8] rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                ✓
              </span>
              <span>
                <strong>Built for everyone</strong> not just crypto insiders
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DefiPrinciples;
