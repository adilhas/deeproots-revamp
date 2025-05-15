import Image from 'next/image';

const ContactUsHero = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00c6ff] to-[#ad1aaf] sm:text-6xl lg:text-7xl mb-6 leading-tight">
        Let&apos;s Talk <br /> We&apos;re Listening
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
        Whether you&apos;re a builder, backer, creator, or just curious —
        we&apos;d love to hear from you.
      </p>
      <div className="flex justify-center mb-8">
        <div className="rounded-xl border-4 border-[#00c6ff]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden bg-gradient-to-br from-[#00c6ff]/10 to-[#ad1aaf]/10">
          <Image
            src="/connect/contact-us.jpeg"
            alt="Contact Deep Roots"
            width={800}
            height={450}
            className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsHero;
