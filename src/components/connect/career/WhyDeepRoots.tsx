import { useThemeContext } from '@/context/ThemeContext';
import { Globe, Rocket } from 'lucide-react';
import React from 'react';
import { PiCirclesFour, PiShootingStar } from 'react-icons/pi';

const features = [
  {
    feature: 'Work on the frontier of Web3, AI, and blockchain innovation',
    icon: <Rocket className="w-6 h-6 text-[#10B981] dark:text-[#34D399]" />,
  },
  {
    feature:
      'Help build and scale 20+ decentralized products across the DeWorld ecosystem',
    icon: (
      <PiCirclesFour className="w-6 h-6 text-[#F43F42] dark:text-[#FB7173]" />
    ),
  },
  {
    feature: 'Fully remote. Globally distributed. Purpose-aligned team',
    icon: <Globe className="w-6 h-6 text-[#F97316] dark:text-[#FB923C]" />,
  },
  {
    feature: 'Mission-first culture with generational vision and impact',
    icon: (
      <PiShootingStar className="w-6 h-6 text-[#3B82F6] dark:text-[#60A5FA]" />
    ),
  },
];

const WhyDeepRoots = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="py-16">
      <div
        className="p-8 bg-white rounded-3xl dark:bg-transparent"
        style={{
          boxShadow: isDark
            ? ''
            : `0px 4px 48px 0px #20232714,0px 4px 8px 0px #20232714`,
        }}
      >
        <h2 className="text-center leading-tight text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-bold text-4xl lg:text-5xl w-fit mx-auto">
          Why <span className="font-orbitron">DEEPROOTS</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center my-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col text-sm justify-start items-center gap-4 p-8 rounded-3xl border border-[#D4D4D4] dark:border-[#737373]"
            >
              {feature.icon}
              <p className=" font-semibold text-[#4B5563] dark:text-[#E2E8F0]">
                {feature.feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyDeepRoots;
