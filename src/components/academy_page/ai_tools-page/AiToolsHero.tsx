import Image from 'next/image';
import React from 'react';

const AiToolsHero = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/academy/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>
      <div className="relative overflow-hidden py-16">
        {/* Background Elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#0085a8]/10 to-[#ad1aaf]/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-tr from-[#ad1aaf]/10 to-[#0085a8]/10 rounded-full blur-3xl"></div>

        {/* Main Content */}
        <div className="container mx-auto px-4 grid md:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="md:col-span-6 space-y-6 text-left">
            <h1 className="text-5xl font-bold leading-tight lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
                We Are the Intelligence <br />
                We Are the Edge.
              </span>
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-lg">
              In Deep Roots, AI isn&apos;t just a feature — it&apos;s a core
              force behind how we learn, build, grow, and connect.
            </p>
          </div>

          {/* Right Content - Floating Image with Animation */}
          <div className="md:col-span-6 relative">
            <div className="relative overflow-visible">
              {/* Main Image */}
              <div className="rounded-2xl border-4 border-[#0085a8]/30 shadow-xl shadow-[#ad1aaf]/20 overflow-hidden bg-white dark:bg-gray-800 transform hover:scale-[1.02] transition-transform duration-500 relative z-10">
                <Image
                  src="/academy/ai-tools.png"
                  alt="AI Tools - Deep Roots"
                  width={600}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute top-6 -right-6 w-24 h-24 bg-[#0085a8]/90 rounded-xl rotate-12 shadow-lg animate-pulse z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#ad1aaf]/90 rounded-full shadow-lg animate-bounce z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AiToolsHero;
