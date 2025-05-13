import Image from 'next/image';
import Link from 'next/link';
import { Wallet, Smartphone, Rocket, Eye, BadgeCheck } from 'lucide-react';

export default function GivefiSection() {
  return (
    <section className="bg-gradient-to-br from-[#F5EDFF] to-[#E8E9FF] dark:from-[#4B3C71] dark:via-[#6C5BA7] dark:to-[#89B6FF] text-gray-900 dark:text-white px-6 py-16 lg:py-24">
      <div className="max-w-7xl text-center lg:text-left mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="w-fit mx-auto">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A66EFF] via-[#6eb4ff] font-orbitron text-center lg:text-left text-4xl lg:text-5xl font-bold mb-6">
            GiveFi
          </h2>
          <div className="relative w-94 h-94 mx-auto rounded-xl overflow-hidden lg:hidden">
            <Image
              src="/landing/givefi.png"
              alt="GIVEfi Branding"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-lg mb-8 text-gray-800 dark:text-gray-200">
            Empowering Non-profits through transparent giving
          </p>

          <ul className="space-y-5 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <Wallet
                className="text-purple-600 dark:text-purple-300 mt-1"
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
                size={20}
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
