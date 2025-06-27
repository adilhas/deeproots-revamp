import Footer from '@/components/footer/FooterV2';
import BattleGamePlayReward from '@/components/lab/rootopia_rewards/BattleGamePlayReward';
import MagicBoxSystem from '@/components/lab/rootopia_rewards/MagicBoxSystem';
import ReferralReward from '@/components/lab/rootopia_rewards/ReferralReward';
import RootopiaGallery from '@/components/lab/rootopia_rewards/RootopiaGallery';
import RRHero from '@/components/lab/rootopia_rewards/RRHero';
import SeedingRewards from '@/components/lab/rootopia_rewards/SeedingRewards';
import SpecialEvents from '@/components/lab/rootopia_rewards/SpecialEvents';
import WhyRootopiaMatters from '@/components/lab/rootopia_rewards/WhyRootopiaMatters';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import Navbar from '@/components/navbar/Navbar';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const RootopiaRewardSystemPage = () => {
  return (
    <>
      <Navbar navContainerClassName="bg-transparent dark:bg-transparent" />
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
      <SocialLinks
        className="bg-[#361E03] dark:bg-[#361E03]"
        socialCardClassName="bg-[#4E2B04]"
      />
      <Footer className="bg-[#361E03]" />
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
