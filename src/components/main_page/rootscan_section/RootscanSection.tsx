import { TreePalm } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const featureList = [
  {
    icon: TreePalm,
    title: 'Track Every Transaction',
    description:
      'View wallet activity, token transfers, smart contract interactions, and more — all in real time.',
  },
  {
    icon: TreePalm,
    title: 'Search with Clarity',
    description:
      'Look up wallet addresses, transaction hashes, blocks, and token data instantly.',
  },
  {
    icon: TreePalm,
    title: 'Secure & Private',
    description:
      'Built on Deep Roots Blockchain with performance, transparency, and privacy in mind.',
  },
];

export default function RootscanSection() {
  return (
    <section className="bg-[#BC965A] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[600px] h-[70%] bg-[#533518] dark:bg-[#2e1908] blur-3xl opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 w-full x-20 max-w-[1200px] mx-auto px-10 py-16 lg:py-24">
        <div className="lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              className="font-orbitron z-20 text-3xl lg:text-5xl font-bold 
            text-transparent 
            bg-gradient-to-r from-[#F0B100] to-[#00C951]  
            bg-clip-text"
            >
              RootScan
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
            <div
              className="font-orbitron text-xl my-2 lg:text-3xl font-bold 
            text-transparent 
            bg-gradient-to-r md:from-[#F0B100] md:to-[#00C951]  from-[#fff] to-[#fff]
            bg-clip-text"
            >
              Deep Roots Blockchain Explorer
            </div>
            <ul className="space-y-5 text-white">
              {featureList.map(({ title, description }) => (
                <li key={title} className="">
                  <div className="flex items-end gap-2">
                    <Image
                      alt="tree-palm"
                      src={'/landing/palm-tree.svg'}
                      width={32}
                      height={32}
                    />
                    <div>
                      <strong className="text-[#E8B203] block">{title}</strong>
                    </div>
                  </div>
                  <p>{description}</p>
                </li>
              ))}
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
      </div>
    </section>
  );
}
