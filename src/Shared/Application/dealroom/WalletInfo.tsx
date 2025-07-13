import React, { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

const WalletInfo = () => {
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

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 mt-4 w-full">
      {/* TRC-20 Card */}
      <div className="bg-[#FECDCE] p-4 w-full rounded-2xl font-semibold overflow-hidden">
        <div className="mb-1">TRC-20</div>
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <div className="truncate max-w-[calc(100%-2rem)] text-sm">
            TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy
          </div>
          <div
            onClick={() => handleCopy('TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy')}
            className="cursor-pointer flex-shrink-0"
          >
            {isCopied && copied === 'TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy' ? (
              <FiCheck className="w-5 h-5 text-green-500" />
            ) : (
              <FiCopy className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>

      {/* BEP-20 Card */}
      <div className="bg-[#FED7AA] p-4 w-full rounded-2xl font-semibold overflow-hidden">
        <div className="mb-1">BEP-20</div>
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <div className="truncate max-w-[calc(100%-2rem)] text-sm">
            0xA1B2c3D4e5F67890123456789AbCdEf012345678
          </div>
          <div
            onClick={() =>
              handleCopy('0xA1B2c3D4e5F67890123456789AbCdEf012345678')
            }
            className="cursor-pointer flex-shrink-0"
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
  );
};

export default WalletInfo;
