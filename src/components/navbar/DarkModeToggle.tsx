import Image from 'next/image';
import { useThemeContext } from '@/context/ThemeContext';

export default function DarkModeToggle() {
  const { toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
    >
      <Image src="/moon.png" alt="theme toggle" width={25} height={25} />
    </button>
  );
}
