import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const icons = [
  'rootchat-mobile-first',
  'rootchat-security',
  'rootchat-mode-switch',
  'rootchat-globe',
];

interface Feature {
  title: string;
  text: string;
}

const RootChatSection = () => {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('rootchat.features', { returnObjects: true });
  const translatedFeatures: Feature[] = Array.isArray(rawFeatures)
    ? (rawFeatures as Feature[])
    : [];

  const features = translatedFeatures.map((feature, idx) => ({
    icon: icons[idx],
    title: feature.title,
    text: feature.text,
  }));

  return (
    <section className="px-6 lg:px-12 gap-10 bg-gradient-to-t  from-[#A0E6FF] to-[#C6B6F2] dark:from-primary-dark dark:to-primary-dark relative overflow-hidden ">
      <div className="max-w-[1200px] relative mx-auto flex flex-col py-20 lg:flex-row items-center  ">
        <div className="absolute top-[-100px] right-[200px] w-[500px] h-[400px] bg-[#5641A3] blur-[150px] opacity-50 pointer-events-none z-0 hidden lg:dark:inline-block" />
        <div className="absolute bottom-[-100px] left-[150px] w-full md:w-[600px] h-[50%] bg-[#C6B6F2] dark:bg-[#3CB1F2] blur-3xl opacity-90 dark:opacity-20 rounded-full z-0" />
        {/* <div className="absolute w-60 h-60 top-20 right-10 bg-[#5C3FA3] blur-[200px] rounded-full opacity-40 dark:opacity-60 pointer-events-none z-0" /> */}

        <div className="lg:w-1/2 w-full text-gray-900 dark:text-gray-200 relative z-10 lg:pl-9">
          <h1 className="text-5xl lg:text-4xl font-extrabold font-orbitron leading-tight w-fit bg-gradient-to-r from-[#3D2A63]  to-[#00CFFF] dark:from-[#C6B6F2] dark:to-[#A0E6FF] bg-clip-text text-transparent mb-4">
            {t('rootchat.title')}
          </h1>
          <div className="block lg:hidden my-4 w-full max-w-md mx-auto">
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
            {t('rootchat.subtitle')}
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
                  <span className="font-semibold text-md">{title}</span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300">{text}</p>
              </li>
            ))}
          </ul>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href={'https://rootchat.earth/'}
          >
            <button className="hover:scale-105 mt-8 px-6 py-3 bg-gradient-to-r from-[#AD80FD] to-[#C6B6F2] text-black  font-bold rounded-lg hover:opacity-90 transition">
              Explore RootChat
            </button>
          </a>
        </div>

        {/* Desktop Image (Only shows on desktop) */}
        <div className="hidden lg:block lg:w-1/2 mx-auto p-8 z-10">
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
