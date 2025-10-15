import { useApplication } from '@/context/ApplicationContext';
import clsx from 'clsx';
import React, { useState } from 'react';
import { FiCheck, FiCopy } from 'react-icons/fi';

interface WalletInfoProps {
  className?: string;
  layoutClass?: string;
}

const WalletInfo: React.FC<WalletInfoProps> = ({
  className,
  layoutClass = 'flex-col md:flex-row',
}) => {
  const [copied, setCopied] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { application } = useApplication();

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
      <div className="bg-[#FECDCE] p-4 w-full rounded-2xl font-semibold">
        <div className="mb-1 flex justify-between items-center">
          <div className="text-[#881315]">TRC-20</div>
          <div>USDT</div>
        </div>
        <div className="">
          <div className=" text-sm w-full break-all">
            {application?.usdtAddress}
          </div>
          <div
            onClick={() => handleCopy(application?.usdtAddress || '')}
            className="cursor-pointer flex-shrink-0"
          >
            {isCopied && copied === application?.usdtAddress ? (
              <FiCheck className="w-5 h-5 text-green-500" />
            ) : (
              <FiCopy className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      {/* BEP-20 Card */}
      <div className="bg-[#FED7AA] p-4 w-full rounded-2xl font-semibold">
        <div className="mb-1 flex justify-between items-center">
          <div className="text-[#92400E]">BEP-20</div>
          <div>USDC</div>
        </div>
        <div className="">
          <div className="text-sm break-all">{application?.usdcAddress}</div>
          <div
            onClick={() => handleCopy(application?.usdcAddress || '')}
            className="cursor-pointer flex-shrink-0"
          >
            {isCopied && copied === application?.usdcAddress ? (
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
