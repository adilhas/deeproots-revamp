import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation('landing_page');
  const title = t('hero-section.title');
  const [firstWord, ...rest] = title.split(' ');
  return (
    <>
      <main
        id="home"
        className=" pt-[70px] md:pt-[88px] lg:pt-[95px] dark:bg-primary-dark dark:text-white flex justify-center z-10 relative flex-col lg:scale-x-105 items-center"
      >
        <div className="w-full max-w-[1200px] py-10 md:py-20  px-3">
          <h2 className="text-3xl md:text-6xl font-semibold font-orbitron w-fit text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
            {firstWord}
            <br />
            {rest.join(' ')}
          </h2>

          <p className="max-w-[500px] mb-10">{t('hero-section.subtitle')}</p>

          <div className="relative w-full h-[334px] md:h-[628px] mt-4">
            <Image
              src="/landing/deeproots-banner-v2.jpg"
              alt="banner"
              fill
              className="object-cover rounded-2xl border-4 border-white dark:border-black"
            />
          </div>
        </div>
      </main>
      <div className="flex flex-col py-[70px] text-center px-3 bg-[#D4D4D4] dark:bg-[#222222]">
        <h2 className="font-extrabold  text-2xl md:text-4xl text-center w-fit mx-auto bg-gradient-to-r from-[#9E2CA9]  to-[#3B82A4]  bg-clip-text font-orbitron text-transparent">
          {t('hero-section.hello')}
        </h2>

        <div className="inline-block text-lg my-6 max-w-[619px] mx-auto">
          {t('hero-section.paragraph')}
        </div>

        <button className="mx-auto cursor-pointer px-6 font-orbitron py-3 bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] text-center relative font-bold hover:bg-gradient-to-l  transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl  text-lg">
          {t('hero-section.btnContent')}
        </button>
      </div>
    </>
  );
};

export default Hero;
