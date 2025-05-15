import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';

const OurStoryHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden py-16 lg:py-0">
      {/* Content Side */}
      <div className="w-full lg:w-1/2 px-6 lg:px-12 xl:px-20 py-12 z-10">
        <div className="max-w-xl lg:mx-0 mx-auto">
          {/* Tagline with icon */}
          <div className="flex items-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
            <Sparkles size={20} className="mr-2 text-[#ad1aaf]" />
            <p className="text-lg font-medium tracking-widest uppercase">
              Our Story
            </p>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-8">
            From{' '}
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] bg-clip-text text-transparent">
                Impossible
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0085a8]/50 to-[#ad1aaf]/50 rounded-full"></span>
            </span>{' '}
            to{' '}
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] bg-clip-text text-transparent">
                Possible
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#0085a8]/50 to-[#ad1aaf]/50 rounded-full"></span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-200 mb-10">
            Seeding intelligence to harvest solutions for tomorrow&apos;s
            challenges.
          </p>

          {/* Featured Box */}
          <div className="bg-white/10 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-xl text-white font-medium">
              We are{' '}
              <span className="font-bold bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] bg-clip-text text-transparent">
                Deep Roots
              </span>
              .<br />
              <span className="italic">
                And our story is still being written.
              </span>
            </p>
          </div>

          {/* CTA Button */}
          <button className="mt-10 flex items-center bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 hover:opacity-90">
            Learn More
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      {/* Image Side */}
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
        <div className="rounded-2xl overflow-hidden border-4 border-[#0085a8]/30 shadow-xl max-w-xl  w-full">
          <Image
            src="/our-story.jpeg"
            alt="Deep Roots Story"
            width={700}
            height={700}
            className="object-contain w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default OurStoryHero;
