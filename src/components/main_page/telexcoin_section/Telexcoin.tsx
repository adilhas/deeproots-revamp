import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Telexcoin = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  return (
    <main className="py-20 relative bg-[#D1D9D4] dark:bg-primary-dark px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center  gap-6 flex-col lg:flex-row rounded-2xl items-center w-full">
          {/* Desktop Image */}
          <div className="inline-block w-1/2 ">
            <div className="w-full lg:flex hidden">
              <Image
                src="/landing/telexcoin.jpeg"
                alt="TeleXcoin DeX"
                width={700}
                height={437}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>

          {/* Content Section */}
          <div
            className={`flex justify-center  items-start  flex-col lg:w-1/2 mx-auto`}
          >
            <div className="mt-6">
              {/* Header */}
              <h1 className="font-extrabold text-2xl  lg:text-start lg:text-4xl  lg:leading-normal bg-gradient-to-r dark:bg-gradient-to-r from-[#0085a8] dark:via-[#ad1] dark:to-amber-400 via-blue-900 to-amber-600 bg-clip-text font-orbitron text-transparent">
                {t('telexcoin.title')}
              </h1>

              {/* Mobile Image */}
              <div className="w-full lg:hidden flex mx-auto justify-center my-5">
                <Image
                  src="/landing/telexcoin.jpeg"
                  alt="TeleXcoin DeX Mobile"
                  width={700}
                  height={437}
                  className="rounded-2xl"
                  priority
                />
              </div>

              {/* Subheading */}
              <h1 className="font-extrabold text-xl lg:text-2xl lg:text-start mb-5 lg:mb-10 lg:leading-normal bg-gradient-to-r dark:bg-gradient-to-r from-[#0085a8] dark:via-[#ad1] dark:to-amber-400 via-blue-900 to-amber-600 bg-clip-text font-orbitron lg:text-transparent">
                {t('telexcoin.subtitle')}
              </h1>
              <div className="inline-block">
                <h4 className="font-orbitron font-bold text-xl leading-normal w-full">
                  {t('telexcoin.access')}
                </h4>
              </div>
            </div>

            {/* Icon with Text */}
            <div className="flex items-start my-4">
              <div className="inline-block mr-2">
                <Image
                  src={`/landing/${isDark ? 'money-bag-dark.svg' : 'money-bag.svg'}`}
                  alt="money-bag"
                  width={25}
                  height={25}
                />
              </div>
              <div className="lg:w-[500px] font-sans md:w-[70vw]">
                <span className="text-lg">{t('telexcoin.seedGrow')}</span>
              </div>
            </div>

            {/* Description */}
            <p className="font-sans my-2 lg:w-[650px] md:w-[70vw]">
              <span className="text-lg">{t('telexcoin.features')}</span>
            </p>

            {/* Another Icon with Text */}
            <div className="font-sans mt-2 flex items-start lg:w-[500px] md:w-[70vw]">
              <div className="inline-block pt-1">
                <Image
                  src={`/landing/${isDark ? 'fire-hub-dark.svg' : 'fire-hub.svg'}`}
                  alt="hub"
                  width={25}
                  height={25}
                />
              </div>
              <span className="text-lg ml-2">{t('telexcoin.hub')}</span>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:mt-6 items-center flex-col md:flex-row">
              <a
                href={'https://www.telexcoin.earth/'}
                rel="noopener noreferrer"
                target="_blank"
                className="mt-6 font-bold lg:mt-10 bg-gradient-to-r border from-[#0085a8] via-[#ad1]/60 dark:via-[#ad1]/70 dark:to-amber-600 to-amber-600 mr-6 px-6 font-orbitron py-3 text-center hover:bg-none hover:border dark:border-[#0085a8] border-[#0085a8] dark:hover:text-[#0085a8] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider"
                style={{
                  boxShadow: `${isDark ? '0px 15px 31px 0px #000000' : '0px 8px 28px 0px #605644A3'}`,
                }}
                aria-label="join and earn button"
              >
                {t('telexcoin.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Telexcoin;
