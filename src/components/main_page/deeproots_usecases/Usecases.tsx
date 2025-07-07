import React from 'react';
import { useTranslation } from 'next-i18next';
import { getUseCasesData } from './data';

const UseCases = () => {
  const { t } = useTranslation('landing_page');
  const useCasesData = getUseCasesData(t);
  const repeatedData = [...useCasesData, ...useCasesData];

  return (
    <div className="flex justify-center items-center flex-col my-20">
      <div className="inline-block">
        <h1 className="font-extrabold mx-5 text-2xl mb-14 leading-[40px] lg:text-start lg:text-3xl my-5 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#ad1] bg-clip-text font-orbitron text-transparent">
          DEEPROOTS Use Cases - Game-Changing Internet
        </h1>
      </div>

      <div className="w-full overflow-hidden py-10">
        <div className="usecases-scroll flex space-x-6">
          {repeatedData.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md transition-opacity dark:shadow-2xl group hover:scale-105 rounded-3xl px-6 py-8 text-center flex shadow-xl items-center gap-4 min-w-[450px]"
            >
              <div className="dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1] shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md">
                {item.icon}
              </div>
              <div className="text-start ml-8">
                <h3 className="text-lg font-bold mb-3 font-orbitron w-full text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
