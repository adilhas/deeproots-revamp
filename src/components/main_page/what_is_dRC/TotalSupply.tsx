import { useThemeContext } from '@/context/ThemeContext';
import React from 'react';
import { totalSupplyData } from '@/constants/totalSuppyData';

interface TotalSupplyProps {
  theme?: 'light' | 'dark';
}

const TotalSupply: React.FC<TotalSupplyProps> = ({ theme }) => {
  const { isDark } = useThemeContext();

  // Determine theme: use prop if provided, else use context
  const effectiveIsDark =
    theme === 'dark' ? true : theme === 'light' ? false : isDark;

  return (
    <div className="w-full max-w-[350px] h-full">
      <div className="flex flex-col gap-[16px] w-full min-h-[41px]">
        {totalSupplyData.map((item) => (
          <div
            key={item.name}
            className={`flex items-center justify-between rounded-[18px] px-[16px] py-[5px] ${
              effectiveIsDark ? 'bg-[rgba(36,36,48,0.7)]' : 'bg-[#F2F2F2]'
            }`}
            style={{
              boxShadow: `${
                effectiveIsDark
                  ? `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,inset 0px 0px 20px 0px #433E57,2px 2px 20px 0px ${item.color}`
                  : `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,inset 0px 0px 20px 0px ${item.innerShadowColor},2px 2px 20px 0px ${item.color}`
              }`,
            }}
          >
            <div className="flex items-center gap-[10px]">
              <span
                className="w-[10px] h-[10px] rounded-full"
                style={{ background: item.dot }}
              />
              <div className="flex flex-col">
                <span
                  className={`text-[15px] font-[500] ${
                    effectiveIsDark ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                </span>
              </div>
            </div>
            <span
              className={`text-[18px] ${effectiveIsDark ? 'text-white' : ''}`}
            >
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalSupply;
