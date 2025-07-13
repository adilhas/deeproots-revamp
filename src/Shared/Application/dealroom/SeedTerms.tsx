import React from 'react';

const SeedTerms = () => {
  const dealData = [
    {
      label: 'Contribution Amount',
      value: '$ [Amount]',
    },
    {
      label: 'Foundation Token Access Rate',
      value: '$0/dRC (Exclusive Rate)',
    },
    {
      label: 'Seeding Duration',
      value: '12 Months (Fixed Term)',
    },
    {
      label: 'Annual On-Chain Reward Rate',
      value: '12% (Auto-Compounded, if applicable)',
    },
    {
      label: 'Accepted Currencies',
      value: 'USDT / USDC (Stablecoins Only)',
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Exclusive Private Seed Terms
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-4">
        <div className="space-y-2">
          {dealData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 ${index !== dealData.length - 1 ? 'border-gray-100' : ''}`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                {item.label}
              </div>
              <div className="text-gray-800 font-semibold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeedTerms;
