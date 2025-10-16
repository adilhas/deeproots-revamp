'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';
import { MdOutlineSecurity, MdOutlineRocketLaunch } from 'react-icons/md';
import { FaGlobeAmericas } from 'react-icons/fa';
import MainSiteSeederAnnouncement from './MainSiteSeederAnnouncement';

const PrivateSeedHero = () => {
  const { t } = useTranslation('connect/private_seed');
  const rawFeatures = t('hero.features', { returnObjects: true });
  const features: string[] = Array.isArray(rawFeatures)
    ? (rawFeatures as string[])
    : [];
  const featuresIcons = [
    <MdOutlineSecurity key="security" className="text-green-700 w-6 h-6" />,
    <FaGlobeAmericas key="global" className="text-blue-600 w-6 h-6" />,
    <MdOutlineRocketLaunch
      key={'launching'}
      className="text-purple-700 w-6 h-6"
    />,
  ];
  return (
    <div className="relative w-full min-h-screen rounded-3xl overflow-hidden">
      <div className="z-20 bg-gradient-to-b from-[#CCCCCC] to-[#FFFFFF] dark:from-[#070707] dark:to-[#252525]  px-2 py-2 border-3 border-[#D4D4D4] w-fit mx-auto rounded-4xl">
        <div className="text-center">
          <div
            className="border-3 border-[#D4D4D4] dark:border-[#3F3F3F] mb-6 bg-white dark:bg-[#171717]  px-4 py-2 rounded-4xl text-md md:text-xl lg:text-3xl font-semibold inline-block"
            style={{
              boxShadow: `0px 12px 42px -4px #14171A1F,0px 8px 18px -6px #14171A1F`,
            }}
          >
            {t('hero.badge')}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
            {t('hero.title')}
          </h1>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
            -Foundation Full Seat
          </h1>
        </div>
        <div className="text-center ">
          <Link href={'/connect/private-seed/#access-form'} className="w-fit">
            <button
              className="mt-8 bg-[#C2410C] w-fit text-white px-6 py-3 mb-4 rounded-2xl text-lg font-semibold font-orbitron hover:opacity-90 shadow-md"
              style={{ boxShadow: `0px 12px 20px 0px #0000008C` }}
            >
                {t('hero.button')}
            </button>
          </Link>
        </div>
      </div>
      <MainSiteSeederAnnouncement />

      <div className="flex flex-col md:flex-row gap-3 items-center justify-center my-10">
        {features.map((feature, index) => (
          <div
            key={feature}
            className="bg-white flex flex-row gap-2 items-center dark:bg-gradient-to-b w-full md:w-fit max-w-[300px] md:max-w-none text-center dark:from-[#070707] dark:to-[#252525] text-lg  md:text-xl lg:text-2xl py-2 px-4 rounded-2xl"
          >
            <div>{featuresIcons[index]}</div>
            <div>{feature}</div>
          </div>
        ))}
      </div>

      <div className="relative min-h-[900px]">
        <Image
          src="/connect/private-seed-access.png"
          alt="Private Seed Access"
          fill
          className="object-cover object-center hidden md:inline-block rounded-3xl border-6 border-black"
          priority
        />
        <Image
          src="/connect/private-seed-access-sm.png"
          alt="Private Seed Access"
          fill
          className="object-cover object-center inline-block md:hidden rounded-3xl border-6 border-black"
          priority
        />
      </div>
    </div>
  );
};

export default PrivateSeedHero;
