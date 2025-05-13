import { menuSection } from '@/constants/sectionData';
import { ChevronDown } from 'lucide-react';

type Props = {
  onHover: (menuName: string) => void;
};

export default function DesktopMenu({ onHover }: Props) {
  return (
    <ul className="hidden xl:flex mx-5">
      {menuSection.map((item) => (
        <li key={item.name} className="relative self-center">
          <div
            className="group flex text-lg self-center hover:border-b-2 hover:border-[#0085A8] font-bold p-3 rounded-xl cursor-pointer"
            onMouseEnter={() => onHover(item.name)}
          >
            <div
              className={
                item.name === 'DeWorld'
                  ? 'bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] font-bold text-2xl bg-clip-text text-transparent'
                  : ''
              }
            >
              {item.name}
            </div>
            <ChevronDown className="w-6 h-6 self-center transform transition-transform duration-300 group-hover:rotate-180" />
          </div>
        </li>
      ))}
    </ul>
  );
}
