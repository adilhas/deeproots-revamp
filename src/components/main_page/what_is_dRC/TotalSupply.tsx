import { getTotalSupplyData } from '@/constants/totalSuppyData';
import { useThemeContext } from '@/context/ThemeContext';
import React from 'react';
import { useTranslation } from 'react-i18next';

const TotalSupply: React.FC = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const totalSupplyData = getTotalSupplyData(t);
  return (
    <>
      <div className="w-full max-w-[350px] h-full">
        <div className="flex flex-col gap-[16px] w-full">
          {totalSupplyData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-[18px] px-[16px] py-[5px] bg-[#F2F2F2] dark:bg-[rgba(36,36,48,0.7)]"
              style={{
                boxShadow: `${isDark ? `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,inset 0px 0px 20px 0px #433E57,2px 2px 20px 0px ${item.color}` : `0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,inset 0px 0px 20px 0px #F9BDFF,2px 2px 20px 0px ${item.color}`}`,
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
                </div>
              </div>
              <span className="dark:text-[white] text-[18px]">
                {item.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TotalSupply;
