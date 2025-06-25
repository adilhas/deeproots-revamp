import React from 'react';
import FoundationRoundCard, {
  FoundationRoundType,
} from './FoundationRoundCard';

const accessRounds: FoundationRoundType[] = [
  {
    round: 'ROUND 1:',
    title: 'Genesis Contributors',
    allocation: '400,000 dRC',
    discount: '60%',
    access: 'By private invitation only',
    who: 'Core believers, early supporters,\nand ecosystem anchors',
  },
  {
    round: 'ROUND 2:',
    title: 'Builders & Validators',
    allocation: '400,000 dRC',
    discount: '50%',
    access: 'Proof of contribution required',
    who: 'Active devs, product contributors, node operators',
  },
  {
    round: 'ROUND 3:',
    title: 'Growth & Adoption',
    allocation: '400,000 dRC',
    discount: '40%',
    access: 'Approved by Foundation committee',
    who: 'Strategic partners, ambassadors, adoption catalysts',
  },
  {
    round: 'ROUND 4:',
    title: 'Ecosystem Grants',
    allocation: '400,000 dRC',
    discount: '30%',
    access: 'Proposal-based entry',
    who: 'dApp builders, startup teams, grant applicants',
  },
  {
    round: 'ROUND 5:',
    title: 'Governance Access',
    allocation: '400,000 dRC',
    discount: '20%',
    access: 'On-chain reputation or delegate voting',
    who: 'Long-term community leaders, DAO voters',
  },
];

const FoundationRounds = () => {
  return (
    <div className="py-16">
      <div className="w-fit text-3xl font-semibold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
        FOUNDATION ROUNDS (2M dRC)
      </div>
      <div className="flex flex-row items-center gap-2 w-fit mx-auto text-center text-lg md:text-2xl">
        <div>5 Structured Rounds</div>
        <div className="dark:bg-[#064E3B] bg-[#D4FFC4] dark:text-[#34D399] text-[#059669] px-3 py-1 rounded-2xl mt-2">
          60% → 20%
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-10">
        {/* First Row */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 md:flex-[0.8] ">
            <FoundationRoundCard data={accessRounds[0]} />
          </div>
          <div className="flex-1 md:flex-[1.2] ">
            <FoundationRoundCard data={accessRounds[1]} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {accessRounds.slice(2).map((item, idx) => (
            <div key={idx} className="">
              <FoundationRoundCard data={item} />
            </div>
          ))}
        </div>

        <div className="flex flex-row justify-center md:justify-end w-full translate-y-[-28px] ">
          <div className="bg-purple-100 text-sm mt-6 px-4 py-2 rounded-b-xl inline-block  md:mr-8 w-[295px]">
            <span className="font-semibold">Access Types</span> <br />
            Invite-Only, Builder Approval, Governance-Based
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoundationRounds;
