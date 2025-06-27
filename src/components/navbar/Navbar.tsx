'use client';

import { useState } from 'react';
import Logo from './Logo';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Submenu from './Submenu';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import DeWorldAllProducts from './DeWorldAllProducts';
import SettingDropdown from './SettingDropdown';
import LanguageDropdown from './LanguageDropdown';
import clsx from 'clsx';

interface NavbarProps {
  navContainerClassName?: string;
}

export default function Navbar({ navContainerClassName }: NavbarProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItems((prev) => {
      const isOpen = prev[itemName];
      if (isOpen) return {};
      return { [itemName]: true };
    });
  };

  const onMenuClose = () => {
    setExpandedMobileItems({});
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        'px-2 fixed top-0 z-50 bg-neutral-300 dark:bg-primary-dark text-[#4B5563] dark:text-neutral-200 w-full',
        !navContainerClassName?.includes('shadow-') && 'shadow-sm',
        navContainerClassName
      )}
    >
      <div className="" onMouseLeave={() => setActiveMenu(null)}>
        <nav className="flex justify-between items-center font-orbitron lg:px-2 py-4">
          <Logo />
          <DesktopMenu onHover={setActiveMenu} />
          <div className="flex items-center gap-4">
            <LanguageDropdown />
            {/* <DarkModeToggle /> */}
            <Image
              src="/copyme-logo.png"
              alt="copy me"
              width={25}
              height={25}
            />
            <DeWorldAllProducts />

            {/* <SettingModal /> */}
            <SettingDropdown />

            {isMobileMenuOpen ? (
              <button
                className="xl:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={onMenuClose}
              >
                <X className="h-6 w-6 text-gray-800 dark:text-white" />
              </button>
            ) : (
              <button
                className="xl:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
              </button>
            )}
          </div>
        </nav>
        <div className="bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 shadow-xl">
          <Submenu activeMenu={activeMenu} />
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        expandedItems={expandedMobileItems}
        toggleItem={toggleMobileItem}
      />
    </header>
  );
}
