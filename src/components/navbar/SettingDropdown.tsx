'use client';
import { useThemeContext } from '@/context/ThemeContext';
import { ArrowLeftRight, ChevronDown, Globe, Moon, Sun } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const languages = [
  { label: 'English', code: 'en' },
  // { label: 'French', code: 'fr' },
  { label: 'Arabic', code: 'ar' },
];

const SettingDropdown = () => {
  const router = useRouter();
  const { locale, pathname, query, asPath } = router;

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    return languages.find((lang) => lang.code === locale)?.label || 'English';
  });

  const { isDark, toggleTheme } = useThemeContext();

  const changeLanguage = (langCode: string, langLabel: string) => {
    router.replace({ pathname, query }, asPath, { locale: langCode });
    setSelectedLanguage(langLabel);
    setIsLangOpen(false);
  };

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

        <li>
          <div className="relative px-2">
            <button
              className="flex items-center justify-between w-full py-2 rounded cursor-pointer"
              onClick={() => setIsLangOpen((prev) => !prev)}
            >
              <div className="flex items-center gap-2">
                <Globe size={16} />
                <span className="text-sm">Language • {selectedLanguage}</span>
              </div>
              <ChevronDown size={16} />
            </button>

            {isLangOpen && (
              <div className="absolute z-20 bg-base-200 dark:bg-black mt-1 w-full rounded shadow-md">
                {languages.map((lang) => (
                  <div
                    key={lang.code}
                    className={`px-4 py-2 text-sm cursor-pointer hover:bg-base-300 ${
                      locale === lang.code ? 'font-semibold' : ''
                    }`}
                    onClick={() => changeLanguage(lang.code, lang.label)}
                  >
                    {lang.label}
                  </div>
                ))}
              </div>
            )}
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
          <Link href="#">Terms of Use</Link>
        </li>
        <li>
          <Link href="/public-relations">Public Relations</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingDropdown;
