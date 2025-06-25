'use client';

import { Link, LockKeyhole } from 'lucide-react';
import {
  PiArrowClockwise,
  PiBank,
  PiCirclesFour,
  PiHourglassSimple,
} from 'react-icons/pi';
import { JSX } from 'react';

interface DRCTokenFeaturesType {
  title: string;

  icon: JSX.Element;
  bgColor: string;
  borderColor: string;
}

const DRCTokenFeatures = () => {
  const featureList: DRCTokenFeaturesType[] = [
    {
      title: 'Liquidity Lock Proof',
      icon: (
        <LockKeyhole className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
      ),
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      title: 'On-Chain Utility Live',
      icon: <Link className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]" />,
      bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
      borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
    },
    {
      title: 'Token Loop Mechanics',
      icon: (
        <PiArrowClockwise className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]" />
      ),
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
    {
      title: 'Multi-Year Vesting Contracts',
      icon: <PiHourglassSimple className="w-5 h-5" />,

      bgColor: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
      borderColor: 'border-[#34D399] dark:border-[#34D399]',
    },
    {
      title: 'DAO Treasury Growth Plan',
      icon: <PiBank className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]" />,
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },
    {
      title: '20+ dApps Powered by dRC',
      icon: (
        <PiCirclesFour className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]" />
      ),
      bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
      borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
    },
  ];

  return (
    <div className="my-20 max-w-[1200px] px-3 mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center bg-clip-text text-transparent">
        dRC TOKEN TRUST FEATURES
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {featureList.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} text-center border ${item.borderColor} p-3 rounded-3xl py-8`}
          >
            <div className="w-fit mx-auto">{item.icon}</div>
            <h3 className="font-semibold text-lg w-fit mx-auto">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DRCTokenFeatures;
