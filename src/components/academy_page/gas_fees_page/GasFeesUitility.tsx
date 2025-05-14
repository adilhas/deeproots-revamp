import React from 'react';
import { UtilityData } from './constant';

const GasFeesUtility = () => {
  return (
    <div className="space-y-12">
      {UtilityData.map((section, i) => (
        <section
          key={i}
          className="bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300"
        >
          <div className="flex flex-col sm:flex-row items-center mb-6">
            <div className={`${section.iconBg} p-3 rounded-lg mr-4 my-2`}>
              {section.icon}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              {section.title}
            </h2>
          </div>

          <div>
            {section.body?.map((p, j) => (
              <p
                key={j}
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4 last:mb-0"
              >
                {p}
              </p>
            ))}

            {section.grid && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.grid.map((item, k) => (
                  <div
                    key={k}
                    className="p-5 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-3">{item.icon}</div>
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
                {section.list.map((item, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="mr-3 mt-0.5">{item.icon}</div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {section.specialBox && (
              <div className="bg-gradient-to-r from-[#0085a8]/20 to-[#ad1aaf]/20 p-6 rounded-xl mb-8 border border-[#0085a8]/20 dark:border-[#0085a8]/30">
                <p className="font-medium text-center text-lg text-purple-900 dark:text-purple-100">
                  Every gas fee flows back into the ecosystem — powering
                  rewards, projects, and long-term sustainability
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
