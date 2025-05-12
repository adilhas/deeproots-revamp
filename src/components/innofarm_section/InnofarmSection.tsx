import Image from 'next/image';
import Link from 'next/link';

export default function InnofarmSection() {
  return (
    <section className="relative light:bg-white  flex  flex-row items-center justify-between gap-8 px-6 py-16 max-w-7xl mx-auto">
      <div className="w-60 h-60 top-32 left-12 blur-[350px] md:blur-[350px] bg-[#00ff94] rounded-full absolute" />
      <div className="w-60 h-60 bottom-32 right-12 blur-[350px] md:blur-[350px] bg-[#0ff0fc] rounded-full absolute" />
      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <h2 className="font-orbitron text-3xl lg:text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text dark:from-[#0ff0fc] dark:to-[#00ff94] from-[#005258] to-[#007a4d]">
          InnoFarm – The Web3 Job Marketplace
        </h2>
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
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Decentralized Hiring
            </h3>
            <p>
              Post jobs or find work in a secure blockchain-powered network.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              AI Job Matching
            </h3>
            <p>Smart algorithms connect talent to the right opportunities.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Secure Escrow Payments
            </h3>
            <p>Crypto and fiat payments protected by smart contracts.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Verified Web3 Profiles
            </h3>
            <p>On-chain badges, wallet sync, and optional KYC for trust.</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Learn & Grow
            </h3>
            <p>Access courses, certifications, and earn while you level up.</p>
          </div>
          <button className="text-primary-dark mt-6 px-6 py-2 bg-gradient-to-l from-[#00ff94] to-[#0ff0fc] rounded-lg hover:border-2 hover:bg-none hover:dark:text-neutral-200 hover:text-neutral-900 font-bold hover:border-[#0ff0fc] transition">
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
