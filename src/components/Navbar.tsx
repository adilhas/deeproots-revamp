import { useState } from 'react';
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

type MenuItem = {
  name: string;
  subItems: string[];
};

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<
    Record<string, boolean>
  >({});

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const menuItems: MenuItem[] = [
    {
      name: 'Home',
      subItems: ['Homepage', 'Landing Page', 'Dashboard'],
    },
    {
      name: 'About',
      subItems: ['Our Story', 'Team', 'Vision & Mission'],
    },
    {
      name: 'Services',
      subItems: [
        'Web Development',
        'App Development',
        'UI/UX Design',
        'Consulting',
      ],
    },
    {
      name: 'Contact',
      subItems: ['Email Us', 'Phone', 'Visit Office'],
    },
  ];

  const handleMouseEnter = (menuName: string) => {
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const toggleMobileItem = (itemName: string) => {
    setExpandedMobileItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <header className="relative z-50">
      {/* Navbar container */}
      <div
        className="bg-white dark:bg-gray-900 shadow-md"
        onMouseLeave={handleMouseLeave}
      >
        <nav className="flex justify-between items-center px-6 py-4 font-orbitron">
          <div className="text-2xl font-bold text-gray-800 dark:text-white flex justify-between">
            <div className="w-10  h-10 md:w-16 md:h-16  rounded-full overflow-hidden">
              <Image
                alt="logo"
                width={100}
                height={100}
                src="/landing/logo.png"
              />
            </div>
            <div className="self-center">DeepRoots</div>
          </div>

          {/* Center: Menu (hidden on mobile) */}
          <ul className="hidden md:flex gap-6">
            {menuItems.map((item) => (
              <li key={item.name} className="relative">
                <button
                  className={`text-gray-700 dark:text-white font-medium hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeMenu === item.name
                      ? 'text-blue-600 dark:text-blue-400'
                      : ''
                  }`}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Dark mode & hamburger */}
          <div className="flex items-center gap-4">
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {darkMode ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-800 dark:text-white" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
          </div>
        </nav>

        {/* Submenu area - expands the navbar height */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            activeMenu ? 'max-h-96' : 'max-h-0'
          }`}
        >
          {activeMenu && (
            <div className="w-full bg-gray-100 dark:bg-gray-800 px-6 py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                    {activeMenu}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {menuItems
                    .find((item) => item.name === activeMenu)
                    ?.subItems.map((subItem, index) => (
                      <a
                        key={index}
                        href="#"
                        className="block p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40  bg-opacity-50 transition-opacity duration-300">
          <div className="absolute inset-y-0 left-0  w-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-gray-800 dark:text-white">
                Logo
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
              </button>
            </div>
            <div className="h-[calc(100%-80px)] overflow-y-auto">
              <ul className="flex flex-col">
                {menuItems.map((item) => (
                  <li
                    key={item.name}
                    className="border-b border-gray-200 dark:border-gray-700"
                  >
                    <button
                      onClick={() => toggleMobileItem(item.name)}
                      className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span>{item.name}</span>
                      {expandedMobileItems[item.name] ? (
                        <ChevronUpIcon className="w-5 h-5" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5" />
                      )}
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        expandedMobileItems[item.name] ? 'max-h-96' : 'max-h-0'
                      }`}
                    >
                      <ul className="pb-2 pl-8 pr-4">
                        {item.subItems.map((subItem, index) => (
                          <li key={index}>
                            <a
                              href="#"
                              className="block px-2 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                            >
                              {subItem}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
