import { Gamepad2 } from 'lucide-react';
import React, { JSX } from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import {
  PiGavel,
  PiHouseSimpleLight,
  PiPlant,
  PiUserPlusLight,
} from 'react-icons/pi';

interface FullSeatFeaturesType {
  title: string;
  description: string;
  icons: JSX.Element;
  bgColor: string;
  borderColor: string;
}

export const FullSeatFeaturesData: FullSeatFeaturesType[] = [
  {
    title: 'Revenue Share',
    description:
      'Earn a percentage from every new project built on Deep Roots.',
    icons: (
      <BiDollarCircle
        className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
        key="dollar"
      />
    ),
    bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
    borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
  },
  {
    title: '12% Passive Rewards',
    description: 'Fixed annual yield from seeding',
    bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
    icons: (
      <PiPlant
        className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]"
        key="plant"
      />
    ),
    borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
  },
  {
    title: 'Referral Rewards',
    description: 'Earn by inviting others to join the ecosystem',
    icons: (
      <PiUserPlusLight
        className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]"
        key="add user"
      />
    ),
    bgColor: 'bg-[#F3E8FF] dark:bg-[#581C87]',
    borderColor: 'border-[#C084FC] dark:border-[#C084FC]',
  },
  {
    title: 'Private Access',
    description: 'Whitelist spots, early investments, exclusive drops',
    icons: (
      <PiHouseSimpleLight
        className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]"
        key="house"
      />
    ),
    bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
    borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
  },
  {
    title: 'Governance Power',
    description: 'Shape platform decisions in the future DAO',
    icons: (
      <PiGavel
        className="w-5 h-5 text-[#DB2777] dark:text-[#F9A8D4]"
        key="gavel"
      />
    ),
    bgColor: 'bg-[#FFE3F2] dark:bg-[#831843]',
    borderColor: 'border-[#F472B6] dark:border-[#F472B6]',
  },
  {
    title: 'RootOpia GameFi Power',
    description: 'Boosted benefits inside the game world',
    icons: <Gamepad2 className="w-5 h-5" key="gamepad" />,
    bgColor: 'bg-[#D1FAE5] dark:bg-[#064E3B]',
    borderColor: 'border-[#34D399] dark:border-[#34D399]',
  },
];

const FullSeatFestures = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        What a Full Seat Gives You
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {FullSeatFeaturesData.map((item, index) => (
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

export default FullSeatFestures;
