import React from 'react';
import WalletInfo from './WalletInfo';
import { useApplication } from '@/context/ApplicationContext';

const SeedTerms = () => {
  const { application } = useApplication();
  const dealData = [
    {
      label: 'Contribution Amount',
      value: `$ ${Number(application?.capital)}`,
    },
    {
      label: 'Private Seed Price',
      value: (
        <div>
          <span className="text-2xl text-[#3e3f3f] font-bold">$5</span>/dRC
          <span className="text-2xl text-[#3e3f3f] font-bold">
            (Exclusive Rate)
          </span>
        </div>
      ),
    },
    {
      label: 'Total dRC',
      value: `${Number(application?.capital) / 5} dRC`,
    },
    {
      label: 'Seeding Terms',
      value: '12 Months',
    },
    {
      label: 'Seeding Rewards',
      value: '12% Reward On-chain',
    },
    {
      label: 'Accepted currency',
      value: 'USDT / USDC',
    },
  ];

  return (
    <div className="mx-auto my-8 pb-3 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9] border-b border-[#D4D4D4]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Seed Terms
        </h1>
      </div>

      <div className="max-w-[794px] mx-auto px-2 py-4">
        <div className="flex flex-col gap-y-4">
          {dealData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row text-lg justify-between items-start sm:items-center ${index !== dealData.length - 1 ? 'border-gray-100' : ''}`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                {item.label}
              </div>
              <div className="text-gray-800 font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-[991px] mx-auto py-3 px-3">
        <div className="text-2xl font-bold">Payment Wallet Information</div>
        <WalletInfo />
      </div>
    </div>
  );
};

export default SeedTerms;
