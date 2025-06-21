import React, { JSX } from 'react';
import { FaRegCreditCard } from 'react-icons/fa6';
import { PiGraph, PiHandshake, PiHeartHalf, PiWallet } from 'react-icons/pi';

interface OurPrincipleType {
  title: string;
  description: string;
  icons: JSX.Element;
  bgColor: string;
  borderColor: string;
}

export const ourPrincipleData: OurPrincipleType[] = [
  {
    title: 'Decentralization',
    description:
      'No central authority. Control is shared across nodes and smart contracts.',
    icons: <PiGraph className="w-5 h-5" key="graph" />,
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: 'Permission',
    description: 'Anyone can participate. No approvals, no gatekeepers.',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    icons: <PiHandshake className="w-5 h-5" key="hand shake" />,
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    title: 'Trustless',
    description:
      'Code replaces middlemen. Smart contracts handle logic and security.',
    icons: <PiHeartHalf className="w-5 h-5" key="heart" />,
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    title: 'Ownership',
    description:
      'Your tokens, your NFTs, your identity is truly yours, portable and protected.',
    icons: <PiWallet className="w-5 h-5" key="eye" />,
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
  {
    title: 'Native Payment',
    description: 'Send and receive value with crypto, no banks required.',
    icons: <FaRegCreditCard className="w-5 h-5" key="eye" />,
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
];

const OurCorePrinciple = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6">Core Principles of Web3</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mx-auto">
        {ourPrincipleData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div>{item.icons}</div>
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
