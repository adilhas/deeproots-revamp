import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import CountdownTimer from './CountDownTimer';
import Link from 'next/link';

const Hero = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const title = t('hero-section.title');
  const [firstWord, ...rest] = title.split(' ');
  return (
    <>
      <main
        id="home"
        className=" pt-[70px] px-8 md:pt-[88px] lg:pt-[95px] dark:bg-primary-dark dark:text-white flex justify-center z-10 relative flex-col lg:scale-x-105 items-center"
      >
        <div className="w-full max-w-[1200px] py-10 md:py-20  px-3">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <h2 className="text-3xl md:text-6xl font-semibold font-orbitron w-fit text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
                {firstWord}
                <br />
                {rest.join(' ')}
              </h2>
              <p className="max-w-[500px] mb-10">
                {t('hero-section.subtitle')}
              </p>
            </div>
            <div className="mt-32 lg:mt-0">
              <div className="relative scale-80 md:scale-100 w-[450px] h-[252px] translate-y-[-40px] overflow-visible">
                {/* Background eclipse */}
                <Image
                  width={1000}
                  height={1000}
                  alt="eclipse"
                  className="scale-150  absolute top-[-35%] lg:top-[70%] lg:-translate-y-1/2 lg:left-[-150px] z-0 pointer-events-none"
                  src={`${isDark ? '/landing/eclipse-dark.png' : '/landing/eclipse-light.png'}`}
                  priority
                />

                {/* Card background */}
                <Image
                  src={`${isDark ? '/landing/private-seed-card-bg-dark.png' : '/landing/private-seed-card-bg-light.png'}`}
                  alt="private seed card"
                  fill
                  className="rounded-xl object-cover z-10"
                  priority
                />

                {/* Text content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center max-w-[350px] mx-auto">
                  <div className="translate-y-[25px]">
                    <div className="flex justify-end mx-2 translate-y-[-10px]">
                      <span className="bg-[#FFD5B71A] py-1 px-2 rounded-lg font-semibold text-xs">
                        Limited Seat
                      </span>
                    </div>
                    <div className="text-lg font-semibold font-orbitron dark:text-white text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
                      Private Seed Access
                    </div>
                    <div className="text-xs">
                      {/* Become one of 100 early visionaries shaping the future of
                      DeWorld */}
                      {t('hero-section.private_access.description')}
                    </div>
                    <div className="flex flex-row scale-x-[108%] justify-between items-center mt-6 mx-2 bg-[#E9E9E9] text-black dark:bg-[#161616] dark:text-white px-2 py-1 rounded-xl translate-y-[-2px]">
                      <div className="">
                        <CountdownTimer />
                      </div>
                      <Link
                        href="/connect/private-seed"
                        className="btn text-sm btn-sm bg-gradient-to-r from-gradient-from to-gradient-to dark:from-[#696969] dark:to-[#696969] border-0"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

        <Link
          href="/connect/private-seed"
          className="mx-auto cursor-pointer px-6 font-orbitron py-3 bg-gradient-to-r from-[#9E2CA9] to-[#3B82A4] text-center relative font-bold hover:bg-gradient-to-l  transition-all hover:delay-1000 hover:ease-in-out text-white rounded-2xl  text-lg"
        >
          {t('hero-section.btnContent')}
        </Link>
      </div>
    </>
  );
};

export default Hero;
