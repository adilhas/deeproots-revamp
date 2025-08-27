import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const PodcastSection = () => {
  const { t } = useTranslation('landing_page');
  return (
    <section className="bg-gradient-to-r from-[#F3CE7E] to-[#B17D4D] dark:from-primary-dark dark:to-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[400px] bg-[#DFB186] blur-[150px] opacity-50 pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] left-[-100px] w-full md:w-[600px] h-[50%] bg-[#B17D4D] blur-3xl opacity-90 dark:opacity-20 rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[300px] lg:h-[200px] bg-[#B17D4D] blur-3xl opacity-50 dark:opacity-40 pointer-events-none rounded-full z-0" />

      <section className="py-12 px-4 max-w-[1200px] mx-auto relative z-10">
        <h1 className="lg:text-5xl text-4xl font-orbitron font-bold text-center mb-10 bg-gradient-to-r from-[#B9620F] to-[#391D07] dark:from-[#CA9968] dark:to-[#D76306] text-transparent bg-clip-text">
          {t('podcast_section.title')}
        </h1>

        <div className="container lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto relative z-10">
          {/* Desktop Image */}
          <div className="hidden lg:flex lg:w-1/2 pl-9 aspect-square relative z-10">
            <Image
              src="/landing/podcast.webp"
              alt="Podcast Desktop"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>

          <div className=" space-y-10 justify-evenly flex flex-col lg:w-1/2 lg:pr-9 relative z-10">
            <h2 className="text-[40px] leading-tight w-fit font-orbitron font-semibold bg-gradient-to-r from-[#B9620F] to-[#391D07] dark:from-[#CA9968] dark:to-[#D76306] text-transparent bg-clip-text">
              {t('podcast_section.subtitle')}
            </h2>

            {/* Mobile Image */}
            <div className="lg:hidden flex lg:w-1/2">
              <Image
                src="/landing/podcast.webp"
                alt="Podcast Mobile"
                width={600}
                height={337}
                className="w-full h-auto rounded-2xl shadow-lg"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            </div>

            <p className="text-lg">{t('podcast_section.description')}</p>

            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://saxophone.earth/"
              aria-label="Saxophone Podcast website Link"
            >
              <button className="hover:scale-105 bg-[#4B210A] font-orbitron text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
                {t('podcast_section.cta')}
              </button>
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PodcastSection;
