import React from 'react';
import ListBlock from './ListBlock';
import { useThemeContext } from '@/context/ThemeContext';
import LeftCurvedShape from './LeftCurveShape';
import Image from 'next/image';
import RightCurveShape from './RightCurveShape';
import { Data1, Data2 } from '@/constants/dRCUsecasesData';
import { useTranslation } from 'next-i18next';
import useLocaleDirection from '@/hooks/useLocaleDirection';

const UseCasesDeskView = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const bgColor = isDark ? '#242424' : '#CECECE';

  const { isArabic } = useLocaleDirection();

  return (
    <div className="my-8 relative">
      <div
        className="absolute bottom-[50px] z-50 left-1/2 -translate-x-1/2 translate-y-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, #9E2CA9 0%, #3B82A4 100%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="flex flex-row w-full justify-between items-center lg:items-start relative z-10 gap-6">
        <div className="relative z-10">
          <ListBlock items={Data1} />
          <div
            className={`absolute bottom-[-1px] ${isArabic ? 'left-[-76px] xl:left-[-79px] scale-x-[-1]' : 'right-[-76px] xl:right-[-79px]'} w-20 h-20 z-20`}
          >
            <LeftCurvedShape width="100%" height="100%" color={bgColor} />
          </div>
        </div>

        <div className="w-[450px] xl:w-[500px] aspect-square relative z-0">
          <Image
            src="/landing/deeproots-ecosystem.jpg"
            alt="deeproots ecosystem"
            fill
            className="object-cover rounded-[75px]"
          />
        </div>

        <div className="relative z-10">
          <ListBlock items={Data2} />
          <div
            className={`absolute bottom-[-1px] ${isArabic ? 'left-[235px] xl:left-[251px] scale-x-[-1]' : 'right-[235px] xl:right-[251px]'} w-20 h-20 z-20`}
          >
            <RightCurveShape width="100%" height="100%" color={bgColor} />
          </div>
        </div>
      </div>

      <div className="bg-[#CECECE] dark:bg-[#242424] py-6 xl:py-8 rounded-b-[115px] relative z-0">
        <div className="text-5xl w-fit mx-auto text-center font-orbitron font-[600] text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          {t('deeproots_ecosystem.use_case')}
        </div>
      </div>
    </div>
  );
};

export default UseCasesDeskView;
