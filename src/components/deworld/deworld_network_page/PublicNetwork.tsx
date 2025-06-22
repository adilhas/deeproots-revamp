import React from 'react';
import { BarChart2, Globe, Rocket, Users, Wallet } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export const publicFeaturesIcons = [
  {
    icon: <Users className="w-5 h-5" />,
  },
  {
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
  },
  {
    icon: <Globe className="w-5 h-5" />,
  },
];
const PublicNetwork = () => {
  const { t } = useTranslation('lab/network');
  const publicFeatures = t('network.publicNetwork.features', {
    returnObjects: true,
  }) as string[];

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
          {t('network.publicNetwork.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-center">
          {t('network.publicNetwork.subtitle')}
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        {t('network.publicNetwork.description')}
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Wallet className="w-6 h-6 text-[#0085a8] mr-2" />
        {t('network.publicNetwork.builtFor')}
      </h3>
      <ul className="space-y-3">
        {publicFeatures.map((text: string, index: number) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-0.5 text-[#0085a8]">
              {publicFeaturesIcons[index].icon}
            </div>
            <span className="text-gray-700 dark:text-gray-300">{text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-blue-100 dark:border-blue-900/50 text-center">
        <p className="font-bold text-[#0085a8] dark:text-blue-300">
          {t('network.publicNetwork.footer')}
        </p>
      </div>
    </div>
  );
};

export default PublicNetwork;
