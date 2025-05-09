import { menuSection } from '@/constants/navitem';

type Props = {
  onHover: (menuName: string) => void;
};

export default function DesktopMenu({ onHover }: Props) {
  return (
    <ul className="hidden md:flex gap-6">
      {menuSection.map((item) => (
        <li key={item.name} className="relative">
          <span
            className="hover:border-b-2 hover:border-[#0085A8] font-bold p-3 rounded-xl cursor-pointer"
            onMouseEnter={() => onHover(item.name)}
          >
            {item.name}
          </span>
        </li>
      ))}
    </ul>
  );
}
