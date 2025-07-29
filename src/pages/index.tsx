import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar/Navbar';
import Hero from '@/components/main_page/hero/Hero';
import Features from '@/components/main_page/features/Features';
import WhatIsDeeprootsSection from '@/components/main_page/what_is_deeproots_section/WhatIsDeeprootsSection';
import EarnFoundationSection from '@/components/main_page/earn_foundation/EarnFoundationSection';
import WhatIsdRCSection from '@/components/main_page/what_is_dRC/WhatIsdRCSection';
import DeepRootsEcosystemSection from '@/components/main_page/deeproots_ecosystem/DeepRootsEcosystemSection';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps } from 'next';
import Seo from '@/Shared/Seo';
import Head from 'next/head';
import FounderNote from '@/components/academy_page/about_page/FounderNote';

const AddressWallet = dynamic(
  () => import('@/components/main_page/address_wallet_section/AddressWallet')
);
const Telexcoin = dynamic(
  () => import('@/components/main_page/telexcoin_section/Telexcoin')
);
const DeepAssets = dynamic(
  () => import('@/components/main_page/deepassets_section/DeepAssets')
);
const UseCases = dynamic(
  () => import('@/components/main_page/deeproots_usecases/Usecases')
);
const ShareValueSection = dynamic(
  () => import('@/components/main_page/share_value_section/ShareValueSection')
);
const InnofiSection = dynamic(
  () => import('@/components/main_page/innofi_section/InnofiSection')
);
const InnolaunchSection = dynamic(
  () => import('@/components/main_page/innolaunch_section/InnoLaunchSection')
);
const InnofarmSection = dynamic(
  () => import('@/components/main_page/innofarm_section/InnofarmSection')
);
const MetaFabricSection = dynamic(
  () => import('@/components/main_page/metafabric_section/MetaFabric')
);
const OceanBazaarSection = dynamic(
  () => import('@/components/main_page/ocean_bazaar_section/OceanBazaarSection')
);
const CryptoFlowSection = dynamic(
  () => import('@/components/main_page/crypto_flow_section/CryptoFlowSection')
);
const GivefiSection = dynamic(
  () => import('@/components/main_page/givefi_section/GivefiSection')
);
const RootopiaRace = dynamic(
  () => import('@/components/main_page/rootopia_race_section/RootopiaRace')
);
const RootscanSection = dynamic(
  () => import('@/components/main_page/rootscan_section/RootscanSection')
);
const ComparisonSection = dynamic(
  () => import('@/components/main_page/comparison_section/ComparisionSection')
);
const FoundationSeatsSection = dynamic(
  () => import('@/components/main_page/foundation_seats/FoundationSeatsSection')
);
const RootCoreSection = dynamic(
  () => import('@/components/main_page/rootcore_section/RootCoreSection')
);
const RootChatSection = dynamic(
  () => import('@/components/main_page/rootchat_section/RootChatSection')
);
const PodcastSection = dynamic(
  () => import('@/components/main_page/podcast_section/PodcastSection')
);
const CopyMeSection = dynamic(
  () => import('@/components/main_page/copy_me_section/CopyMeSection')
);
const AboutSection = dynamic(
  () => import('@/components/main_page/about_section/AboutSection')
);
const SocialLinks = dynamic(
  () => import('@/components/main_page/social_links_section/SocialLinks')
);
const FooterV2 = dynamic(() => import('@/components/footer/FooterV2'));

const Home = () => {
  const jsonLd = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    name: 'DEEPROOTS',
    url: 'https://www.deeproots.earth',
    logo: 'https://www.deeproots.earth/landing/logo.png',
    sameAs: [
      'https://twitter.com/DeepRoots_earth',
      'https://www.youtube.com/@DeepRoots',
      'https://t.me/DeepRootsCommunity',
      'https://reddit.com/r/DeepRoots',
      'https://discord.gg/DeepRoots',
      'https://www.tiktok.com/@DeepRoots',
    ],
  };
  return (
    <>
      <Seo />
      <Head>
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'Organization',
              name: 'DEEPROOTS',
              url: 'https://www.deeproots.earth',
              logo: 'https://www.deeproots.earth/landing/logo.png',
              sameAs: [
                'https://twitter.com/DeepRoots_earth',
                'https://www.youtube.com/@DeepRoots',
                'https://t.me/DeepRootsCommunity',
                'https://reddit.com/r/DeepRoots',
                'https://discord.gg/DeepRoots',
                'https://www.tiktok.com/@DeepRoots',
              ],
            }),
          }}
        /> */}
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Head>
      <div className="overflow-x-hidden relative bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
        <Navbar />
        <Hero />
        <Features />
        <div className="w-full max-w-[1200px] mx-auto">
          <WhatIsDeeprootsSection />
          <EarnFoundationSection />
          <WhatIsdRCSection />
          <DeepRootsEcosystemSection />
        </div>
        <AddressWallet />
        <Telexcoin />
        <DeepAssets />
        <UseCases />
        <ShareValueSection />
        <InnofiSection />
        <InnolaunchSection />
        <InnofarmSection />
        <MetaFabricSection />
        <OceanBazaarSection />
        <CryptoFlowSection />
        <GivefiSection />
        <RootopiaRace />
        <RootscanSection />
        <ComparisonSection />
        <FoundationSeatsSection />
        <RootCoreSection />
        <RootChatSection />
        <PodcastSection />
        <div className="overflow-hidden">
          <CopyMeSection />
          <AboutSection />
        </div>
        <FounderNote />
        <SocialLinks />
        <FooterV2 />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'landing_page',
        'academy/about',
        'common',
      ])),
    },
  };
};
