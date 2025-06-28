import { Code, EyeOff, Key, Lock, Shield } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

export const privateFeatureIcons = [
  <Code className="w-5 h-5" key="code" />,
  <Shield className="w-5 h-5" key="shield" />,
  <EyeOff className="w-5 h-5" key="eyeoff" />,
  <Key className="w-5 h-5" key="key" />,
];

const PrivateNetwork = () => {
  const { t } = useTranslation('lab/network');
  const rawFeatures = t('network.privateNetwork.features', {
    returnObjects: true,
  });
  const features: string[] = Array.isArray(rawFeatures)
    ? (rawFeatures as string[])
    : [];

  return (
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
          {t('network.privateNetwork.title')}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2 text-center">
          {t('network.privateNetwork.subtitle')}
        </p>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        {t('network.privateNetwork.description')}
      </p>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <Code className="w-6 h-6 text-[#ad1aaf] mr-2" />
        {t('network.privateNetwork.builtFor')}
      </h3>
      <ul className="space-y-3">
        {features.map((text, index) => (
          <li key={index} className="flex items-start">
            <div className="mr-3 mt-0.5 text-[#ad1aaf]">
              {privateFeatureIcons[index]}
            </div>
            <span className="text-gray-700 dark:text-gray-300">{text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg border border-purple-100 dark:border-purple-900/50 text-center">
        <p className="font-bold text-[#ad1aaf] dark:text-purple-300">
          {t('network.privateNetwork.footer')}
        </p>
      </div>
    </div>
  );
};

export default PrivateNetwork;
