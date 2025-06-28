import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  PiGameController,
  PiGraduationCapBold,
  PiPaintBrushLight,
  PiPenNibLight,
  PiUsersFour,
} from 'react-icons/pi';
import { JSX } from 'react';
import { MdOutlineTranslate } from 'react-icons/md';
import { useThemeContext } from '@/context/ThemeContext';

interface WaysToContributeType {
  icon: JSX.Element;
  bgColor: string;
  borderColor: string;
}

const WaysToContribute = () => {
  const { t } = useTranslation('connect/volunteer');
  const { isDark } = useThemeContext();
  const rawWaysToContributeData = t('way-contribute.benefits', {
    returnObjects: true,
  });
  const waysToContributeData: string[] = Array.isArray(rawWaysToContributeData)
    ? (rawWaysToContributeData as string[])
    : [];

  const weAreLooking: WaysToContributeType[] = [
    {
      icon: (
        <PiUsersFour className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
      ),
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      icon: (
        <MdOutlineTranslate className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]" />
      ),
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },
    {
      icon: (
        <PiPenNibLight className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]" />
      ),
      bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
      borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
    },
    {
      icon: (
        <PiPaintBrushLight className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]" />
      ),
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
    {
      icon: (
        <PiGraduationCapBold className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]" />
      ),
      bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
      borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
    },
    {
      icon: <PiGameController className="w-5 h-5" />,
      bgColor: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
      borderColor: 'border-[#34D399] dark:border-[#34D399]',
    },
  ];
  return (
    <div className="py-20">
      <div className="text-center">
        <h2 className="font-orbitron mb-1 text-transparent bg-gradient-to-r from-gradient-from text-3xl font-semibold to-gradient-to bg-clip-text w-fit mx-auto">
          {t('way-contribute.title')}
        </h2>
        <div>{t('way-contribute.description')}</div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto my-10">
          {waysToContributeData.map((item, index) => {
            return (
              <div
                key={index}
                className={`bg-[#FFFFFF] dark:bg-[#303030] border border-[#D4D4D4] dark:border-[#737373] p-3 rounded-3xl`}
                style={{
                  boxShadow: isDark
                    ? `0px 12px 20px 0px #00000066`
                    : `0px 12px 20px 0px #B3B3B399`,
                }}
              >
                <div className="w-fit mx-auto mb-4">
                  {weAreLooking[index].icon}
                </div>
                <h3 className="font-semibold text-lg mb-4 text-black dark:text-white">
                  {item}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WaysToContribute;
