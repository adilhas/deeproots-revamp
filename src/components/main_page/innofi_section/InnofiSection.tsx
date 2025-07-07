import { useThemeContext } from '@/context/ThemeContext';
import {
  CheckCircle,
  ChevronRight,
  Eye,
  Rocket,
  ThumbsUp,
  Users,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';
import { JSX } from 'react';
import { useTranslation } from 'next-i18next';

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}
const iconComponents = [
  <Users className="text-9xl text-[#fb7087]" key="Users" />,
  <CheckCircle className="text-9xl text-[#fb7087]" key="CheckCircle" />,
  <ThumbsUp className="text-9xl text-[#fb7087]" key="ThumbsUp" />,
  <Rocket className="text-9xl text-[#fb7087]" key="Rocket" />,
  <Eye className="text-9xl text-[#fb7087]" key="Eye" />,
  <Wallet className="text-9xl text-[#fb7087]" key="Wallet" />,
];
const InnofiSection = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  const rawInnofiFeatures = t('innofi_section.features', {
    returnObjects: true,
  });
  const innofiFeatures: FeatureItem[] = Array.isArray(rawInnofiFeatures)
    ? (rawInnofiFeatures as FeatureItem[])
    : [];

  return (
    <section className="bg-[#FDFDF1] dark:bg-primary-dark py-28 px-6 md:px-16 w-full relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[100px] md:w-[300px] h-[500px] bg-[#C37692] blur-3xl opacity-50 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-0 left-0 w-[100px] md:w-[300px] h-[200px] bg-[#DC6C95] blur-3xl opacity-30 pointer-events-none z-0 dark:hidden" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[500px] bg-[#79D9F8] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 " />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[350px] border-r-[350px] border-t-[500px] border-l-transparent border-r-transparent border-t-[#C37692] opacity-20 blur-3xl pointer-events-none z-30 hidden dark:block" />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-10 max-w-[1200px] mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="flex justify-start lg:items-start  flex-col">
            <h1 className="font-extrabold w-fit text-3xl lg:text-4xl bg-gradient-to-r from-[#40CEF9]  to-[#FF3EAB] bg-clip-text font-orbitron text-transparent">
              {t('innofi_section.title')}
            </h1>
          </div>

          {/* Mobile Image */}
          <div className="w-full lg:hidden">
            <Image
              src="/landing/innofi.webp"
              alt="Education Hub"
              layout="responsive"
              width={600}
              height={500}
              className="object-cover rounded-2xl"
            />
          </div>
          <h2 className="font-extrabold text-xl w-fit lg:text-2xl bg-gradient-to-r from-[#40CEF9] to-[#FF3EAB] bg-clip-text font-orbitron text-transparent">
            {t('innofi_section.subtitle')}
          </h2>

          <div className="flex flex-col gap-4 z-[20]">
            {innofiFeatures.map(({ title, description }, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 hover:scale-105 bg-[#FDFDF1] dark:bg-primary-dark rounded-lg shadow-md"
                style={{
                  boxShadow: `${isDark ? 'none' : '0px 4px 8px 0px #0000002B'}`,
                }}
              >
                <div>{iconComponents[index]}</div>
                <div>
                  <h3 className="text-lg font-semibold font-orbitron">
                    {title}
                  </h3>
                  <p className="text-sm">{description}</p>
                </div>
              </div>
            ))}

            {/* Mobile Vote Button */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={'https://innofi.earth/'}
            >
              <button className="mt-6 flex flex-row gap-2 items-center font-bold hover:scale-105  text-white bg-gradient-to-r from-[#fb7087] to-[#76dbfa] mr-6 px-6 font-orbitron py-3 text-center  transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
                VOTE
                <ChevronRight />
              </button>
            </a>
          </div>
        </div>

        {/* Desktop Image + Button */}
        <div className="hidden lg:flex w-1/2 p-2 relative z-30">
          <Image
            src="/landing/innofi.webp"
            alt="Desktop Wallet"
            width={600}
            height={437}
            className="rounded-2xl relative z-20"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default InnofiSection;
