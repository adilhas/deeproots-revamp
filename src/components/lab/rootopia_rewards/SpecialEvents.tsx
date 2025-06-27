import React from 'react';
import ImageBanner from './ImageBanner';
import Image from 'next/image';

const SpecialEvents = () => {
  return (
    <div className="mt-10 relative pb-40 md:pb-0 px-3 overflow-x-hidden min-h-[700px]">
      <div className="absolute bottom-[0px] left-0 w-[300px] md:w-[200px] h-[300px] md:h-[500px] lg:w-[500px] z-0">
        <Image
          src="/lab/special-event-obj1.png"
          alt="gameplay reward"
          fill
          className="object-contain object-left"
        />
      </div>
      <div className="absolute top-0 left-0 w-[100px] md:w-[300px] h-[200px] md:h-[200px] z-0 opacity-20">
        <Image
          src="/lab/special-event-obj3.png"
          alt="magic box"
          fill
          className="object-contain object-top-right "
        />
      </div>

      <div className="py-20 z-10">
        <h2 className="text-center text-4xl font-semibold z-10">
          Special Events
        </h2>
        <div className="max-w-[600px] mx-auto my-10 flex flex-col gap-6">
          <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
            Daily & Weekly Rewards
          </ImageBanner>
          <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
            Clan Wars & Team Challenges
          </ImageBanner>
          <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
            Founders Quests & Early Access Perks
          </ImageBanner>
        </div>
        <div className="absolute bottom-[0px] right-0 w-[300px] h-[300px] md:w-[200px] lg:w-[300px] md:h-[500px]  z-0">
          <div className="absolute bottom-0 right-[-10px] w-[200px] md:w-[300px] h-[500px] bg-[#FF7272] blur-3xl opacity-30 pointer-events-none z-0" />
          <Image
            src="/lab/special-event-obj2.png"
            alt="gameplay reward"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialEvents;
