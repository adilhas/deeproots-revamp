import Image from 'next/image';
import Link from 'next/link';

export default function RootscanSection() {
  return (
    <section className="bg-gradient-to-br from-[#fef6e4] to-[#fceec2] dark:bg-gradient-to-br dark:from-[#2e1300] dark:to-[#1f3d2a] text-amber-900 dark:text-amber-100 px-6 py-16 lg:py-24">
      <div className="text-center lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2
            className="font-orbitron text-3xl my-2 lg:text-5xl font-bold 
            text-transparent 
            bg-gradient-to-r from-[#daa53e] via-lime-300 to-green-400 
            bg-clip-text"
          >
            RootScan: <br /> Deep Roots Blockchain Explorer
          </h2>

          {/* Mobile image with rounded corners */}
          <div className="relative w-full max-w-md mx-auto aspect-[2/3] lg:hidden my-3 rounded-2xl overflow-hidden">
            <Image
              src="/landing/rootscan.png"
              alt="Rootscan Tree"
              fill
              className="object-cover"
              priority
            />
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
              <button className="px-6 hover:scale-105 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:from-yellow-400 hover:to-green-400 transition">
                Visit RootScan
              </button>
            </Link>
          </div>
        </div>

        {/* Desktop image with rounded corners */}
        <div className="hidden lg:block relative w-[25vw] aspect-[2/3] mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/landing/rootscan.png"
            alt="Rootscan Explorer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
