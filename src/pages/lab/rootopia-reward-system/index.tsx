import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar/Navbar';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import RRHero from '@/components/lab/rootopia_rewards/RRHero';

const SeedingRewards = dynamic(
  () => import('@/components/lab/rootopia_rewards/SeedingRewards'),
  { ssr: false }
);
const ReferralReward = dynamic(
  () => import('@/components/lab/rootopia_rewards/ReferralReward'),
  { ssr: false }
);
const BattleGamePlayReward = dynamic(
  () => import('@/components/lab/rootopia_rewards/BattleGamePlayReward'),
  { ssr: false }
);
const SpecialEvents = dynamic(
  () => import('@/components/lab/rootopia_rewards/SpecialEvents'),
  { ssr: false }
);
const WhyRootopiaMatters = dynamic(
  () => import('@/components/lab/rootopia_rewards/WhyRootopiaMatters'),
  { ssr: false }
);
const MagicBoxSystem = dynamic(
  () => import('@/components/lab/rootopia_rewards/MagicBoxSystem'),
  { ssr: false }
);
const RootopiaGallery = dynamic(
  () => import('@/components/lab/rootopia_rewards/RootopiaGallery'),
  { ssr: false }
);
const RootopiaFooter = dynamic(
  () => import('@/components/lab/rootopia_rewards/RootopiaFooter'),
  { ssr: false }
);

const RootopiaRewardSystemPage = () => {
  return (
    <>
      <Seo
        title="Rootopia Reward System"
        description="The First Full Web3 2D Animated GameFi Experience"
      />
      <Navbar navContainerClassName="bg-transparent dark:bg-transparent shadow-none text-neutral-200 dark:text-neutral-200" />
      <main className="bg-[#371e03] text-white font-ed-garamond w-full">
        <section className="mx-w-[1200px] mx-auto text-[#DD9717]">
          <RRHero />
          <SeedingRewards />
          <ReferralReward />
          <BattleGamePlayReward />
          <SpecialEvents />
          <WhyRootopiaMatters />
          <MagicBoxSystem />
          <RootopiaGallery />
        </section>
      </main>
      <SocialLinks variant="rootopia" />
      <RootopiaFooter />
    </>
  );
};

export default RootopiaRewardSystemPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
