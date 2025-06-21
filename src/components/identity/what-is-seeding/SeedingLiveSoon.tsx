import { CircleDollarSignIcon, Eye, Wallet } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PiPlant } from 'react-icons/pi';

const steps = [
  {
    icon: <Wallet className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />,
    text: 'Connect your wallet',
  },
  {
    icon: (
      <CircleDollarSignIcon className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />
    ),
    text: 'Choose your amount and lock time',
  },
  {
    icon: <Eye className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />,
    text: 'Preview your rewards',
  },
  {
    icon: <PiPlant className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]" />,
    text: 'Confirm and grow',
  },
];

const SeedingSoon = () => {
  return (
    <div className="my-20">
      <div className="text-3xl text-black dark:text-white font-semibold">
        Seeding is Live Soon
      </div>
      <div className="my-8">
        The seeding engine is preparing for launch. When it opens:
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-2 mx-auto justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl">
              <div className="mb-4">{step.icon}</div>
              <p className="text-[#737373] dark:text-[#F8FAFC]">{step.text}</p>
            </div>
            {index < steps.length - 1 && (
              <Image
                src={'/academy/right-arrow.png'}
                width={44}
                height={20}
                alt="arrow"
                className="rotate-90 md:rotate-0 my-5 md:my-0"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SeedingSoon;
