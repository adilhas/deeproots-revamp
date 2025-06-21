import React from 'react';

interface WhatDrivesUsType {
  title: string;
  bgColor: string;
  borderColor: string;
}

const WhatDrivesUsData: WhatDrivesUsType[] = [
  {
    title: 'Freedom over control',
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'Ownership over permission',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },

  {
    title: 'Community over corporations',
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
];

const WhatDrivesUs = () => {
  return (
    <div className="my-20 text-[#737373] dark:text-[#F1F5F9]">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        What Drives Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        {WhatDrivesUsData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} rounded-3xl text-center p-4`}
          >
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </div>
        ))}
      </div>
      <p className="my-8">
        We believe the internet’s future belongs to its users not platforms.
        We’re here to build that future, from the ground up.
      </p>
    </div>
  );
};

export default WhatDrivesUs;
