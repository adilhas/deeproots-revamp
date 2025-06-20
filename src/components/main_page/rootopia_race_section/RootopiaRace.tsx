import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useThemeContext } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';
const Data = [
  { icon: 'rootopia-daily-reward', title: 'Daily Rewards' },
  {
    icon: 'rootopia-earn-nft',
    title: 'Earn rare NFTs and real utility tokens',
  },
  {
    icon: 'rootopia-weekly-prize',
    title: 'Weekly Prize Drops',
  },
  {
    icon: 'rootopia-climb-leaderboard',
    title: 'Climb the leaderboard to unlock elite rewards',
  },
  {
    icon: 'rootopia-battle',
    title: 'Battle for Glory',
  },
];
const RootopiaRace = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const features = t('rootopia.features', { returnObjects: true }) as string[];
  return (
    <section className="bg-[#F3D390] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] lg:right-[20%] dark:right-[0px] w-[250px] lg:w-[500px] h-[300px] bg-[#145412] dark:bg-[#60420C] blur-[80px] opacity-40 dark:opacity-40 pointer-events-none z-0" />

      <div className="relative w-full z-10 max-w-[1200px] mx-auto px-5 py-10">
        <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[200px] lg:h-[500px] bg-[#F08135] dark:bg-[#5E400C] blur-3xl opacity-50 dark:opacity-40 pointer-events-none rounded-full z-0" />
        {/* <div className="flex justify-center flex-row items-center w-full"></div> */}

        <div className="flex justify-center lg:gap-5 flex-col lg:flex-row rounded-2xl items-center">
          <div className="w-full lg:inline-block hidden max-w-[500px] lg:w-1/2 ">
            <Image
              src="/landing/rootopia-v2.png"
              alt="Rootopia Race Banner"
              className="rounded-4xl"
              width={1200}
              height={630}
              layout="responsive"
            />
          </div>

          <div className="flex justify-center items-start flex-col w-full  lg:w-1/2 p-3">
            <div className="w-full">
              <h2 className="font-extrabold font-serif text-5xl lg:text-start lg:text-5xl lg:leading-normal bg-gradient-to-b from-[#E57B0C] to-[#A42E0C] bg-clip-text text-transparent">
                {t('rootopia.main-title')}
              </h2>

              <div className="w-full mx-auto flex  justify-center items-center self-center lg:hidden my-5">
                <Image
                  src="/landing/rootopia-v2.png"
                  alt="Rootopia Race Banner Mobile"
                  className="rounded-4xl w-full  shadow-lg"
                  width={800}
                  height={420}
                  layout="responsive"
                />
              </div>
              <h2 className="font-extrabold text-center font-serif text-3xl lg:text-start lg:text-3xl mb-10 lg:leading-normal bg-gradient-to-b from-[#E57B0C] to-[#A42E0C] bg-clip-text text-transparent">
                {t('rootopia.subtitle')}
              </h2>
              <h3 className="font-orbitron font-bold text-xl leading-normal w-full">
                {t('rootopia.tagline')}
              </h3>
            </div>

            <p className="font-sans mt-5">{t('rootopia.description')}</p>

            <ul className="my-3">
              {features.map((data, index) => (
                <li key={data} className="flex flex-row gap-2 my-2">
                  <Image
                    src={`/landing/${isDark ? Data[index].icon + '-dark' : Data[index].icon}.svg`}
                    width={24}
                    height={24}
                    alt={data}
                  />
                  <div>{data}</div>
                </li>
              ))}
              <div className="flex flex-row gap-2 my-3 items-start">
                <Image
                  src={`/landing/${isDark ? 'rootopia-starting-pool-dark' : 'rootopia-starting-pool'}.svg`}
                  width={24}
                  height={24}
                  alt={'rootopia-starting-pool'}
                />
                <div>
                  {t('rootopia.starting-pool.label')} <br />
                  <span className="text-lg font-[600]">
                    $1,000,000 - $20,000,000 <br />
                    {t('rootopia.starting-pool.ending')}
                  </span>
                </div>
              </div>
            </ul>

            <Link href={'https://rootopia.earth/'}>
              <button className="bg-gradient-to-b from-[#B44601] to-[#853401] rounded-2xl border-[#EE8A08] text-[#FEA500] cursor-pointer  lg:mt-10  px-6 font-serif font-[600] py-3 text-center border-3  transition-all hover:ease-in-out text-lg">
                {t('rootopia.cta')}
              </button>
            </Link>
          </div>
        </div>

        <div className="z-0 text-lg">
          <div className="w-72 h-72 absolute bottom-[10px] left-[10px] bg-[#DC8758] hidden lg:flex dark:bg-[#5E400C] blur-[300px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default RootopiaRace;
