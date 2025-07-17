import SeedingTierCard from '@/components/connect/private_seed/SeedingTierCard';
import { useApplication } from '@/context/ApplicationContext';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const tierData = [
  {
    tierCategory: 'tier-1',
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
    tierCardClass:
      'bg-gradient-to-b from-[#D5D5D5] to-[#6F6F6F] border-[#D4D4D4] ',
    title1Class: 'text-[#696969]',
    title2Class: 'text-[#303030]',
    blurHueElement: (
      <div className="w-[45%] h-[30%]  rounded-l-full opacity-60  blur-lg  bg-[#0085A8] absolute bottom-0 right-[-20px]"></div>
    ),
  },
  {
    tierCategory: 'tier-2',
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
    tierCardClass:
      'bg-gradient-to-b from-[#927C56] to-[#BE9C60] border-[#D4D4D4] ',
    title1Class: 'text-white',
    title2Class: 'text-white',
    blurHueElement: (
      <div className="w-[50%] h-[30%]  rounded-lt-full opacity-60  blur-lg  bg-[#511AAF] absolute bottom-[-20px] right-[-20px]"></div>
    ),
  },
  {
    tierCategory: 'tier-3',
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
    tierCardClass: 'bg-[#0085A8] border-[#D4D4D4] ',
    title1Class: 'text-white',
    title2Class: 'text-white',
    blurHueElement: (
      <div className="w-[50%] h-[50%]  rounded-l-full opacity-60  blur-lg  bg-[#AD1AAF] absolute bottom-0 right-[-20px]"></div>
    ),
  },
];

const DealRoomSeedingTiers = () => {
  const { setApplication, application } = useApplication();
  const [selectedTier, setSelectedTier] = useState(
    application?.seedTier === null ? '' : application?.seedTier
  );
  const [contriAmount, setContriAmount] = useState(
    application?.contributionAmount === null
      ? ''
      : application?.contributionAmount
  );
  const [loading, setLoading] = useState(false);

  const handleTeirSelect = (tierName: string) => {
    setSelectedTier(tierName);
  };

  const submitContri = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/private-seed/update-contribution', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contributionAmount: contriAmount,
          seedTier: selectedTier,
          id: application?.id,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data?.message || 'Submission failed');
        return;
      }
      setApplication((prevState) => {
        if (!prevState) return prevState;
        return {
          ...prevState,
          contributionAmount: data?.contriAmount,
          seedTier: data?.selectedTier,
        };
      });
      toast.success('Seed tier & contribution saved successfully!');
    } catch (err) {
      toast.error('Something went wrong!');
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };
  console.log('ap', application);

  return (
    <div className="py-16 text-[#303030]">
      <h2 className=" font-semibold text-3xl mb-10">Select Seed Tier</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-x-3 gap-y-6 mx-auto w-full">
        {tierData.map((tier) => (
          <SeedingTierCard
            handleTeirSelect={() => handleTeirSelect(tier.tierCategory)}
            key={tier.tierName}
            isSelected={selectedTier === tier.tierCategory}
            isDark={false}
            tierName={tier.tierName}
            priceRange={tier.priceRange}
            imageSrc={tier.imageSrc}
            features={tier.features}
            tierCardClass={tier.tierCardClass}
            badgeLabel={tier.badgeLabel}
            title1Class={tier.title1Class}
            title2Class={tier.title2Class}
            benfitsTitle={
              tier.tierName === 'Tier 3 – Founder Seat'
                ? 'Exclusive Benefits'
                : 'Benefits'
            }
            contriAmount={contriAmount}
            setContriAmount={setContriAmount}
            onSubmitAmount={() => submitContri()}
            isLoading={loading}
            disableSubmit={
              loading ||
              (application?.contributionAmount === contriAmount &&
                application?.seedTier === selectedTier)
            }
            blurHueElement={tier.blurHueElement}
          />
        ))}
      </div>
    </div>
  );
};

export default DealRoomSeedingTiers;
