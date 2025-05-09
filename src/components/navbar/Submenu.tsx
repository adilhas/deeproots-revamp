import { menuSection } from '@/constants/sectionData';
import { MenuItem, MenuSection } from './types';
import { BellIcon } from '@heroicons/react/24/outline';

type Props = {
  activeMenu: string | null;
};

export default function Submenu({ activeMenu }: Props) {
  const current = menuSection.find(
    (item: MenuSection) => item.name === activeMenu
  );

  return (
    <div
      className={`mx-4 overflow-hidden transition-all duration-500 ease-in-out ${activeMenu ? 'max-h-96' : 'max-h-0'}`}
    >
      {activeMenu && current && (
        <div className="w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 py-3">
              {current.subitems.map((subitem: MenuItem) => (
                <a
                  key={subitem.title}
                  href="#"
                  className="block p-2  dark:hover:bg-neutral-600 hover:bg-neutral-50   rounded transition-colors"
                >
                  <div className="flex">
                    <div className=" p-1 rounded self-center m-3">
                      <BellIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-md font-semibold">
                        {subitem.title}
                      </div>
                      <div className="text-sm light:text-neutral-400">
                        {subitem.description}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
