// components/RootopiaRewards.tsx
import Image from 'next/image';
import React from 'react';

const rewards = [
  {
    icon: '/academy/rootopia-prize.png',
    label: 'Daily + Weekly\nPrizes',
  },
  {
    icon: '/academy/rootopia-ranking.png',
    label: 'Leaderboard\nRankings',
  },
  {
    icon: '/academy/rootopia-treasure.png',
    label: 'Magic Box &\nTreasury Drops',
  },
  {
    icon: '/academy/rootopia-rewards.png',
    label: 'Seeding Level-Up\nRewards',
  },
];

const RootopiaRewards = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center bg-clip-text text-transparent">
        Rootopia Rewards
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-4 ">
            <div className="flex-[1.2] bg-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-md">
              <Image
                src={rewards[0].icon}
                alt={rewards[0].label}
                width={164}
                height={164}
                className="mb-4 lg:w-[164px] lg:h-[164px] w-20"
              />
              <p className="font-semibold whitespace-pre-line text-2xl">
                {rewards[0].label}
              </p>
            </div>
            <div className="flex-[0.8] bg-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-md">
              <Image
                src={rewards[1].icon}
                alt={rewards[1].label}
                width={164}
                height={164}
                className="mb-4 lg:w-[164px] lg:h-[164px] w-20"
              />
              <p className="font-semibold whitespace-pre-line text-2xl">
                {rewards[1].label}
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-[0.8] bg-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-md">
              <Image
                src={rewards[2].icon}
                alt={rewards[2].label}
                width={164}
                height={164}
                className="mb-4 lg:w-[164px] lg:h-[164px] w-20"
              />
              <p className="font-semibold whitespace-pre-line text-2xl">
                {rewards[2].label}
              </p>
            </div>
            <div className="flex-[1.2] bg-gray-100 p-6 rounded-2xl flex flex-col items-center text-center shadow-md">
              <Image
                src={rewards[3].icon}
                alt={rewards[3].label}
                width={164}
                height={164}
                className="mb-4 lg:w-[164px] lg:h-[164px] w-20"
              />
              <p className="font-semibold whitespace-pre-line text-2xl">
                {rewards[3].label}
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[609px] lg:w-[473px] lg:h-[609px]">
          <Image
            src="/academy/this-is-rootopia.png"
            alt="Rootopia Poster"
            fill
            className="rounded-3xl shadow-lg object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default RootopiaRewards;
