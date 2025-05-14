import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const GasFeesHero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="lg:text-left text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl mb-6 leading-tight">
        <div className="inline-block lg:pl-[3ch]">
          We Are the Access
          <br />
          <span className="inline-block lg:pl-[4ch]">We Are the Fair Cost</span>
        </div>
      </h1>

      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8  mx-auto">
        In Deep Roots, gas fees aren&apos;t a barrier — they&apos;re a gateway
        to affordable blockchain access.
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden ring-1 ring-gray-200 dark:ring-0">
          <Image
            src="/academy/gas-fees.jpeg"
            alt="Gas Fees - Deep Roots"
            width={600}
            height={400}
            className="object-cover"
            priority
          />
        </div>
      </div>
      <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto">
        Learn About Transactions <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};

export default GasFeesHero;
