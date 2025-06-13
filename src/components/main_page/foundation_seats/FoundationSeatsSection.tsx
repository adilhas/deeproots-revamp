import React from 'react';
import Image from 'next/image';
import { foundationSeatsFeatures } from '@/constants/sectionData';

const FoundationSeatsSection = () => {
  return (
    <section className="bg-[#D5CFE0] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[350px] border-r-[350px] border-t-[500px] border-l-transparent border-r-transparent border-t-[#6A432C] opacity-20 blur-3xl pointer-events-none z-30 hidden dark:block" />

      <div className="w-full  max-w-[1200px] mx-auto py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 relative">
        <div className="w-[800px] h-[500px] mt-36 hidden lg:flex justify-center py-72 items-center flex-col">
          <Image
            src="/landing/foundation-seats.jpeg"
            alt="Foundation"
            className="w-full rounded-lg shadow-lg"
            width={800}
            height={500}
            layout="responsive"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-4xl mb-5 font-bold font-orbitron text-[#0A80BD] dark:text-[#30B5FA]">
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
            {foundationSeatsFeatures.map(
              ({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className=" p-4 hover:scale-105 bg-white/70 dark:bg-[#F7EEF314] rounded-lg shadow-md"
                  style={{ boxShadow: '0px 4px 4px 0px #00000026' }}
                >
                  <div>
                    <div className="flex gap-2 items-end">
                      {icon}
                      <h3 className="text-lg font-semibold font-orbitron text-gray-900 dark:text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <button className="mt-6 text-white font-bold w-fit hover:scale-105  bg-[#0085a8] px-6 font-orbitron py-3 text-center  transition-all hover:ease-in-out rounded-lg text-lg">
            Join The Movement
          </button>
        </div>

        {/* <div className="z-0 text-lg">
          <div className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-[#0085a8] blur-[300px] lg:dark:blur-[250px] rounded-full" />
        </div> */}
      </div>
    </section>
  );
};

export default FoundationSeatsSection;
