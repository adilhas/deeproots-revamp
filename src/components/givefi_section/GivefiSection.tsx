import Image from 'next/image';
import Link from 'next/link';

export default function GivefiSection() {
  return (
    <section className="bg-gradient-to-br from-[#F5EDFF] to-[#E8E9FF] dark:from-[#1F1A2B] dark:to-[#2C2C3F] text-gray-900 dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A66EFF] via-[#6eb4ff] font-orbitron text-center lg:text-left text-4xl lg:text-5xl font-bold mb-6">
            GIVEFI
          </h2>
          <div className="relative w-full h-80 lg:h-[400px] rounded-lg inline-block lg:hidden">
            <Image
              src="/landing/givefi.png"
              alt="GIVEfi Branding"
              layout="fill"
              objectFit="contain"
              className="rounded-xl"
              priority
            />
          </div>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            Empowering Non-profits through transparent giving
          </p>
          <ul className="space-y-5 text-gray-700 dark:text-gray-400">
            <li>
              <strong className="text-purple-800 dark:text-purple-300">
                Blockchain Donation Platform:
              </strong>{' '}
              Each non-profit receives its own wallet and token to raise funds
              transparently.
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">
                Mobile-First Giving Experience:
              </strong>{' '}
              Clean, scroll-based interface with easy navigation across all core
              sections.
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">
                Fast, No-Code Setup:
              </strong>{' '}
              Wallet and token creation handled for you — launch without any
              technical effort.
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">
                Real-Time Transparency:
              </strong>{' '}
              Live donation tracking with verified on-chain records builds donor
              trust instantly.
            </li>
            <li>
              <strong className="text-purple-800 dark:text-purple-300">
                Branded Tools Per Organization:
              </strong>{' '}
              Every non-profit gets a personalized dashboard, token, QR codes,
              and donor profile.
            </li>
          </ul>
          <button className="text-white mt-6 px-6 py-2 bg-gradient-to-r from-[#A66EFF] to-[#6eccff]  rounded-lg  hover:scale-105 font-bold transition">
            <Link href="http://givefi.earth/">Explore Givefi</Link>
          </button>
        </div>

        <div className="relative w-full h-full  rounded-xl overflow-hidden">
          <Image
            src="/landing/givefi.png"
            alt="GIVEfi Branding"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
