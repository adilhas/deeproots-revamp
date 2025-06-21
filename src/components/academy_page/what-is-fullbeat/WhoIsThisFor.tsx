import React from 'react';

interface WhoIsThisForType {
  title: string;
  bgColor: string;
  borderColor: string;
}

export const WhoIsThisForData: WhoIsThisForType[] = [
  {
    title: 'Long-term believers in decentralization',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'Early adopters of Deep Roots and DeWorld',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },

  {
    title: 'Builders, validators, and supporters who grow the ecosystem',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
];

const WhoIsThisFor = () => {
  return (
    <div>
      <div>
        <div className="flex flex-row items-center gap-3 font-semibold my-3">
          <div className="text-3xl text-black dark:text-white">
            Who It’s For
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-auto my-8">
          {WhoIsThisForData.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} border ${item.borderColor} rounded-3xl text-center p-4`}
            >
              <h3 className="font-semibold text-black dark:text-white">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        <p className="font-orbitron text-2xl font-semibold">
          Secure your seat. Shape the future.
        </p>
      </div>
    </div>
  );
};

export default WhoIsThisFor;
