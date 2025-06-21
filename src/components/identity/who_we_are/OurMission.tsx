import Image from 'next/image';
import React from 'react';

const OurMission = () => {
  return (
    <div className="flex flex-col md:flex-row items-start">
      <div className="w-full md:w-1/2">
        <div className="font-semibold text-3xl text-black dark:text-white">
          From World To DeWorld
        </div>
        <div className="my-4">
          We call our mission{' '}
          <span className="text-[#A855F7] font-semibold">DeWorld</span> - the
          shift from centralized control to a decentralized digital reality.
        </div>
        <div className="my-4">
          This isn’t a brand project. It’s a root system for the new internet.
        </div>
        <div className="text-transparent font-orbitron text-3xl my-3 font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          We seed visions in the earth’s roots and harvest deep solutions for
          life.
        </div>
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <Image
          src={'/identity/our-mission.png'}
          alt="our missin"
          width={422}
          height={422}
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default OurMission;
