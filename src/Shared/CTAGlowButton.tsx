import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface CTAGlowProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const CTAGlowButton: React.FC<CTAGlowProps> = ({
  children,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'border border-white py-[8px] text-sm   rounded-[48px] bg-gradient-to-b from-[#8EE9E9] via-[#BCACFA] to-[#C4A2FD] text-[#373737] font-bold transition-all duration-200',
        !className.includes('w-') && 'w-fit',
        !className.includes('px-') && 'px-14',
        !className.includes('sm:text-') && 'sm:text-lg',

        disabled && 'opacity-50 cursor-not-allowed shadow-none',
        className
      )}
      style={{
        boxShadow: disabled
          ? 'none'
          : '0px 0px 44px 0px #B082FF, 0px 0px 8px 0px #B082FF, inset 0px 0px 20px 0px #FFFFFF',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAGlowButton;
