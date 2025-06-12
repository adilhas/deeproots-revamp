import { useThemeContext } from '@/context/ThemeContext';
import React from 'react';

type ListBlockProps = {
  items: string[];
  className?: string;
};

const ListBlock = ({ items, className = '' }: ListBlockProps) => {
  const { isDark } = useThemeContext();
  return (
    <div
      className={`bg-[#CECECE] dark:bg-[#242424] pt-4 px-8 rounded-t-4xl ${className}`}
    >
      <ul className="flex flex-col w-max gap-y-2 lg:gap-y-5 text-center text-md xl:text-lg font-orbitron text-[#404040] dark:text-[#F1F5F9]">
        {items.map((item, index) => (
          <li
            key={index}
            className="py-2 lg:py-2.5 px-8 rounded-2xl bg-[#D4D4D4] dark:bg-[#212121] "
            style={{
              boxShadow: isDark
                ? '0px 15px 13.4px 0px #0303036E'
                : ' 0px 6px 18px 0px #00000038',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlock;
