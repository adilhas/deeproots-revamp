import Image from 'next/image';
import { Wallet, Smartphone, Rocket, Eye, BadgeCheck } from 'lucide-react';

const Data = [
  {
    icon: Wallet,
    title: 'Blockchain Donation Platform',
    description:
      'Each non-profit receives its own wallet and token to raise funds transparently.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Giving Experience',
    description:
      'Clean, scroll-based interface with easy navigation across all core sections.',
  },
  {
    icon: Rocket,
    title: 'Fast, No-Code Setup',
    description:
      'Wallet and token creation handled for you — launch without any technical effort.',
  },
  {
    icon: Eye,
    title: 'Real-Time Transparency',
    description:
      'Live donation tracking with verified on-chain records builds donor trust instantly.',
  },
  {
    icon: BadgeCheck,
    title: 'Branded Tools Per Organization',
    description:
      'Every non-profit gets a personalized dashboard, token, QR codes, and donor profile.',
  },
];
export default function GivefiSection() {
  return (
    <section className="bg-[#C6E3D5] dark:bg-primary-dark relative overflow-hidden bg-gradient-to-br from-[#F5EDFF] to-[#B8D0FF] dark:from-primary-dark dark:to-primary-dark">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-100px] right-[-100px] lg:right-[30%] w-[250px] lg:w-[350px] h-[300px] bg-[#E3A4FE] blur-[80px] opacity-70 dark:opacity-40" />
        <div className="absolute bottom-[-100px] right-[-100px] lg:left-[-100px] w-full md:w-[600px] h-[40%] bg-[#E3A4FE] blur-3xl opacity-50 dark:opacity-40 rounded-full dark:hidden" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[200px] lg:h-[500px] bg-[#E3A4FE] blur-3xl opacity-50 dark:opacity-40 rounded-full" />
      </div>

      <div className="relative z-[1] w-full max-w-[1200px] mx-auto inset-shadow-2xs text-gray-900 dark:text-white px-6 py-16 lg:py-24">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          <div className="w-fit">
            <h2 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#5B26AF] to-[#E1A6FF] font-orbitron font-bold mb-6">
              GiveFi
            </h2>

            {/* Mobile Image */}
            <div className="relative w-full max-w-md mx-auto aspect-square lg:hidden my-3 rounded-2xl">
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

            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A66EFF] to-[#6ECCFF] font-orbitron">
              Empowering Non-profits through transparent giving
            </h3>

            <ul className="space-y-3 text-black dark:text-[#F8FAFC]">
              {Data.map(({ icon: Icon, title, description }) => (
                <li key={title}>
                  <div className="flex items-end gap-2">
                    <Icon
                      className="mt-1 text-[#9333EA] dark:text-[#A855F7]"
                      size={30}
                    />
                    <strong className="font-orbitron">{title}</strong>
                  </div>
                  <p className="text-[#1F2937] dark:text-[#E2E8F0]">
                    {description}
                  </p>
                </li>
              ))}
            </ul>

            <a
              href="http://givefi.earth/"
              className="inline-block text-white mt-6 px-6 py-2 bg-gradient-to-r from-[#A66EFF] to-[#6ECCFF] rounded-lg hover:scale-105 font-bold transition"
            >
              Explore GiveFi
            </a>
          </div>

          {/* Desktop Image */}
          <div className="relative w-full mx-auto aspect-square hidden lg:block rounded-2xl">
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
      </div>
    </section>
  );
}
