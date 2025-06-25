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
      'All content, documentation, smart contracts, or communications provided by Deep Roots are strictly for informational and educational purposes. Nothing on this platform constitutes financial, investment, legal, or tax advice.',
  },
  {
    icon: '🔏',
    title: 'TOKEN USAGE & REGULATORY POSITION',
    content:
      'dRC and all tokens are utilities, not securities. No guarantees are made. Participation is voluntary and at user risk.',
  },
  {
    icon: '❌',
    title: 'NO PERFORMANCE GUARANTEE',
    content:
      'The ecosystem is experimental and provided "as-is" with no guarantees. Use at your own risk.',
  },
  {
    icon: '🔍',
    title: 'REGULATORY COMPLIANCE',
    content:
      'Users must follow local regulations and confirm lawful engagement with blockchain technologies.',
  },
  {
    icon: '💡',
    title: 'INTELLECTUAL PROPERTY RIGHTS',
    content:
      'All ecosystem assets are property of DEEPROOTS BLOCKCHAIN LLC. Unauthorized use is prohibited.',
  },
  {
    icon: '⚖️',
    title: 'GOVERNING LAW & DISPUTE RESOLUTION',
    content:
      'Governed by Wyoming law. Disputes resolved by confidential arbitration in Wyoming.',
  },
  {
    icon: '⚠️',
    title: 'DISCLAIMER OF WARRANTIES & LIMITATION OF LIABILITY',
    content:
      'No warranties offered. Not liable for any damages, data loss, or other harm.',
  },
  {
    icon: '✅',
    title: 'USER ACKNOWLEDGEMENT',
    content: (
      <ul className="list-disc pl-6 space-y-1">
        <li>
          You are at least 18 years old (or legal age in your jurisdiction).
        </li>
        <li>
          You understand the risks of blockchain and decentralized systems.
        </li>
        <li>You waive Deep Roots from related liability.</li>
      </ul>
    ),
  },
  {
    icon: '⚠️',
    title: 'RISK DISCLOSURE',
    content:
      'Digital assets carry risk and volatility. Seek professional advice before participating.',
  },
];

const LegalDisclaimerPage = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12 text-xl">
      <DisclaimerHeader />

      <p className="my-10">
        This legal disclaimer applies to all users, contributors, participants,
        and partners engaging with the Deep Roots Blockchain, its digital assets
        (including dRC tokens), and all Web3 products and services within the
        DeWorld Ecosystem.
      </p>

      <p className="my-10">
        <strong>
          Deep Roots Blockchain Ecosystem is operated by DEEPROOTS BLOCKCHAIN
          LLC
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
        owned or operated under the Deep Roots Project.
      </p>

      {sections.map((section, i) => (
        <DisclaimerSection key={i} {...section} />
      ))}

      <ContactBox />
    </section>
  );
};

export default LegalDisclaimerPage;
