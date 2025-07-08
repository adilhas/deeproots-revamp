'use client';

import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const AccessBenefits = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('connect/private_seed');

  const rawTopBenefits = t('access_benefits.top', { returnObjects: true });
  const topBenefits: string[] = Array.isArray(rawTopBenefits)
    ? (rawTopBenefits as string[])
    : [];

  const rawBottomBenefits = t('access_benefits.bottom', {
    returnObjects: true,
  });
  const bottomBenefits: string[] = Array.isArray(rawBottomBenefits)
    ? (rawBottomBenefits as string[])
    : [];

  const heading = t('access_benefits.heading');

  return (
    <section>
      <div className="relative">
        {/* Desktop Background */}
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

        {/* Mobile Background */}
        <Image
          priority
          height={343}
          width={1443}
          src={
            isDark
              ? '/connect/access-benefit-bg-dark-mob.png'
              : '/connect/access-benefit-bg-mob.png'
          }
          alt="background-mobile"
          className="inline-block md:hidden"
        />

        <div className="absolute top-[23%] md:top-[30%] w-full flex flex-col justify-start gap-0 md:gap-10">
          {/* Mobile Heading */}
          <div className="font-orbitron my-1 md:hidden inline-block text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto text-xl text-center max-w-[250px] font-semibold">
            {heading}
          </div>

          <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center w-[85%] justify-between mx-auto">
            {topBenefits.map((item, index) => {
              const formatted = item.replace(
                /\s*\((.*?)\)/g,
                (_, match) => `<br />(${match})`
              );

              return (
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
                    <div
                      className="absolute top-[45%] text-center left-1/2 -translate-x-1/2 text-md md:text-xs lg:text-lg w-[87%]"
                      dangerouslySetInnerHTML={{ __html: formatted }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Heading */}
          <div className="font-orbitron my-2 hidden md:inline-block text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto text-xl text-center md:text-2xl lg:text-3xl font-semibold">
            {heading}
          </div>

          <div className="flex flex-col gap-5 md:gap-0 md:flex-row items-center w-[85%] justify-between mx-auto">
            {bottomBenefits.map((item, index) => {
              const formatted = item.replace(
                /\s*\((.*?)\)/g,
                (_, match) => `<br />(${match})`
              );

              return (
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
                    alt="card background"
                  />
                  <div
                    className="absolute top-[45%] text-center left-1/2 -translate-x-1/2 text-md md:text-xs lg:text-lg w-[87%]"
                    dangerouslySetInnerHTML={{ __html: formatted }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessBenefits;
