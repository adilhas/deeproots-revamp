import Image from 'next/image';
import React from 'react';
import ImageBanner from './ImageBanner';

const rewards = [
  {
    icon: '/lab/seeding-reward-1.png',
    label: 'Earn 12% APY on all seeded tokens',
  },
  {
    icon: '/lab/seeding-reward-2.png',
    label: 'Locked and flexible staking options',
  },
  {
    icon: '/lab/seeding-reward-3.png',
    label: 'Seeding boosts in-game power and rank',
  },
  {
    icon: '/lab/seeding-reward-4.png',
    label: 'Transparent and on-chain reward distribution',
  },
];

const SeedingRewards = () => {
  return (
    <div className="py-16 text-[#421A00] bg-[#9F7124] relative px-3">
      <div className="absolute top-0 left-0 w-[100px] md:w-[300px] h-[200px] md:h-[300px] z-0">
        <Image
          src="/lab/seeding-bg-obj1.png"
          alt="magic box"
          fill
          className="object-contain object-top-left"
        />
      </div>
      <div className="absolute top-0 right-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-0">
        <Image
          src="/lab/seeding-bg-obj2.png"
          alt="magic box"
          fill
          className="object-contain object-top-right"
        />
      </div>
      <div className="z-10 w-full">
        <div className="w-fit mx-auto px-2">
          <ImageBanner
            src="/lab/seeding-reward-bg.png"
            className="max-w-[300px] md:max-w-none md:w-[500px] lg:w-[700px] h-[300px] md:h-[200px] relative"
          >
            <h1 className=" text-3xl font-bold leading-tight">
              Play. Seed. Refer. Conquer. Earn.
            </h1>
            <p className="text-sm sm:text-lg mt-2 ">
              RootOpia is more than a game — it’s a decentralized reward
              universe...
            </p>
          </ImageBanner>
        </div>
      </div>

      <div className="mt-10 text-center relative w-fit mx-auto ">
        {/* Blurred background */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50px] bg-[#421A00] blur-2xl opacity-90 pointer-events-none z-0" />

        {/* Content wrapper with relative to respect z-index stacking */}
        <div className="relative z-10">
          <h2 className="text-center text-4xl mb-4 font-semibold">
            Seeding Rewards
          </h2>
          <p className="text-xl max-w-[500px] mx-auto text-[#E9A100]">
            Support the RootOpia ecosystem by seeding dRC and earn steady
            rewards.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-2 md:gap-x-6 w-full max-w-[1200px] mx-auto">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-end  rounded-md w-fit mx-auto"
          >
            <Image
              src={reward.icon}
              alt={reward.label}
              width={241}
              height={241}
              className={`object-contain object-bottom ${index === 0 || index === rewards.length - 1 ? 'h-[200px]  w-[250px]' : 'h-[150px]  w-[150px]'}`}
            />
            <ImageBanner
              src={`/lab/${index % 2 === 0 ? 'green-box-bg.png' : 'red-box-bg.png'}`}
              className="w-full max-w-[220px] h-[80px]"
            >
              <p className="text-md text-[#EA9300] px-2 ">{reward.label}</p>
            </ImageBanner>
          </div>
        ))}
      </div>
      <div className="my-16 w-fit mx-auto">
        <Image
          src="/lab/elf.png"
          width={1000}
          height={1000}
          alt="rootopia rewards"
          className="border-[29px] border-[#401A00]"
        />
      </div>
    </div>
  );
};

export default SeedingRewards;
