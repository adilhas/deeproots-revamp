import { deepAssetsFeatures } from '@/constants/sectionData';
import React from 'react';
import DiamondIcon from './DiamondIcon';
import Image from 'next/image';
import Link from 'next/link';

const DeepAssets = () => {
  return (
    <main className="relative my-10 p-6 md:p-10">
      <div className="flex justify-center items-center">
        <div className="flex justify-start items-center w-full lg:mr-16 md:items-start flex-col">
          <div className="inline-block">
            <div className="font-extrabold lg:max-w-[600px] text-xl leading-[40px] lg:text-start lg:text-3xl my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#0085a8] to-orange-800 bg-clip-text font-orbitron text-transparent">
              <span className="lg:text-5xl text-3xl">Deep Assets</span> <br />
              Transforming Real-World Assets into Digital Value.
            </div>
          </div>

          <div className="w-full lg:hidden flex my-5">
            <Image
              src="/landing/deep-assets.jpeg"
              alt="mobile Asset visual"
              className="rounded-2xl"
              width={600}
              height={400}
              layout="responsive"
            />
          </div>

          <div className="flex items-start justify-center flex-col">
            {deepAssetsFeatures.map(({ title, description }, index) => (
              <div key={index} className="flex items-center my-4">
                <div className="inline-block">
                  <DiamondIcon />
                </div>
                <p className="lg:w-[500px] font-sans md:w-[70vw]">
                  <span className="font-orbitron font-bold">{title}</span> -{' '}
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 mb-6 font-sans">
            <p>
              The DeepRoots Protocol makes real-world assets smarter, safer, and
              more accessible.
            </p>
          </div>

          <Link href={'https://deepassets.earth/'}>
            <button className="py-3 font-sans text-neutral-200 text-lg px-5 bg-[#0085a8] dark:bg-amber-600 hover:bg-amber-800 rounded-lg flex justify-center items-center">
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right ml-3"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </Link>
        </div>

        <div className="hidden lg:flex w-full">
          <Image
            src="/landing/deep-assets.jpeg"
            alt="desktop Asset visual large"
            className="rounded-2xl object-cover"
            width={1200}
            height={800}
            layout="intrinsic"
          />
        </div>
      </div>

      <div className="z-0 text-lg">
        <div
          className="w-72 h-72 absolute top-0 left-0 bg-[#ad1aa0] dark:bg-[#0085a8] hidden lg:flex blur-[300px] rounded-full"
          style={{ backgroundColor: 'rgb(173, 26, 160)' }}
        />
      </div>

      <div className="z-0 text-lg">
        <div
          className="w-60 h-60 absolute lg:top-0 dark:lg:right-0 hidden lg:flex lg:right-16 bg-neutral-950 dark:bg-[#0085a8] blur-[300px] rounded-full"
          style={{ backgroundColor: 'rgb(0, 133, 168)' }}
        ></div>
      </div>
    </main>
  );
};

export default DeepAssets;
