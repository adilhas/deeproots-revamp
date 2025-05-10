import AddressWallet from '@/components/address_wallet_section/AddressWallet';
import ComparisonSection from '@/components/comparison_section/ComparisionSection';
import CryptoFlowSection from '@/components/crypto_flow_section/CryptoFlowSection';
import DeepAssets from '@/components/deepassets_section/DeepAssets';
import UseCases from '@/components/deeproots_usecases/Usecases';
import Features from '@/components/features/Features';
import FoundationSeatsSection from '@/components/foundation_seats/FoundationSeatsSection';
import Hero from '@/components/hero/Hero';
import InnofiSection from '@/components/innofi_section/InnofiSection';
import InnolaunchSection from '@/components/innolaunch_section/InnoLaunchSection';
import MetaFabricSection from '@/components/metafabric_section/MetaFabric';
import Navbar from '@/components/navbar/Navbar';
import RootopiaRace from '@/components/rootopia_race_section/RootopiaRace';
import ShareValueSection from '@/components/share_value_section/ShareValueSection';
import Telexcoin from '@/components/telexcoin_section/Telexcoin';

export default function Home() {
  return (
    <div className="overflow-hidden relative bg-neutral-300 dark:bg-primary-dark dark:text-neutral-200">
      <Navbar />
      <Hero />
      <Features />
      <AddressWallet />
      <Telexcoin />
      <DeepAssets />
      <UseCases />
      <ShareValueSection />
      <InnofiSection />
      <InnolaunchSection />
      <MetaFabricSection />
      <CryptoFlowSection />
      <RootopiaRace />
      <ComparisonSection />
      <FoundationSeatsSection />
    </div>
  );
}
