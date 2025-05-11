import AboutSection from '@/components/about_section/AboutSection';
import AddressWallet from '@/components/address_wallet_section/AddressWallet';
import ComparisonSection from '@/components/comparison_section/ComparisionSection';
import CryptoFlowSection from '@/components/crypto_flow_section/CryptoFlowSection';
import DeepAssets from '@/components/deepassets_section/DeepAssets';
import UseCases from '@/components/deeproots_usecases/Usecases';
import Features from '@/components/features/Features';
import FoundationSeatsSection from '@/components/foundation_seats/FoundationSeatsSection';
import GivefiSection from '@/components/givefi_section/GivefiSection';
import Hero from '@/components/hero/Hero';
import InnofarmSection from '@/components/innofarm_section/InnofarmSection';
import InnofiSection from '@/components/innofi_section/InnofiSection';
import InnolaunchSection from '@/components/innolaunch_section/InnoLaunchSection';
import MetaFabricSection from '@/components/metafabric_section/MetaFabric';
import OceanBazaarSection from '@/components/ocean_bazaar_section/OceanBazaarSection';
import PodcastSection from '@/components/podcast_section/PodcastSection';
import RootChatSection from '@/components/rootchat_section/RootChatSection';
import RootopiaRace from '@/components/rootopia_race_section/RootopiaRace';
import RootscanSection from '@/components/rootscan_section/RootscanSection';
import ShareValueSection from '@/components/share_value_section/ShareValueSection';
import SocialLinks from '@/components/social_links_section/SocialLinks';
import Telexcoin from '@/components/telexcoin_section/Telexcoin';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>DeepRoots</title>
        <meta name="description" content="description" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deeproots.earth/" />
      </Head>
      <div className="overflow-x-hidden relative bg-neutral-300 dark:bg-primary-dark dark:text-neutral-200">
        <Hero />
        <Features />
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
        <AboutSection />
        <RootChatSection />
        <PodcastSection />
        <SocialLinks />
      </div>
    </>
  );
}
