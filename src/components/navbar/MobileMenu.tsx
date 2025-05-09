'use client';

import {
  XMarkIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { menuSection } from '@/constants/navitem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  expandedItems: Record<string, boolean>;
  toggleItem: (itemName: string) => void;
};

export default function MobileMenu({
  isOpen,
  onClose,
  expandedItems,
  toggleItem,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-opacity-50 transition-opacity duration-300">
      <div className="absolute inset-y-0 left-0 w-full bg-white dark:bg-[#1c1d20] dark:text-neutral-200 shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="text-2xl font-bold text-gray-800 dark:text-white">
            Logo
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-white" />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto">
          <ul className="flex flex-col">
            {menuSection.map((item) => (
              <li
                key={item.name}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <button
                  onClick={() => toggleItem(item.name)}
                  className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <span>{item.name}</span>
                  {expandedItems[item.name] ? (
                    <ChevronUpIcon className="w-5 h-5" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedItems[item.name] ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className="pb-2 pl-8 pr-4">
                    {item.subitems.map((subitem, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="block px-2 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
                        >
                          {subitem.title}
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
  );
}
