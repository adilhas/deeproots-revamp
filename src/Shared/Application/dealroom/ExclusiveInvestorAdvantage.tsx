import React from 'react';

const ExclusiveInvestorAdvantage = () => {
  const features = [
    'Early Access to Future Funding Rounds',
    'Early Access to Future Funding Rounds',
    'Enhanced Staking Rewards (if applicable)',
    'Private Networking Opportunitiess',
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Exclusive Investor Advantages
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-4">
        <div className="mb-3">
          As a Foundation Seeder, you unlock premium advantages
        </div>
        <div>
          <ul className="list-disc">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveInvestorAdvantage;
