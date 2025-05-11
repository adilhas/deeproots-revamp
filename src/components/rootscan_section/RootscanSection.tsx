import Image from 'next/image';
import Link from 'next/link';

export default function RootscanSection() {
  return (
    <section className="bg-gradient-to-br from-[#fef6e4] to-[#fceec2] dark:from-[#1c140b] dark:to-[#0f0a06] text-amber-900 dark:text-amber-100 px-6 py-16 lg:py-24">
      <div className="text-center lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-orbitron text-3xl my-2 lg:text-5xl font-bold text-amber-800 dark:text-amber-300">
            RootScan – Deep Roots Blockchain Explorer
          </h2>

          {/* Mobile image: aligned left */}
          <div className="relative w-full h-[500px] lg:hidden inline-block  text-left my-3">
            {/* <div className="relative h-full w-[90%]"> */}
            <Image
              src="/landing/rootscan.png"
              alt="Rootscan Tree"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
              priority
            />
            {/* </div> */}
          </div>

          <ul className="space-y-5 text-amber-900 dark:text-amber-200">
            <li>
              <strong className="text-yellow-600 dark:text-yellow-400">
                Track Every Transaction:
              </strong>{' '}
              View wallet activity, token transfers, smart contract
              interactions, and more — all in real time.
            </li>
            <li>
              <strong className="text-yellow-600 dark:text-yellow-400">
                Search with Clarity:
              </strong>{' '}
              Look up wallet addresses, transaction hashes, blocks, and token
              data instantly.
            </li>
            <li>
              <strong className="text-yellow-600 dark:text-yellow-400">
                Secure & Private:
              </strong>{' '}
              Built on Deep Roots Blockchain with performance, transparency, and
              privacy in mind.
            </li>
          </ul>

          <div className="mt-8">
            <Link
              href="https://rootscan.earth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:from-yellow-400 hover:to-green-400 transition">
                Visit RootScan →
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop image */}
        <div className="relative w-full h-80 lg:h-[480px] hidden lg:inline-block">
          <Image
            src="/landing/rootscan.png"
            alt="Rootscan Tree"
            layout="fill"
            objectFit="contain"
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
