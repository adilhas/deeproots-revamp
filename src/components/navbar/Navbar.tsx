'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  GlobeAltIcon,
  MicrophoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Submenu from './Submenu';

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<
    Record<string, boolean>
  >({});

  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <header className="shadow-sm fixed top-0 z-50 bg-neutral-300 dark:bg-primary-dark dark:text-neutral-200 w-full">
      <div
        className="bg-neutral-300 dark:bg-primary-dark dark:text-neutral-200"
        onMouseLeave={() => setActiveMenu(null)}
      >
        <nav className="flex justify-between items-center font-orbitron lg:px-12 p-4">
          <Logo />
          <DesktopMenu onHover={setActiveMenu} />
          <div className="flex items-center gap-4">
            <DarkModeToggle />
            <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <GlobeAltIcon className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <MicrophoneIcon className="w-6 h-6 text-gray-800 dark:text-red-700" />
            </button>
            {isMobileMenuOpen ? (
              <button
                className="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
              </button>
            ) : (
              <button
                className="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
              </button>
            )}
          </div>
        </nav>
        <Submenu activeMenu={activeMenu} />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        expandedItems={expandedMobileItems}
        toggleItem={toggleMobileItem}
      />
    </header>
  );
}
