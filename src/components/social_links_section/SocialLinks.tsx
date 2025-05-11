import React from 'react';
import { MessageCircle, Twitter, MessagesSquare } from 'lucide-react';
import RedditIcon from './RedditIcon';

const socialLinks = [
  {
    name: 'Telegram',
    description:
      'Join our Telegram group to chat with the community in real time.',
    href: 'https://t.me/DeepRootsCommunity',
    color: '#0088cc',
    Icon: MessageCircle,
  },
  {
    name: 'X',
    description:
      'Follow us on Twitter for the latest updates and announcements.',
    href: 'https://twitter.com/DeepRoots',
    color: '#1DA1F2',
    Icon: Twitter,
  },
  {
    name: 'Reddit',
    description:
      'Join discussions and explore trending topics in our subreddit.',
    href: 'https://www.reddit.com/r/DeepRoots',
    color: '#FF4500',
    Icon: RedditIcon,
  },
  {
    name: 'Discord',
    description:
      'Be part of our Discord server for deeper discussions and live events.',
    href: 'https://discord.gg/DeepRoots',
    color: '#5865F2',
    Icon: MessagesSquare,
  },
];

const SocialLinks = () => {
  return (
    <section className="py-12 px-6 bg-neutral-100 dark:bg-[#1c1d20]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-orbitron text-gray-900 dark:text-neutral-200">
          Social Media &amp; Community Links
        </h2>
        <p className="text-gray-600 font-sans dark:text-gray-400 mt-2">
          Engage with the DeepRoots community on your favorite platforms.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {socialLinks.map(({ name, description, href, color, Icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white flex justify-center items-start md:items-center md:flex-row flex-col dark:bg-[#2A2B2E] rounded-xl p-6 shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <div
              className="p-5 rounded-lg bg-opacity-10 md:mr-8 border-2 border-neutral-100 shadow-lg dark:shadow-[#1c1d20] dark:border-none inline-block"
              style={{ color }}
            >
              <Icon size={30} />
            </div>
            <div className="flex justify-start items-start flex-col">
              <h3 className="mt-4 text-xl font-semibold" style={{ color }}>
                {name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="https://deeproots.community"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#0085a8] text-white rounded-full text-lg font-semibold shadow-md hover:scale-105 transition"
        >
          Visit Our Official Community
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;
