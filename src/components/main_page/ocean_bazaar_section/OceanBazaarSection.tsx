import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Upload, Wallet, Clock, ShieldCheck } from 'lucide-react';
export default function OceanBazaarSection() {
  return (
    <section className="bg-gradient-to-br from-[#E8F5FF] to-[#CDEBFF] dark:from-[#0C1F2E] dark:to-[#112D3C] text-black dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">
        {/* Text Content - Left Aligned */}
        <div className="order-1 lg:order-1 lg:justify-self-start lg:pr-10">
          <div className="font-orbitron text-xl lg:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#1bc1ff] via-[#fead46] to-[#cb7b6d]">
            <span className="lg:text-5xl text-3xl"> Ocean Bazaar</span> <br />
            The NFT Marketplace
          </div>

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
            <li className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-3 py-3">
              <ShoppingCart className="mt-1 text-[#fead46]" size={33} />
              <span>
                <strong className="text-black dark:text-white">
                  Browse and buy digital collectibles
                </strong>{' '}
                through an ocean-themed Web3 marketplace.
              </span>
            </li>
            <li className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-3 py-3">
              <Upload className="mt-1 text-[#fead46]" size={33} />
              <span>
                <strong className="text-black dark:text-white">
                  Sell & Auction Easily
                </strong>
                : Upload, list, and auction NFTs with a simple and secure
                interface.
              </span>
            </li>
            <li className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-3 py-3">
              <Wallet className="mt-1 text-[#fead46]" size={33} />
              <span>
                <strong className="text-black dark:text-white">
                  Wallet-Connected Experience
                </strong>
                : Powered by The Address Wallet — connect to manage assets,
                bids, and history.
              </span>
            </li>
            <li className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-3 py-3">
              <Clock className="mt-1 text-[#fead46]" size={33} />
              <span>
                <strong className="text-black dark:text-white">
                  Exclusive Drops & Timed Auctions
                </strong>
                : Access limited-edition NFTs and join live auctions with
                countdowns.
              </span>
            </li>
            <li className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-3 py-3">
              <ShieldCheck className="mt-1 text-[#fead46]" size={33} />
              <span>
                <strong className="text-black dark:text-white">
                  Secure Peer-to-Peer Trading
                </strong>
                : Trade directly with other users through blockchain-secured
                smart contracts.
              </span>
            </li>
          </ul>
          <div className="flex justify-center sm:justify-start mt-6">
            <button className="text-neutral-800 px-6 py-2 bg-gradient-to-r from-[#1bc1ff] to-[#fead46] rounded-lg hover:scale-105 font-bold transition">
              <Link href="http://oceanbazaar.earth/">Explore Ocean Bazaar</Link>
            </button>
          </div>
        </div>

        {/* Desktop Image - Right Aligned */}
        <div className="w-full lg:w-[40vw] hidden lg:inline-block order-2 lg:order-2 lg:justify-self-end mx-auto lg:mx-0 ">
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
