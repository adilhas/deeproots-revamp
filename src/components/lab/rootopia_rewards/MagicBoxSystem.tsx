import Image from 'next/image';
import React from 'react';
import ImageBanner from './ImageBanner';

const MagicBoxSystem = () => {
  const magicBoxItems = [
    'Randomized dRC token drops',
    'NFTs (characters, boosters, weapons)',
    'Power-ups, skins, and rare collectibles',
  ];

  return (
    <div className=" relative overflow-hidden  bg-[url('/lab/magic-box-bg.png')] bg-cover md:bg-contain bg-bottom-left md:bg-center overflow-y-visible">
      <div className="relative max-w-[1200px] mx-auto px-2 pb-[200px] md:pb-0 py-16 bg-cover min-h-[800px] ">
        {/* Background Image */}
        <div className="absolute  top-0 md:top-auto md:bottom-0 left-0 w-[300px] md:w-[200px] h-[350px] md:h-[750px] lg:w-[500px] z-0">
          <Image
            src="/lab/magic-box-obj1.png"
            alt="magic box"
            fill
            className="object-contain object-left"
          />
        </div>
        <div className="absolute top-0 right-0 w-[100px] md:w-[300px] h-[200px] md:h-[200px] z-0">
          <Image
            src="/lab/treasure-box.png"
            alt="magic box"
            fill
            className="object-contain object-top-right"
          />
        </div>
        <div className="absolute bottom-[0px] right-0 w-[300px] h-[300px] md:w-[200px] lg:w-[300px] md:h-[500px]  z-0">
          <Image
            src="/lab/wolf.png"
            alt="magic box"
            fill
            className="object-contain object-right-bottom"
          />
        </div>

        <div className="py-16 -translate-y-[-60px] md:translate-y-0">
          {/* Foreground Content */}
          <div className="relative z-10 max-w-[1200px] mx-auto">
            <div className=" text-[#DBD6C5] w-fit mx-auto">
              <h2 className="text-4xl font-semibold w-fit mx-auto">
                The Magic Box System
              </h2>
              <p className="text-[#B1B1B1] text-xl text-start w-full mx-auto mt-2">
                Earn or unlock Magic Boxes filled with:
              </p>
            </div>

            <div className="w-fit mx-auto flex flex-col gap-5 my-10">
              {magicBoxItems.map((item, index) => (
                <ImageBanner
                  src={`/lab/${index % 2 === 0 ? 'magic-green-box.png' : 'magic-red-box.png'}`}
                  key={item}
                  className="px-3 text-lg md:text-2xl relative  overflow-visible text-[#FFAE24]"
                >
                  {item}
                  {/* Only first item shows cloud */}
                  <Image
                    src="/lab/option-cloud.png"
                    width={87}
                    height={87}
                    alt="cloud"
                    className={`absolute top-[-18px] right-[0px] w-14 h-14 ${
                      index === 0 ? 'block' : 'hidden'
                    }`}
                  />
                </ImageBanner>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicBoxSystem;
