import Image from 'next/image';

const Telexcoin = () => {
  return (
    <main className="my-20 relative bg-neutral-100 dark:bg-neutral-950 p-10">
      <div className="flex justify-center flex-col lg:flex-row rounded-2xl items-center w-full">
        {/* Desktop Image */}
        <div className="inline-block w-1/2 ">
          <div className="w-full lg:flex hidden">
            <Image
              src="/landing/telexcoin.jpeg"
              alt="TeleXcoin DeX"
              width={700}
              height={437}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex justify-center lg:ml-16 items-start  flex-col lg:w-1/2 mx-auto">
          <div className="mt-6">
            {/* Header */}
            <h1 className="font-extrabold text-2xl  lg:text-start lg:text-4xl mb-10 lg:leading-normal bg-gradient-to-r dark:bg-gradient-to-r from-[#0085a8] dark:via-[#ad1] dark:to-amber-400 via-blue-900 to-amber-600 bg-clip-text font-orbitron text-transparent">
              TeleXcoin DeX:
              <br /> Unlock the future of Finance
            </h1>

            {/* Mobile Image */}
            <div className="w-full lg:hidden flex mx-auto justify-center">
              <Image
                src="/landing/telexcoin.jpeg"
                alt="TeleXcoin DeX Mobile"
                width={700}
                height={437}
                className="rounded-2xl"
                priority
              />
            </div>

            {/* Subheading */}
            <div className="inline-block">
              <h4 className="font-orbitron font-bold text-xl leading-normal w-full">
                Get Early Access to DRC Tokens!
              </h4>
            </div>
          </div>

          {/* Icon with Text */}
          <div className="flex items-center my-4">
            <div className="inline-block">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="w-8 h-7 mr-4 dark:text-amber-600 text-[#0085a8]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"></path>
              </svg>
            </div>
            <p className="lg:w-[500px] font-bold font-sans md:w-[70vw]">
              <span className="text-lg md:text-xl">Seed, Earn, and Grow</span>
            </p>
          </div>

          {/* Description */}
          <p className="font-sans my-2 lg:w-[650px] md:w-[70vw]">
            <span className="text-lg">
              Pool Liquidity | Exclusive Podcast | FOUNDATION | Shared Rewards.
            </span>
          </p>

          {/* Another Icon with Text */}
          <p className="font-sans mt-2 flex items-center lg:w-[500px] md:w-[70vw]">
            <div className="inline-block">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                className="w-10 h-10 dark:text-amber-600 text-[#0085a8]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M112.5 301.4c0-73.8 105.1-122.5 105.1-203 0-47.1-34-88-39.1-90.4.4 3.3.6 6.7.6 10C179.1 110.1 32 171.9 32 286.6c0 49.8 32.2 79.2 66.5 108.3 65.1 46.7 78.1 71.4 78.1 86.6 0 10.1-4.8 17-4.8 22.3 13.1-16.7 17.4-31.9 17.5-46.4 0-29.6-21.7-56.3-44.2-86.5-16-22.3-32.6-42.6-32.6-69.5zm205.3-39c-12.1-66.8-78-124.4-94.7-130.9l4 7.2c2.4 5.1 3.4 10.9 3.4 17.1 0 44.7-54.2 111.2-56.6 116.7-2.2 5.1-3.2 10.5-3.2 15.8 0 20.1 15.2 42.1 17.9 42.1 2.4 0 56.6-55.4 58.1-87.7 6.4 11.7 9.1 22.6 9.1 33.4 0 41.2-41.8 96.9-41.8 96.9 0 11.6 31.9 53.2 35.5 53.2 1 0 2.2-1.4 3.2-2.4 37.9-39.3 67.3-85 67.3-136.8 0-8-.7-16.2-2.2-24.6z"></path>
              </svg>
            </div>
            <span className="text-lg ml-2">
              The Hub for Trading, Strategies, &amp; Connection.
            </span>
          </p>

          {/* CTA Button */}
          <div className="flex justify-center lg:mt-6 items-center flex-col md:flex-row">
            <button className="mt-6 font-bold lg:mt-10 bg-gradient-to-r from-[#0085a8] via-[#ad1]/60 dark:via-[#ad1]/70 dark:to-amber-600 to-amber-600 mr-6 px-6 font-orbitron py-3 text-center hover:bg-none hover:border-2 dark:border-[#0085a8] border-[#0085a8] dark:hover:text-[#0085a8] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
              JOIN &amp; EARN
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Telexcoin;
