'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { DeWorldProductsData } from './DeWorldProductsData';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const DeWorldAllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isDark } = useThemeContext();
  const { isArabic } = useLocaleDirection();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="md:relative font-sans z-50" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Image src="/menu-logo-dark.png" alt="menu" width={30} height={30} />
      </button>

      {isOpen && (
        <div
          className={`absolute p-3 ${isArabic ? 'left-0' : 'right-0'} mt-2 w-[98vw] max-w-[354px] max-h-[400px] overflow-y-auto rounded-3xl bg-white dark:bg-[#1D1D1D] shadow-xl`}
        >
          <div
            className="relative overflow-hidden border border-[#E2E8F0] dark:border-[#581C87] rounded-3xl"
            style={{ boxShadow: `0px 4px 4px 0px #581C8763` }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full blur-[324px] opacity-30 pointer-events-none z-0"
              style={{
                background: 'linear-gradient(90deg, #9E2CA9 0%, #3B82A4 100%)',
                filter: 'blur(70px)',
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="pt-3 px-5 text-lg sm:text-xl text-black dark:text-white font-semibold">
                DeWorld Ecosystem
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 p-2">
                {DeWorldProductsData.map((product) => (
                  <Link
                    key={product.name}
                    href={product.link || '#'}
                    className="flex flex-col items-center justify-center text-center hover:bg-gray-100 dark:hover:bg-[#2c2c2c] p-2 rounded-xl transition bg-white dark:bg-[#1D1D1D]"
                    style={{
                      boxShadow: isDark
                        ? '0px 4px 8px 0px #000000,0px 4px 15.1px 0px #1E0520, 0px 0px 24px 0px #E228F44D inset'
                        : '0px 4px 8px 0px #0000001A',
                    }}
                  >
                    <Image
                      src={product.icon}
                      alt={product.name}
                      width={42}
                      height={42}
                    />
                    <span className="text-[12px] mt-1 text-[#4B5563] dark:text-[#F8FAFC]">
                      {product.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeWorldAllProducts;
