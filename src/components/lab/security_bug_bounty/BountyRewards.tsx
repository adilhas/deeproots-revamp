import React from 'react';
import { PiShieldCheck } from 'react-icons/pi';
import clsx from 'clsx';

const REWARDS = [
  {
    severity: 'Critical',
    amount: ['$5000-', '$20,000+'],
    size: 245,
    textColor: 'text-[#F43F42] dark:text-[#FB7173]',
    shadow: '0px 0px 200px 80px #F43F42B2',
  },
  {
    severity: 'High',
    amount: ['$1000-', '$5000'],
    size: 198,
    textColor: 'text-[#F97316] dark:text-[#FB923C]',
    shadow: '0px 0px 250px 53px #F97316E5',
  },
  {
    severity: 'Medium',
    amount: ['$500-', '$1000'],
    size: 171,
    textColor: 'text-[#10B981] dark:text-[#34D399]',
    shadow: '0px 0px 230.92px 53px #10B981E5',
  },
  {
    severity: 'Low',
    amount: ['Swag / Public Credit'],
    size: 143,
    textColor: 'text-[#3B82F6] dark:text-[#60A5FA]',
    shadow: '0px 0px 174.92px 53px #3B82F6E5',
  },
];

const BountyRewards = () => {
  return (
    <section className="py-16 relative z-0">
      <div className="z-10">
        <div className="flex flex-row items-center gap-3 text-3xl font-semibold w-fit mx-auto">
          <PiShieldCheck className="text-[#9333EA]" />
          <h2 className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            Bounty Rewards
          </h2>
        </div>
        <p className="text-center w-fit mx-auto text-xl font-semibold mt-2">
          Find Bugs in any of these severity and get rewarded
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-10 items-center my-16 z-0 relative">
        {REWARDS.map(({ severity, amount, size, textColor, shadow }, index) => (
          <div
            key={index}
            className={clsx(
              'rounded-full flex flex-col justify-center items-center text-center font-semibold bg-white dark:bg-[#1C1C1C]',
              textColor
            )}
            style={{
              height: `${size}px`,
              width: `${size}px`,
              boxShadow: `0px 12px 42px -4px #14171A1F, 0px 8px 18px -6px #14171A1F, ${shadow}`,
              zIndex: -1,
            }}
          >
            <div className="text-2xl">{severity}</div>
            <div
              className={clsx(
                'mt-1',
                amount.length > 1 ? 'text-xl' : 'text-md'
              )}
            >
              {amount.map((line, idx) => (
                <div key={idx} className="text-[#696969] dark:text-[#F1F5F9]">
                  {line}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center w-fit mx-auto text-xl font-semibold mt-2 z-20">
        Rewards are paid in USDT or dRC based on impact & clarity of report.
      </p>
    </section>
  );
};

export default BountyRewards;
