import { menuSection } from '@/constants/sectionData';
import { MenuItem, MenuSection } from './types';
import Link from 'next/link';

type Props = {
  activeMenu: string | null;
};

export default function Submenu({ activeMenu }: Props) {
  const current = menuSection.find(
    (item: MenuSection) => item.name === activeMenu
  );

  return (
    <div
      className={` mx-4 backdrop-blur-md transition-all duration-500 ease-in-out rounded-2xl overflow-hidden ${
        activeMenu ? 'max-h-[28rem] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}
    >
      {activeMenu && current && (
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.subitems.map((subitem: MenuItem) => (
                <Link
                  key={subitem.title}
                  href={subitem.link}
                  className="group block rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50 border border-transparent hover:border-primary dark:hover:border-[#0085a8] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-[#0085a8] transition-colors">
                    {subitem.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
