'use client';

import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { DeWorldProductsData } from './DeWorldProductsData';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const DeWorldAllProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasEnteredDropdown, setHasEnteredDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { isDark } = useThemeContext();
  const { isArabic } = useLocaleDirection();

  // Detect desktop
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close on outside click for mobile only
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isDesktop &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktop]);

  // Handle mouse leave for icon+dropdown
  const handleMouseLeaveAll = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        if (!hasEnteredDropdown) {
          setIsOpen(false);
        }
      }, 200);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHasEnteredDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    if (isDesktop) {
      setIsOpen(false);
      setHasEnteredDropdown(false);
    }
  };

  return (
    <div
      className="relative font-sans z-50"
      ref={menuRef}
      onMouseLeave={handleMouseLeaveAll}
    >
      <button
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasEnteredDropdown(false);
        }}
      >
        <Image src="/menu-logo-dark.png" alt="menu" width={30} height={30} />
      </button>

      {isOpen && (
        <div
          className={`absolute translate-x-[120px] md:translate-x-0 p-3 ${
            isArabic ? 'left-0' : 'right-0'
          } mt-2 w-[98vw] max-w-[354px] max-h-[400px] overflow-y-auto rounded-3xl bg-white dark:bg-[#1D1D1D] shadow-xl`}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <div
            className="relative overflow-hidden border border-[#E2E8F0] dark:border-[#581C87] rounded-3xl p-3"
            style={{ boxShadow: `0px 12px 28px 0px #00000029` }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[440px] h-[400px] rounded-full blur-[324px] opacity-30 pointer-events-none z-0"
              style={{
                background: 'linear-gradient(90deg, #9E2CA9 0%, #3B82A4 100%)',
                filter: 'blur(70px)',
              }}
            ></div>

            <div className="relative z-10">
              <h3 className="pt-3 px-5 text-lg text-center sm:text-xl text-transparent bg-gradient-to-r font-orbitron font-semibold from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
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
                        ? '0px 4px 8px 0px #000000'
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
                <div
                  className="flex flex-col col-span-2 items-center justify-center text-center p-2 rounded-xl transition bg-white dark:bg-[#1D1D1D]"
                  style={{
                    boxShadow: isDark
                      ? '0px 4px 8px 0px #000000'
                      : '0px 4px 8px 0px #0000001A',
                  }}
                >
                  <span className="text-lg mt-1 text-transparent bg-gradient-to-r font-orbitron font-semibold from-gradient-from to-gradient-to bg-clip-text">
                    DEEPROOTS
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeWorldAllProducts;
