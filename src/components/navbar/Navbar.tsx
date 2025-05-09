'use client';

import { useState } from 'react';
import {
  Bars3Icon,
  GlobeAltIcon,
  MicrophoneIcon,
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
    <header className="fixed top-0 z-50 bg-neutral-200 dark:bg-[#1c1d20] dark:text-neutral-200 w-full">
      <div
        className="bg-neutral-320 dark:bg-[#1c1d20] dark:text-neutral-200 shadow-md"
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
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
        </nav>
        <Submenu activeMenu={activeMenu} />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        expandedItems={expandedMobileItems}
        toggleItem={toggleMobileItem}
      />
    </header>
  );
}
