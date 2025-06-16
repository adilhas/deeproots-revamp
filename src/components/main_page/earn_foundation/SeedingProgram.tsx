import Image from 'next/image';
import React from 'react';

const ProgramData = [
  'Full Seat in the Deep Roots Foundation',
  '12% Guaranteed APY',
  'Lifetime Share in All Ecosystem Projects',
  'Premium Access to CopyMe AI',
  'Whitelist for Grants, IDOs & Launches',
  'Full Access to RootOpia GameFi (Seeding, Battle, Leaderboards)',
  'Access to 16+ Web3 Products',
];

const SeedingProgram = () => {
  return (
    <div className="py-6 mt-8 ">
      <div className="flex flex-col justify-between lg:flex-row gap-6 lg:items-center">
        <div className="lg:w-1/2 mx-2">
          <h2 className="w-fit font-[600] p-3  text-3xl lg:text-5xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Seeding Program
          </h2>
          <div className="p-3 text-xl">
            The official gateway to long-term ownership in the Deep Roots
            Blockchain. Lock your dRC tokens for 365 days and unlock:
          </div>
          <div className="grid lg:grid-cols-2 my-4 g:my-2">
            {ProgramData.map((title) => (
              <div
                key={title}
                className="flex flex-row gap-2 my-2 items-start text-md"
              >
                <Image
                  width={24}
                  height={24}
                  alt="check"
                  src="/landing/Check.svg"
                />
                {title}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2  relative">
          {/* Mobile*/}
          <div className="lg:hidden p-[3px] rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to">
            <Image
              src="/landing/seeding-program.jpg"
              alt="foundation seat"
              width={442}
              height={453}
              className="rounded-xl w-full h-auto"
              priority
            />
          </div>

          {/* Desktop */}
          <div className="hidden lg:block p-[3px] rounded-2xl bg-gradient-to-r from-gradient-from to-gradient-to aspect-[442/453]">
            <div className="relative w-full h-full">
              <Image
                src="/landing/seeding-program.jpg"
                alt="foundation seat"
                fill
                className="rounded-[13px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center px-8 lg:px-2  w-fit mx-auto font-orbitron text-2xl font-[600] mt-10 text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        Own your seat. Shape the future. Earn forever.
      </div>
    </div>
  );
};

export default SeedingProgram;
