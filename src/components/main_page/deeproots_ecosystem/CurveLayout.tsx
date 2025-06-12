import React from 'react';
import Image from 'next/image';

interface Props {
  Data1: string[];
  Data2: string[];
  isDark: boolean;
}

const CurvedULayout: React.FC<Props> = ({ Data1, Data2, isDark }) => {
  return (
    <>
      {/* Add this CSS to your global styles or component styles */}
      <style jsx global>{`
        .curved-left::before {
          content: '';
          position: absolute;
          bottom: 0;
          right: -20px;
          width: 20px;
          height: 20px;
          background: ${isDark ? '#242424' : '#f3f4f6'};
          border-radius: 0 0 20px 0;
        }

        .curved-right::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: -20px;
          width: 20px;
          height: 20px;
          background: ${isDark ? '#242424' : '#f3f4f6'};
          border-radius: 0 0 0 20px;
        }

        .u-connector {
          background: ${isDark ? '#242424' : '#f3f4f6'};
          height: 20px;
          margin: 0 20px;
          border-radius: 20px 20px 0 0;
        }
      `}</style>

      <div className="my-8">
        {/* Top section */}
        <div className="flex flex-row w-full justify-between items-start">
          {/* Left List */}
          <div className="dark:bg-[#242424] py-4 px-8 rounded-t-4xl relative curved-left">
            <ul className="flex flex-col w-max gap-y-5 justify-between text-center text-lg font-orbitron text-[#5C5F62] dark:text-white">
              {Data1.map((item, index) => (
                <li
                  key={index}
                  className="py-2.5 px-8 rounded-2xl"
                  style={{
                    boxShadow: isDark
                      ? '0px 15px 31px 0px #000000'
                      : '0px 15px 31px 0px #A4A4A466',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Center Image */}
          <div className="w-[500px] aspect-square relative">
            <Image
              src="/landing/deeproots-ecosystem.jpg"
              alt="deeproots ecosystem"
              fill
              className="object-cover rounded-[75px]"
            />
          </div>

          {/* Right List */}
          <div className="dark:bg-[#242424] py-4 px-8 rounded-t-4xl relative curved-right">
            <ul className="flex flex-col w-max gap-y-5 justify-between text-center text-lg font-orbitron text-[#5C5F62] dark:text-white">
              {Data2.map((item, index) => (
                <li
                  key={index}
                  className="py-2.5 px-8 rounded-2xl"
                  style={{
                    boxShadow: isDark
                      ? '0px 15px 31px 0px #000000'
                      : '0px 15px 31px 0px #A4A4A466',
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* U-shaped connector */}
        <div className="u-connector"></div>

        {/* Bottom Usecases section */}
        <div className="dark:bg-[#242424] p-4 rounded-b-[75px]">
          <div className="text-5xl w-fit mx-auto text-center font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Usecases
          </div>
        </div>
      </div>
    </>
  );
};

export default CurvedULayout;
