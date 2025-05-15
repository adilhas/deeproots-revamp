import { Gem } from 'lucide-react';
import Image from 'next/image';

const TokenomicsSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm px-4 sm:px-6 py-8 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-xl">
      <div className="flex flex-col sm:flex-row items-start mb-6">
        <div className="bg-yellow-100 dark:bg-yellow-500/10 p-3 rounded-lg mr-0 sm:mr-4 mb-4 sm:mb-0">
          <Gem className="w-8 h-8 text-yellow-600 dark:text-yellow-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Built for Real Use – Not Just Trading
        </h2>
      </div>

      <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-6">
        {/* Token Specifications */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Token Specifications:
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            {[
              'Total Supply: 100 million',
              'Distribution Period: 41 years',
              'Initial Mint: 40%',
              'Rewards Pool: 60% controlled emission',
              'Deflationary: No inflation minting',
              'Ecosystem Integration: 15+ products',
            ].map((text, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Sustainable Design Visual */}
        <div className="bg-gray-200 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-300 dark:border-gray-600 flex items-center justify-center">
          <div className="text-center">
            <div className="rounded-full overflow-hidden ">
              <Image
                src={'/academy/drc-coin.png'}
                width={200}
                height={200}
                alt="drc-coin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
