import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const WhatIsPrivateeedAccess = () => {
  const slug = 'what-is-the-privateseed-access-round';
  return (
    <AppLayout>
      <Seo
        title="What Is the PrivateSeed Access Round? Join the First 100 Visionaries of DeWorld"
        description="Join the Deep Roots PrivateSeed Round: Limited seats, early ecosystem access, and long-term governance rights before public release. Apply for a Foundation Full Seat now."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          slug={slug}
          title="What Is the PrivateSeed Access Round?"
          subtitle="Join the First 100 Visionaries of DeWorld"
          date="July 26, 2025"
        >
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC]  text-2xl">
              Before the world enters DeWorld,{' '}
              <strong>a few visionaries will help build it.</strong>
            </h3>
            <p className="text-lg font-normal mt-6">
              <strong>The PrivateSeed Access Round</strong> is your chance to
              secure early participation in the Deep Roots Foundation with real
              utility, governance access, and exclusive rewards.
            </p>
            <p className="mt-6">
              This isn’t a public offering. It’s a{' '}
              <strong>curated contributor round</strong>, designed for
              experienced builders, partners, and early believers in
              decentralization.
            </p>
            <ul className="list-disc ml-6 mt-6">
              <li>NDA Secured</li>
              <li>Global Participation</li>
              <li>Launching in 90 Days</li>
            </ul>
          </div>
          <div className="py-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Is PrivateSeed?
            </h3>
            <p className="text-lg font-normal mt-6">
              PrivateSeed is the earliest access round for strategic
              contributors to Deep Roots. Participants unlock:
            </p>
            <ul className="list-disc ml-6 mt-6">
              <li>Foundation Full Seat Assignment</li>
              <li>Early Ecosystem Access (Wallet, DEX, GameFi)</li>
              <li>Governance Participation Rights</li>
              <li>Priority Token Utility Before Public Release</li>
            </ul>
            <p className="text-lg font-normal mt-6">
              This round is strictly limited. Only 100 seats are available,
              across three seeding tiers
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Access Criteria – Who Can Join?
            </h3>

            <p className="mt-6">To qualify for PrivateSeed, applicants must:</p>
            <ul className="list-disc ml-6 mt-6">
              <li>Be a proven contributor, builder, or strategic partner</li>
              <li>Commit between $5,000 and $1,000,000 for ecosystem access</li>
              <li>Have a background in blockchain, capital, or innovation</li>
              <li>Agree to sign NDA and complete identity verification</li>
              <li>
                Not be a U.S. citizen, resident, or entity under U.S.
                jurisdiction
              </li>
            </ul>
            <p className="mt-6">
              🛑 Participation is not open to U.S. persons.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              🪑 What You Gain as a PrivateSeed Contributor
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>🪑Foundation Full Seat</li>
              <li>🎮 RootOpia GameFi Boosts</li>
              <li>🗳️ Governance Rights</li>
              <li>🚀 Seeding Rewards (Up to 12% On-Chain)</li>
              <li>🎁 Early Access to Wallet, DEX, NFT Marketplace</li>
              <li>🧬 Genesis Contributor Circle</li>
              <li>☎ Founder Strategy Call ($10K+ only)</li>
            </ul>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              How to Apply
            </h3>
            <p className="mt-6">
              Visit the Foundation Page and submit the pre-approval form:
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>✅ Full Name & Contact</li>
              <li>✅ Capital Commitment ($5K–$1M+)</li>
              <li>✅ Individual or Organization</li>
              <li>✅ Your Value to the Ecosystem</li>
              <li>✅ NDA and KYC Agreement</li>
            </ul>
            <p className="mt-6">
              🕓 Applications reviewed in 1–2 business days
            </p>
            <p>🤝 All submissions remain fully confidential</p>
          </div>

          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Exclusive Perks for $10K+ Contributors
            </h3>

            <p className="mt-6">If accepted, you’ll receive early access to:</p>

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
              </li>
              <li>
                <a
                  href="https://www.rootopia.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>RootOpia</strong>
                </a>
              </li>
              <li>
                <strong>Foundation Governance</strong>
              </li>
            </ul>
            <p className="mt-6">
              You’ll also be invited to a private 15-minute strategy call with
              the Deep Roots Founder — to align your vision with DeWorld.
            </p>
            <p className="mt-6">Calls scheduled in Dubai Time (GMT+4)</p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why This Matters
            </h3>

            <p className="mt-6">This is your opportunity to:</p>

            <ul className="list-disc ml-6 mt-6">
              <li>Join a limited pre-launch governance circle</li>
              <li>Earn protocol-backed ecosystem rewards</li>
              <li>Help shape the core infrastructure of DeWorld</li>
              <li>Only 100 contributors will hold this title.</li>
            </ul>
            <p className="mt-6">Will you be one of them?</p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Frequently Asked Questions
            </h3>
            <div className="mt-6">
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-6">
                When does the blockchain launch?
              </li>
              <p className="mt-2">
                Within 90 days of the final PrivateSeed round.
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-6">
                Can I increase my allocation later?
              </li>
              <p className="mt-2">Yes, subject to available seats and terms.</p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-6">
                What is the vesting period?
              </li>
              <p className="mt-2">
                Participation terms apply; each round defines its own on-chain
                rules
              </p>
              <li className="text-[#303030] dark:text-[#F8FAFC] font-medium text-xl mt-6">
                What if I miss PrivateSeed?
              </li>
              <p className="mt-2">
                You may join future rounds, but{' '}
                <strong>access and rewards will differ</strong>.
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

export default WhatIsPrivateeedAccess;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
