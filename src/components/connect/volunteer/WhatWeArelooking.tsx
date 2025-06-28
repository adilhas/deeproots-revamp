import React from 'react';
import { useTranslation } from 'next-i18next';
import {
  PiGameController,
  PiGraduationCapBold,
  PiPaintBrushLight,
  PiPenNibLight,
  PiUsersFour,
} from 'react-icons/pi';
import { JSX } from 'react';
import { MdOutlineTranslate } from 'react-icons/md';

interface WhatWeAreLookingType {
  title: string;
  description: string;
  icon: JSX.Element;
  bgColor: string;
  borderColor: string;
}

const WhatWeArelooking = () => {
  const { t } = useTranslation('connect/volunteer');
  const weAreLooking: WhatWeAreLookingType[] = [
    {
      title: t('who-we-looking.qualities.moderator.title'),
      description: t('who-we-looking.qualities.moderator.description'),
      icon: (
        <PiUsersFour className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
      ),
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      title: t('who-we-looking.qualities.translator.title'),
      description: t('who-we-looking.qualities.translator.description'),

      icon: (
        <MdOutlineTranslate className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]" />
      ),
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },
    {
      title: t('who-we-looking.qualities.web3.title'),
      description: t('who-we-looking.qualities.web3.description'),

      icon: (
        <PiPenNibLight className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]" />
      ),
      bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
      borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
    },
    {
      title: t('who-we-looking.qualities.designer.title'),
      description: t('who-we-looking.qualities.designer.description'),

      icon: (
        <PiPaintBrushLight className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]" />
      ),
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
    {
      title: t('who-we-looking.qualities.educator.title'),
      description: t('who-we-looking.qualities.educator.description'),

      icon: (
        <PiGraduationCapBold className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]" />
      ),
      bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
      borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
    },
    {
      title: t('who-we-looking.qualities.tester.title'),
      description: t('who-we-looking.qualities.tester.description'),

      icon: <PiGameController className="w-5 h-5" />,
      bgColor: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
      borderColor: 'border-[#34D399] dark:border-[#34D399]',
    },
  ];
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="font-orbitron mb-1 text-transparent bg-gradient-to-r from-gradient-from text-3xl font-semibold to-gradient-to bg-clip-text w-fit mx-auto">
          {t('who-we-looking.title')}
        </h2>
        <div>{t('who-we-looking.description1')}</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-10">
          {weAreLooking.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
            >
              <div className="w-fit mx-auto mb-4">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-[#737373] dark:text-[#F8FAFC]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div>{t('who-we-looking.description2')}</div>
      </div>
    </div>
  );
};

export default WhatWeArelooking;
