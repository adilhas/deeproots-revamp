'use client';

import { Gamepad2 } from 'lucide-react';
import { BiDollarCircle } from 'react-icons/bi';
import {
  PiGavel,
  PiHouseSimpleLight,
  PiPlant,
  PiUserPlusLight,
} from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { JSX } from 'react';

interface FullSeatFeaturesType {
  icon: JSX.Element;
  bgColor: string;
  borderColor: string;
}

const FullSeatFeatures = () => {
  const { t } = useTranslation('academy/what_is_fullseat');

  const featureList: FullSeatFeaturesType[] = [
    {
      icon: (
        <BiDollarCircle className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
      ),
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      icon: <PiPlant className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]" />,
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },
    {
      icon: (
        <PiUserPlusLight className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]" />
      ),
      bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
      borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
    },
    {
      icon: (
        <PiHouseSimpleLight className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]" />
      ),
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
    {
      icon: <PiGavel className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]" />,
      bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
      borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      bgColor: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
      borderColor: 'border-[#34D399] dark:border-[#34D399]',
    },
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        {t('fullseat.features.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {featureList.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div>{item.icon}</div>
            <h3 className="font-semibold my-4 text-lg">
              {t(`fullseat.features.items.${index}.title`)}
            </h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {t(`fullseat.features.items.${index}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullSeatFeatures;
