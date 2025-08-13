import React from 'react';
import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';

interface DeWorldCardProps {
  name: string;
  category: string;
  description: string;
  lightIcon: string;
  lightBg: string;
  darkBg: string;
  cateColorLight: string;
  cateColorDark: string;
  url: string;
}

const DeWorldCard: React.FC<DeWorldCardProps> = ({
  name,
  category,
  description,
  cateColorDark,
  cateColorLight,
  darkBg,
  lightBg,
  lightIcon,
}) => {
  const { isDark } = useThemeContext();

  return (
    <div className="bg-white dark:bg-[#FFFFFF08] rounded-4xl p-4 w-full max-w-[282px]  border-muted flex flex-col justify-between h-full">
      <div>
        <div className=" items-center gap-2 mb-2">
          <div
            className="p-5 rounded-full mx-auto w-fit h-fit"
            style={{ backgroundColor: isDark ? darkBg : lightBg }}
          >
            <Image src={lightIcon} alt="icon" width={65} height={65} />
          </div>
          <div className="flex flex-col gap-3 text-center my-4">
            <h3 className="text-xl font-semibold text-[#1F2937] dark:text-white">
              {name}
            </h3>
            <span
              className="w-fit mx-auto px-3 py-1 text-sm rounded-full font-semibold"
              style={{
                backgroundColor: isDark ? darkBg : lightBg,
                color: isDark ? cateColorDark : cateColorLight,
              }}
            >
              {category}
            </span>
          </div>
        </div>

        <p className="text-md text-center text-[#303030] dark:text-[#A1A1A1]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DeWorldCard;
