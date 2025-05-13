import Image from 'next/image';
import Link from 'next/link';
import { Wallet, Smartphone, Rocket, Eye, BadgeCheck } from 'lucide-react';

export default function GivefiSection() {
  return (
    <section className="bg-gradient-to-br from-[#F5EDFF] via-[#E8E9FF] to-[#B8D0FF] dark:from-[#432C7A] dark:via-[#6E4F9E] dark:to-[#8FC1FF] text-gray-900 dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-fit mx-auto">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#A66EFF] via-[#6eb4ff] to-[#6eb4ff] font-orbitron text-center lg:text-left text-2xl lg:text-3xl font-bold mb-6 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
            <span className="text-4xl lg:text-5xl">GiveFi</span>
            <br />
            Empowering Non-profits through transparent giving
          </div>

          <div className="relative w-full max-w-md mx-auto aspect-square lg:hidden my-3 bg-none rounded-2xl dark:bg-purple-100">
            <Image
              src="/landing/givefi-bg-less.png"
              alt="GiveFi Logo"
              layout="responsive"
              width={768}
              height={768}
              className="rounded-xl object-contain"
              priority
            />
          </div>

          <ul className="space-y-5 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <Wallet
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={35}
              />
              <span>
                <strong className="text-purple-800 dark:text-purple-300">
                  Blockchain Donation Platform:
                </strong>{' '}
                Each non-profit receives its own wallet and token to raise funds
                transparently.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Smartphone
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={35}
              />
              <span>
                <strong className="text-purple-800 dark:text-purple-300">
                  Mobile-First Giving Experience:
                </strong>{' '}
                Clean, scroll-based interface with easy navigation across all
                core sections.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Rocket
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={35}
              />
              <span>
                <strong className="text-purple-800 dark:text-purple-300">
                  Fast, No-Code Setup:
                </strong>{' '}
                Wallet and token creation handled for you — launch without any
                technical effort.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Eye
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={35}
              />
              <span>
                <strong className="text-purple-800 dark:text-purple-300">
                  Real-Time Transparency:
                </strong>{' '}
                Live donation tracking with verified on-chain records builds
                donor trust instantly.
              </span>
            </li>

            <li className="flex items-start gap-3">
              <BadgeCheck
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={35}
              />
              <span>
                <strong className="text-purple-800 dark:text-purple-300">
                  Branded Tools Per Organization:
                </strong>{' '}
                Every non-profit gets a personalized dashboard, token, QR codes,
                and donor profile.
              </span>
            </li>
          </ul>
          <button className="text-white mt-6 px-6 py-2 bg-gradient-to-r from-[#A66EFF] to-[#6eccff]  rounded-lg  hover:scale-105 font-bold transition">
            <Link href="http://givefi.earth/">Explore Givefi</Link>
          </button>
        </div>

        <div className="relative w-full max-w-md mx-auto aspect-square hidden lg:block bg-none rounded-2xl dark:bg-purple-100">
          <Image
            src="/landing/givefi-bg-less.png"
            alt="GiveFi Logo"
            layout="responsive"
            width={768}
            height={768}
            className="rounded-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
