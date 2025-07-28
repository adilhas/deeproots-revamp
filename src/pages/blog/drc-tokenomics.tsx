import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const DRCTokenomics = () => {
  const slug = 'drc-tokenomics';

  return (
    <AppLayout>
      <Seo
        title="dRC Tokenomics Native Currency Built to Last"
        description="Explore the tokenomics of dRC – DeepRoots’ native currency fueling 20+ dApps, governance, GameFi, and long-term participation across the DeWorld ecosystem."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          title="dRC Tokenomics"
          subtitle="Native Currency Built to Last"
          date="July 28, 2025"
          slug={slug}
        >
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Not Hype. Not Speculation. Just Real Utility.
            </h3>
            <p className="text-lg font-normal mt-6">
              The <span className="font-orbitron">DEEPROOTS</span> blockchain
              was designed to power a decentralized internet for generations and
              at the center of it all is dRC, the native currency of DeWorld.
            </p>
            <p className="text-lg font-normal mt-6">
              But unlike most tokens, dRC isn’t built for quick wins or
              temporary hype. It’s engineered for security, sustainability, and
              purpose, with clear mechanics that serve the real needs of the
              ecosystem today and for decades to come.
            </p>
            <p className="text-lg font-normal mt-6">
              Let’s break down what powers it all:{' '}
              <strong>dRC Tokenomics.</strong>
            </p>
            <div className="overflow-x-auto mt-6 text-lg border border-[#D4D4D4] dark:border-[#737373] rounded-3xl p-2">
              <table className="table text-lg  border-separate ">
                <thead className="text-[#303030] dark:text-[#F8FAFC] rounded-3xl text-lg ">
                  <tr className="bg-[#D4D4D4] dark:bg-[#3F3F3F]">
                    <th className="font-normal rounded-l-3xl">Specification</th>
                    <th className="font-normal">Value</th>
                    <th className="font-normal rounded-r-3xl">Terms</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      specs: 'Total Supply',
                      amount: '100 Million dRC',
                      terms: 'Locked + transparent',
                    },
                    {
                      specs: 'Distribution Period',
                      amount: '41 Years',
                      terms: 'Long-term emission',
                    },
                    {
                      specs: 'Foundation Allocation',
                      amount: '2 Million',
                      terms: '5 structured rounds',
                    },
                    {
                      specs: 'Liquidity Lock',
                      amount: '40%',
                      terms: 'Protocol-locked for stability',
                    },
                  ].map((data) => (
                    <tr
                      key={data.specs}
                      className="border-b border-[#D4D4D4] dark:border-[#737373]"
                    >
                      <td>{data.specs}</td>
                      <td>{data.amount}</td>
                      <td>{data.terms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              dRC uses a controlled emission model with ultra-low initial
              circulation to protect early ecosystem growth.
            </p>
            <p className="mt-6">
              There is no inflation minting. Every dRC in existence is accounted
              for by long-term smart contract logic.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Real Utility — Not Just a Token
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>
                <strong>Seeding & Earning</strong> – 12% annual rewards (smart
                contract-based)
              </li>
              <li>
                <strong>Referrals</strong> – Multi-tier rewards tied to
                ecosystem growth
              </li>
              <li>
                <strong>GameFi</strong> – RootOpia daily/weekly prize pools,
                leaderboards, and level-ups
              </li>
              <li>
                <strong>Governance</strong> – DAO voting and platform decision
                rights
              </li>
              <li>
                <strong>Access</strong> – Unlock private rounds, features, and
                utilities
              </li>
              <li>
                <strong>Ecosystem Fuel</strong> – Required for smart contracts,
                swaps, and staking
              </li>
            </ul>
            <p className="mt-6">
              dRC is your fuel, your access key, your governance voice — all in
              one
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Token Allocation Breakdown
            </h3>
            <div className="overflow-x-auto mt-6 text-lg border border-[#D4D4D4] dark:border-[#737373] rounded-3xl p-2">
              <table className="table text-lg  border-separate ">
                <thead className="text-[#303030] dark:text-[#F8FAFC] rounded-3xl text-lg ">
                  <tr className="bg-[#D4D4D4] dark:bg-[#3F3F3F]">
                    <th className="font-normal rounded-l-3xl">Category</th>
                    <th className="font-normal rounded-r-3xl">Allocation</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      category: 'Ecosystem Emission',
                      allocation: '60M over 41 years',
                    },
                    {
                      category: 'Vesting (Team & Partners)',
                      allocation: '20M (3–10 year contracts)',
                    },
                    {
                      category: 'Development & Innovation',
                      allocation: '6M',
                    },
                    {
                      category: 'Seed & GameFi',
                      allocation: '4M',
                    },
                    {
                      category: 'AI Development',
                      allocation: '4M',
                    },
                    {
                      category: 'Community & Partnerships',
                      allocation: '2M',
                    },
                    {
                      category: 'Foundation Access',
                      allocation: '2M',
                    },
                    {
                      category: 'Reserved',
                      allocation: '2M',
                    },
                  ].map((data) => (
                    <tr
                      key={data.category}
                      className="border-b border-[#D4D4D4] dark:border-[#737373]"
                    >
                      <td>{data.category}</td>
                      <td>{data.allocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              All emissions are governed by multi-year vesting, protocol
              lockups, and contribution-based access terms.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Security & Trust Features
            </h3>

            <p className="mt-6">
              dRC is engineered for on-chain security and sustainability:
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>
                40% Liquidity Lock – Protocol-enforced to prevent manipulation
              </li>
              <li>
                Token Loop Mechanics – Built-in utility use across all apps
              </li>
              <li>
                DAO Treasury Plan – Long-term governance-controlled growth
              </li>
              <li>
                Multi-Year Vesting – Transparent alignment with contributors
              </li>
            </ul>
            <p className="mt-6">
              Live dApp Utility – Already used in{' '}
              <a
                href="https://www.theaddress.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                The Address Wallet
              </a>{' '}
              <a
                href="https://www.telexcoin.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                TelexCoin DEX
              </a>{' '}
              <a
                href="https://www.rootopia.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                RootOpia
              </a>{' '}
              and{' '}
              <a
                href="https://www.oceanbazaar.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Ocean Bazaar
              </a>
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Live Trading & Ecosystem Flow
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>dRC trades on TelexCoin DEX in USDT and USDC pairs</li>
              <li>Built on Deep Roots Blockchain (PoZ + DRVM)</li>
              <li>Supports cross-chain connection with ETH, BSC, and more</li>
              <li>
                Token dynamics driven by <strong>smart contract logic</strong>,
                not market speculation
              </li>
            </ul>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              GameFi Integration – RootOpia Utility
            </h3>

            <p className="mt-6">
              Inside{' '}
              <a
                href="https://www.rootopia.earth/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                RootOpia GameFi
              </a>
              , dRC fuels:
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>Daily & Weekly Prize Pools</li>
              <li>Leaderboards and Rankings</li>
              <li>Magic Box + Treasury Drops</li>
              <li>Seeding Level-Up Rewards</li>
              <li>Tradeable Poster NFTs with dRC</li>
            </ul>
            <p className="mt-6">
              It’s the in-game economy, tightly connected to real-world dRC
              mechanics.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Summary: Why dRC Matters
            </h3>

            <p className="mt-6">
              dRC isn’t just a token. It’s the root system of DeWorld. It powers
              action. It enforces access. It governs value. It rewards
              contribution.
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>100M fixed supply</li>
              <li>41-year emission</li>
              <li>20+ dApps powered</li>
              <li>12% yield seeding</li>
              <li>On-chain governance</li>
              <li>Zero speculation design</li>
            </ul>
            <p className="mt-6">Seed it. Use it. Earn it. Govern with it.</p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Frequently Asked Questions
            </h3>

            <div className="mt-6">
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                When does the blockchain launch?
              </li>
              <p className="mt-2">
                Within 90 days of the final PrivateSeed round.
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                Can I increase my allocation later?
              </li>
              <p className="mt-2">Yes, subject to available seats and terms.</p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                What is the vesting period?
              </li>
              <p className="mt-2">
                Participation terms apply; each round defines its own on-chain
                rules
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                What if I miss PrivateSeed?
              </li>
              <p className="mt-2">
                You may join future rounds, but{' '}
                <strong>access and rewards will differ.</strong>
              </p>
            </div>
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

export default DRCTokenomics;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
