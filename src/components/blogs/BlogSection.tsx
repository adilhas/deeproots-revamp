'use client';

import React from 'react';
import Image from 'next/image';

const pinnedBlogs = [
  {
    title:
      'What Is Deep Roots? The Movement Behind DeWorld and the Future of the Decentr…',
    description:
      'Discover Deep Roots — the decentralized blockchain and AI movement powering DeWorld. Join the future of open collaboration, privacy, and innovation.',
    date: 'June 2025',
  },
  {
    title: 'What is dRC? The Pulse of Deep Roots and the Currency of DeWorld',
    description:
      'dRC is the native utility currency of Deep Roots — powering staking, governance, GameFi, and access to a decentralized ecosystem built to last generations.',
    date: 'June 2025',
  },
  {
    title:
      'What Is a Foundation Full Seat? Early Access, On-Chain Power, and the Future of De…',
    description:
      'Foundation Full Seats offer exclusive access, on-chain rewards, and governance rights in the Deep Roots ecosystem. Learn how to claim your seat in DeWorld.',
    date: 'June 2025',
  },
];

const allNewsBlogs = [
  {
    title:
      'What Is the PrivateSeed Access Round? Join the First 100 Visionaries of DeWorld',
    description:
      'Join the Deep Roots PrivateSeed Round: Limited seats, early ecosystem access, and long-term governance rights before public release. Apply for a Foundation Full Seat now.',
    date: 'June 2025',
  },
  {
    title:
      'dRC Tokenomics: The Native Currency Powering Deep Roots and DeWorld',
    description:
      'Explore the tokenomics of dRC – DeepRoots’ native currency fueling 20+ dApps, governance, GameFi, and long-term participation across the DeWorld ecosystem.',
    date: 'June 2025',
  },
  {
    title:
      'What Is Seeding on Deep Roots? Grow the Ecosystem, Earn On-Chain Rewards',
    description:
      'Seeding is how users support and grow the Deep Roots ecosystem. Earning 12% APY, unlocking access, and fueling DeWorld. It’s not staking. It’s seeding.',
    date: 'June 2025',
  },
  {
    title:
      'What Is DeWorld? The Meaning Behind the Decentralized World of Deep…',
    description:
      'DeWorld is the decentralized internet powered by Deep Roots: a connected Web3 ecosystem of 18 dApps built on trust, transparency, and long-term utility.',
    date: 'June 2025',
  },
];

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  image?: string;
}

const BlogCard = ({ title, description, date, image }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-neutral text-neutral-content rounded-xl border border-gray-200 dark:border-gray-700 p-4 w-full max-w-sm">
      {image && (
        <div className="w-full h-20 relative mb-3 rounded-lg overflow-hidden">
          <Image src={image} alt="blog" fill className="object-cover" />
        </div>
      )}
      <h3 className="font-semibold text-sm leading-snug text-black dark:text-white mb-1">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-xs mb-2">
        {description}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-xs">{date}</p>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section className="bg-[#E9E9E9] dark:bg-[#1C1D20] text-[#696969] dark:text-[#8F8F8F] py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-center text-sm font-bold tracking-widest mb-6">
        BLOG
      </h1>

      {/* Tabs + Search */}
      <div className="flex flex-wrap  justify-center items-center gap-2 mb-8">
        <div className="flex flex-row justify-start gap-3">
          {[
            'All Posts',
            'Community',
            'Company',
            'Campaigns',
            'Quest',
            'News',
            'Events',
          ].map((tab) => (
            <a key={tab} className={` text-[#696969] dark:text-[#8F8F8F]`}>
              {tab}
            </a>
          ))}
        </div>
        <input
          type="text"
          placeholder="Search posts"
          className="input input-bordered input-sm w-full max-w-xs ml-auto"
        />
      </div>

      {/* Pinned Blogs */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Pinned Blogs</h2>
        <div className="flex flex-wrap gap-4">
          {pinnedBlogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>

      {/* All News */}
      <div>
        <h2 className="text-lg font-semibold mb-4">All news</h2>
        <div className="flex flex-wrap gap-4">
          {allNewsBlogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
