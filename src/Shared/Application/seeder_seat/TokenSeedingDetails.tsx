'use client';

import { useApplication } from '@/context/ApplicationContext';
import { formatCurrencyShort } from '@/utils/formatCapital';
import React from 'react';

const TokenSeedingDetails = () => {
  const { application } = useApplication();

  const vestingDetails = [
    { label: 'Seed Lock Period', value: '12 month' },
    { label: 'Seeding Reward Onchain', value: '12%' },
    { label: 'Start date', value: '10th June, 2026' },
    { label: 'End Date', value: '10th June, 2026' },
    { label: 'Exclusive Seed Price', value: '$5 per dRC' },
    {
      label: 'Contribution Amount',
      value: `${formatCurrencyShort(Number(application?.capital))}`,
    },
    { label: 'dRC Allocation', value: Number(application?.capital) / 5 },
  ];

  return (
    <div className="my-5 bg-white p-6 rounded-4xl w-full">
      <h2 className="text-2xl font-semibold text-[#303030] mb-4">
        Token Seeding Details
      </h2>

      <div className="space-y-2 text-lg ">
        {vestingDetails.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-[#696969]">{item.label}</span>
            <span className="font-medium text-[#525252] ">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenSeedingDetails;
