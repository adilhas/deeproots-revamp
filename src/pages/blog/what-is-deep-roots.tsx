import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const WhatIsDeepRoots = () => {
  return (
    <AppLayout>
      <Seo
        title="What Is Deep Roots?"
        description="The Movement Behind DeWorld and the Future of the Decentralized Internet"
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          title="What Is Deep Roots?"
          subtitle="The Movement Behind DeWorld and the Future of the Decentralized Internet"
          date="July 23, 2025"
        >
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              We Are the DeWorld.
            </h3>
            <p className="text-lg font-normal mt-6">
              The internet was meant to connect us but it got hijacked by
              central powers and closed ecosystems.
            </p>
          </div>
          <div className="py-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Deep Roots is the response.
            </h3>
            <p className="text-lg font-normal mt-6">
              Not just a blockchain. A movement. A shift from control to
              collaboration. From surveillance to sovereignty. From silence to
              voice.
            </p>
            <p className="text-lg font-normal mt-6">
              We call it DeWorld — a decentralized, AI-powered internet rebuilt
              from the ground up. For the people. By the people.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              The Deep Roots Movement
            </h3>
            <p className="text-lg font-normal mt-6">
              Deep Roots is a 3rd Generation Blockchain and AI Ecosystem with a
              mission to empower builders, protect users, and unlock real-world
              utility — all without gatekeepers.
            </p>
            <p className="mt-6">We’re building a foundation that is:</p>
            <ul className="list-disc ml-6 mt-6">
              <li>Faster than the legacy chains</li>
              <li>Scalable for global adoption</li>
              <li>Governed by the people, not corporations</li>
            </ul>
            <p className="mt-6">
              This isn’t just innovation. It’s restoration of purpose, privacy,
              and possibility.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why Deep Roots Exists
            </h3>
            <p className="mt-6">
              We believe technology should serve people, not profit off them. In
              a world flooded with hype coins and vaporware, we stand for:
            </p>
            <ul className="list-disc ml-6 mt-6">
              <li>Utility Participation, not speculation</li>
              <li>On-chain Actions, not financial</li>
              <li>Financial Guarantees, just real community value</li>
            </ul>
            <p className="mt-6">
              At the center is <strong>dRC Coin</strong> — distributed over 41
              years, fully compliant, and designed to unlock ecosystem access
              and participation, not financial return.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Powers Deep Roots?
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>
                <strong>PoZ Blockchain (Proof of Seed)</strong> – Fast,
                low-cost, energy-efficient
              </li>
              <li>
                <strong>DRVM-Compatible</strong> – Build with the tools you know
              </li>
              <li>
                <strong>AI Integration</strong> – From agents like CopyMe to
                smart contracts that evolve
              </li>
              <li>
                <strong>20+ Web3 Apps</strong> – Wallets, DEXs, NFT platforms,
                GameFi, identity, and more
              </li>
              <li>
                <strong>Full Compliance</strong> – Built for global standards
                from day on
              </li>
            </ul>
            <p className="mt-6">
              This is the infrastructure of the new internet — live and growing.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Vision & Mission
            </h3>
            <div className="border border-[#D4D4D4] dark:border-[#737373] p-2.5 text-center rounded-3xl mt-6">
              <div className="bg-[#D4D4D4] dark:bg-[#3F3F3F] p-2 rounded-2xl">
                <div>
                  “We seed visions in the earth’s roots and harvest deep
                  solutions for life.”
                </div>
                <div>— Deep Roots Founder</div>
              </div>
            </div>

            <h4 className="text-[#303030] mt-6 dark:text-[#F8FAFC] font-semibold text-2xl">
              Our Vision
            </h4>

            <ul className="list-disc ml-6 mt-6">
              <li>Decentralize the Internet</li>
              <li>Empower millions with learning and access</li>
              <li>Fuel innovation from local to global</li>
              <li>Ensure trustless privacy and default security</li>
              <li>Promote decentralized governance</li>
              <li>Enable seamless cross-chain connection</li>
              <li>Deliver real-world impact</li>
            </ul>
            <h4 className="text-[#303030] mt-6 dark:text-[#F8FAFC] font-semibold text-2xl">
              Our Mission
            </h4>

            <ul className="list-disc ml-6 mt-6">
              <li>Build generational tools and products</li>
              <li>Make Web3 easy to use and quick to learn</li>
              <li>Invite the world to grow DeWorld</li>
              <li>Offer free education and open platforms</li>
              <li>Promote freedom, privacy, and accessibility</li>
              <li>Create the root system of the next digital era</li>
            </ul>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              What Is DeWorld?
            </h3>

            <p className="mt-6">
              DeWorld is more than a tech platform — it&apos;s a decentralized
              civilization.It’s what the internet should have been:
            </p>

            <ul className="list-disc ml-6 mt-6">
              <li>Owned by users</li>
              <li>Shaped by builders</li>
              <li>Governed by participation</li>
            </ul>
            <p className="mt-6">
              No gatekeepers. No walls. Just freedom, trust, and creation.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Explore the Ecosystem
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>
                🌿
                <a
                  href="https://www.theaddress.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>The Address Wallet</strong>
                </a>
                – Secure, intuitive multi-chain wallet
              </li>
              <li>
                💱
                <a
                  href="https://www.telexcoin.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>TelexCoin DEX</strong>
                </a>
                – High-speed decentralized exchange
              </li>
              <li>
                🎨
                <a
                  href="https://www.oceanbazaar.earth/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>Ocean Bazaar</strong>
                </a>
                – NFT marketplace for creators and culture
              </li>
              <li>
                🕹️
                <a
                  href="GameFi reimagined with purpose"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  <strong>RootOpia</strong>
                </a>
                – GameFi reimagined with purpose
              </li>
              <li>
                🧩
                <strong>Foundation Campaign</strong>– Shape the network through
                governance
              </li>
            </ul>
            <p className="mt-6">
              And that’s just the beginning — over 20 apps are in motion.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why Deep Roots Is Different
            </h3>

            <ul className="list-disc ml-6 mt-6">
              <li>
                <strong>41-Year Token Distribution</strong> – Long-term, stable
                access model
              </li>
              <li>
                <strong>Strict Legal Compliance</strong> – No hype, no financial
                promises
              </li>
              <li>
                <strong>AI-Enhanced dApps</strong> – Smarter, personalized user
                experiences
              </li>
              <li>
                <strong>Community Governance</strong> – Real participation, real
                decision-making
              </li>
            </ul>
            <p className="mt-6">
              We’re not chasing trends. We’re building the foundation of a
              better Web.
            </p>
          </div>
          <div className="py-8 text-lg font-normal">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              The Movement Has Begun — Are You Ready?
            </h3>
            <div className="mt-6">
              <p>Builders. Dreamers. Decentralists.</p>
              <p>
                People from around the world are joining forces to build a new
                internet — one rooted in freedom,
              </p>
              <p>privacy, and purpose.</p>
            </div>

            <div>
              <p className=" mt-6">This isn’t just Web3</p>
              <p className="font-bold">This is DeWorld.</p>
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

export default WhatIsDeepRoots;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
