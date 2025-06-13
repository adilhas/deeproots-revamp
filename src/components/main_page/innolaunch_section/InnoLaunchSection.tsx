import { ChevronRight, RocketIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
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
    <section className="relative px-6 md:px-10 py-16 bg-[#82A3AA] dark:bg-transparent overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[300px] h-[500px] bg-[#CA544F] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[500px] bg-[#79D9F8] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />

      <div className="flex justify-center lg:px-20 items-center flex-col lg:flex-row">
        <div className="hidden lg:block my-5 lg:w-1/2 lg:mx-8">
          <Image
            src="/landing/innolaunch.webp"
            alt="Launch"
            className="rounded-2xl w-full h-auto"
            width={768}
            height={768}
          />
        </div>
        <div className="flex justify-start  w-full md:items-start flex-col lg:w-1/2">
          <div className="font-[600] text-4xl lg:text-5xl leading-[40px] text-[#ADF2F2] font-orbitron">
            InnoLaunch
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
          <div className="font-[600] text-start text-2xl font-orbitron text-[#ADF2F2]">
            Empowering DeWorld Projects on the Deep Roots Blockchain.
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
          <Link href="https://innolaunch.earth/">
            <button className="py-3 font-bold mt-5 font-sans text-neutral-200 text-lg px-5 bg-[#f68082] hover:scale-105 rounded-lg flex justify-center items-center">
              Launch
              <ChevronRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InnolaunchSection;
