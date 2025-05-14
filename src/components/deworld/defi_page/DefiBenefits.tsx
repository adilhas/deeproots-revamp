import React from 'react';
import { DeFiBenefitData } from './data';

const DefiBenefits = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-2xl">
      {/* Abstract decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-[#0085a8]/20 to-[#ad1aaf]/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#ad1aaf]/20 to-[#0085a8]/10 blur-3xl" />

      <div className="relative z-10">
        {/* Heading with decorative elements */}
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center">
              <span className="bg-gradient-to-r from-[#0085a8] via-[#6b4baa] to-[#ad1aaf] text-transparent bg-clip-text">
                Why It Matters
              </span>
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] rounded-full mx-auto mt-3" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl text-center text-lg">
            Discover how our solution transforms your experience with these key
            benefits
          </p>
        </div>

        {/* Benefits grid with hover effects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {DeFiBenefitData.map((benefit, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg dark:hover:shadow-gray-700/30 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 
            ${
              index % 4 === 0
                ? 'bg-[#0085a8]/15 text-[#0085a8]'
                : index % 4 === 1
                  ? 'bg-[#ad1aaf]/15 text-[#ad1aaf]'
                  : index % 4 === 2
                    ? 'bg-[#6b4baa]/15 text-[#6b4baa]'
                    : 'bg-gradient-to-br from-[#0085a8]/15 to-[#ad1aaf]/15 text-[#8a33aa]'
            }`}
              >
                {benefit.icon}
              </div>
              {/* <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                {benefit.title}
              </h3> */}
              <p className="text-gray-600 dark:text-gray-300">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DefiBenefits;
