import React from 'react';

const ExclusiveInvestorAdvantage = () => {
  const features = [
    ' First Priority Access to Private Opportunities & Exclusive Access Rights',
    'Reserved Governance Rights in Ecosystem Decisions',
    'Custom High-Tier Staking Rewards & Accelerated Access Options',
    'Private Founders’ Circle Invitations (Virtual & In-Person)',
    'Direct Access to Founders & Ecosystem Core Team (by Invitation Only)',
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Your Long-Term Advantage as a Foundation Seeder
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-4">
        <div className="mb-3">Foundation Seeder Privileges:</div>
        <div>
          <ul className="list-disc ml-8">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="italic mt-4">
          (Reserved exclusively for Foundation Seeders in this round.)
        </div>
      </div>
    </div>
  );
};

export default ExclusiveInvestorAdvantage;
