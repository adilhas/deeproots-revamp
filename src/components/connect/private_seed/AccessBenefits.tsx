'use client';

import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

const AccessBenefits = () => {
  const { isDark } = useThemeContext();
  return (
    <section className="">
      <div className="relative">
        <Image
          priority
          height={869}
          width={1201}
          src={
            isDark
              ? '/connect/access-benefit-bg-dark.png'
              : '/connect/access-benefit-bg.png'
          }
          alt="background"
          className="md:inline-block hidden"
        />
        <Image
          priority
          height={343}
          width={1443.578125}
          src={
            isDark
              ? '/connect/access-benefit-bg-dark-mob.png'
              : '/connect/access-benefit-bg-mob.png'
          }
          alt="background-mobile"
          className="inline-block md:hidden"
        />
        <div className="absolute top-[23%] md:top-[30%] w-full flex flex-col justify-start gap-0 md:gap-10">
          <div className="font-orbitron my-1 md:hidden inline-block text-transparent bg-gradient-to-r from-gradient-from text-xl text-center max-w-[250px] md:text-2xl lg:text-3xl font-semibold to-gradient-to bg-clip-text w-fit mx-auto">
            What You Gain as a PrivateSeed Contributor
          </div>
          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center w-[85%] justify-between mx-auto">
            {[
              'High-Net-Worth Individual (HNWI) or Strategic Partner',
              '',
              'Background in Blockchain, Technology, Capital, or Strategic Innovation',
            ].map((item, index) => (
              <div
                key={index}
                className={`relative ${item === '' ? 'hidden md:inline-block' : ''}`}
              >
                <Image
                  priority
                  height={311}
                  width={350}
                  src={
                    isDark
                      ? '/connect/access-benefit-card-dark.png'
                      : '/connect/access-benefit-card.png'
                  }
                  alt="card background"
                  className={item === '' ? 'opacity-0' : ''}
                />
                {item && (
                  <div className="absolute top-[45%] text-center left-1/2 -translate-x-1/2 text-md md:text-xs lg:text-lg w-[87%]">
                    {item}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="font-orbitron my-2 hidden md:inline-block text-transparent bg-gradient-to-r from-gradient-from text-xl text-center md:text-2xl lg:text-3xl font-semibold to-gradient-to bg-clip-text w-fit mx-auto">
            What You Gain as a PrivateSeed Contributor
          </div>
          <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center w-[85%] justify-between mx-auto">
            {[
              'Willing to sign an NDA and complete identity verification',
              'Pre-Qualified 100 Seats Only for this round',
              'Capital Range: $5,000 – $1,000,000',
            ].map((item, index) => (
              <div key={index} className="relative">
                <Image
                  priority
                  height={311}
                  width={350}
                  src={
                    isDark
                      ? '/connect/access-benefit-card-dark.png'
                      : '/connect/access-benefit-card.png'
                  }
                  alt="card backgorund"
                />
                <div className="absolute top-[45%] text-center left-1/2 -translate-x-1/2 text-md md:text-xs lg:text-lg w-[87%]">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessBenefits;
