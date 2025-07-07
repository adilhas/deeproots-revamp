import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

interface CardProps {
  icon: string;
  title: string;
  text: string;
}

const DeepRootsCard = ({ icon, title, text }: CardProps) => {
  const { isDark } = useThemeContext();
  return (
    <div
      className="bg-gradient-to-r from-gradient-from-light to-gradient-to-light dark:from-gradient-from dark:to-gradient-to  bg-clip-text text-transparent rounded-3xl  py-8 px-6 text-center flex flex-col items-center max-w-[300px] w-full"
      style={{
        boxShadow: `0px 15px 31px 0px ${isDark ? '#000000' : '#CCCCCC'}`,
      }}
    >
      <div className="mb-4">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-lg font-semibold text-gradient mb-2">{title}</h3>
      <p className="text-sm text-[#1F2937] dark:text-[#F1F5F9]">{text}</p>
    </div>
  );
};

export default DeepRootsCard;
