'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'next-i18next';

const AccessPerks = () => {
  const { t } = useTranslation('connect/private_seed');

  const accessToData = [
    {
      id: 'address',
      name: t('accessPerks.products.TheAddress'),
      icon: '/deworld/products_icons/the-address-light.svg',
    },
    {
      id: 'telexcoin',
      name: t('accessPerks.products.TeleXcoin'),
      icon: '/deworld/products_icons/telexcoin-light.svg',
    },
    {
      id: 'oceanbazaar',

      name: t('accessPerks.products.OceanBazaar'),
      icon: '/deworld/products_icons/ocean-bazaar-light.svg',
    },
    {
      id: 'foundation',
      name: t('accessPerks.products.Foundation'),
      icon: '/deworld/products_icons/foundation-light.svg',
    },
  ];

  return (
    <div className="py-10 px-3">
      <div>
        <h2 className="w-fit text-4xl font-orbitron font-bold mx-auto text-center bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          {t('accessPerks.heading.part1')}
          <span className="text-black dark:text-white">
            {t('accessPerks.heading.highlight')}
          </span>
          {t('accessPerks.heading.part2')}
        </h2>
        <div className="text-center">{t('accessPerks.subheading')}</div>
      </div>

      <div className="my-16">
        <div className="text-[#F82CFF] text-3xl font-semibold">
          {t('accessPerks.earlyAccessTitle')}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {accessToData.map((access, index) => (
            <div
              key={index}
              className="gap-3 bg-white dark:bg-[#303030] min-h-[132px] rounded-4xl flex flex-col justify-center items-center"
            >
              <Image
                width={40}
                height={40}
                src={access.icon}
                alt={access.name}
              />
              <div>{access.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-16">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full md:min-h-[422px]">
            <div className="text-[#F82CFF] text-3xl font-semibold">
              {t('accessPerks.founderCircleTitle')}
            </div>
            <div>{t('accessPerks.callDescription')}</div>
            <div>
              <div className="bg-white my-10 dark:bg-[#303030] p-2 rounded-xl">
                💡 {t('accessPerks.note1')}
              </div>
              <div className="bg-white mt-5 dark:bg-[#303030] p-2 rounded-xl">
                🕒 {t('accessPerks.note2')}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/connect/early-access.jpg"
              alt="early-access"
              width={422}
              height={422}
              className="mx-auto rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessPerks;
