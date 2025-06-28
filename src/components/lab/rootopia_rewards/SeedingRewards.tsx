import Image from 'next/image';
import React from 'react';
import ImageBanner from './ImageBanner';
import { useBreakpoint } from '@/hooks/useBreakPoint';

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
  const { isAbove } = useBreakpoint();
  return (
    <div className=" text-[#421A00] bg-[#9F7124] relative px-3 overflow-x-hidden">
      <div className="relative max-w-[1200px] mx-auto pt-16">
        <div className="z-10 w-full relative pt-20 md:pt-8">
          <div className="absolute top-[-30px] left-[-30px] md:left-0 w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-0">
            <Image
              src="/lab/seeding-bg-obj1.png"
              alt="magic box"
              fill
              className="object-contain object-top-left"
            />
          </div>
          <div className="absolute bottom-[-40px] right-[-30px] md:top-[-20px] md:right-[30px] w-[200px] md:w-[300px] h-[200px] md:h-[300px] z-0">
            <Image
              src="/lab/seeding-bg-obj2.png"
              alt="magic box"
              fill
              className="object-contain object-top-right opacity-90"
            />
          </div>
          <div className="w-fit mx-auto px-2">
            <ImageBanner
              src={`${isAbove('md') ? '/lab/seeding-reward-bg.png' : '/lab/seeding-reward-bg-mob.png'}`}
              className="max-w-[280px] md:max-w-none md:w-[500px] lg:w-[700px] h-[350px] md:h-[200px] relative"
            >
              <h1 className="text-2xl lg:text-4xl font-extrabold leading-tight">
                Play. Seed. Refer. Conquer. Earn.
              </h1>
              <p className="text-md  mt-2 px-4">
                RootOpia is more than a game — it’s a decentralized reward
                universe. Every seed, referral, battle, or level-up unlocks
                value across the DeepRoots economy.
              </p>
            </ImageBanner>
          </div>
        </div>

        <div className="mt-10 text-center relative w-fit mx-auto ">
          {/* Blurred background */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[60px] bg-[#421A00] blur-2xl opacity-90 pointer-events-none z-0" />

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
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-4 gap-x-2 md:gap-x-6 w-full max-w-[1200px] mx-auto  -translate-y-0 lg:-translate-y-[60px] mt-10 md:mt-0">
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
                className={`object-contain object-bottom ${index === 0 || index === rewards.length - 1 ? 'md:h-[300px]  md:w-[350px] w-[150px] h-[150px]' : 'md:h-[200px] h-[150px]  md:w-[200px] w-[150px]'}`}
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
        <div className="my-16 w-full mx-auto">
          <Image
            src="/lab/elf.png"
            width={1200}
            height={1000}
            alt="rootopia rewards"
            className="border-[29px] border-[#401A00] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SeedingRewards;
