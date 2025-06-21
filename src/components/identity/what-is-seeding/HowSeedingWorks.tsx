import React from 'react';

interface HowSeedingWorksType {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}

export const HowSeedingWorksData: HowSeedingWorksType[] = [
  {
    title: 'Grow rewards',
    description: '(12% APY or more)',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'Unlock early access',
    description: 'to projects and perks',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },

  {
    title: 'Strengthen the network',
    description: 'by supporting real growth',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
];

const HowSeedingWorks = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">Why Web3 Matters</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {HowSeedingWorksData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} flex flex-col justify-center rounded-3xl min-h-[145px] text-center p-4`}
          >
            <h3 className="font-semibold text-lg mb-3">{item.title}</h3>

            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-2xl font-orbitron font-semibold flex md:flex-row items-center flex-col w-fit mx-auto mt-8 mb-4 gap-3 text-[#737373] dark:text-[#F1F5F9]">
        <div className="line-through">It’s not staking,</div>
        <div className="line-through">It’s not farming,</div>
        <div className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          It’s seeding.
        </div>
      </div>
      <div className="text-transparent w-fit mx-auto text-center font-orbitron font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        because this is how DeWorld grows.
      </div>
    </div>
  );
};

export default HowSeedingWorks;
