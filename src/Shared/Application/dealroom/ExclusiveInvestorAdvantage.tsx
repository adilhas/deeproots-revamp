import React from 'react';

const ExclusiveInvestorAdvantage = () => {
  const features = [
    'Early Access to Future Funding Rounds',
    'Early Governance Rights',
    'Enhanced Staking Rewards (if applicable)',
    'Private Networking Opportunities',
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Exclusive Investor Advantages
        </h1>
      </div>

      <div className="max-w-[700px] text-[#525252] mx-auto px-2 py-4">
        <div className="mb-3 text-2xl">
          As a Foundation Seeder, you unlock premium advantages
        </div>
        <div>
          <ul className="list-disc ml-8 text-xl space-y-3">
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
