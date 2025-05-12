import Image from 'next/image';

const features = [
  {
    emoji: '📱',
    text: 'Mobile-First Chat & Call\nSmooth, secure messaging and wallet-to-wallet voice calling — on any device.',
  },
  {
    emoji: '🔐',
    text: 'High-Security by Default\nNo tracking, no backdoors, no data leaks — ever.',
  },
  {
    emoji: '🧠',
    text: 'One-Click Mode Switch\nChoose between real-time (centralized) or decentralized communication, instantly.',
  },
  {
    emoji: '🌐',
    text: 'Built for DeWorld\nPrivate, borderless, and censorship-free — your voice, your messages, your control.',
  },
];

const RootChatSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center py-10 px-6 lg:px-12 gap-10 bg-[#f9f9ff] dark:bg-[#523f74] relative overflow-hidden">
      <div className="absolute w-60 h-60 top-20 right-10 bg-[#5C3FA3] blur-[200px] rounded-full opacity-40 dark:opacity-60 pointer-events-none z-0" />

      <div className="lg:w-[45%] text-gray-900 dark:text-gray-200 relative z-10">
        <h1 className="text-3xl lg:text-4xl font-extrabold font-orbitron leading-tight bg-gradient-to-r from-[#8151DE] to-[#00CFFF] bg-clip-text text-transparent mb-4">
          RootChat <br />{' '}
          <span className="text-xl">The First Hybrid CALL & Messaging App</span>
        </h1>
        <div className="block lg:hidden w-full max-w-md mx-auto">
          <Image
            src="/landing/rootchat.png"
            alt="RootChat Mobile"
            width={600}
            height={337}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>

        <ul className="space-y-6 text-base">
          {features.map(({ emoji, text }) => (
            <li key={emoji} className="flex items-start gap-3">
              <span className="text-2xl">{emoji}</span>
              <span className="whitespace-pre-line">{text}</span>
            </li>
          ))}
        </ul>

        <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#2F00FF] to-[#45308b] text-white font-bold rounded-lg hover:opacity-90 transition">
          Explore RootChat
        </button>
      </div>

      {/* Desktop Image (Only shows on desktop) */}
      <div className="hidden lg:block lg:w-[55%]">
        <Image
          src="/landing/rootchat.png"
          alt="RootChat Desktop"
          width={800}
          height={450}
          className="w-full h-auto rounded-2xl"
          priority
        />
      </div>
    </section>
  );
};

export default RootChatSection;
