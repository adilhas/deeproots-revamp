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
      className={`shadow-md mx-4 overflow-hidden transition-all duration-500 ease-in-out ${activeMenu ? 'max-h-96' : 'max-h-0'}`}
    >
      {activeMenu && current && (
        <div className="w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 py-3">
              {current.subitems.map((subitem: MenuItem) => (
                <Link
                  target="_blank"
                  key={subitem.title}
                  href={subitem.link}
                  className="block p-2  dark:hover:bg-neutral-600 hover:bg-neutral-50   rounded transition-colors"
                >
                  <div className="text-md font-semibold">{subitem.title}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
