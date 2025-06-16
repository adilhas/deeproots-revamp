import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaDiscord, FaXTwitter } from 'react-icons/fa6';
import { useThemeContext } from '@/context/ThemeContext';

interface DeWorldCardProps {
  name: string;
  category: string;
  description: string;
  socialLinks: { name: string; link: string }[];
  projectLink: string;
  darkIcon: string;
  lightIcon: string;
}

const iconMap = {
  twitter: FaTwitter,
  discord: FaDiscord,
  X: FaXTwitter,
};

const DeWorldCard: React.FC<DeWorldCardProps> = ({
  name,
  category,
  description,
  socialLinks,
  projectLink,
  darkIcon,
  lightIcon,
}) => {
  const { isDark } = useThemeContext();

  return (
    <div
      className="bg-white dark:bg-[#1E222C] rounded-xl shadow-md p-4 w-full max-w-sm  border-muted flex flex-col justify-between h-full"
      style={{ boxShadow: `${isDark ? '0px 4px 20px 0px #000000' : 'none'}` }}
    >
      <div>
        <div className="flex flex-row items-center gap-2 mb-2">
          <div className="p-2 rounded-md dark:bg-[#581C8757] bg-[#F3E8FF]">
            <Image
              src={isDark ? darkIcon : lightIcon}
              alt="icon"
              width={42}
              height={42}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold text-[#1F2937] dark:text-white">
              {name}
            </h3>
            <span className="w-fit px-3 py-1 text-sm rounded-full text-[#5925DC] font-semibold bg-[#F4F3FF] dark:bg-[#F4F3FF] ">
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-3 my-4">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name as keyof typeof iconMap];
            return (
              <a
                key={link.name}
                href={link.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-5 h-5 text-[#64748B] dark:text-[#F8FAFC]" />
              </a>
            );
          })}
        </div>

        <p className="text-sm text-[#4B5563] dark:text-[#E2E8F0]">
          {description}
        </p>
      </div>

      {/* Spacer above the button */}
      <div className="mt-6">
        <button className="btn-outline w-full text-[#4B5563] dark:text-[#E2E8F0]">
          {projectLink}
        </button>
      </div>
    </div>
  );
};

export default DeWorldCard;
