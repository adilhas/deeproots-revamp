import DRCTokenFeatures from '@/components/academy_page/tokenomics/DRCTokenFeatures';
import FoundationRounds from '@/components/academy_page/tokenomics/FoundationRounds';
import RootopiaRewards from '@/components/academy_page/tokenomics/RootopiaRewards';
import TokenAllocation from '@/components/academy_page/tokenomics/TokenAllocation';
import TokenomicsHero from '@/components/academy_page/tokenomics/TokenomicsHero';
import TokenomicsUtility from '@/components/academy_page/tokenomics/TokenomicsUtility';
import TokenTotalSupply from '@/components/academy_page/tokenomics/TokenTotalSupply';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { Link } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { PiChartLineUp, PiCirclesFour } from 'react-icons/pi';

const TokenomicsPage = () => {
  return (
    <AppLayout>
      <div className="relative pt-16 bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
        <div className="pb-16 px-2 sm:px-6 lg:px-8 max-w-[1200px] mx-auto z-10">
          <TokenomicsHero />
        </div>
        <div className="bg-white dark:bg-[#1c1d20]">
          <div className="pb-16  mx-auto z-10">
            <div className="px-2 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
              <TokenTotalSupply />
              <TokenomicsUtility />
              <TokenAllocation />
              <FoundationRounds />
            </div>
            <RootopiaRewards />
            <div className="py-16 max-w-[1200px] px-3 mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold  mb-12 bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center bg-clip-text text-transparent">
                Trade & Earn
              </h2>
              <div className="bg-[#E9E9E9] dark:border border-gray-500 flex flex-col gap-6 dark:bg-transparent max-w-[700px] mx-auto p-4 rounded-2xl">
                <div className="flex flex-row items-start gap-3">
                  <PiChartLineUp className="w-8 h-8 text-[#10B981] dark:text-[#34D399]" />
                  <div className="text-xl">
                    Live Trading on TelexCoin DEX (USDT / USDC pairs)
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <PiCirclesFour className="w-8 h-8 text-[#F43F42] dark:text-[#FB7173]" />
                  <div className="text-xl">
                    Built on Deep Roots Blockchain (PoZ + EVM)
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <Link className="w-8 h-8 text-[#F97316] dark:text-[#FB923C]" />
                  <div className="text-xl">Connected to ETH, BSC, and more</div>
                </div>
              </div>
            </div>
            <div className="py-16 max-w-[730px] px-3 mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold  mb-3 bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center bg-clip-text text-transparent">
                LIQUIDITY LOCK – 40% COMMITMENT
              </h2>
              <div className=" text-lg md:text-2xl">
                40% of total dRC supply is locked as protocol liquidity Ensures
                long-term stability and prevents manipulation
              </div>
            </div>
            <DRCTokenFeatures />
            <h2 className="text-xl mx-auto max-w-[1200px] px-3 md:text-3xl font-bold mb-12 bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center bg-clip-text text-transparent">
              dRC is not hype. It’s fuel for DeWorld. Earn it. Stake it. Use it.
              Govern with it.
            </h2>
          </div>
        </div>
      </div>
      <SocialLinks />
    </AppLayout>
  );
};

export default TokenomicsPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'landing_page',
      ])),
    },
  };
};
