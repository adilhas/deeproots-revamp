import Image from 'next/image';
import React from 'react';

const BattleGamePlayRewardData = [
  {
    title: 'Daily & Weekly Rewards',
    icon: '/lab/daily-reward.png',
    subtitle: 'for mission completion',
  },
  {
    title: 'Leaderboard Bonuses',
    icon: '/lab/leaderboard-bonus.png',
    subtitle: 'for top players',
  },
  {
    title: 'Magic Box Drops',
    icon: '/lab/magic-box-drop.png',
    subtitle: 'with surprise items & tokens',
  },
  {
    title: 'Level-Up Rewards',
    icon: '/lab/level-up-reward.png',
    subtitle: 'as you grow stronger',
  },
  {
    title: 'Treasury Rewards',
    icon: '/lab/treasury-reward.png',
    subtitle: 'from seasonal prize pools',
  },
  {
    title: 'Up to $1M–$20M',
    icon: '/lab/upto-20m.png',
    subtitle: 'from seasonal prize pools',
  },
];

const BattleGamePlayReward = () => {
  return (
    <div className=" py-16 relative z-10">
      <div className="absolute top-[100px] left-[-10px] w-[200px] md:w-[300px] h-[500px] bg-[#005726] blur-3xl opacity-30 pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[100px] md:w-[300px] h-[200px] md:h-[200px] z-0 opacity-20">
        <Image
          src="/lab/gameplay-reward-obj3.png"
          alt="magic box"
          fill
          className="object-contain object-top-right "
        />
      </div>
      <div className="absolute top-[60px] left-0 w-[200px] md:w-[400px] h-[700px] lg:w-[500px] z-0">
        <Image
          src="/lab/gameplay-reward-obj1.png"
          alt="gameplay reward"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute bottom-[0px] right-0 w-[150px] md:w-[200px] lg:w-[300px] h-[300px]  z-0">
        <Image
          src="/lab/gameplay-reward-obj2.png"
          alt="gameplay reward"
          fill
          className="object-contain object-right"
        />
      </div>
      <div className=" max-w-[1200px] mx-auto overflow-x-hidden z-10">
        <h2 className="text-center text-4xl font-semibold z-10">
          Battle & Gameplay Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 max-w-[750px] mx-auto px-2 md:gap-4 mt-8 md:translate-x-[50px] lg:translate-x-[100px]">
          {BattleGamePlayRewardData.map((item, index) => (
            <div key={index} className="h-fit -translate-y-[20%]">
              <Image
                src={item.icon}
                alt={item.title}
                width={129}
                height={167}
                className="mx-auto w-30 h-36 translate-y-[40px]"
              />
              <div className="bg-[#FFFFFF12] max-w-[200px] min-h-[108px] rounded-3xl text-center flex flex-col items-center justify-center mx-auto">
                <h3 className="text-lg lg:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-lg text-white">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BattleGamePlayReward;
