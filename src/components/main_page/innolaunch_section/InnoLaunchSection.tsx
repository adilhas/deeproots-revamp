import { ChevronRight, RocketIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const fundingRounds = [
  'First Round (InnoFi Funding).',
  'Private Foundation Round.',
  'External HNWI Investor Access.',
  'Community Deep Roots Referral System.',
  'Public Launch ON TeleXcoin DEX.',
  'Empowering Innovation.',
];

const InnolaunchSection = () => {
  return (
    <main className=" px-6 md:px-10 pb-16 bg-gray-400 dark:bg-transparent">
      <div className="flex justify-center lg:px-20 items-center flex-col lg:flex-row">
        <div className="flex justify-start  w-full md:items-start flex-col lg:w-1/2">
          <div className="font-extrabold  leading-[40px] text-start text-3xl lg:leading-normal bg-gradient-to-r dark:from-[#F68082] from-[#97f4f3] to-[#97f4f3] dark:to-[#97F4F3] bg-clip-text font-orbitron text-transparent">
            <span className="text-5xl">InnoLaunch</span> <br /> Empowering
            DeWorld Projects on the Deep Roots Blockchain.
          </div>

          <div className="inline-block lg:hidden my-5 w-full">
            <Image
              src="/landing/innolaunch.webp"
              alt="Launch"
              className="rounded-2xl w-full h-auto"
              width={768}
              height={768}
            />
          </div>

          <div className="flex items-start justify-center flex-col">
            {fundingRounds.map((round, index) => (
              <div className="flex items-center my-3" key={index}>
                <div className="inline-block text-[#f68082] mr-3">
                  <RocketIcon />
                </div>
                <p className="lg:w-[500px] font-sans text-xl md:w-[70vw]">
                  {round}
                </p>
              </div>
            ))}
          </div>
          <button className="py-3 font-bold mt-5 font-sans text-neutral-200 text-lg px-5 bg-[#f68082] hover:bg-[#97F4F3] hover:text-neutral-900 rounded-lg flex justify-center items-center">
            Launch
            <ChevronRight />
          </button>
        </div>

        <div className="hidden lg:block my-5 lg:w-1/2 lg:mx-8">
          <Image
            src="/landing/innolaunch.webp"
            alt="Launch"
            className="rounded-2xl w-full h-auto"
            width={768}
            height={768}
          />
        </div>
      </div>
    </main>
  );
};

export default InnolaunchSection;
