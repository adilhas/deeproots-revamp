import { Data1, Data2 } from '@/constants/dRCUsecasesData';
import Image from 'next/image';
import React from 'react';
import { useThemeContext } from '@/context/ThemeContext';

const UseCaseMobileView = () => {
  const { isDark } = useThemeContext();
  return (
    <div>
      <div className="w-full max-w-[500px]  xl:w-[500px] aspect-square relative z-0 mx-auto my-8">
        <Image
          src="/landing/deeproots-ecosystem.jpg"
          alt="deeproots ecosystem"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="text-3xl w-fit mx-auto text-center font-orbitron font-[600] text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        Usecases
      </div>
      <div className="flex my-8 justify-center flex-row gap-4">
        <ul className="flex flex-col w-max gap-y-2 lg:gap-y-5 text-center text-sm md:text-md xl:text-lg font-orbitron text-[#404040] dark:text-[#F1F5F9]">
          {Data1.map((item, index) => (
            <li
              key={index}
              className="py-2 lg:py-2.5 px-8 rounded-2xl bg-[#D4D4D4] dark:bg-[#212121] "
              style={{
                boxShadow: isDark
                  ? '0px 15px 13.4px 0px #0303036E'
                  : ' 0px 6px 18px 0px #00000038',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col w-max gap-y-2 lg:gap-y-5 text-center text-sm md:text-md xl:text-lg font-orbitron text-[#404040] dark:text-[#F1F5F9]">
          {Data2.map((item, index) => (
            <li
              key={index}
              className="py-2 lg:py-2.5 px-8 rounded-2xl bg-[#D4D4D4] dark:bg-[#212121] "
              style={{
                boxShadow: isDark
                  ? '0px 15px 13.4px 0px #0303036E'
                  : ' 0px 6px 18px 0px #00000038',
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseCaseMobileView;
