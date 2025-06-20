import Image from 'next/image';
import React from 'react';
import CountdownTimer from './CountDownTimer';

const SeedingCountdown = () => {
  return (
    <div className="relative w-full flex my-16 lg:flex-row max-w-[400px] lg:max-w-none mx-auto flex-col min-h-[411px]  bg-[#1F2937] text-white rounded-3xl overflow-hidden">
      <div className="absolute  top-[-20px] lg:left-[-100px] w-full h-[40%] lg:w-[50%] lg:h-full bg-[#3f2e78] blur-3xl opacity-80  pointer-events-none z-0 " />

      <div className="lg:w-1/2 lg:min-h-[411px]  flex  flex-col justify-between z-10  lg:p-8 p-4">
        <div>
          <h2 className="ont-orbitron text-3xl font-orbitron">
            Seeding Event Starting soon.
          </h2>
          <p className="text-lg my-4">
            Be the first of 20 to earn Full seat in the Deep Roots Ecosystem.
            This is a one time opportunity to become a long-term Foundation
            Member
          </p>
        </div>
        <div>
          <div>Starting In:</div>
          <div>
            <CountdownTimer />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 h-full relative min-h-[411px] rounded-3xl lg:inline-block hidden">
        <Image
          src="/seeding/foundation-tree.png"
          alt="founation tree"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
      <div className="lg:w-1/2 h-full relative rounded-3xl inline-block lg:hidden min-h-[645px]">
        <Image
          src="/seeding/foundation-tree-sm.png"
          alt="founation tree"
          fill
          className="object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default SeedingCountdown;
