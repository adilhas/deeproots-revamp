import React from 'react';
import ImageBanner from './ImageBanner';
import {
  PiChartLineUp,
  PiGameController,
  PiGlobeHemisphereWest,
} from 'react-icons/pi';
import { Handshake } from 'lucide-react';
import Image from 'next/image';

export const whyRootopiaPoints = [
  {
    icon: PiChartLineUp,
    text: 'Drives long-term engagement and player ownership',
  },
  {
    icon: PiGlobeHemisphereWest,
    text: 'Connects on-chain actions to real-world value',
  },
  {
    icon: Handshake,
    text: 'Rewards community building, not just gameplay',
  },
  {
    icon: PiGameController,
    text: 'Powers a fully tokenized GameFi economy',
  },
];

const WhyRootopiaMatters = () => {
  return (
    <div className="relative pb-36 md:pb-0 bg-[#9F7124] text-[#471C00] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-[100px] md:w-[300px] h-[500px]  blur-3xl opacity-30 pointer-events-none z-[0]" />

      {/* Image On Top of Glow */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[300px] h-[200px] md:h-[200px] z-[5]">
        <Image
          src="/lab/why-rootopia-obj2.png"
          alt="magic box"
          fill
          className="object-contain object-top-left"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[200px] md:h-[400px] z-0">
        <Image
          src="/lab/why-rootopia-obj3.png"
          alt="magic box"
          fill
          className="object-contain object-bottom-left "
        />
      </div>
      <div className="py-16">
        <h2 className="text-center text-4xl font-semibold z-10  p-3 w-fit mx-auto">
          Why Rootopia Rewards Matter
        </h2>
        <div className="max-w-[700px] mx-auto my-10">
          <ImageBanner
            src="/lab/why-rootopia-bg.png"
            className="md:h-fit h-[500px] w-fit px-3 text-center hidden md:block"
          >
            <div className="flex flex-col gap-6 items-start justify-start">
              {whyRootopiaPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-2 px-2"
                >
                  <point.icon className="w-8 h-8 text-[#52BE66] mt-1" />
                  <div className="text-lg md:text-2xl text-[#471C00]">
                    {point.text}
                  </div>
                </div>
              ))}
            </div>
          </ImageBanner>
          <ImageBanner
            src="/lab/wooden-bg-mob.png"
            className="md:h-fit h-[500px] w-full max-w-[500px] px-4 text-start md:hidden block mx-auto"
            childClassName="px-8 "
          >
            <div className="flex flex-col gap-6 items-start justify-start">
              {whyRootopiaPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start gap-y-2 px-2"
                >
                  <point.icon className="w-8 h-8 text-[#FDBA74] mt-1" />
                  <div className="text-md md:text-2xl text-[#C5B598] w-fit text-start">
                    {point.text}
                  </div>
                </div>
              ))}
            </div>
          </ImageBanner>
        </div>
      </div>
      <div className="absolute bottom-[0px] md:bottom-[100px] right-0 md:right-[60px] w-[300px] h-[300px] md:w-[200px] lg:w-[300px] md:h-[500px]  z-0">
        <div className="absolute bottom-0 right-[-10px] w-[200px] md:w-[300px] h-[500px] bg-[#C37317] blur-3xl opacity-30 pointer-events-none z-0" />

        <Image
          src="/lab/why-rootopia-obj1.png"
          alt="gameplay reward"
          fill
          className="object-contain object-right-bottom"
        />
      </div>
    </div>
  );
};

export default WhyRootopiaMatters;
