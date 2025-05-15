import Image from 'next/image';

const SeedingHero = () => {
  return (
    <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6">
        From Vision to Ownership
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
        Join the core of the movement. This is your chance to claim a Foundation
        Seat in the Deep Roots Project — before the world catches up.
      </p>
      <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden">
        <Image
          src="/deworld/seeding.webp"
          alt="Foundation Seeding Round"
          width={1000}
          height={500}
          className="object-cover w-full h-auto"
          priority
        />
      </div>
    </div>
  );
};

export default SeedingHero;
