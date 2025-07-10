import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const SeedRoundTerms = () => {
  const [copied, setCopied] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  const dealData = [
    {
      label: 'Investment Amount',
      value: '$ 0.00',
    },
    {
      label: 'Token Price',
      value: '$10/dRC',
    },
    {
      label: 'Seeding Terms',
      value: '12 Months',
    },
    {
      label: 'Reward',
      value: '12% Reward On-chain',
    },
    {
      label: 'Payment Method',
      value: 'USDT / USDC',
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Seed Round Terms
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-4">
        <div className="">
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

      <div className="w-full max-w-[991px] mx-auto py-3 px-3">
        <div className="text-2xl">Wallet Information</div>
        <div className="flex md:flex-row flex-col items-center gap-2 mt-4">
          <div className="bg-[#FECDCE] p-3 w-full rounded-2xl font-semibold">
            <div>TRC-20</div>
            <div className="flex flex-row justify-between items-center">
              <div className="truncate">TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy</div>
              <div
                onClick={() => handleCopy('TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy')}
                className="cursor-pointer"
              >
                {isCopied && copied === 'TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy' ? (
                  <FiCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <FiCopy className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>

          <div className="bg-[#FED7AA] p-3 w-full rounded-2xl font-semibold">
            <div>BEP-20</div>
            <div className="flex flex-row justify-between items-center">
              <div className="truncate">
                0xA1B2c3D4e5F67890123456789AbCdEf012345678
              </div>
              <div
                onClick={() =>
                  handleCopy('0xA1B2c3D4e5F67890123456789AbCdEf012345678')
                }
                className="cursor-pointer"
              >
                {isCopied &&
                copied === '0xA1B2c3D4e5F67890123456789AbCdEf012345678' ? (
                  <FiCheck className="w-5 h-5 text-green-500" />
                ) : (
                  <FiCopy className="w-5 h-5" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedRoundTerms;
