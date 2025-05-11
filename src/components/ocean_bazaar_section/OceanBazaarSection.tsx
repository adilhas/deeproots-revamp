import Image from 'next/image';
import Link from 'next/link';

export default function OceanBazaarSection() {
  return (
    <section className="font-orbitron bg-gradient-to-br from-[#0C1F2E] to-[#112D3C] dark:from-[#0C1F2E] dark:to-[#112D3C] text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image First on Mobile, Second on Desktop */}
        <div className="relative w-full h-96 lg:h-[500px] order-1 md:order-2">
          <Image
            src="/landing/ocean-bazaar.png"
            alt="Ocean Bazaar Landing"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
            priority
          />
        </div>

        {/* Content Second on Mobile, First on Desktop */}
        <div className="order-2 md:order-1">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-[#28BDBD]">
            Ocean Bazaar – The NFT Marketplace
          </h2>
          <p className="text-lg mb-8 text-gray-200 dark:text-gray-300">
            Explore & Collect NFTs
          </p>
          <ul className="space-y-5 text-gray-300 dark:text-gray-400">
            <li>
              <strong className="text-white">
                Browse and buy digital collectibles
              </strong>{' '}
              through an ocean-themed Web3 marketplace.
            </li>
            <li>
              <strong className="text-white">Sell & Auction Easily</strong>:
              Upload, list, and auction NFTs with a simple and secure interface.
            </li>
            <li>
              <strong className="text-white">
                Wallet-Connected Experience
              </strong>
              : Powered by The Address Wallet — connect to manage assets, bids,
              and history.
            </li>
            <li>
              <strong className="text-white">
                Exclusive Drops & Timed Auctions
              </strong>
              : Access limited-edition NFTs and join live auctions with
              countdowns.
            </li>
            <li>
              <strong className="text-white">
                Secure Peer-to-Peer Trading
              </strong>
              : Trade directly with other users through blockchain-secured smart
              contracts.
            </li>
          </ul>
          <button className="text-white mt-6 px-6 py-2 bg-gradient-to-l  from-[#1bc1ff] to-[#006eff] rounded-lg border-2 border-transparent hover:border-[#0ff0fc] hover:bg-none font-bold transition">
            <Link href="http://oceanbazaar.earth/">Explore Ocean Bazaar</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
