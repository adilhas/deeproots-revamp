import Image from 'next/image';
import Link from 'next/link';

export default function OceanBazaarSection() {
  return (
    <section className="bg-gradient-to-br from-[#E8F5FF] to-[#CDEBFF] dark:from-[#0C1F2E] dark:to-[#112D3C] text-black dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content - First on Mobile, First on Desktop */}
        <div className="order-1 lg:order-1">
          <h2 className="font-orbitron text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1bc1ff] via-[#fead46] to-[#cb7b6d]">
            Ocean Bazaar <br />
            The NFT Marketplace
          </h2>

          {/* Mobile Image - Hidden on Desktop */}
          <div className="w-full my-6 lg:hidden">
            <Image
              src="/landing/ocean-bazaar.png"
              alt="Ocean Bazaar Landing"
              className="rounded-xl shadow-lg"
              width={800}
              height={500}
              layout="responsive"
              priority
            />
          </div>

          <ul className="space-y-5 text-gray-800 dark:text-gray-400">
            <li>
              <strong className="text-black dark:text-white">
                Browse and buy digital collectibles
              </strong>{' '}
              through an ocean-themed Web3 marketplace.
            </li>
            <li>
              <strong>Sell & Auction Easily</strong>: Upload, list, and auction
              NFTs with a simple and secure interface.
            </li>
            <li>
              <strong>Wallet-Connected Experience</strong>: Powered by The
              Address Wallet — connect to manage assets, bids, and history.
            </li>
            <li>
              <strong>Exclusive Drops & Timed Auctions</strong>: Access
              limited-edition NFTs and join live auctions with countdowns.
            </li>
            <li>
              <strong>Secure Peer-to-Peer Trading</strong>: Trade directly with
              other users through blockchain-secured smart contracts.
            </li>
          </ul>
          <button className="text-white mt-6 px-6 py-2 bg-gradient-to-r from-[#1bc1ff] to-[#fead46]  rounded-lg  hover:scale-105 font-bold transition">
            <Link href="http://oceanbazaar.earth/">Explore Ocean Bazaar</Link>
          </button>
        </div>

        {/* Desktop Image - Hidden on Mobile */}
        <div className="w-full lg:w-[40vw] hidden lg:inline-block order-2 lg:order-2">
          <Image
            src="/landing/ocean-bazaar.png"
            alt="Ocean Bazaar Landing"
            className="rounded-xl shadow-lg"
            width={1200}
            height={800}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </section>
  );
}
