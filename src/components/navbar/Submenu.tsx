import { useTranslation } from 'react-i18next';
import { MenuItem, MenuSection } from './types';
import Link from 'next/link';
import { getMenuSectionData } from './headerMenuData';

type Props = {
  activeMenu: string | null;
};

const isExternalLink = (url: string) => /^https?:\/\//.test(url);

export default function Submenu({ activeMenu }: Props) {
  const { t } = useTranslation('common');
  const menuSection = getMenuSectionData(t);

  const current = menuSection.find(
    (item: MenuSection) => item.name === activeMenu
  );

  return (
    <div
      className={`mx-4 backdrop-blur-md transition-all duration-500 ease-in-out rounded-2xl overflow-hidden ${
        activeMenu ? 'max-h-[28rem] py-6 opacity-100' : 'max-h-0 py-0 opacity-0'
      }`}
    >
      {activeMenu && current && (
        <div className="w-full">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {current.subitems.map((subitem: MenuItem) => {
                const commonClasses =
                  'group block rounded-xl p-4 bg-neutral-50 dark:bg-neutral-900/50 border border-transparent hover:border-primary dark:hover:border-[#0085a8] transition-all duration-300 hover:shadow-lg';

                const content = (
                  <>
                    <div className="text-lg font-bold text-neutral-800 dark:text-white group-hover:text-[#0085a8] transition-colors">
                      {subitem.title}
                    </div>
                    <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 group-hover:text-[#0085a8] transition-colors">
                      {subitem.description}
                    </div>
                  </>
                );

                return isExternalLink(subitem.link) ? (
                  <a
                    key={subitem.title}
                    href={subitem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClasses}
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={subitem.title}
                    href={subitem.link}
                    className={commonClasses}
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
