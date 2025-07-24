'use client';

import { useApplication } from '@/context/ApplicationContext';
import { formatCurrencyShort } from '@/utils/formatCapital';
import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react';
import HarvestHistoryModal from './HarvestHistoryModal';

const TokenVesting = () => {
  const { application } = useApplication();
  const [isOpen, setIsOpen] = useState(false);

  const vestingDetails = [
    { label: 'Seed Period', value: '1 Year' },
    { label: 'APR', value: '12%' },
    { label: 'Start date', value: '10th June, 2026' },
    { label: 'End Date', value: '10th June, 2026' },
    { label: 'Exclusive Seed Price', value: '$5 per dRC' },
    {
      label: 'Contribution Amount',
      value: `${formatCurrencyShort(Number(application?.capital))}`,
    },
    { label: 'dRC Allocation', value: Number(application?.capital) / 5 },
  ];

  const harvests = [
    { date: 'Today', time: '12:00 pm', amount: '+ 30 dRC' },
    { date: '13/06/2025', time: '12:00 pm', amount: '+ 30 dRC' },
    { date: '12/06/2025', time: '12:00 pm', amount: '+ 30 dRC' },
  ];
  return (
    <div className="my-5 bg-white p-6 rounded-4xl w-full">
      <h2 className="text-2xl font-semibold text-[#303030] mb-4">
        Token Vesting
      </h2>

      <div className="space-y-2 text-lg ">
        {vestingDetails.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-[#696969]">{item.label}</span>
            <span className="font-medium text-[#525252] ">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-[#303030]">Harvesting</h3>
          <button
            onClick={() => setIsOpen(true)}
            className="font-medium  hover:underline flex flex-row items-center"
          >
            View all <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-gray-100 rounded-xl overflow-hidden divide-y divide-gray-200">
          {harvests.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3"
            >
              <div>
                <div className="font-medium">{item.date}</div>
                <div className="text-xs ">{item.time}</div>
              </div>
              <div className="font-semibold ">{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
      <HarvestHistoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default TokenVesting;
