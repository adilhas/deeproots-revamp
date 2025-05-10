import React from 'react';
import Image from 'next/image';
import { foundationSeatsFeatures } from '@/constants/sectionData';

const FoundationSeatsSection = () => {
  return (
    <section className="w-full bg-gray-400 dark:bg-gray-900 py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 relative">
      <div className="w-[800px] h-[500px] mt-36 hidden lg:flex justify-center py-72 items-center flex-col">
        <Image
          src="/landing/foundation-seats.jpeg"
          alt="Foundation"
          className="w-full rounded-lg shadow-lg"
          width={800}
          height={500}
          layout="responsive"
        />
        <button className="mt-6 font-bold border-2 hidden md:flex hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#0085a8] to-amber-700 mr-6 px-6 font-orbitron py-3 text-center hover:border-2 dark-hover:border-[#0085a8] border-[#0085a8] dark:hover:bg-none dark:hover:text-[#0085a8] transition-all hover:ease-in-out rounded-lg text-2xl tracking-wider">
          Join The Future
        </button>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h2 className="text-3xl md:text-4xl mb-5 font-bold font-orbitron text-gray-900 dark:text-white">
          THE FOUNDATION SEATS
        </h2>

        <div className="w-full lg:hidden">
          <Image
            src="/landing/foundation-seats.jpeg"
            alt="Foundation"
            className="w-full rounded-lg shadow-lg"
            width={800}
            height={500}
            layout="responsive"
          />
        </div>

        <div className="flex flex-col gap-4">
          {foundationSeatsFeatures.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 hover:scale-105 bg-white/70 dark:bg-gray-800 rounded-lg shadow-md"
            >
              {icon}
              <div>
                <h3 className="text-lg font-semibold font-orbitron text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 font-bold border-2 lg:hidden hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#0085a8] to-amber-700 mr-6 px-6 font-orbitron py-3 text-center hover:border-2 dark-hover:border-[#0085a8] border-[#0085a8] dark:hover:bg-none dark:hover:text-[#0085a8] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
          Join The Future
        </button>
      </div>

      <div className="z-0 text-lg">
        <div className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-[#0085a8] blur-[300px] lg:dark:blur-[250px] rounded-full" />
      </div>
    </section>
  );
};

export default FoundationSeatsSection;
