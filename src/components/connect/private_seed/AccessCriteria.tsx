import { DoorClosed, Fingerprint, Star } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { PiLightbulb, PiMoneyWavy } from 'react-icons/pi';

const AccessCriteria = () => {
  const { t } = useTranslation('connect/private_seed');
  const accessCriteria = t('access-criteria.criteria', {
    returnObjects: true,
  }) as string[];
  const benefitsIcons = [
    Star,
    PiMoneyWavy,
    PiLightbulb,
    Fingerprint,
    DoorClosed,
  ];
  return (
    <div className="my-16 bg-white dark:bg-black rounded-4xl py-16 px-4">
      <div className="text-center">
        <h2 className="font-orbitron mb-1 text-transparent bg-gradient-to-r from-gradient-from text-3xl font-semibold to-gradient-to bg-clip-text w-fit mx-auto">
          {t('access-criteria.title')}
        </h2>
        <div>{t('access-criteria.description')}</div>
      </div>
      <div className="flex flex-wrap justify-center md:gap-8">
        {accessCriteria.slice(0, 3).map((benefit, index) => {
          const Icon = benefitsIcons[index];
          return (
            <div key={benefit} className="text-center">
              <div
                className="bg-gradient-to-r  from-gradient-from to-gradient-to p-[2px] rounded-full w-fit mx-auto translate-y-4"
                style={{
                  boxShadow: `0px 4px 48px 0px #20232714,0px 4px 24px 0px #20232747`,
                }}
              >
                <div className="bg-white dark:bg-[#303030] rounded-full p-3">
                  <Icon className="w-8 h-8 text-[#EA580C]" />
                </div>
              </div>
              <div className="min-h-[100px] w-[311px] bg-white dark:bg-[#303030] flex flex-col justify-center items-center rounded-3xl px-4">
                {benefit}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center md:gap-8">
        {accessCriteria.slice(3).map((benefit, index) => {
          const Icon = benefitsIcons[index + 3];
          return (
            <div key={benefit} className="text-center">
              <div
                className="bg-gradient-to-r from-gradient-from to-gradient-to p-[2px] rounded-full w-fit mx-auto translate-y-4"
                style={{
                  boxShadow: `0px 4px 48px 0px #20232714,0px 4px 24px 0px #20232747`,
                }}
              >
                <div className="bg-white dark:bg-[#303030] rounded-full p-3">
                  <Icon className="w-8 h-8 text-[#EA580C]" />
                </div>
              </div>
              <div className="min-h-[100px] w-[311px] bg-white dark:bg-[#303030] flex flex-col justify-center items-center rounded-3xl px-4">
                {benefit}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccessCriteria;
