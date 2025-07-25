import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const WhatIsDRC = () => {
  const slug = 'what-is-drc';

  return (
    <AppLayout>
      <Seo
        title="What Is dRC? The Pulse of Deep Roots and the Currency of DeWorld"
        description="dRC is the native utility currency of Deep Roots — powering staking, governance, GameFi, and access to a decentralized ecosystem built to last generations."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          title="What Is dRC?"
          subtitle="The Pulse of Deep Roots and the Currency of DeWorld"
          date="July 24, 2025"
          slug={slug}
        >
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              The Pulse of Deep Roots and the Currency of DeWorld
            </h3>
            <p className="text-lg font-normal mt-6">
              In a world flooded with tokens chasing short-term hype,{' '}
              <strong>dRC stands</strong> apart.
            </p>
            <p className="text-lg font-normal mt-6">
              It’s not just a coin. It’s the{' '}
              <strong>native utility currency</strong> of the Deep Roots
              ecosystem — designed to power, sustain, and evolve a decentralized
              world we call DeWorld.
            </p>
            <p className="text-lg font-normal mt-6">
              From fueling smart contracts to unlocking governance, staking,
              GameFi, and on-chain access —{' '}
              <strong>dRC is the lifeblood</strong> of a next-generation
              decentralized movement.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Is dRC?
            </h3>
            <p className="text-lg font-normal mt-6">
              <strong>dRC (Deep Roots Currency)</strong> is the foundational
              unit of participation within the Deep Roots ecosystem.
            </p>
            <p className="mt-6">
              While others inflate supply or chase speculation, we’ve engineered
              dRC with a 41-year distribution plan, zero inflation, and
              real-world utility across 20+ decentralized apps.
            </p>
            <p className="mt-6">It is designed for:</p>
            <ul className="list-disc ml-6 mt-6">
              <li>
                <strong>Utility,</strong> not volatility
              </li>
              <li>
                <strong>Participation,</strong> not promises
              </li>
              <li>
                <strong>Longevity,</strong> not short-lived trends
              </li>
            </ul>
            <p className="mt-6">
              dRC is how <strong>DeWorld</strong> runs — securely, fairly, and
              sustainably.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Designed for Purpose — Not Pump
            </h3>
            <p className="mt-6">
              dRC was built from the ground up to serve the entire Deep Roots
              ecosystem with precision:
            </p>
            {[
              {
                title: '🧪 Gas for the Chain',
                description:
                  'Every transaction, contract execution, and dApp interaction on Deep Roots runs on dRC.',
              },
              {
                title: '🌱 Staking & Seeding',
                description:
                  'Participate in 12% On-Chain Seeding Rewards, fueling real ecosystem contribution and voluntary participation.',
              },
              {
                title: '🗳️ Governance',
                description:
                  'Holders gain voting rights on major platform upgrades, decisions, and proposals through the Foundation.',
              },
              {
                title: '🔗 Referral System',
                description:
                  'Activate multi-tier referral trees to support fair, community-driven growth and engagement.',
              },
              {
                title: '🎮 GameFi Utility',
                description:
                  'Games like RootOpia use dRC as their primary in-game currency, blending entertainment with on-chain utility',
              },
              {
                title: '🖼️ NFT Marketplace',
                description:
                  'Buy, sell, and trade NFTs on Ocean Bazaar using dRC — with seamless integration across digital collectibles',
              },
            ].map((data) => (
              <div className="mt-6" key={data.title}>
                <h4 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-xl">
                  {data.title}
                </h4>
                <p className="mt-2">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Token Specifications
            </h3>

            <div className="overflow-x-auto mt-6 text-lg border border-[#D4D4D4] dark:border-[#737373] rounded-3xl p-2">
              <table className="table text-lg  border-separate ">
                <thead className="text-[#303030] dark:text-[#F8FAFC] rounded-3xl text-lg ">
                  <tr className="bg-[#D4D4D4] dark:bg-[#3F3F3F]">
                    <th className="font-normal rounded-l-3xl">Specification</th>
                    <th className="font-normal rounded-r-3xl">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { specs: 'Total Supply', value: '100 Million dRC' },
                    { specs: 'Distribution Period', value: '41 Years' },
                    { specs: 'Rewards Pool', value: '60% Controlled Emission' },
                    { specs: 'Inflation', value: '0 – Fully Deflationary' },
                    { specs: 'Integration', value: '20+ Web3 Products' },
                  ].map((data) => (
                    <tr
                      key={data.specs}
                      className="border-b border-[#D4D4D4] dark:border-[#737373]"
                    >
                      <td>{data.specs}</td>
                      <td>{data.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              This isn&apos;t another quick-launch coin. It’s the foundation of
              a digital economy designed to endure.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Built for Real Use — Not Just Trading
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>
                <a
                  href="https://www.theaddress.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>The Address Wallet</strong>
                </a>
                – Hold, send, receive, and stake dRC
              </li>
              <li>
                <a
                  href="https://www.telexcoin.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>TelexCoin DEX</strong>
                </a>
                – Swap dRC directly in USDT/USDC pairs
              </li>
              <li>
                <a
                  href="GameFi reimagined with purpose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>RootOpia</strong>
                </a>
                – Earn, play, and engage using dRC
              </li>
              <li>
                <a
                  href="https://www.oceanbazaar.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>Ocean Bazaar</strong>
                </a>
                – Trade NFTs with your dRC wallet
              </li>

              <li>
                <strong>Foundation Campaign</strong>– Join governance with dRC
              </li>
            </ul>
            <p className="mt-6">
              Every on-chain action, from staking to seeding, from minting to
              governance is powered by dRC.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why It Matters
            </h3>

            <p className="mt-6">
              Deep Roots is building a digital civilization and every
              civilization needs currency.
            </p>

            <p className="mt-6">
              But unlike the old world, this isn’t built on debt, speculation,
              or gatekeeping.dRC represents access, contribution, and shared
              direction.
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>No inflationary minting</li>
              <li>No financial guarantees</li>
              <li>No central ownership</li>
            </ul>
            <p className="mt-6">
              Just one coin, purpose-built for people and platforms to thrive.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Ready to Join the Future of Decentralized Participation?
            </h3>
            <div className="mt-6">
              <p>dRC isn’t just another coin.</p>
              <p>
                It’s a long-term access model. A protocol-powered key. A
                governance gateway. A fuel for on-chain innovation.
              </p>
            </div>

            <p className=" mt-6">
              This is the pulse of Deep Roots. This is the currency of DeWorld.
            </p>
          </div>
          <div className="py-6">
            <div className=" border border-[#D4D4D4] dark:border-[#737373] p-2.5 text-center rounded-3xl mt-6">
              <div className="bg-[#D4D4D4] dark:bg-[#3F3F3F] p-2 rounded-2xl font-bold">
                <div>
                  Join the Movement – Discover DeWorld at{' '}
                  <Link href={'/'} className="underline">
                    DeepRoots.earth
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </BlogLayout>
      </div>
    </AppLayout>
  );
};

export default WhatIsDRC;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
