import React from 'react';

const DealSummaryAdmin = () => {
  const dealData = [
    {
      label: 'Your Private Allocation',
      value: `xxxdRC`,
    },
    {
      label: 'Exclusive Seed Price',
      value: '$10/dRC',
    },
    {
      label: 'Reserved Until',
      value: `16th July, 2025 22:00 UTC`,
    },
    {
      label: 'Investment Range',
      value: 'Minimum $[Amount] - Maximum $[Amount]',
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Deal Summary
        </h1>
      </div>

      <div className="max-w-[794px] mx-auto px-2 py-4">
        <div className="flex flex-col gap-y-6">
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
    </div>
  );
};

export default DealSummaryAdmin;
