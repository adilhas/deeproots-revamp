import React from 'react';

const DealSummary = () => {
  const dealData = [
    {
      label: 'Your Private Allocation',
      value: 'xxx dRC',
    },
    {
      label: 'Exclusive Seed Price',
      value: '$10/dRC',
    },
    {
      label: 'Reserved Until',
      value: '16th July, 2025 22:00 UTC',
    },
    {
      label: 'Investment Range',
      value: (
        <>
          <span className="text-gray-600">Minimum</span> $[Amount]
          <span className="text-gray-600 mx-2">–</span>
          <span className="text-gray-600">Maximum</span> $[Amount]
        </>
      ),
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Deal Summary
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
      <div>
        <div>Wallet Information</div>
      </div>
    </div>
  );
};

export default DealSummary;
