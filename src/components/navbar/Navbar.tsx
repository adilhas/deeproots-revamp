'use client';

import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from './Logo';
import DarkModeToggle from './DarkModeToggle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import Submenu from './Submenu';
import { LogOutIcon } from 'lucide-react';
import { signOut } from 'next-auth/react';

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
            {/* <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <GlobeAltIcon className="w-6 h-6 text-gray-800 dark:text-white" />
            </button>
            <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              <MicrophoneIcon className="w-6 h-6 text-gray-800 dark:text-red-700" />
            </button> */}
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] text-white font-semibold hover:from-[#7947df] hover:to-[#00aabb] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Log out <LogOutIcon size={18} />
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
