import React from 'react';

const DealFullSeatBenefits = () => {
  const features = [
    'Ecosystem Share – Access a portion of on-chain activity from new projects',
    'Governance Rights – Vote on key ecosystem proposals',
    'Private Round Access – Priority entry to future contribution phases',
    'Whitelist & Events – Early access to launches and private experiences',
    'Auto Rewards – On-chain participation rewards via smart contracts',
    'Referral Boost – Expand access by inviting aligned contributor',
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Full Seat Benefit
        </h1>
      </div>

      <div className="max-w-[794px] mx-auto px-2 py-4 text-xl">
        <div className="mb-3 ">
          By securing your allocation, you gain access to Exclusive Foundation
          rights:
        </div>
        <div>
          <ul className="list-disc ml-6">
            {features.map((feature) => (
              <li key={feature} className="my-3">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DealFullSeatBenefits;
