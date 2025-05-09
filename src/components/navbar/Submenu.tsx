import { menuSection } from '@/constants/navitem';
import { MenuItem, MenuSection } from './types';

type Props = {
  activeMenu: string | null;
};

export default function Submenu({ activeMenu }: Props) {
  const current = menuSection.find(
    (item: MenuSection) => item.name === activeMenu
  );

  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeMenu ? 'max-h-96' : 'max-h-0'}`}
    >
      {activeMenu && current && (
        <div className="w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 py-3">
              {current.subitems.map((subitem: MenuItem) => (
                <a
                  key={subitem.title}
                  href="#"
                  className="block p-2 hover:bg-neutral-600  rounded transition-colors"
                >
                  {subitem.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
