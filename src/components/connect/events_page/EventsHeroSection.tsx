import Image from 'next/image';

const EventsHeroSection = () => (
  <div className="text-center mb-16">
    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
      Hello, Builder <br /> Let&apos;s Meet
    </h1>
    <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
      From virtual town halls to global gatherings, connect with the people
      shaping DeWorld.
    </p>
    <div className="flex justify-center mb-8">
      <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden">
        <Image
          src="/connect/events-meetups.jpeg"
          alt="Deep Roots Events & Meetups"
          width={800}
          height={450}
          className="object-cover"
          priority
        />
      </div>
    </div>
  </div>
);

export default EventsHeroSection;
