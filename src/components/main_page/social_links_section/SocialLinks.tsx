import { useThemeContext } from '@/context/ThemeContext';
import React from 'react';
import {
  SiTelegram,
  SiX,
  SiReddit,
  SiDiscord,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';

const socialLinks = [
  {
    name: 'X',
    username: '@DeepRoots_earth',
    description:
      'Follow us on Twitter for the latest updates and announcements.',
    href: 'https://twitter.com/DeepRoots_earth',
    Icon: SiX,
    brandColor: '#000000',
    iconColor: '#000000',
  },
  {
    name: 'Reddit',
    username: '@DeepRoots',
    description:
      'Join discussions and explore trending topics in our subreddit.',
    href: 'https://reddit.com/r/DeepRoots',
    Icon: SiReddit,
    brandColor: '#FF4500',
    iconColor: '#FF4500',
  },
  {
    name: 'Discord',
    username: '@DeepRoots',
    description: 'Join discussions and explore trending topics in our Discord.',
    href: 'https://discord.gg/DeepRoots',
    Icon: SiDiscord,
    brandColor: '#5865F2',
    iconColor: '#5865F2',
  },
  {
    name: 'Telegram',
    username: '@DeepRoots',
    description:
      'Join our Telegram group to chat with the community in real time.',
    href: 'https://t.me/DeepRootsCommunity',
    Icon: SiTelegram,
    brandColor: '#2AAAEC',
    iconColor: '#2AAAEC',
  },
  {
    name: 'TikTok',
    username: '@DeepRoots',
    description: 'Watch our latest short videos and creative content.',
    href: 'https://www.tiktok.com/@DeepRoots',
    Icon: SiTiktok,
    brandColor: '#000000',
    iconColor: '#000000',
  },
  {
    name: 'YouTube',
    username: '@DeepRoots',
    description:
      'Join the YouTube community as we share about Deep Roots ecosystem',
    href: 'https://www.youtube.com/@DeepRoots',
    Icon: SiYoutube,
    brandColor: '#000000',
    iconColor: '#FF0000', // YouTube's actual red icon color
  },
];

const SocialLinks = () => {
  const { isDark } = useThemeContext();
  return (
    <section className="py-20 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold font-orbitron bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] w-fit mx-auto text-transparent bg-clip-text">
          Join the Deep Roots Community
        </h2>
        <p className="text-gray-700 dark:text-gray-400 mt-2 font-sans">
          Engage with the DeepRoots community on your favorite platforms.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {socialLinks.map(
          ({
            name,
            username,
            description,
            href,
            Icon,
            brandColor,
            iconColor,
          }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start bg-white dark:bg-[#1F2937] rounded-2xl p-5  transition-all duration-300"
              style={{ boxShadow: `0px 12px 24px 0px #0000001A` }}
            >
              <div className="flex items-center justify-between space-x-2 text-lg font-semibold w-full">
                <div className="flex flex-row items-center gap-3">
                  <div className="bg-[#F1F5F9] dark:bg-[#0F172A] p-2 rounded-xl">
                    <Icon
                      className="text-2xl"
                      style={{
                        color: `${iconColor === '#000000' && isDark ? '#fff' : iconColor}`,
                      }}
                    />
                  </div>
                  <span
                    className="text-lg font-orbitron"
                    style={{ color: `${isDark ? '#fff' : brandColor}` }}
                  >
                    {name}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{username}</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                {description}
              </p>
            </a>
          )
        )}
      </div>
    </section>
  );
};

export default SocialLinks;
