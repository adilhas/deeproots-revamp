import React from 'react';
import Image from 'next/image';

const RootopiaRace = () => {
  return (
    <main className=" relative bg-neutral-100 dark:bg-neutral-950 px-10 py-20">
      <div className="flex justify-center flex-row items-center w-full"></div>

      <div className="flex justify-center flex-col lg:flex-row rounded-2xl items-center ">
        <div className="inline-block" style={{ opacity: 1, transform: 'none' }}>
          <div className="w-full lg:flex hidden">
            <Image
              src="/landing/rootopia.jpeg"
              alt="Rootopia Race Banner"
              className="rounded-2xl"
              width={1200}
              height={630}
              layout="responsive"
            />
          </div>
        </div>

        <div className="flex justify-center lg:ml-32 items-start flex-col lg:w-1/2">
          <div className="w-full mx-auto">
            <div className="mt-6 ">
              <h1 className="font-extrabold text-2xl text-center lg:text-start lg:text-4xl mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] via-[#f4bb71] to-[#a45204] bg-clip-text font-orbitron text-transparent">
                ROOTOPIA RACE
              </h1>
            </div>

            <div className="inline-block w-full lg:hidden mx-auto">
              <div className="flex justify-center w-full">
                <Image
                  src="/landing/rootopia.jpeg"
                  alt="Rootopia Race Banner Mobile"
                  className="rounded-2xl"
                  width={800}
                  height={420}
                  layout="responsive"
                />
              </div>
            </div>

            <h3 className="font-orbitron font-bold text-xl leading-normal w-full">
              Step into Rootopia World Race
            </h3>
          </div>

          <p className="font-sans mt-5 lg:w-[500px] md:w-[70vw]">
            Game on! The Ultimate Race Begins Soon - Get Ready to compete! Are
            you ready to claim your victory?
          </p>

          <div className="flex justify-center lg:mt-6 items-center flex-col md:flex-row">
            <button className="cursor-pointer mt-6 lg:mt-10 mr-6 px-6 font-orbitron py-3 text-center border-2 dark:border-[#0085a8] border-[#0085a8] hover:scale-105 hover:text-[#0085a8] transition-all hover:ease-in-out light:text-primary-dark dark:text-white rounded-lg text-lg tracking-wider">
              Play Now
            </button>
          </div>
        </div>
      </div>

      <div className="z-0 text-lg">
        <div
          className="w-72 h-72 absolute top-150 right-200 bg-[#ad1aa0] hidden lg:flex dark:bg-[#0085a8] blur-[300px] rounded-full"
          style={{ backgroundColor: 'rgb(173, 26, 160)' }}
        ></div>
      </div>

      <div className="z-0 text-lg">
        <div
          className="w-60 h-60 absolute lg:top-0 dark:lg:right-0 lg:right-16 bg-neutral-950 dark:bg-[#0085a8] blur-[300px] rounded-full"
          style={{ backgroundColor: 'rgb(0, 133, 168)' }}
        ></div>
      </div>
    </main>
  );
};

export default RootopiaRace;
