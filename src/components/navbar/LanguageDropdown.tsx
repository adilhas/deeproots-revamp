'use client';

import { Globe, Check } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = i18n.language || 'en';

  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hasEnteredDropdown, setHasEnteredDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'en', label: 'English' },
    // { code: 'ar', label: 'Arabic' },
  ];

  const handleChange = (lng: string) => {
    if (lng === currentLang) return;
    router.replace(`/${lng}${pathname.replace(/^\/(en|ar)/, '')}`);
    setIsOpen(false);
  };

  // Detect desktop or mobile
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

  // Hover interactions for desktop
  const handleMouseLeaveAll = () => {
    if (isDesktop) {
      timeoutRef.current = setTimeout(() => {
        if (!hasEnteredDropdown) setIsOpen(false);
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
      className="relative font-sans text-[#4B5563] dark:text-neutral-200 z-50"
      ref={menuRef}
      onMouseLeave={handleMouseLeaveAll}
    >
      <div
        role="button"
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => {
          setIsOpen((prev) => !prev);
          setHasEnteredDropdown(false);
        }}
        onMouseEnter={() => {
          if (isDesktop) setIsOpen(true);
        }}
      >
        <Globe className="w-6 h-6 text-[#4B5563] dark:text-[#E2E8F0]" />
      </div>

      {isOpen && (
        <ul
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
          className="absolute right-0 dropdown-content menu bg-primary-light dark:bg-primary-dark rounded-box z-10 w-52 p-2 mt-2 shadow-sm"
        >
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => handleChange(lang.code)}
              className={
                lang.code === currentLang
                  ? 'pointer-events-none opacity-70'
                  : ''
              }
            >
              <div className="flex justify-between items-center">
                <span>{lang.label}</span>
                {lang.code === currentLang && (
                  <Check className="w-4 h-4 text-green-500" />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
