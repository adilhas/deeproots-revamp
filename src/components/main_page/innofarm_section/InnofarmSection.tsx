import Image from 'next/image';
import Link from 'next/link';
import {
  Network,
  Bot,
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
} from 'lucide-react';
export default function InnofarmSection() {
  return (
    <section className="bg-[#C6E3D5] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[300px] h-[500px] bg-[#9DF725] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[500px] bg-[#FA7C2C] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />
      <div className="w-full  max-w-[1200px] relative flex flex-row items-center justify-between gap-8 px-6 py-16 lg:px-24 mx-auto">
        <div className="w-full lg:w-1/2  space-y-6">
          <div className="font-orbitron w-fit text-4xl md:text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#FF8120] to-[#00903D]">
            InnoFarm
          </div>
          <div className="w-full lg:hidden aspect-square h-full max-h-[450px] relative">
            <Image
              src="/landing/innofarm.png"
              alt="InnoFarm Illustration"
              className="rounded-2xl shadow-lg object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="font-orbitron w-fit text-xl lg:text-3xl font-bold lg:bg-gradient-to-r  lg:text-transparent bg-clip-text lg:from-[#FF8120] lg:to-[#00903D]">
            The Web3 Job Marketplace
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base lg:text-lg">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Network size={30} className="text-[#E06643]" /> Decentralized
                Hiring
              </h3>
              <p>
                Post jobs or find work in a secure blockchain-powered network.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Bot size={30} className="text-[#E06643]" /> AI Job Matching
              </h3>
              <p>Smart algorithms connect talent to the right opportunities.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <ShieldCheck size={30} className="text-[#E06643]" /> Secure
                Escrow Payments
              </h3>
              <p>Crypto and fiat payments protected by smart contracts.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <BadgeCheck size={30} className="text-[#E06643]" /> Verified
                Web3 Profiles
              </h3>
              <p>On-chain badges, wallet sync, and optional KYC for trust.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <GraduationCap size={30} className="text-[#E06643]" /> Learn &
                Grow
              </h3>
              <p>
                Access courses, certifications, and earn while you level up.
              </p>
            </div>

            <button className="text-white font-orbitron mt-6 px-6 py-2 bg-gradient-to-l   from-[#FF8120] to-[#00903D] rounded-lg hover:scale-105  font-bold  transition">
              <Link href="https://innofarm.earth/">Explore Innofarm</Link>
            </button>
          </div>
        </div>
        {/* Desktop Image - 60vw width */}
        <div className="w-1/2 hidden aspect-square h-full relative lg:block">
          <Image
            src="/landing/innofarm.png"
            alt="InnoFarm Illustration"
            className="rounded-2xl shadow-lg object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
