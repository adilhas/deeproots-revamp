import React from 'react';
import ImageBanner from './ImageBanner';
import Image from 'next/image';

const SpecialEvents = () => {
  return (
    <div className=" overflow-x-hidden ">
      <div className="mt-10 max-w-[1200px] mx-auto relative pb-80  lg:pb-0 px-3 min-h-[710px]">
        <div className="absolute bottom-0 md:bottom-[40px] left-[-140px] md:left-[-250px] lg:left-[-170px] w-[450px] h-[400px] md:w-[450px] md:h-[450px] z-10 lg:hidden">
          <Image
            src="/lab/special-event-obj1.png"
            alt="gameplay reward"
            fill
            className="object-contain object-bottom-left"
          />
        </div>
        <div className="absolute top-0 left-[0px] w-[100px] md:w-[300px] h-[200px] md:h-[200px] z-0 opacity-20">
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
          <div className="max-w-[600px] mx-auto my-10 flex flex-col gap-6 relative">
            <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
              Daily & Weekly Rewards
            </ImageBanner>
            <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
              Clan Wars & Team Challenges
            </ImageBanner>
            <ImageBanner className="h-[100px] text-xl md:text-3xl font-bold">
              Founders Quests & Early Access Perks
            </ImageBanner>
            <div className="absolute bottom-[-150px]  left-[-400px]  w-[450px] h-[400px] md:w-[450px] md:h-[450px] z-10 hidden lg:block">
              <Image
                src="/lab/special-event-obj1.png"
                alt="gameplay reward"
                fill
                className="object-contain object-bottom-left"
              />
            </div>
            <div className="absolute bottom-0 md:bottom-[-100px] right-[-290px] w-[300px] h-[450px] md:h-[500px] md:w-[250px] lg:w-[400px] lgs:h-[700px] hidden lg:block z-0">
              <div className="absolute bottom-0 right-[-10px] w-[200px] md:w-[300px] h-[500px] bg-[#FF7272] blur-3xl opacity-30 pointer-events-none z-0" />
              <Image
                src="/lab/special-event-obj2.png"
                alt="gameplay reward"
                fill
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
          <div className="absolute bottom-0 md:bottom-[50px] right-[-100px] w-[300px] h-[450px] md:h-[500px] md:w-[250px] lg:w-[400px] lgs:h-[700px] block lg:hidden  z-0">
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
    </div>
  );
};

export default SpecialEvents;
