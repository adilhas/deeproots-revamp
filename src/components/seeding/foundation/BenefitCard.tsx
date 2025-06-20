import { useThemeContext } from '@/context/ThemeContext';
import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const BenefitCard = ({ children, className }: Props) => {
  const { isDark } = useThemeContext();
  return (
    <div
      className={clsx(
        'px-4 bg-[#F8FAFC] dark:bg-[#252525] rounded-2xl min-h-32 flex items-center justify-center',
        className
      )}
      style={{
        boxShadow: isDark
          ? `0px 12px 42px -4px #14171A1F`
          : `0px 4px 48px 0px #20232714, 0px 4px 8px 0px #20232714`,
      }}
    >
      {children}
    </div>
  );
};

export default BenefitCard;
