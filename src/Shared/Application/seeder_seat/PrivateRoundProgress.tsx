'use client';

import React from 'react';

const PrivateRoundProgress = () => {
  const progressDetails = [
    { label: 'Currently raised', value: '$503,000' },
    {
      label: 'Private seed Ends in',
      value: <span className="text-[#2563EB]">30d : 7h : 4m : 2s</span>,
    },
    { label: 'Foundation Seats Left', value: '10 of 100' },
    { label: 'Start Date', value: '10th June, 2026' },
    { label: 'End Date', value: '10th June, 2026' },
    { label: 'Founders seats Left', value: '4 of 10' },
  ];

  return (
    <div className="my-5 bg-white p-6 rounded-4xl w-full">
      <h2 className="text-2xl font-semibold text-[#303030] mb-4">
        Private round Progress
      </h2>

      <div className="space-y-2 text-lg ">
        {progressDetails.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-[#696969]">{item.label}</span>
            <span className="font-medium text-[#525252] text-end">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivateRoundProgress;
