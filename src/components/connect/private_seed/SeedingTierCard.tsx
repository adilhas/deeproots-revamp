import Image from 'next/image';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import { PiSpinner } from 'react-icons/pi';
import { toast } from 'react-toastify';

interface SeedingTierCardProps {
  tierName: string;
  priceRange: string;
  imageSrc: string;
  features: string[];
  badgeLabel: string;
  isDark?: boolean;
  tierCardClass?: string;
  title1Class?: string;
  title2Class?: string;
  isSelected?: boolean;
  handleTeirSelect?: () => void;
  benfitsTitle?: string;
  contriAmount?: string;
  setContriAmount?: (value: string) => void;
  onSubmitAmount?: () => void;
  isLoading?: boolean;
  disableSubmit?: boolean;
  blurHueElement?: React.ReactNode;
}

const parsePriceRange = (priceRange: string): [number, number] => {
  const cleaned = priceRange
    .replace(/\$/g, '')
    .replace(/,/g, '')
    .replace(/k/gi, '000')
    .replace(/m\+/i, '000000+') // turn "1M+" into "1000000+"
    .split('-');

  const min = parseInt(cleaned[0].trim());

  // If second part includes '+', only enforce min
  const max = cleaned[1]?.includes('+')
    ? Infinity
    : parseInt(cleaned[1].trim());

  return [min, max];
};

const SeedingTierCard: React.FC<SeedingTierCardProps> = ({
  tierName,
  priceRange,
  imageSrc,
  features,
  badgeLabel,
  isDark = true,
  tierCardClass,
  title1Class,
  title2Class,
  isSelected = false,
  handleTeirSelect,
  benfitsTitle = 'Benefits',
  contriAmount = '',
  setContriAmount,
  onSubmitAmount,
  isLoading = false,
  disableSubmit = false,
}) => {
  const allowDark = isDark;

  const handleValidatedSubmit = () => {
    const [min, max] = parsePriceRange(priceRange);
    const amountNum = parseFloat(contriAmount || '0');
    if (isNaN(amountNum)) {
      toast.error('Please enter a valid amount');
      return;
    }
    if (amountNum < min || amountNum > max) {
      toast.error(
        max === Infinity
          ? `Amount should be at least $${min.toLocaleString()}`
          : `Amount must be between $${min.toLocaleString()} and $${max.toLocaleString()}`
      );
      return;
    }
    onSubmitAmount?.();
  };

  return (
    <div
      className={`p-[3.5px] pb-[4px] rounded-[36px]  transition-all ${
        isSelected
          ? 'bg-gradient-to-r from-gradient-from2 to-gradient-to2'
          : 'bg-transparent'
      }`}
    >
      <div
        onClick={handleTeirSelect}
        className={`min-h-[500px] overflow-hidden z-10 rounded-4xl h-full w-full max-w-[368px] mx-auto ${isSelected ? 'border-none' : 'border'} cursor-pointer hover:shadow-[0px_12px_42px_-4px_#14171A1F,_0px_18px_18px_-6px_#14171A1F] ${
          allowDark
            ? 'border-[#D4D4D4] dark:border-[#737373] bg-white dark:bg-[#303030]'
            : 'border-[#D4D4D4] bg-white'
        }`}
      >
        <div className={`p-3`}>
          <div
            className={`overflow-hidden border w-full h-[174px] rounded-[20px] p-3 relative ${tierCardClass ?? ''}`}
          >
            <div className="relative z-10 rounded-[20px] h-full flex flex-col justify-between">
              <div
                className={`text-2xl font-medium max-w-[90%] ${title1Class}`}
              >
                {tierName}
              </div>
              <div className={`text-3xl font-semibold ${title2Class}`}>
                {priceRange}
              </div>
              <div className="bg-[#DBEAFE] text-[#2563EB] text-md rounded-[40px] w-fit py-1 px-2">
                {badgeLabel}
              </div>
            </div>
            <input
              type="radio"
              name="seed-tier-radio"
              className="radio absolute top-3 right-3 bg-white radio-primary checked:bg-white checked:text-[#7F56D9] checked:border-[#7F56D9]"
              checked={isSelected}
            />
            <Image
              src={imageSrc}
              width={115}
              height={300}
              alt={`seeding ${tierName}`}
              className="absolute bottom-0 right-0 z-0"
            />
          </div>
          <div className="mt-4 z-10">
            <div
              className={`text-2xl z-10 ${
                allowDark
                  ? 'text-[#525252] dark:text-[#F1F5F9]'
                  : 'text-[#525252]'
              }`}
            >
              {benfitsTitle}
            </div>
            <ul
              className={`list-disc ml-6 mt-3 text-xl z-10 space-y-[16px] ${
                allowDark
                  ? 'text-[#525252] dark:text-[#F1F5F9]'
                  : 'text-[#525252]'
              }`}
            >
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
        {isSelected && (
          <div className="bg-gradient-to-r from-gradient-from2 bg-gradient-to2 pt-[3px]">
            <div className="bg-[#E9E9E9] p-4 flex flex-row items-center gap-2 justify-between">
              <input
                type="number"
                value={contriAmount}
                onChange={(e) => setContriAmount?.(e.target.value)}
                placeholder="Enter contribution amount"
                className="input border border-[#D4D4D4] bg-white w-full placeholder:text-[#525252] text-lg rounded-4xl [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button
                onClick={handleValidatedSubmit}
                disabled={disableSubmit}
                className="bg-gradient-from2 text-white p-3 rounded-full disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="loading-spinner">
                    <PiSpinner className="w-4 h-4" />
                  </div>
                ) : (
                  <FaAngleRight className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeedingTierCard;
