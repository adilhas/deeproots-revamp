'use client';

import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';
import Image from 'next/image';

const AccessBenefitsMobile = () => {
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

  const bgImage = isDark
    ? '/connect/access-benefit-bg-dark-mob.png'
    : '/connect/access-benefit-bg-mob.png';

  return (
    <section
      className={clsx(
        'relative w-full font-archivo bg-no-repeat bg-top bg-contain px-4 py-6'
      )}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Heading */}
      <div className="font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto text-xl text-center max-w-[250px] font-semibold mb-6">
        {heading}
      </div>

      {/* Top Benefits */}
      <div className="flex flex-col gap-4 items-center w-full mb-6">
        {topBenefits.map((item, index) => {
          const formatted = item.replace(
            /\s*\((.*?)\)/g,
            (_, match) => `<br />(${match})`
          );

          return (
            item && (
              <div key={index} className="relative">
                <Image
                  src={
                    isDark
                      ? '/connect/access-benefit-card-dark.png'
                      : '/connect/access-benefit-card.png'
                  }
                  width={352}
                  height={257}
                  alt="card background"
                  className="w-[90vw] max-w-[350px] h-auto"
                />
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md text-center w-[87%]"
                  dangerouslySetInnerHTML={{ __html: formatted }}
                />
              </div>
            )
          );
        })}
      </div>

      {/* Bottom Benefits */}
      <div className="flex flex-col gap-4 items-center w-full">
        {bottomBenefits.map((item, index) => {
          const formatted = item.replace(
            /\s*\((.*?)\)/g,
            (_, match) => `<br />(${match})`
          );

          return (
            <div key={index} className="relative">
              <Image
                src={
                  isDark
                    ? '/connect/access-benefit-card-dark.png'
                    : '/connect/access-benefit-card.png'
                }
                width={352}
                height={257}
                alt="card background"
                className="w-[90vw] max-w-[350px] h-auto"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-md text-center w-[87%]"
                dangerouslySetInnerHTML={{ __html: formatted }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AccessBenefitsMobile;
