'use client';

import React from 'react';
import {
  Zap,
  Shield,
  Coins,
  User,
  Link,
  Gem,
  CircleDollarSign,
  Gauge,
  Sparkles,
  RefreshCw,
  Rocket,
  Leaf,
} from 'lucide-react';
import { useTranslation } from 'next-i18next';

interface UtilitySection {
  title: string;
  body?: string[];
  grid?: { title: string; desc: string }[];
  list?: string[];
  specialBox?: string;
}

const iconMap = [
  <Zap key="zap" className="w-8 h-8  text-[#0085a8]" />,
  <CircleDollarSign key="dollar" className="w-8 h-8  text-[#ad1aaf]" />,
  <RefreshCw key="refresh" className="w-8 h-8  text-[#0085a8]" />,
  <Leaf key="leaf" className="w-8 h-8  text-[#ad1aaf]" />,
  <Coins key={'coin'} className="w-8 h-8  text-[#0085a8]" />,
];

const iconBgMap = [
  'bg-[#0085a8]/10',
  'bg-[#ad1aaf]/10',
  'bg-[#0085a8]/10',
  'bg-[#ad1aaf]/10',
  'bg-[#0085a8]/10',
];

const GasFeesUtility = () => {
  const { t } = useTranslation('lab/gas_fees');
  const sections = t('gasFeesUtility.sections', {
    returnObjects: true,
  }) as UtilitySection[];

  return (
    <div className="space-y-12">
      {sections.map((section, i: number) => (
        <section
          key={i}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <div className={`${iconBgMap[i]} p-3 rounded-lg mx-4 my-2`}>
              {iconMap[i]}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {section.title}
            </h2>
          </div>

          <div>
            {section.body?.map((p: string, j: number) => (
              <p
                key={j}
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}

            {section.grid && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.grid.map((item, k: number) => (
                  <div
                    key={k}
                    className="p-5 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mx-3">
                        {
                          [
                            <Coins key="coins" />,
                            <Shield key="shield" />,
                            <Gauge key="gauge" />,
                            <User key="user" />,
                            <Sparkles key="sparkles" />,
                          ][k]
                        }
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 ml-9">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {section.list && (
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {section.list.map((text: string, idx: number) => (
                  <div key={idx} className="flex items-center">
                    <div className="mx-3 mt-0.5">
                      {
                        [
                          <div
                            key="amount"
                            className="text-xl font-bold text-[#0085a8]"
                          >
                            0.01
                          </div>,
                          <Link key="link" />,
                          <Gem key="gem" />,
                          <Zap key="zap" />,
                          <Rocket key="rocket" />,
                        ][idx]
                      }
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {section.specialBox && (
              <div className="bg-gradient-to-r from-[#0085a8]/20 to-[#ad1aaf]/20 p-6 rounded-xl mb-8 border border-[#0085a8]/20 dark:border-[#0085a8]/30">
                <p className="font-medium text-center text-lg text-purple-900 dark:text-purple-100">
                  {section.specialBox}
                </p>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default GasFeesUtility;
