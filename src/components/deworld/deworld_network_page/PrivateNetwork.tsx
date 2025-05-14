import { Code, Lock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { privateFeatures } from './data';

const PrivateNetwork = () => {
  return (
    <>
      <div className="bg-purple-50/50 dark:bg-purple-900/10 p-8 rounded-2xl border border-purple-200 dark:border-purple-900/30 shadow-sm">
        <div className="flex flex-col items-center mb-8">
          <div className="mb-4 rounded-xl overflow-hidden border-4 border-[#ad1aaf]/30 shadow-lg shadow-[#0085a8]/20">
            <Image
              src="/deworld/private-network.png"
              alt="DeWorld Private Network"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
            <Lock className="w-8 h-8 text-[#ad1aaf] mr-3" />
            Private Network
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-center">
            For teams, builders, and long-term protection
          </p>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          This is the infrastructure layer supporting innovation, compliance,
          and governance.
        </p>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
          <Code className="w-6 h-6 text-[#ad1aaf] mr-2" />
          Built for:
        </h3>
        <ul className="space-y-3">
          {privateFeatures.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-3 mt-0.5 text-[#ad1aaf]">{feature.icon}</div>
              <span className="text-gray-700 dark:text-gray-300">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-100 dark:border-purple-900/50 text-center">
          <p className="font-bold text-[#ad1aaf] dark:text-purple-300">
            Protected. Controlled. Built for longevity.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivateNetwork;
