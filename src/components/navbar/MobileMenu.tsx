import { menuSection } from '@/constants/sectionData';
import { ChevronDown, ChevronUp } from 'lucide-react';

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
  return (
    <div
      className={`min-h-screen p-3 font-orbitron xl:hidden absolute top-[100%] left-0 w-full z-40 bg-neutral-300 dark:bg-primary-dark shadow-lg border-t border-gray-200 dark:border-gray-700 transform transition-transform duration-300 overflow-y-auto max-h-[calc(100vh-4rem)] ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex flex-col">
        <ul className="flex flex-col">
          {menuSection.map((item) => (
            <li key={item.name} className="mb-4">
              <button
                onClick={() => toggleItem(item.name)}
                className="flex justify-between items-center w-full cursor-pointer text-[#0085a8] font-orbitron font-extrabold text-xl hover:scale-105 px-4 py-2 hover:border-2 hover:border-[#0085a8] rounded transition-all"
              >
                <span>{item.name}</span>
                {expandedItems[item.name] ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Conditionally render dropdown */}
              {expandedItems[item.name] && (
                <div className="overflow-y-auto transition-all duration-300 ease-in-out mt-2">
                  <ul className="pb-2 pl-8 pr-4">
                    {item.subitems.map((subitem, index) => (
                      <li key={index}>
                        <a
                          href={subitem.link}
                          className="my-3 block w-full text-left px-4 py-2 bg-neutral-400 text-neutral-950 hover:scale-105 dark:bg-neutral-700 dark:text-neutral-200 font-orbitron hover:bg-neutral-600 rounded transition-all"
                        >
                          {subitem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
