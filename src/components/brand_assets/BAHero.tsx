import Image from 'next/image';
import React from 'react';

const BAHero = () => {
  return (
    <section className="min-h-[70vh] flex justify-center items-center">
      <div className="w-fit text-center relative pb-8">
        <Image
          src={'/brand-assets/pen-logo.png'}
          width={64}
          height={64}
          alt="pen"
          className="absolute  bottom-[-10px] lg:bottom-[0px] w-10 h-10 md:w-16 md:h-16 right-0 md:right-[-20px]"
        />
        <div>
          <h1 className=" text-3xl md:text-6xl font-orbitron">
            <span className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              DEEPROOTS
            </span>{' '}
            Brand Assets
          </h1>
          <p className="max-w-[500px] mx-auto">
            Download approved logos, icons, and branding materials. For press,
            media, and partners only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BAHero;
