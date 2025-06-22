'use client';

import { Eye, Wallet } from 'lucide-react';
import { PiNotePencil } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';

const WebEvolution = () => {
  const { t } = useTranslation('academy/web3');

  const iconsList = [
    [<Eye className="w-5 h-5" key="eye1" />],
    [
      <Eye className="w-5 h-5 text-[#2E90FA]" key="eye2" />,
      <PiNotePencil className="w-5 h-5 text-[#2E90FA]" key="edit2" />,
    ],
    [
      <Eye className="w-5 h-5 text-[#F97316]" key="eye3" />,
      <PiNotePencil className="w-5 h-5 text-[#F97316]" key="edit3" />,
      <Wallet className="w-5 h-5 text-[#F97316]" key="wallet3" />,
    ],
  ];

  const cards = [
    {
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
      titleColor: 'text-[#525252] dark:text-white',
    },
    {
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#175CD3]',
      titleColor: 'text-[#1849A9] dark:text-[#53B1FD]',
    },
    {
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#EA580C]',
      titleColor: 'text-[#9A3412] dark:text-[#F97316]',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">
        {t('web3.evolution.title')}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-2xl font-semibold">
                {t(`web3.evolution.items.${index}.title`)}
              </h3>
              <div className="flex flex-row justify-end gap-2">
                {iconsList[index]}
              </div>
            </div>
            <div
              className={`mt-4 mb-3 text-lg font-semibold ${item.titleColor}`}
            >
              {t(`web3.evolution.items.${index}.subtitle`)}
            </div>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {t(`web3.evolution.items.${index}.description`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebEvolution;
