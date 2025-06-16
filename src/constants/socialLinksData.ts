import {
  SiTelegram,
  SiX,
  SiReddit,
  SiDiscord,
  SiTiktok,
  SiYoutube,
} from 'react-icons/si';

export const socialLinks = [
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
