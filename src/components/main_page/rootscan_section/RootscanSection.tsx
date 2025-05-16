import { TreePalm } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function RootscanSection() {
  return (
    <section className="bg-gradient-to-br  from-[#f9ecd4] to-[#c5dcb3] dark:bg-gradient-to-br dark:from-[#2e1300] dark:to-[#1f3d2a] text-amber-900 dark:text-amber-100 px-10 py-16 lg:py-24">
      <div className="text-center lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className="font-orbitron text-xl my-2 lg:text-3xl font-bold 
            text-transparent 
            bg-gradient-to-r from-[#c28a2e] via-[#5e9e2e] to-[#2d8a4e] dark:from-[#daa53e] dark:via-lime-300 dark:to-green-400 
            bg-clip-text"
          >
            <span className=" text-3xl lg:text-5xl"> RootScan </span>
            <br /> Deep Roots Blockchain Explorer
          </div>

          {/* Mobile image with rounded corners */}
          <div className="w-full my-6 lg:hidden">
            <Image
              src="/landing/rootscan-v2.png"
              alt="Ocean Bazaar Landing"
              className="rounded-xl shadow-lg"
              width={800}
              height={500}
              layout="responsive"
              priority
            />
          </div>

          <ul className="space-y-5 text-amber-900 dark:text-amber-200">
            <li className="flex items-start gap-3">
              <TreePalm
                className="w-[33px] h-[33px] shrink-0 text-[#2d8a4e] mt-[2px]"
                size={33}
              />
              <span>
                <strong className="text-yellow-600 dark:text-yellow-400">
                  Track Every Transaction:
                </strong>{' '}
                View wallet activity, token transfers, smart contract
                interactions, and more — all in real time.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <TreePalm
                className="w-[33px] h-[33px] shrink-0 text-[#2d8a4e] mt-[2px]"
                size={33}
              />
              <span>
                <strong className="text-yellow-600 dark:text-yellow-400">
                  Search with Clarity:
                </strong>{' '}
                Look up wallet addresses, transaction hashes, blocks, and token
                data instantly.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <TreePalm
                className="w-[33px] h-[33px] shrink-0 text-[#2d8a4e] mt-[2px]"
                size={33}
              />
              <span>
                <strong className="text-yellow-600 dark:text-yellow-400">
                  Secure & Private:
                </strong>{' '}
                Built on Deep Roots Blockchain with performance, transparency,
                and privacy in mind.
              </span>
            </li>
          </ul>

          <div className="mt-8">
            <Link href="https://rootscan.earth" rel="noopener noreferrer">
              <button className="px-6 hover:scale-105 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:from-yellow-400 hover:to-green-400 transition">
                Explore RootScan
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[35vw] hidden lg:inline-block order-2 lg:order-2 lg:justify-self-end mx-auto lg:mx-0 ">
          <Image
            src="/landing/rootscan-v2.png"
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
