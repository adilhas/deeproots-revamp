import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: 'rootchat-mobile-first',
    title: 'Mobile-First Chat & Call',
    text: 'Smooth, secure messaging and wallet-to-wallet voice calling — on any device.',
  },
  {
    icon: 'rootchat-security',
    title: 'High-Security by Default',
    text: 'No tracking, no backdoors, no data leaks — ever.',
  },
  {
    icon: 'rootchat-mode-switch',
    title: 'One-Click Mode Switch',
    text: 'Choose between real-time (centralized) or decentralized communication, instantly.',
  },
  {
    icon: 'rootchat-globe',
    title: 'Built for DeWorld',
    text: 'Private, borderless, and censorship-free — your voice, your messages, your control.',
  },
];

const RootChatSection = () => {
  return (
    <section className="px-6 lg:px-12 gap-10 bg-gradient-to-t  from-[#A0E6FF] to-[#C6B6F2] dark:from-primary-dark dark:to-primary-dark relative overflow-hidden ">
      <div className="max-w-[1200px] relative mx-auto flex flex-col py-20 lg:flex-row items-center  ">
        <div className="absolute top-[-100px] right-[200px] w-[500px] h-[400px] bg-[#5641A3] blur-[150px] opacity-50 pointer-events-none z-0 hidden lg:dark:inline-block" />
        <div className="absolute bottom-[-100px] left-[150px] w-full md:w-[600px] h-[50%] bg-[#C6B6F2] dark:bg-[#3CB1F2] blur-3xl opacity-90 dark:opacity-20 rounded-full z-0" />
        {/* <div className="absolute w-60 h-60 top-20 right-10 bg-[#5C3FA3] blur-[200px] rounded-full opacity-40 dark:opacity-60 pointer-events-none z-0" /> */}

        <div className="lg:w-1/2 text-gray-900 dark:text-gray-200 relative z-10 lg:pl-9">
          <h1 className="text-3xl lg:text-4xl font-extrabold font-orbitron leading-tight w-fit bg-gradient-to-r from-[#3D2A63]  to-[#00CFFF] dark:from-[#C6B6F2] dark:to-[#A0E6FF] bg-clip-text text-transparent mb-4">
            RootChat
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
          <h1 className="text-xl font-extrabold font-orbitron leading-tight w-fit bg-gradient-to-r from-[#3D2A63]  to-[#00CFFF] dark:from-[#C6B6F2] dark:to-[#A0E6FF] bg-clip-text text-transparent mb-4">
            The First Hybrid CALL & Messaging App
          </h1>
          <ul className="space-y-6 text-base">
            {features.map(({ icon, title, text }) => (
              <li key={icon} className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-3">
                  <Image
                    src={`/landing/${icon}.svg`}
                    alt={icon}
                    width={28}
                    height={28}
                  />
                  <span className="font-semibold text-lg">{title}</span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
              </li>
            ))}
          </ul>

          <Link href={'https://rootchat.earth/'}>
            <button className="hover:scale-105 mt-8 px-6 py-3 bg-gradient-to-r from-[#AD80FD] to-[#C6B6F2] text-black  font-bold rounded-lg hover:opacity-90 transition">
              Explore RootChat
            </button>
          </Link>
        </div>

        {/* Desktop Image (Only shows on desktop) */}
        <div className="hidden lg:block lg:w-1/2 mx-auto p-8">
          <Image
            src="/landing/rootchat.png"
            alt="RootChat Desktop"
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default RootChatSection;
