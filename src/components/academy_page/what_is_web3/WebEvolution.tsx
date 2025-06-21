import { Eye, Wallet } from 'lucide-react';
import React, { JSX } from 'react';
import { PiNotePencil } from 'react-icons/pi';

interface WebItem {
  title: string;
  subtitle: string;
  description: string;
  icons: JSX.Element[];
  bgColor: string;
  borderColor: string;
  titleColor: string;
  subtitleColor: string;
}

export const webEvolutionData: WebItem[] = [
  {
    title: 'Web 1.0',
    subtitle: 'Read Only',
    description:
      'The early web (1990–2004) was static. You could read, but not interact. Pages were simple, and users were just consumers.',
    icons: [<Eye className="w-5 h-5" key="eye" />],
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    titleColor: 'text-[#525252] dark:text-white',
    subtitleColor: '',
  },
  {
    title: 'Web 2.0',
    subtitle: 'Read Only',
    description:
      'Web 2.0 (2004–now) brought platforms like Facebook, YouTube, and Twitter. You could create content but companies owned your data and monetized your activity.',
    icons: [
      <Eye className="w-5 h-5 text-[#2E90FA]" key="eye" />,
      <PiNotePencil className="w-5 h-5 text-[#2E90FA]" key="edit" />,
    ],
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    borderColor: 'border-[#B2DDFF] dark:border-[#175CD3]',
    titleColor: 'text-[#1849A9] dark:text-[#53B1FD]',
    subtitleColor: '',
  },
  {
    title: 'Web 3.0',
    subtitle: 'Read Only',
    description:
      'Web3 changes the game. Now, users can own their identity, assets, and participation. With wallets, smart contracts, and tokens, the internet becomes open, programmable, and user-driven.',
    icons: [
      <Eye className="w-5 h-5 text-[#F97316] dark:text-[#F97316]" key="eye" />,
      <PiNotePencil
        className="w-5 h-5 text-[#F97316] dark:text-[#F97316]"
        key="edit"
      />,
      <Wallet
        className="w-5 h-5 text-[#F97316] dark:text-[#F97316]"
        key="wallet"
      />,
    ],
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#EA580C]',
    titleColor: 'text-[#9A3412] dark:text-[#F97316]',
    subtitleColor: '',
  },
];

const WebEvolution = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">The Evolution of the Web</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {webEvolutionData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} border ${item.borderColor} p-3 rounded-3xl`}
          >
            <div className="flex flex-row justify-between items-center">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <div className="flex flex-row justify-end gap-2">
                {item.icons}
              </div>
            </div>
            <div
              className={`mt-4 mb-3 text-lg font-semibold ${item.titleColor}`}
            >
              {item.subtitle}
            </div>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebEvolution;
