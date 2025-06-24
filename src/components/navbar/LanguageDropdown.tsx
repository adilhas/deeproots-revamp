'use client';

import { Globe, Check } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = i18n.language || 'en';

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'Arabic' },
  ];

  const handleChange = (lng: string) => {
    if (lng === currentLang) return;

    router.replace(`/${lng}${pathname.replace(/^\/(en|ar)/, '')}`);
  };

  return (
    <div className="dropdown dropdown-start md:dropdown-end font-sans">
      <div tabIndex={0} role="button" className="cursor-pointer">
        <Globe className="w-6 h-6 text-[#4B5563] dark:text-[#E2E8F0]" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-primary-light dark:bg-primary-dark rounded-box z-10 w-52 p-2 shadow-sm"
      >
        {languages.map((lang) => (
          <li
            key={lang.code}
            onClick={() => handleChange(lang.code)}
            className={
              lang.code === currentLang ? 'pointer-events-none opacity-70' : ''
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
    </div>
  );
};

export default LanguageDropdown;
