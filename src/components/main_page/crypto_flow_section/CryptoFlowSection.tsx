import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';

export default function CryptoFlowSection() {
  const { isDark } = useThemeContext();
  return (
    <section className="p-8 bg-[#D4D4D4] dark:bg-[#121827]">
      <div className="flex flex-col h-fit  xl:flex-row justify-center items-center gap-3 transition-all min-h-[300px] bg-transparent rounded-xl text-[#434343] dark:text-[#E9E9E9]">
        {/* Bitcoin */}
        <div className="flex flex-col items-center relative ">
          <div className="text-xl font-glorio mb-4 xl:mb-0 xl:absolute top-[-40px]">
            Thank you
          </div>
          <div
            className="flex flex-col items-center text-center justify-center p-4 rounded-xl bg-white dark:bg-[#202937] w-72 transition-all"
            style={{
              boxShadow: `0px 6px 14px 0px ${isDark ? '#000000' : '#0000001F'}`,
            }}
          >
            <h2 className="text-xl font-bold">Bitcoin (BTC)</h2>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center text-4xl text-gray-500 dark:text-gray-400">
          <span className="hidden xl:block">➝</span>
          <span className="block xl:hidden">↓</span>
        </div>

        {/* Ethereum */}
        <div className="flex flex-col items-center relative">
          <div className="text-xl font-glorio mb-4 xl:mb-0 xl:absolute top-[-40px]">
            Thank you
          </div>
          <div
            className="flex flex-col items-center text-center justify-center p-4 rounded-xl bg-white dark:bg-[#202937] w-72 transition-all"
            style={{
              boxShadow: `0px 6px 14px 0px ${isDark ? '#000000' : '#0000001F'}`,
            }}
          >
            <h2 className="text-xl font-bold">Ethereum (ETH)</h2>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center text-4xl text-gray-500 dark:text-gray-400">
          <span className="hidden xl:block">➝</span>
          <span className="block xl:hidden">↓</span>
        </div>

        {/* Bulb */}
        <div className="flex flex-col items-center">
          <Image src="/landing/bulb.svg" width={70} height={70} alt="idea" />
        </div>

        {/* Arrow */}
        <div className="flex items-center justify-center text-4xl text-gray-500 dark:text-gray-400">
          <span className="hidden xl:block">➝</span>
          <span className="block xl:hidden">↓</span>
        </div>

        {/* DeepRoots */}
        <div className="flex flex-col items-center relative">
          <div className="text-xl font-glorio mb-4 xl:mb-0 xl:absolute top-[-40px]">
            New Mission
          </div>
          <div
            className="flex flex-col items-center text-center justify-center p-4 rounded-xl bg-white dark:bg-[#202937] w-72 transition-all"
            style={{
              boxShadow: `0px 6px 14px 0px ${isDark ? '#000000' : '#0000001F'}`,
            }}
          >
            <h2 className="text-xl font-bold">DeepRoots (dRC)</h2>
          </div>
        </div>
      </div>

      {/* Add top margin to control spacing manually */}
      <div className="text-2xl font-glorio mt-4 text-center xl:-translate-y-12">
        Our mission is to build the decentralized world for humanity
      </div>
    </section>
  );
}
