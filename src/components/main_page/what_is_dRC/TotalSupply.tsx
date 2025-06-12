import { totalSupplyData } from '@/constants/totalSuppyData';
import { useThemeContext } from '@/context/ThemeContext';
import React from 'react';

const TotalSupply: React.FC = () => {
  const { isDark } = useThemeContext();
  return (
    <>
      <div className="w-full max-w-[350px] h-full">
        <div className="flex flex-col items- gap-[16px]">
          {/* Breakdown List */}
          <div className="flex flex-col gap-[12px] w-full mt-6">
            {totalSupplyData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-[12px] px-[16px] py-[12px] bg-[#F2F2F2] dark:bg-[rgba(36,36,48,0.7)]"
                style={{
                  boxShadow: `${isDark ? `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,inset 0px 0px 20px 0px #433E57,2px 2px 20px 0px ${item.color}` : `2px 2px 20px 0px ${item.color}, 0px 0px 20px 0px ${item.color} inset, 0px 4px 8px 0px #0F172A08, 0px 8px 16px 0px #0F172A05`}`,
                  // boxShadow: `0 0 12px 0 ${item.color}33, 0 2px 8px 0 #0002, 0 1.5px 8px 0 ${item.color}22, 0 0 0 2px ${item.color}11`,
                  border: `1px solid ${item.color}33`,
                }}
              >
                <div className="flex items-center gap-[10px]">
                  <span
                    className="w-[10px] h-[10px] rounded-full"
                    style={{ background: item.dot }}
                  />
                  <div className="flex flex-col">
                    <span className="dark:text-[white] text-[15px] font-[500]">
                      {item.name}
                    </span>
                    {/* <span className="text-[#A1A1AA] text-[12px]">
                      {item.desc}
                    </span> */}
                  </div>
                </div>
                <span className="dark:text-[white] text-[18px]">
                  {item.amount}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalSupply;
