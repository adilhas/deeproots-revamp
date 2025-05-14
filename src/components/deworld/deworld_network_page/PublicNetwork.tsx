import React from 'react';
import { publicFeatures } from './data';
import { Globe, Wallet } from 'lucide-react';
import Image from 'next/image';

const PublicNetwork = () => {
  return (
    <div className="bg-blue-50/50 dark:bg-blue-900/10 p-8 rounded-2xl border border-blue-200 dark:border-blue-900/30 shadow-sm">
      <div className="flex flex-col items-center mb-8">
        <div className="mb-4 rounded-xl overflow-hidden border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20">
          <Image
            src="/deworld/public-network.png"
            alt="DeWorld Public Network"
            width={600}
            height={400}
            className="object-cover"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
          <Globe className="w-8 h-8 text-[#0085a8] mr-3" />
          Public Network
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-center">
          For users, creators, and open access
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        This is the main blockchain layer where people interact, create, and
        earn.
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Wallet className="w-6 h-6 text-[#0085a8] mr-2" />
        Built for:
      </h3>
      <ul className="space-y-3">
        {publicFeatures.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-0.5 text-[#0085a8]">{feature.icon}</div>
            <span className="text-gray-700 dark:text-gray-300">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900/50 text-center">
        <p className="font-bold text-[#0085a8] dark:text-blue-300">
          Open. Transparent. Made for the world.
        </p>
      </div>
    </div>
  );
};

export default PublicNetwork;
