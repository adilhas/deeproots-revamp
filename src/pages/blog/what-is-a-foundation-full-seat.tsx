import { useThemeContext } from '@/context/ThemeContext';
import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WhatIsDeepRoots = () => {
  const slug = 'what-is-a-foundation-full-seat';
  const { isDark } = useThemeContext();

  return (
    <AppLayout>
      <Seo
        title="What Is a Foundation Full Seat? Own the Movement. Seed the Future."
        description="Foundation Full Seats offer exclusive access, on-chain rewards, and governance rights in the Deep Roots ecosystem. Learn how to claim your seat in DeWorld."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          slug={slug}
          title="What Is a Foundation Full Seat?"
          subtitle="Own the Movement. Seed the Future."
          date="July 25, 2025"
        >
          <div className="pb-8">
            <p className="text-lg font-normal mt-6">
              In the Deep Roots ecosystem, some roles{' '}
              <strong>go beyond participation</strong>, they help shape the
              system itself. That’s what a <strong>Foundation Full Seat</strong>{' '}
              is.
            </p>
            <p className="mt-6">
              It’s not just about access. It’s about{' '}
              <strong>
                ownership, early influence, and ecosystem-wide benefits{' '}
              </strong>{' '}
              secured by protocol and distributed on-chain.
            </p>
            <p className="mt-6">
              If dRC is the currency of DeWorld, the Full Seat is its{' '}
              <strong>command center.</strong>
            </p>
          </div>
          <div className="py-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              🪑 What Is a Full Seat?
            </h3>
            <p className="text-lg font-normal mt-6">
              A Foundation Full Seat is your exclusive position in the Deep
              Roots Foundation designed for early supporters who believe in the
              long-term power of decentralization
            </p>

            <p className="text-lg font-normal mt-6">
              Full Seat holders don’t just use the ecosystem, they help guide
              it, earn from it, and unlock utilities across its 20+ Web3
              platforms.
            </p>
            <p className="mt-6">
              This is web3 done right: real access, smart contract rewards, and
              meaningful participation.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What a Full Seat Gives You
            </h3>

            <div className="mt-6">
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                12% Seeding Rewards
              </li>
              <p className="mt-2">
                Lock dRC and earn <strong>12% on-chain protocol rewards</strong>{' '}
                fully defined by smart contracts with transparent rules
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                Referral Rewards
              </li>
              <p className="mt-2">
                Invite others and earn multi-tier rewards directly from the
                ecosystem.
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                Private Ecosystem Access
              </li>
              <p className="mt-2">
                Secure whitelist spots, unlock exclusive features, and
                participate in <strong>limited utility drops.</strong>
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                Governance Power
              </li>
              <p className="mt-2">
                Shape platform decisions and join the future DAO by holding a
                governance-backed Full Seat.
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-4">
                RootOpia GameFi Benefits
              </li>
              <p className="mt-2">
                Unlock boosted rewards and advantages inside{' '}
                <a
                  href="https://www.rootopia.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>RootOpia</strong>
                </a>
                , the Deep Roots GameFi platform.
              </p>
            </div>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why Seats Are Limited
            </h3>

            <p className="mt-6">
              Only a fixed number of Full Seats exist — and not every dApp or
              project uses them. This ensures: Rare and valuable access
              Decentralized distribution Community-first governance No
              centralization of control Seats don’t inflate. They’re earned
              through action and locked by protocol.
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>Rare and valuable access</li>
              <li>Decentralized distribution</li>
              <li>Community-first governance</li>
              <li>No centralization of control</li>
            </ul>
            <p className="mt-6">
              Seats don’t inflate. They’re earned through action and locked by
              protocol.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              How to Claim Your Full Seat
            </h3>
            <p className="mt-6">It starts with seeding. Here’s how:</p>

            <ol className="list-decimal ml-6 mt-6">
              <li>Join the Foundation Seeding Round</li>
              <li>Lock your dRC tokens</li>
              <li>
                Get assigned a Full Seat with rewards and privileges based on
                your round
              </li>
            </ol>
            <Image
              src={
                isDark
                  ? '/blog/full-seat-claim-dark.png'
                  : '/blog/full-seat-claim.png'
              }
              width={792}
              height={186}
              className="w-full h-auto mt-6 hidden md:block"
              alt="how to claim a foundation full seat "
            />
            <Image
              src={
                isDark
                  ? '/blog/full-seat-claim-dark-mob.png'
                  : '/blog/full-seat-claim-mob.png'
              }
              width={792}
              height={186}
              className="w-full h-auto mt-6 md:hidden block"
              alt="how to claim a foundation full seat"
            />
            <p className="mt-6 font-bold">Earlier rounds = better benefits.</p>
            <p>
              Each round offers different access levels, discounts, and reward
              multipliers.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Who It’s For
            </h3>

            <p className="mt-6">This is your opportunity to:</p>

            <ul className="list-disc ml-6 mt-6">
              <li>Long-term believers in decentralization</li>
              <li>Early adopters of Deep Roots and DeWorld</li>
              <li>Builders, validators, and core supporters</li>
              <li>Contributors shaping a trustless digital world</li>
            </ul>
            <p className="mt-6">
              If you&apos;re not here for the hype but for the roots, this seat
              is yours.
            </p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Start. Earn. Own.
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>Seed now to activate your on-chain rewards</li>
              <li>Earn through participation and referrals</li>
              <li>Own the movement by claiming your Full Seat</li>
            </ul>
            <p className="mt-6">
              This is more than a role. This is your place in the{' '}
              <strong>future of Web3</strong>
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

export default WhatIsDeepRoots;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
