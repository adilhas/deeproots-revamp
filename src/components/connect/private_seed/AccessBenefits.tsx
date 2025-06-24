'use client';

import Image from 'next/image';

const AccessBenefits = () => {
  return (
    <section className="relative w-full max-w-6xl mx-auto mt-[200px]">
      <div className="relative w-full min-h-[500px]">
        <Image
          src="/connect/access-benefit-bg.svg"
          alt="Access Benefit Background"
          fill
          className="absolute inset-0 object-cover object-top z-0"
          priority
        />

        {/* Coin on top center */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-28 md:-top-26 tranlate-y-[-50px] lg:-top-32 z-10">
          <div className="relative w-[220px] lg:w-[260px] xl:w-[290px] aspect-square">
            <Image
              src="/academy/drc-coin.png"
              alt="dRC Coin"
              fill
              className="object-contain drop-shadow-xl"
              priority
              sizes="(max-width: 768px) 40vw, 290px"
            />
          </div>
        </div>

        {/* Content inside */}
        <div className="relative z-10 px-6 pt-40 pb-12 text-center">
          <div className="grid md:grid-cols-3 gap-6 text-gray-800 dark:text-gray-200">
            <div className="p-4 border rounded-xl">
              Willing to sign an NDA and complete identity verification
            </div>
            <div></div>
            <div className="p-4 border rounded-xl">
              Capital Range: $5,000 – $1,000,000
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What You Gain as a PrivateSeed Contributor
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AccessBenefits;
