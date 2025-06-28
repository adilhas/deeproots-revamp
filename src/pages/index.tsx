import AboutSection from '@/components/main_page/about_section/AboutSection';
import AddressWallet from '@/components/main_page/address_wallet_section/AddressWallet';
import ComparisonSection from '@/components/main_page/comparison_section/ComparisionSection';
import CryptoFlowSection from '@/components/main_page/crypto_flow_section/CryptoFlowSection';
import DeepAssets from '@/components/main_page/deepassets_section/DeepAssets';
import UseCases from '@/components/main_page/deeproots_usecases/Usecases';
import Features from '@/components/main_page/features/Features';
import FoundationSeatsSection from '@/components/main_page/foundation_seats/FoundationSeatsSection';
import GivefiSection from '@/components/main_page/givefi_section/GivefiSection';
import Hero from '@/components/main_page/hero/Hero';
import InnofarmSection from '@/components/main_page/innofarm_section/InnofarmSection';
import InnofiSection from '@/components/main_page/innofi_section/InnofiSection';
import InnolaunchSection from '@/components/main_page/innolaunch_section/InnoLaunchSection';
import MetaFabricSection from '@/components/main_page/metafabric_section/MetaFabric';
import Navbar from '@/components/navbar/Navbar';
import OceanBazaarSection from '@/components/main_page/ocean_bazaar_section/OceanBazaarSection';
import PodcastSection from '@/components/main_page/podcast_section/PodcastSection';
import RootChatSection from '@/components/main_page/rootchat_section/RootChatSection';
import RootopiaRace from '@/components/main_page/rootopia_race_section/RootopiaRace';
import RootscanSection from '@/components/main_page/rootscan_section/RootscanSection';
import ShareValueSection from '@/components/main_page/share_value_section/ShareValueSection';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import Telexcoin from '@/components/main_page/telexcoin_section/Telexcoin';
import Head from 'next/head';
import WhatIsDeeprootsSection from '@/components/main_page/what_is_deeproots_section/WhatIsDeeprootsSection';
import EarnFoundationSection from '@/components/main_page/earn_foundation/EarnFoundationSection';
import WhatIsdRCSection from '@/components/main_page/what_is_dRC/WhatIsdRCSection';
import DeepRootsEcosystemSection from '@/components/main_page/deeproots_ecosystem/DeepRootsEcosystemSection';
import CopyMeSection from '@/components/main_page/copy_me_section/CopyMeSection';
import FooterV2 from '@/components/footer/FooterV2';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          DeepRoots - Built for freedom. Designed for transparency. Rooted in
          purpose.
        </title>
        <meta
          name="description"
          content="From impossible to possible - A platform for innovative DeWorld Apps on the First Truly Dynamic Blockchain Network."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deeproots.earth/" />

        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DeepRoots – DeWorld Apps on a Dynamic Blockchain Network"
        />
        <meta
          property="og:description"
          content="From impossible to possible – explore DeepRoots, the platform for innovative DeWorld Apps on the First Truly Dynamic Blockchain Network."
        />
        <meta property="og:url" content="https://deeproots.earth/" />
        <meta
          property="og:image"
          content="https://deeproots.earth/landing/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DeepRoots – DeWorld Apps on a Dynamic Blockchain Network"
        />
        <meta
          name="twitter:description"
          content="From impossible to possible – a platform for innovative DeWorld Apps on the First Truly Dynamic Blockchain Network."
        />
        <meta
          name="twitter:image"
          content="https://deeproots.earth/landing/logo.png"
        />
      </Head>
      <div className="overflow-x-hidden relative  bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
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
        <RootChatSection />
        <PodcastSection />
        <div className="overflow-hidden">
          <CopyMeSection />
          <AboutSection />
        </div>
        <SocialLinks />
        {/* <Footer /> */}
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
        'common',
      ])),
    },
  };
};
