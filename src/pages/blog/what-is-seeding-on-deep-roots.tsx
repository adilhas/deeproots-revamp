import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const WhatIsDRC = () => {
  const slug = 'what-is-seeding-on-deep-roots';

  return (
    <AppLayout>
      <Seo
        title="What Is Seeding on Deep Roots? It’s Not Staking. It’s Not Farming. It’s Seeding."
        description="Seeding is how users support and grow the Deep Roots ecosystem. Earning 12% APY, unlocking access, and fueling DeWorld. It’s not staking. It’s seeding."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          title="What Is Seeding on Deep Roots?"
          subtitle="It’s Not Staking. It’s Not Farming. It’s Seeding."
          date="July 30, 2025"
          slug={slug}
        >
          <div className="pb-8">
            <p className="text-lg font-normal mt-6">
              In Web3, everyone talks about staking and yield farming. But Deep
              Roots isn’t just another DeFi project. Here, seeding is how the
              community grows the network not just for rewards, but for
              long-term impact.
            </p>
            <p className="text-lg font-normal mt-6">
              Seeding is a new economic engine for DeWorld, one that connects
              value, access, governance, and growth.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Is Seeding?
            </h3>
            <p className="text-lg font-normal mt-6">
              Seeding is the Deep Roots mechanism for ecosystem growth. It’s how
              you plant dRC into the network, lock value on-chain, and earn
              meaningful, protocol-backed rewards while strengthening the
              foundation of DeWorld.
            </p>

            <p className="mt-6">It is designed for:</p>
            <ul className="list-disc ml-6 mt-6">
              <li>🌿 Reward early believers (12% APY or more)</li>
              <li>
                🔓 Unlock exclusive access (Foundation Seats, GameFi, launches)
              </li>
              <li>🛠️ Support ecosystem health and stability</li>
            </ul>
            <p className="mt-6">
              This isn’t a short-term play. It’s how real decentralization
              grows.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              How Seeding Works
            </h3>

            <p className="mt-6">
              When the seeding engine goes live, you’ll be able to:
            </p>
            <ol className="list-decimal ml-6 mt-6">
              <li>Connect your wallet</li>
              <li>Choose your amount + lock time</li>
              <li>Preview your rewards (12% APY)</li>
              <li>Confirm & start growing</li>
            </ol>
            <p className="mt-6">
              Seeding is powered by smart contracts, fully transparent and
              trustless.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why Seeding Matters
            </h3>

            {[
              {
                title: 'Long-Term Alignment',
                description:
                  'Seeding supports the Deep Roots ecosystem for decades to come — not just weeks. It’s built for sustainability, not speculation.',
              },
              {
                title: 'Real Utility',
                description: (
                  <div>
                    <p className="my-6">Seeding is your gateway to:</p>
                    <ul className="list-disc ml-6 mt-6">
                      <li>Foundation Full Seat</li>
                      <li>GameFi perks in RootOpia</li>
                      <li>Launchpad access</li>
                      <li>Early protocol utilities</li>
                      <li>Governance entry</li>
                    </ul>
                  </div>
                ),
              },
              {
                title: 'Low Circulation, High Impact',
                description:
                  'Seeding reduces market supply and increases ecosystem commitment creating stability while rewarding contribution.',
              },
            ].map((data) => (
              <div className="mt-6" key={data.title}>
                <li className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-xl">
                  {data.title}
                </li>
                <p className="mt-2">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What You Get When You Seed
            </h3>

            <div className="overflow-x-auto mt-6 text-lg border border-[#D4D4D4] dark:border-[#737373] rounded-3xl p-2">
              <table className="table text-lg  border-separate ">
                <thead className="text-[#303030] dark:text-[#F8FAFC] rounded-3xl text-lg ">
                  <tr className="bg-[#D4D4D4] dark:bg-[#3F3F3F]">
                    <th className="font-normal rounded-l-3xl">Benefit</th>
                    <th className="font-normal rounded-r-3xl">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      benefit: '12% APY',
                      description:
                        'Earn 12% on-chain yield. Only available through seeding',
                    },
                    {
                      benefit: 'Referral Boosts',
                      description:
                        'Invite others and receive bonus rewards and multipliers',
                    },
                    {
                      benefit: 'Access',
                      description:
                        'Priority access to Foundation Seats and ecosystem tools',
                    },
                    {
                      benefit: 'DAO Power',
                      description:
                        'Reputation, influence, and future voting rights in DeWorld',
                    },
                    {
                      benefit: 'GameFi Connection',
                      description:
                        'Enhanced performance and bonuses in RootOpia',
                    },
                    {
                      benefit: 'Launchpad Access',
                      description:
                        'Whitelists, early features, and private entry points',
                    },
                  ].map((data) => (
                    <tr
                      key={data.benefit}
                      className="border-b border-[#D4D4D4] dark:border-[#737373]"
                    >
                      <td>{data.benefit}</td>
                      <td>{data.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              Every dRC you seed is locked into growth, not lost in volatility.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Seeding Is (and Isn’t)
            </h3>

            <div className="overflow-x-auto mt-6 text-lg border border-[#D4D4D4] dark:border-[#737373] rounded-3xl p-2">
              <table className="table text-lg  border-separate ">
                <thead className="text-[#303030] dark:text-[#F8FAFC] rounded-3xl text-lg ">
                  <tr className="bg-[#D4D4D4] dark:bg-[#3F3F3F]">
                    <th className="font-normal rounded-l-3xl">Not Staking</th>
                    <th className="font-normal">Not Farming</th>
                    <th className="font-normal rounded-r-3xl">It’s Seeding</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      notStaking: 'No passive promise',
                      notfarming: 'No inflation-based rewards',
                      seeding: 'Smart contract-based yield',
                    },
                    {
                      notStaking: 'Not yield-chasing',
                      notfarming: 'Not liquidity-renting',
                      seeding: 'Ecosystem-first growth',
                    },
                    {
                      notStaking: 'Not DeFi hype',
                      notfarming: 'Not inflationary',
                      seeding: 'Real alignment with purpose',
                    },
                  ].map((data) => (
                    <tr
                      key={data.notStaking}
                      className="border-b border-[#D4D4D4] dark:border-[#737373]"
                    >
                      <td>{data.notStaking}</td>
                      <td>{data.notfarming}</td>
                      <td>{data.seeding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              Seeding is a value-driven participation model designed for those
              building with the future in mind.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Seeding Launches Soon
            </h3>

            <p className="mt-6">
              The Seeding Engine is preparing to go live. When it launches:
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>Connect your wallet</li>
              <li>Lock your dRC tokens</li>
              <li>Preview and confirm your seeding schedule</li>
              <li>Watch your rewards grow from roots to impact</li>
            </ul>

            <p className="mt-6">You’ll also gain:</p>

            <ul className="list-disc ml-6 mt-6">
              <li>Access to structured Foundation rounds</li>
              <li>DAO alignment</li>
              <li>Referral bonuses</li>
              <li>RootOpia integration</li>
            </ul>

            <p className="mt-6">
              This is how <strong>DeWorld</strong> grows through commitment,
              contribution, and shared direction.
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
