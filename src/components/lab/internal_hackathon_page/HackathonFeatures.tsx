import React from 'react';
import { HackathonFeaturesData } from './data';

const HackathonFeatures = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-transparent bg-clip-text">
          Why It Exists
        </span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {HackathonFeaturesData.map((feature, index) => (
          <div
            key={index}
            className={`p-6 rounded-2xl border ${index % 2 === 0 ? 'border-[#0085a8]/30' : 'border-[#ad1aaf]/30'} bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className="flex items-start mb-3">
              <div className="mr-3 mt-0.5">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 ml-9">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HackathonFeatures;
