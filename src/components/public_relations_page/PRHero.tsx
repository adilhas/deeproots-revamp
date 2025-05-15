import Image from 'next/image';

const PRHero = () => {
  return (
    <div className="max-w-5xl mx-auto pt-16 px-4 sm:px-6 lg:px-8 text-center mb-12">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6 leading-tight">
        Our Voice - Our Vision <br /> Shared with the World
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
        Deep Roots is not just a platform — it&apos;s a movement with a message.
        We welcome authentic conversations, real storytelling, and bold voices.
      </p>
      <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden max-w-3xl mx-auto">
        <Image
          src="/public-relations.jpeg"
          alt="Public Relations at Deep Roots"
          width={960}
          height={540}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default PRHero;
