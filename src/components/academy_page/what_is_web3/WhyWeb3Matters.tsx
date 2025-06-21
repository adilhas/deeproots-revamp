import React from 'react';

interface WhyWeb3MattersType {
  title: string;
  description: string;
  bgColor: string;
  borderColor: string;
}

export const whyWeb3MattersData: WhyWeb3MattersType[] = [
  {
    title: 'You own your data and assets',
    description: 'not the platform.',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'You earn and govern',
    description: 'not just use',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },

  {
    title: 'You participate globally',
    description: 'no borders, no banks, no bias.',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
  {
    title: 'You build and migrate freely',
    description: 'your identity moves with you',
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
];

const WhyWeb3Matters = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">Why Web3 Matters</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto">
        {whyWeb3MattersData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} rounded-3xl min-h-[145px] text-center p-4`}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>

            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyWeb3Matters;
