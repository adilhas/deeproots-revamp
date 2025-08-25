import AppLayout from '@/Shared/AppLayout';
import BlogLayout from '@/Shared/BlogLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React from 'react';

const Why41YearsModel = () => {
  const slug = 'why-41-years-model';

  return (
    <AppLayout>
      <Seo
        title="Why DEEPROOTS dRC Coin Uses a 41-Year Distribution Model?"
        description="A symbolic illustration of a tree growing through four decades, with roots spreading deep underground - each decade marked as a “growth ring,” symbolizing sustainable distribution over time."
        url={`https://deeproots.earth/blog/${slug}`}
      />
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#525252] dark:text-[#F1F5F9] min-h-screen">
        <BlogLayout
          title="Why DEEPROOTS dRC Coin Uses a 41-Year Distribution Model?"
          subtitle="Discover why DEEPROOTS designed the dRC Coin with a 41-year distribution model."
          date="July 25, 2025"
          slug={slug}
        >
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Introduction: Beyond Short-Term Thinking
            </h3>
            <p className="text-lg font-normal mt-6">
              Most blockchain projects release their tokens within a few years,
              creating rapid surges, unsustainable supply, and centralization
              risks. DEEPROOTS took a different path.
            </p>
            <p className="text-lg font-normal mt-6">
              The dRC Coin is built on a 41-year distribution model a design
              that focuses not on speculation, but on ecosystem access,
              long-term participation, and community contribution.
            </p>
            <p className="text-lg font-normal mt-6">
              This is not just{' '}
              <Link href="/academy/tokenomics" className="underline">
                tokenomics
              </Link>{' '}
              — it’s time-based decentralization, carefully crafted to last for
              generations.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              The Purpose of a 41-Year Model
            </h3>
            <p className="text-lg font-normal mt-6">
              Why 41 years? Because meaningful decentralization takes time.
              Instead of concentrating tokens in early hands, DEEPROOTS ensures
              that access is unlocked gradually — giving future builders,
              developers, educators, and communities equal opportunity to
              participate.
            </p>
            <p className="mt-6">Key Principles Behind the Model:</p>
            <ul className="list-disc ml-6 mt-6">
              <li>
                🌱 Generational Fairness: Distribution spans multiple decades,
                so early participants don’t hold permanent advantage.
              </li>
              <li>
                ⚖️ Compliance First: Built with clear participation terms — no
                financial promises, no speculation, and aligned with global
                standards.
              </li>
              <li>
                🌍 Ecosystem Access: dRC is not a speculative asset; it’s the
                utility key to 20+ Web3 applications inside the DEEPROOTS
                ecosystem.
              </li>
              <li>
                🕰️ Sustainable Growth: Spreading release over 41 years prevents
                supply shocks and encourages steady adoption.
              </li>
            </ul>
          </div>
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              How dRC Distribution Works
            </h3>
            <p className="mt-6">
              The model ensures that every year counts. Tokens are unlocked
              according to a transparent schedule that balances early adoption
              with long-term growth.
            </p>
            <ul className="list-disc ml-6 mt-6">
              <li>
                Year 1–5: Foundation Phase → Establishment of DEEPROOTS apps
                (wallet, DEX, NFT marketplace, governance tools).
              </li>
              <li>
                Year 6–15: Expansion Phase → Scaling into education, AI
                integration, and real-world utility.
              </li>
              <li>
                Year 16–30: Generational Phase → Wider participation, new dApps,
                and continued global onboarding.
              </li>
              <li>
                Year 31–41: Legacy Phase → Final distribution ensures fairness
                for late adopters and keeps access open.
              </li>
            </ul>
            <p className="mt-6">
              This timeline ensures that DEEPROOTS is not just for today, but
              for future generations of the decentralized world.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Why It Matters for Web3
            </h3>
            <p className="mt-6">
              The crypto space has seen projects rise and fall in just a few
              years. DEEPROOTS asks a deeper question: What does it take to
              build a decentralized world that lasts?
            </p>
            <p className="mt-6">
              The answer lies in patience, sustainability, and compliance. The
              dRC 41-year model challenges short-termism and instead creates an
              intergenerational ecosystem.
            </p>
          </div>
          <div className="pb-8">
            <h3 className="text-[#303030] dark:text-[#F8FAFC] font-semibold text-2xl">
              Conclusion: Seeds for the Future
            </h3>
            <p className="mt-6">
              The dRC Coin’s 41-year distribution is not just about supply —
              it’s about designing a movement that lasts.
            </p>
            <p className="mt-6">
              By prioritizing fairness, compliance, and long-term access, Deep
              Roots ensures that the decentralized world — DeWorld — grows
              stronger with every generation.
            </p>
          </div>
          <div className="py-6">
            <div className="border border-[#D4D4D4] dark:border-[#737373] p-2.5 text-center rounded-3xl mt-6">
              <div className="bg-[#D4D4D4] dark:bg-[#3F3F3F] p-2 rounded-2xl font-bold">
                <div>
                  Join the Movement – Discover DeWorld at{' '}
                  <Link href={'/'} className="underline">
                    DeepRoots.earth
                  </Link>
                </div>
              </div>
            </div>
          </div>{' '}
        </BlogLayout>
      </div>
    </AppLayout>
  );
};

export default Why41YearsModel;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
