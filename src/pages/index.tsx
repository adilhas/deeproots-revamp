import AddressWallet from '@/components/address_wallet_section/AddressWallet';
import Features from '@/components/features/Features';
import Hero from '@/components/hero/Hero';
import Navbar from '@/components/navbar/Navbar';
import Telexcoin from '@/components/telexcoin_section/Telexcoin';

export default function Home() {
  return (
    <div className='"overflow-hidden relative bg-neutral-300 dark:bg-primary-dark dark:text-neutral-200'>
      <Navbar />
      <Hero />
      <Features />
      <AddressWallet />
      <Telexcoin />
    </div>
  );
}
