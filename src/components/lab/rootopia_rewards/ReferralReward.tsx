import React from 'react';
import ImageBanner from './ImageBanner';
import Image from 'next/image';
import { RewardLevel } from './RewardLevel';

const rewardsData = [
  {
    level: 1,
    title: 'direct invite rewards',
    percentage: '+5%',
    arrowSize: 30,
    headingSize: 'text-4xl',
    percentSize: 'text-5xl',
  },
  {
    level: 2,
    title: '2nd-tier actions',
    percentage: '+3%',
    arrowSize: 20,
    headingSize: 'text-4xl',
    percentSize: 'text-3xl',
  },
  {
    level: 3,
    title: 'extended network',
    percentage: '+2%',
    arrowSize: 15,
    headingSize: 'text-4xl',
    percentSize: 'text-2xl',
  },
];

const ReferralReward = () => {
  return (
    <div className=" bg-[#9F7124] px-3 relative overflow-x-hidden">
      <div className="max-w-[1200px] mx-auto relative pb-[130px] md:pb-0">
        <div className="absolute top-[30px] left-0 w-[300px] md:w-[400px] h-[200px] md:h-[300px] z-0">
          <Image
            src="/lab/referral-reward-obj1.png"
            alt="magic box"
            fill
            className="object-contain object-top-left"
          />
        </div>
        <div className="absolute bottom-[0px] right-1/2 translate-x-1/2 md:translate-x-0 md:right-[-60px] w-[250px] h-[400px] md:w-[200px] lg:w-[300px] md:h-[300px]  z-10">
          <Image
            src="/lab/referral-reward-obj2.png"
            alt="gameplay reward"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
        <div className="max-w-[900px] py-16 mx-auto">
          <ImageBanner
            src={'/lab/referral-reward-frame.png'}
            childClassName="flex flex-col justify-between md:justify-between"
            className=" md:max-w-none mx-auto h-[1200px] md:h-auto"
          >
            <div className="mt-10 px-3">
              <h2 className="text-center text-4xl font-semibold z-10 ">
                Referral Rewards
              </h2>
              <p className="text-lg text-white">
                Grow your army. Earn through 3-tier referral bonuses.
              </p>
            </div>
            <div className="flex flex-col md:flex-row jsutify-between w-full mx-auto px-3">
              <div className="w-full md:w-1/2">
                <div>
                  <div className="w-fit mx-auto">
                    <Image
                      src="/lab/reward-blur.png"
                      alt="referral reward"
                      width={250}
                      height={213}
                    />
                  </div>

                  {rewardsData.map((reward) => (
                    <RewardLevel key={reward.level} {...reward} />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/2 px-2">
                <Image
                  src="/lab/referral-tree.png"
                  alt="referral tree"
                  width={425}
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <ImageBanner
              src="/lab/referral-reward-min-frame.png"
              className="md:max-w-[500px] text-lg md:text-2xl -translate-y-[9px] hidden md:block"
            >
              Referral dashboard with real-time earnings
            </ImageBanner>
            <div className="mt-10 block md:hidden w-full">
              <Image
                src={'/lab/referral-reward-min-frame-mob.png'}
                width={200}
                height={20}
                alt="referral reward mobile frame"
                className="w-full h-[10px]"
              />
              <div className="p-3 pb-10 text-xl">
                Referral dashboard with real-time earnings
              </div>
            </div>
          </ImageBanner>
        </div>
      </div>
    </div>
  );
};

export default ReferralReward;
