'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegCreditCard } from 'react-icons/fa6';
import { PiGraph, PiHandshake, PiHeartHalf, PiWallet } from 'react-icons/pi';

const iconList = [
  <PiGraph className="w-5 h-5" key="graph" />,
  <PiHandshake className="w-5 h-5" key="handshake" />,
  <PiHeartHalf className="w-5 h-5" key="heart" />,
  <PiWallet className="w-5 h-5" key="wallet" />,
  <FaRegCreditCard className="w-5 h-5" key="creditcard" />,
];

const cardStyles = [
  {
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
  {
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
];

const OurCorePrinciple = () => {
  const { t } = useTranslation('academy/web3');
  const rawItems = t('web3.principles.items', { returnObjects: true });
  const items: { title: string; description: string }[] = Array.isArray(
    rawItems
  )
    ? (rawItems as { title: string; description: string }[])
    : [];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">
        {t('web3.principles.title')}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className={`${cardStyles[index].bgColor} border ${cardStyles[index].borderColor} p-3 rounded-3xl`}
          >
            <div>{iconList[index]}</div>
            <h3 className="font-semibold my-4 text-lg">{item.title}</h3>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCorePrinciple;
