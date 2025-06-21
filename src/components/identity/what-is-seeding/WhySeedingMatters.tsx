import React from 'react';

const benefits = [
  {
    title: 'Long-Term Alignment',
    description: `You're supporting the ecosystem, not just chasing short-term gains.`,
  },
  {
    title: 'Real Utility',
    description: `Seeding connects you to platform launches, Foundation Seats, and in-game power.`,
  },
  {
    title: 'Low Circulation, High Impact',
    description: `Seeding reduces supply pressure while rewarding commitment.`,
  },
];

const WhySeedingMatters = () => {
  return (
    <div className="my-20">
      <div className="flex flex-row items-center gap-3 font-semibold mb-8">
        <div className="text-3xl text-black dark:text-white">
          Why Seeding Matters
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center w-full gap-5 mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="bg-[#F1F1F1] dark:bg-[#525252] min-h-[153px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl"
          >
            <div className="font-semibold text-lg mb-2">{item.title}</div>
            <p className="text-[#737373] dark:text-[#F8FAFC]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySeedingMatters;
