import Image from 'next/image';
import React from 'react';

const CareerHero = () => {
  return (
    <div className="relative">
      <div className="z-0">
        <div className="absolute top-[5%] right-[-30%] w-[200px] md:w-[500px] h-[500px] bg-[#EB9542] dark:bg-[#542C05] blur-3xl opacity-30  pointer-events-none rounded-full z-0 " />
        <div className="absolute top-[5%] left-[-30%] w-[200px] md:w-[500px] h-[500px] bg-[#D8B4FE] dark:bg-[#581C87] blur-3xl opacity-30  pointer-events-none rounded-full z-0 " />
      </div>
      <div className="z-20">
        <h1 className="text-center text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-semibold text-3xl lg:text-6xl font-orbitron w-fit mx-auto">
          Careers at DEEPROOTS
        </h1>
        <p className="text-center w-fit mx-auto text-lg md:text-2xl my-3">
          Join the Movement. Build DeWorld. Shape the Future.
        </p>

        {/* Gradient Border Wrapper */}
        <div className="mx-auto z-20 max-w-[720px] p-[4px] rounded-[28px] bg-gradient-to-r from-gradient-from to-gradient-to mt-8">
          <Image
            src="/connect/career.jpg"
            alt="career"
            width={997}
            height={997}
            className="w-full h-auto rounded-[24px] bg-primary-light dark:bg-primary-dark"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerHero;
