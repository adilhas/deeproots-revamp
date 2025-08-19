'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const CopyMeDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasHoveredDropdown, setHasHoveredDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !isDesktop &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDesktop]);

  const handleMouseLeaveWrapper = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        if (!hasHoveredDropdown) {
          setIsOpen(false);
        }
      }, 200);
    }
  };

  const handleMouseEnterDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHasHoveredDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    if (isDesktop) {
      setIsOpen(false);
      setHasHoveredDropdown(false);
    }
  };

  return (
    <div
      className="relative dropdown-end font-sans text-[#4B5563] dark:text-neutral-200"
      ref={wrapperRef}
      onMouseLeave={handleMouseLeaveWrapper}
    >
      <div
        role="button"
        className="cursor-pointer m-1"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasHoveredDropdown(false);
        }}
      >
        <Image
          src="/copyme-logo.png"
          alt="copyme logo"
          width={35}
          height={35}
          className=""
        />
      </div>

      {isOpen && (
        <ul
          className="fixed max-w-[255px] w-full h-[143px] right-0 mt-2 menu bg-[#C1BCFD] rounded-2xl z-10 p-2 shadow-sm"
          style={{
            boxShadow: `0px 12px 42px -4px #14171A1F, 0px 8px 18px -6px #14171A1F`,
            minWidth: '260px',
          }}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <li className=" w-full h-full mx-auto flex flex-col items-center justify-center  pointer-events-none hover:scale-100 hover:opacity-100">
            <div
              className="w-full relative h-full border border-[#E2E8F0] mx-auto text-center flex rounded-2xl py-6 font-orbitron font-semibold flex-col items-center justify-center"
              style={{ boxShadow: `0px 0px 12px 0px #FFFFFFD9 inset` }}
            >
              <Image
                src={'/copyme-light-bg.png'}
                width={129}
                height={72}
                className="absolute top-0 left-0"
                alt="copyme bg"
              />
              <div className="text-[#352B38] text-2xl">CopyMe AI</div>
              <div className="text-white text-lg">Live on V3</div>
            </div>
          </li>
        </ul>
      )}
    </div>
  );
};

export default CopyMeDropdown;
