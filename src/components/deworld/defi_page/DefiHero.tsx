import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const DefiHero = () => {
  return (
    <section className="relative w-full p-20  overflow-hidden">
      <div className="relative container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Background Elements */}
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#0085a8]/20 to-[#ad1aaf]/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ad1aaf]/20 to-[#0085a8]/20 rounded-full blur-3xl"></div>

        {/* Image */}
        <div className="flex-1 relative w-full max-w-xl mx-auto group">
          <div className="rounded-2xl border-4 border-[#0085a8]/30 shadow-xl overflow-hidden bg-white dark:bg-gray-800 transform transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/deworld/defi.png"
              alt="DeFi"
              width={800}
              height={450}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Text Content */}
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] leading-tight mb-6">
            We Are the Flow <br /> We Are the Freedom
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
            In Deep Roots, DeFi is about giving people real control over their
            value, income, and opportunity.
          </p>
          <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-4 px-8 rounded-full text-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto lg:mx-0 group">
            Explore DeFi Tools
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DefiHero;
