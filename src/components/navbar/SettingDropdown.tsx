'use client';
import { useThemeContext } from '@/context/ThemeContext';
import { ArrowLeftRight, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SettingDropdown = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <div className="dropdown dropdown-end font-sans">
      <div tabIndex={0} role="button" className="cursor-pointer m-1">
        <Image
          src="/profile-pic.jpg"
          alt="profile"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-white dark:bg-[#232323]  rounded-3xl z-10 p-2 shadow-sm"
        style={{
          boxShadow: `0px 12px 42px -4px #14171A1F,0px 8px 18px -6px #14171A1F`,
        }}
      >
        <li>
          <div className="w-fit mx-auto">
            <Image
              src="/profile-pic.jpg"
              alt="profile"
              width={88}
              height={88}
              className="rounded-full mx-auto"
            />
          </div>
        </li>

        {/* Theme Toggle */}
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

        {/* Links */}
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
    </div>
  );
};

export default SettingDropdown;
