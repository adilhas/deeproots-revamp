'use client';

import { useThemeContext } from '@/context/ThemeContext';
import { ArrowLeftRight, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

const SettingDropdown = () => {
  const { isDark, toggleTheme } = useThemeContext();
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
          src="/profile-pic.jpg"
          alt="profile"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>

      {isOpen && (
        <ul
          className="fixed right-0 mt-2 menu bg-white dark:bg-[#232323] rounded-3xl z-10 p-2 shadow-sm"
          style={{
            boxShadow: `0px 12px 42px -4px #14171A1F, 0px 8px 18px -6px #14171A1F`,
            minWidth: '260px',
          }}
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          {/* <li>
            <div className="w-fit mx-auto">
              <Image
                src="/profile-pic.jpg"
                alt="profile"
                width={88}
                height={88}
                className="rounded-full mx-auto"
              />
            </div>
          </li> */}

          <li>
            <div
              className="flex items-center justify-between px-2 py-2 rounded min-w-[250px] cursor-pointer"
              onClick={toggleTheme}
            >
              <div className="flex items-center gap-2">
                {isDark ? (
                  <Moon size={16} />
                ) : (
                  <Sun size={16} className="text-[#FB923C]" />
                )}
                <span className="text-sm">
                  Theme • {`${isDark ? 'Dark' : 'Light'}`}
                </span>
              </div>
              <ArrowLeftRight size={16} />
            </div>
          </li>

          <li>
            <Link href="/identity/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </li>
          <li>
            <Link href="/identity/terms-of-service">Terms of Use</Link>
          </li>
          <li>
            <Link href="/public-relations">Public Relations</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SettingDropdown;
