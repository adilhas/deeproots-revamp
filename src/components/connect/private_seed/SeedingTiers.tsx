import React from 'react';
import SeedingTierCard from './SeedingTierCard';

const tierData = [
  {
    tierName: 'Tier 1- Foundation Seat',
    priceRange: '$5k - $9,999',
    imageSrc: '/connect/seeding-tier1-egg.png',
    badgeLabel: 'Limited to 60 Seats',
    features: [
      'On-Chain Participation in All New DeepRoots Projects',
      '12% Annual Protocol Yield via Seeding (Smart Contract)',
      'Early Access to Whitelists, Product Features & Drops',
      'Referral System Access (Multi-Tier Structure)',
      'Standard Governance Rights (Across Ecosystem)',
      'RootOpia GameFi Boosts (In-Game Perks & Rewards)',
    ],
    lightGradientClass: 'bg-gradient-to-b from-[#D5D5D5] to-[#6F6F6F]',
    darkGradientClass: 'bg-gradient-to-b from-[#3A3A3A] to-[#1F1F1F]',
  },
  {
    tierName: 'Tier 2 - Core Foundation Seat',
    priceRange: '$10k - $99,999',
    imageSrc: '/connect/seeding-tier2-egg.png',
    badgeLabel: 'Limited to 40 Seats',

    features: [
      'Includes All Tier 1 Benefits, plus',
      'Private Walkthrough of 4 Live Ecosystem dApps',
      '15-Minute Strategic Alignment Call with Founder',
      'Priority Access to Future Ecosystem Rounds',
      'Invite to Private Founder Circle (Core Strategy Group)',
      'Preferred Queue for New Features & Tools',
      'Enhanced Referral Commission Tier',
    ],
    lightGradientClass: 'bg-gradient-to-b from-[#FBD786] to-[#f7797d]',
    darkGradientClass: 'bg-gradient-to-b from-[#4A1A0A] to-[#1B1B1B]',
  },
  {
    tierName: 'Tier 3 – Founder Seat',
    priceRange: '$100k - $1M+',
    imageSrc: '/connect/seeding-tier3-egg.png',
    badgeLabel: 'Limited to 10 Seats',

    features: [
      `Custom Multi-Sig Wallet (Founder's Label, Secure UI)`,
      'Lifetime Founder NFT Badge (Visible Across Ecosystem)',
      'Enhanced Governance Power (High-Weight Voting)',
      '1:1 Strategy Session with Core Team',
      'Founders Council Seat (Private Briefings, Roadmap Voting)',
      'Priority Role in Long-Term Ecosystem Expansion',
    ],
    lightGradientClass: 'bg-gradient-to-b from-[#C2FFD8] to-[#465EFB]',
    darkGradientClass: 'bg-gradient-to-b from-[#0F2027] to-[#203A43]',
  },
];

const SeedingTiers = () => {
  return (
    <div className="py-16 text-[#303030] dark:text-white">
      <h2 className=" font-semibold text-3xl text-center mb-10">
        Seeding Tiers
      </h2>
      <div className="flex flex-col lg:flex-row justify-center gap-x-3 gap-y-6 mx-auto w-full">
        {tierData.map((tier, index) => (
          <SeedingTierCard
            key={index}
            tierName={tier.tierName}
            priceRange={tier.priceRange}
            imageSrc={tier.imageSrc}
            features={tier.features}
            badgeLabel={tier.badgeLabel}
            lightGradientClass={tier.lightGradientClass}
            darkGradientClass={tier.darkGradientClass}
          />
        ))}
      </div>
    </div>
  );
};

export default SeedingTiers;
