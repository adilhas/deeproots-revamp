import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Upload, Wallet, Clock, ShieldCheck } from 'lucide-react';

export default function OceanBazaarSection() {
  return (
    <section className="bg-[#D4FFFE] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[500px] bg-[#0A4764] blur-3xl opacity-30 pointer-events-none z-0 dark:inline-block lg:dark:hidden" />
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[400px] bg-[#30AFEC] blur-[150px] opacity-30 pointer-events-none z-0 hidden lg:dark:inline-block" />
      <div className="absolute top-[-100px] right-[47%] w-[150px] h-[400px] bg-[#30AFEC] blur-[80px] opacity-30 pointer-events-none z-0 hidden lg:dark:inline-block" />

      <div className="max-w-[1200px] mx-auto text-black dark:text-white px-6 py-16 lg:py-24">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">
          {/* Text Content - Left Aligned */}
          <div className="order-1 lg:order-1 lg:justify-self-start lg:pr-10">
            <div className="font-orbitron lg:text-5xl text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r w-fit from-[#1BC1FF] to-[#fead46]">
              Ocean Bazaar
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
            <div className="font-orbitron text-xl lg:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r w-fit from-[#1BC1FF] to-[#fead46] dark:lg:text-transparent dark:text-white">
              The NFT Marketplace
            </div>

            <ul className="space-y-3 text-gray-800 dark:text-gray-400">
              <li className="">
                <div className="flex items-end gap-2">
                  <ShoppingCart className="mt-1 text-[#fead46]" size={30} />
                  <strong className="text-black dark:text-white">
                    Browse and buy digital collectibles
                  </strong>
                </div>
                <p>through an ocean-themed Web3 marketplace.</p>
              </li>

              <li className="">
                <div className="flex items-end gap-2">
                  <Upload className="mt-1 text-[#fead46]" size={30} />
                  <strong className="text-black dark:text-white">
                    Sell & Auction Easily
                  </strong>
                </div>
                <p>
                  Upload, list, and auction NFTs with a simple and secure
                  interface.
                </p>
              </li>

              <li className="">
                <div className="flex items-end gap-2">
                  <Wallet className="mt-1 text-[#fead46]" size={30} />
                  <strong className="text-black dark:text-white">
                    Wallet-Connected Experience
                  </strong>
                </div>
                <p>
                  Powered by The Address Wallet — connect to manage assets,
                  bids, and history.
                </p>
              </li>

              <li className="">
                <div className="flex items-end gap-2">
                  <Clock className="mt-1 text-[#fead46]" size={30} />
                  <strong className="text-black dark:text-white">
                    Exclusive Drops & Timed Auctions
                  </strong>
                </div>
                <p>
                  Access limited-edition NFTs and join live auctions with
                  countdowns.
                </p>
              </li>

              <li className="">
                <div className="flex items-end gap-2">
                  <ShieldCheck className="mt-1 text-[#fead46]" size={30} />
                  <strong className="text-black dark:text-white">
                    Secure Peer-to-Peer Trading
                  </strong>
                </div>
                <p>
                  Trade directly with other users through blockchain-secured
                  smart contracts.
                </p>
              </li>
            </ul>

            <div className="flex justify-center sm:justify-start mt-6">
              <button className="text-neutral-800 px-6 py-2 bg-gradient-to-r from-[#1bc1ff] to-[#fead46] rounded-lg hover:scale-105 font-bold transition">
                <Link href="http://oceanbazaar.earth/">
                  Explore Ocean Bazaar
                </Link>
              </button>
            </div>
          </div>

          {/* Desktop Image - Right Aligned */}
          <div className="w-full  hidden lg:inline-block order-2 lg:order-2 lg:justify-self-end mx-auto  lg:mx-0 ">
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
      </div>
    </section>
  );
}
