'use client';

import { useState } from 'react';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Submenu from './Submenu';
import { Globe, Menu, Mic, X } from 'lucide-react';

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
        <nav className="flex justify-between items-center font-orbitron lg:px-2 py-4">
          <Logo />
          <DesktopMenu onHover={setActiveMenu} />
          <div className="flex items-center gap-4">
            <button className="p-2 font-extrabold text-2xl rounded bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8]  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] hover:bg-gray-200 dark:hover:bg-gray-700 transition to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
              Ai
            </button>
            <DarkModeToggle />
            <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <Globe className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <Mic className="w-6 h-6 text-gray-800 dark:text-red-700" />
            </button>

            {isMobileMenuOpen ? (
              <button
                className="xl:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMobileMenuOpen(false)}
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
