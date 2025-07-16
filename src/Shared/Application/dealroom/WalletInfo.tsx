import clsx from 'clsx';
import React, { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

interface WalletInfoProps {
  className?: string;
  layoutClass?: string;
  usdtAddress?: string;
  usdcAddress?: string;
}

const WalletInfo: React.FC<WalletInfoProps> = ({
  className,
  layoutClass = 'flex-col md:flex-row',
  usdcAddress = '0xA1B2c3D4e5F67890123456789AbCdEf012345678',
  usdtAddress = 'TXYw6r9Lp3WVFZMKPkJRhAvcNnqykqvUMy',
}) => {
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
    <div
      className={clsx(
        'flex  items-stretch gap-4 mt-4 w-full',
        layoutClass,
        className
      )}
    >
      {/* TRC-20 Card */}
      <div className="bg-[#FECDCE] p-4 w-full rounded-2xl font-semibold overflow-hidden">
        <div className="mb-1 flex justify-between items-center">
          <div className="text-[#881315]">TRC-20</div>
          <div>USDT</div>
        </div>
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <div className="truncate max-w-[calc(100%-2rem)] text-sm">
            {usdtAddress}
          </div>
          <div
            onClick={() => handleCopy(usdtAddress)}
            className="cursor-pointer flex-shrink-0"
          >
            {isCopied && copied === usdtAddress ? (
              <FiCheck className="w-5 h-5 text-green-500" />
            ) : (
              <FiCopy className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      {/* BEP-20 Card */}
      <div className="bg-[#FED7AA] p-4 w-full rounded-2xl font-semibold overflow-hidden">
        <div className="mb-1 flex justify-between items-center">
          <div className="text-[#92400E]">BEP-20</div>
          <div>USDC</div>
        </div>
        <div className="flex items-center justify-between gap-2 overflow-hidden">
          <div className="truncate max-w-[calc(100%-2rem)] text-sm">
            {usdcAddress}
          </div>
          <div
            onClick={() => handleCopy(usdcAddress)}
            className="cursor-pointer flex-shrink-0"
          >
            {isCopied && copied === usdcAddress ? (
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
