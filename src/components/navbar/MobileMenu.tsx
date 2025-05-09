'use client';

import {
  ChevronUpIcon,
  ChevronDownIcon,
  BellIcon,
} from '@heroicons/react/24/outline';
import { menuSection } from '@/constants/navitem';

type Props = {
  isOpen: boolean;
  expandedItems: Record<string, boolean>;
  toggleItem: (itemName: string) => void;
};

export default function MobileMenu({
  isOpen,
  expandedItems,
  toggleItem,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="p-3 font-orbitron md:hidden absolute min-h-screen top-full left-0 w-full z-40 bg-neutral-300 dark:bg-[#1c1d20] shadow-lg border-t border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div className="flex flex-col">
        <ul className="flex flex-col ">
          {menuSection.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => toggleItem(item.name)}
                className="flex justify-between items-center w-full cursor-pointer text-[#0085a8] font-orbitron font-extrabold text-xl md:my-10 hover:scale-105 mb-8 text-center px-4 py-2 hover:border-2 hover:border-[#0085a8] rounded transition-all"
              >
                <span>
                  <BellIcon className="w-5 h-5" />
                </span>
                <span>{item.name} </span>
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
                        className="my-3 block w-full text-left px-4 py-2 bg-neutral-400 text-neutral-950 hover:scale-105 dark:bg-neutral-700 dark:text-neutral-200 font-orbitron hover:bg-neutral-600 rounded transition-all"
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
  );
}
