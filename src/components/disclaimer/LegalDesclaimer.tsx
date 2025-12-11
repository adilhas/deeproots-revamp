'use client';

import DisclaimerHeader from './DisclaimerHeader';
import ProductList from './ProductList';
import DisclaimerSection from './DisclaimerSection';
import ContactBox from './ContactBox';

const sections = [
  {
    icon: '🚫',
    title: 'NO INVESTMENT OR FINANCIAL ADVICE',
    content:
      'All content, documentation, smart contracts, or communications provided by DEEPROOTS are strictly for informational and educational purposes. Nothing on this platform constitutes financial, investment, legal, or tax advice. Users should not interpret any part of the ecosystem as a solicitation or recommendation to buy or sell digital assets or securities.',
  },
  {
    icon: '🔏',
    title: 'TOKEN USAGE & REGULATORY POSITION',
    content: (
      <>
        <p>
          The DEEPROOTS Coin (dRC) and all associated tokens are utility tokens,
          not registered or classified as securities with the U.S. Securities
          and Exchange Commission (SEC) or any other authority. Tokens serve
          functional roles within the ecosystem—such as governance, staking,
          referral rewards, in-game benefits, and access to services.
        </p>
        <p className="mt-8">
          No guarantee is made regarding value appreciation, income generation,
          or financial returns. Participation in token activities—including
          staking, seeding, GameFi, or liquidity pools—is done voluntarily and
          at the user&apos;s sole risk.
        </p>
      </>
    ),
  },
  {
    icon: '⚙️',
    title: 'NO PERFORMANCE GUARANTEE',
    content: (
      <>
        <p>
          The DEEPROOTS ecosystem is an experimental decentralized
          infrastructure. All platforms, applications, and services are provided
          “as-is” and “as-available” without any warranties, guarantees, or
          assurances.
        </p>
        <p className="mt-8">
          We make no claims regarding platform uptime, performance, or security
          of smart contracts. Users assume full responsibility for interacting
          with any service or asset.
        </p>
      </>
    ),
  },
  {
    icon: '🌍',
    title: 'REGULATORY COMPLIANCE',
    content: (
      <>
        <p>
          All users are responsible for complying with the laws and regulations
          of their local jurisdiction. DEEPROOTS makes no representation that
          its services are appropriate, legal, or available for use in any
          particular location.
        </p>
        <p className="mt-8">
          By using this ecosystem, you confirm that you are not located in a
          restricted or sanctioned jurisdiction and that you have full legal
          capacity to engage with blockchain technologies.
        </p>
      </>
    ),
  },
  {
    icon: '🧠',
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    content:
      'All trademarks, code, content, UI/UX assets, and product names within the DEEPROOTS ecosystem are the intellectual property of DEEPROOTS Project. Unauthorized reproduction, use, or modification is strictly prohibited.',
  },
  {
    icon: '⚖️',
    title: 'GOVERNING LAW & DISPUTE RESOLUTION',
    content: (
      <>
        <p>
          This disclaimer, and any disputes arising from or relating to the Deep
          Roots ecosystem, shall be governed by and interpreted in accordance
          with the laws of the State of Wyoming, United States, without regard
          to its conflict of law provisions.
        </p>
        <p className="mt-8">
          By accessing or using any part of the ecosystem, you agree that any
          dispute or claim shall be resolved through confidential, binding
          arbitration conducted in Wyoming, unless otherwise required by
          applicable law.
        </p>
      </>
    ),
  },
  {
    icon: '⚠️',
    title: 'DISCLAIMER OF WARRANTIES & LIMITATION OF LIABILITY',
    content: (
      <>
        <p>
          DEEPROOTS disclaims all warranties, express or implied. We do not
          guarantee the accuracy, completeness, or reliability of any feature,
          smart contract, or interface.
        </p>
        <p className="mt-8">
          In no event shall DEEPROOTS, its affiliates, or its contributors be
          held liable for any direct or indirect damages, including but not
          limited to loss of funds, digital assets, user data, or reputation.
        </p>
      </>
    ),
  },
  {
    icon: '✅',
    title: 'USER ACKNOWLEDGEMENT',
    content: (
      <>
        <p className="mb-4">
          By accessing or interacting with Deep Roots, you acknowledge and
          confirm that:
        </p>

        <ul className="list-disc pl-6 space-y-4">
          <li>
            You are at least 18 years old (or legal age in your jurisdiction).
          </li>
          <li>
            You understand the inherent risks of blockchain and decentralized
            systems.
          </li>
          <li>
            You waive and release DEEPROOTS and its team from liability related
            to your participation.
          </li>
        </ul>
      </>
    ),
  },
  {
    icon: '⚠️',
    title: 'RISK DISCLOSURE',
    content:
      'The use of digital assets carries a high degree of risk and volatility. Loss of capital is possible, including through code exploits, token devaluation, or smart contract failure. Engage responsibly and seek professional advice before participating.',
  },
  // {
  //   icon: '🔴',
  //   title: 'U.S. Participation Restriction',
  //   content: (
  //     <div>
  //       <p className="mb-3">
  //         Participation in any token-related activity, contribution round,
  //         seeding campaign, or ecosystem access involving digital assets is
  //         strictly prohibited for:
  //       </p>
  //       <ul className="list-disc pl-6 space-y-1 my-3">
  //         <li>U.S. citizen or U.S. residents</li>
  //         <li>U.S.-registered entities (corporations, partnerships, trusts)</li>
  //         <li>Any person or organization under U.S. jurisdiction</li>
  //       </ul>
  //       <p className="font-bold">No exceptions apply.</p>
  //       <p className="mt-3">
  //         Tokens are for <strong>utility access only</strong> — not for
  //         investment, profit, or returns.
  //       </p>
  //     </div>
  //   ),
  // },
];

const LegalDisclaimerPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-xl md:text-lg">
      <DisclaimerHeader />

      <p className="my-10">
        This legal disclaimer applies to all users, contributors, participants,
        and partners engaging with the DEEPROOTS Blockchain, its digital assets
        (including dRC tokens), and all Web3 products and services within the
        DeWorld Ecosystem.
      </p>

      <p className="my-10">
        <strong>
          DEEPROOTS Blockchain Ecosystem is operated by DEEPROOTS Project
        </strong>
        , a limited liability company registered in the State of Wyoming, United
        States.
      </p>

      <p className="my-10">
        This disclaimer applies to, but is not limited to, the following
        products and platforms:
      </p>

      <ProductList />

      <p className="mb-6">
        And all associated dApps, smart contracts, services, and interfaces
        owned or operated under the DEEPROOTS Project.
      </p>

      {sections.map((section, i) => (
        <DisclaimerSection key={i} {...section} />
      ))}

      <ContactBox />
    </section>
  );
};

export default LegalDisclaimerPage;
