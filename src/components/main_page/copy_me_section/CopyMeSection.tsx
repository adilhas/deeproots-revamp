import { Wand2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CopyMeSection = () => {
  return (
    <section className="bg-[#F3F3F3] dark:bg-primary-dark relative">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[400px] bg-[#BBACFF] blur-[150px] opacity-70 pointer-events-none z-0 dark:hidden hidden md:inline-block" />

      <div className="absolute bottom-[-20px] right-[100px] w-full md:w-[700px] h-[300px] bg-[#BBACFF] blur-3xl opacity-90 dark:opacity-40 rounded-full z-0 hidden dark:block" />

      <div className="absolute bottom-[-100px] left-0 w-[220px] md:w-[400px] h-[220px] lg:h-[400px] bg-[#F4C9FF] dark:bg-black blur-md opacity-70 dark:opacity-100 pointer-events-none rounded-full z-[1]" />

      <div className="absolute top-0 left-0 w-[50%] aspect-square z-0 hidden md:dark:inline-block">
        <div className="relative w-full h-full">
          <Image
            src="/landing/copy-me-bg.png"
            alt="Podcast Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <section className="relative z-40 py-12 px-4 max-w-[1200px] mx-auto">
        <div className="container lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto">
          <div className="space-y-4 lg:w-1/2 lg:pr-9">
            <h1 className="lg:text-5xl text-4xl font-orbitron font-bold bg-gradient-to-r from-[#887FFF] via-[#9F5FFF] to-[#86A1FF] dark:from-[#fff] dark:via-[#FFF] dark:to-[#fff] leading-normal text-transparent bg-clip-text">
              Copy Me
            </h1>
            <h2 className="text-3xl w-fit font-orbitron font-semibold bg-gradient-to-r from-[#887FFF] via-[#9F5FFF] to-[#86A1FF] dark:from-[#fff] dark:via-[#AE86F1] dark:to-[#50D0FF] text-transparent bg-clip-text">
              Saxophone Live Podcast For Blockchain Insights
            </h2>

            <div className="lg:hidden flex lg:w-1/2">
              <Image
                src="/landing/copyme.png"
                alt="Podcast Mobile"
                width={600}
                height={337}
                className="w-full h-auto"
              />
            </div>

            <p className="my-8">
              <div className="mb-2">
                An AI that mirrors your mind, learns, adapts, and leads.
              </div>
              Every action starts with a SEED, I learn you from your seeds. You
              seed it – I grow it.
            </p>

            <Link href="https://saxophone.earth/">
              <button className="hover:scale-105 flex flex-row gap-2 bg-gradient-to-r from-[#8D9FFF] to-[#A4D1FF] font-[600] font-orbitron text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Command <Wand2 />
              </button>
            </Link>
          </div>

          <div className="hidden lg:flex lg:w-1/2 pl-9 aspect-square relative">
            <Image
              src="/landing/copyme.png"
              alt="Podcast Desktop"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default CopyMeSection;
