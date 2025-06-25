import Image from 'next/image';
import React from 'react';
import { PiShieldCheck } from 'react-icons/pi';

const SBBHero = () => {
  return (
    <div className=" relative flex flex-col pb-16 lg:flex-row items-center gap-10 z-10">
      <div className="z-0">
        <div className="absolute bottom-[5%] md:top-[5%] right-[-20%] w-[200px] md:w-[500px] h-[500px] bg-[#EB9542] dark:bg-[#542C05] blur-3xl opacity-50 dark:opacity-30  pointer-events-none rounded-full z-0 " />
        <div className="absolute top-[30px] left-[-10%] w-[200px] md:w-[500px] h-[500px] bg-[#D8B4FE] dark:bg-[#581C87] blur-3xl opacity-50 dark:opacity-30  pointer-events-none rounded-full z-0 " />
      </div>
      <div className="w-full lg:w-1/2 lg:text-left z-10">
        <PiShieldCheck className="text-[#581C87] dark:text-[#EC4899] w-14 h-14" />
        <h1 className="text-4xl sm:text-5xl leading-tight lg:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-nowrap">
          Security & Bug <br /> Bounty Program
        </h1>
        <div className="text-lg sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]  mb-8 max-w-3xl mx-auto lg:mx-0">
          - Help Secure Deep Roots
        </div>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
          Deep Roots is built to last and we invite you to help us make it
          stronger. If you find a vulnerability, we&apos;ll reward you for
          reporting it responsibly.
        </p>
      </div>
      <div className="w-full lg:w-1/2 z-10">
        <div className="p-[4px] rounded-4xl bg-gradient-to-r from-gradient-from  to-gradient-to">
          <div className="rounded-4xl overflow-hidden bg-white dark:bg-gray-900">
            <Image
              src="/lab/security-bug-bounty.jpg"
              alt="security bug bounty"
              width={589}
              height={589}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SBBHero;
