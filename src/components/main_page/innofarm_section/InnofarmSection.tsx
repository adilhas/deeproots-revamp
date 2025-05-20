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
    <section className="relative flex flex-row items-center justify-between gap-8 px-6 py-16 lg:px-24 mx-auto bg-gradient-to-r from-[#e6f5ec] via-[#c3e7d7] to-[#a8d5c2] dark:from-[#0d1f1c] dark:via-[#0d1f1c] dark:to-[#0d1f1c]">
      {/* <div className="w-60 h-60 top-32 left-12 blur-[350px] md:blur-[350px] bg-[#00ff94] rounded-full absolute" />
      <div className="w-60 h-60 bottom-32 right-12 blur-[350px] md:blur-[350px] bg-[#f15c37] rounded-full absolute" /> */}
      {/* Content */}
      <div className="w-full lg:w-1/2  space-y-6">
        <div className="font-orbitron text-xl lg:text-3xl font-bold bg-gradient-to-r text-transparent bg-clip-text dark:from-[#0ff0fc] dark:to-[#00ff94] from-[#005258] to-[#007a4d]">
          <span className="lg:text-5xl text-3xl">InnoFarm</span> <br /> The Web3
          Job Marketplace
        </div>
        <div className="w-full lg:hidden">
          <Image
            src="/landing/innofarm.png"
            alt="InnoFarm Illustration"
            width={1200}
            height={800}
            className="rounded-xl shadow-lg"
            layout="responsive"
            priority
          />
        </div>

        <div className="space-y-4 text-gray-700 dark:text-gray-300 text-base lg:text-lg">
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Network size={30} className="text-[#f15c37]" /> Decentralized
              Hiring
            </h3>
            <p>
              Post jobs or find work in a secure blockchain-powered network.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <Bot size={30} className="text-[#f15c37]" /> AI Job Matching
            </h3>
            <p>Smart algorithms connect talent to the right opportunities.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <ShieldCheck size={30} className="text-[#f15c37]" /> Secure Escrow
              Payments
            </h3>
            <p>Crypto and fiat payments protected by smart contracts.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <BadgeCheck size={30} className="text-[#f15c37]" /> Verified Web3
              Profiles
            </h3>
            <p>On-chain badges, wallet sync, and optional KYC for trust.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <GraduationCap size={30} className="text-[#f15c37]" /> Learn &
              Grow
            </h3>
            <p>Access courses, certifications, and earn while you level up.</p>
          </div>

          <button className="text-primary-dark mt-6 px-6 py-2 bg-gradient-to-l from-[#00ff94] to-[#0ff0fc] rounded-lg hover:scale-105  font-bold  transition">
            <Link href="https://innofarm.earth/">Explore Innofarm</Link>
          </button>
        </div>
      </div>
      {/* Desktop Image - 60vw width */}
      <div className="w-1/2 hidden lg:block">
        <Image
          src="/landing/innofarm.png"
          alt="InnoFarm Illustration"
          width={1200}
          height={800}
          className="rounded-xl shadow-lg"
          layout="responsive"
          priority
        />
      </div>
    </section>
  );
}
