import LearnMore from '@/components/academy_page/LearnMore';
import FullSeatFeatures from '@/components/academy_page/what-is-fullbeat/FullSeatFeatures';
import HowToClaimFullSeat from '@/components/academy_page/what-is-fullbeat/HowToClaimFullSeat';
import WhoIsThisFor from '@/components/academy_page/what-is-fullbeat/WhoIsThisFor';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { ChevronRight, Home } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import React from 'react';
import { PiOfficeChair } from 'react-icons/pi';

const WhatIsFullSeatPage = () => {
  return (
    <AppLayout className="bg-white dark:bg-[#303030]">
      <section className="min-h-screen text-[#696969] dark:text-[#F1F5F9]">
        <div className="max-w-[1200px] mx-auto py-10 px-3">
          <div className="flex flex-row justify-start gap-1 my-10 text-md items-center text-[#737373] dark:text-[#F1F5F9]">
            <Home className="w-5 h-5" />
            <ChevronRight className="w-4 h-5" />
            <div>Learn</div>
            <ChevronRight className="w-4 h-5" />
            <div className="text-[#A855F7] font-semibold">
              What is Full Seat?
            </div>
          </div>
          <div className="flex flex-row items-start gap-2">
            <h1 className="text-4xl font-orbitron font-semibold text-black dark:text-white">
              What is Full Seat?
            </h1>
            <div className="badge badge-outline bg-[#EEF4FF] border-[#818CF8] text-[#3538CD] rounded-3xl text-xs">
              Basic
            </div>
          </div>
          <div className="w-full relative min-h-[397px] my-4">
            <Image
              src={'/academy/what-is-fullseat.png'}
              alt="what is web3"
              fill
              className="w-full h-full"
            />
          </div>
          <p className="my-4 text-[#737373] dark:text-[#F1F5F9]">
            Full Seat is your exclusive position in the Deep Roots Foundation
            where early supporters earn from the entire ecosystem
          </p>
          <div className="text-2xl text-center font-orbitron font-semibold flex md:flex-row items-center gap-2 mx-auto w-fit my-20">
            <div className="line-through text-[#696969]">
              It’s not just access.
            </div>
            <div className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
               It’s ownership.
            </div>
          </div>
          <FullSeatFeatures />
          <div>
            <div className="flex flex-row items-center gap-3 font-semibold my-3">
              <PiOfficeChair className="w-10 h-10 text-[#A855F7] dark:text-[#A855F7] p-2 bg-[#F3E8FF] rounded-md dark:bg-[#581C87]" />
              <div className="text-3xl text-black dark:text-white">
                Why Seats Are Limited
              </div>
            </div>
            <p>
              Only a fixed number of Full Seats exist and not every project uses
              them. This keeps access{' '}
              <span className="font-semibold">rare, valuable,</span> and
              <span className="font-semibold">community-first</span>.
            </p>
          </div>
          <HowToClaimFullSeat />
          <WhoIsThisFor />
          <div className="flex flex-row items-center text-2xl font-semibold font-orbitron justify-around gap-2 w-full mx-auto my-8">
            <div className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit">
              Start with seeding
            </div>
            <Image
              src={'/academy/right-arrow.png'}
              width={44}
              height={20}
              alt="arrow"
              className="rotate-90 md:rotate-0 my-5 md:my-0"
            />
            <div className="w-fit">Earn with seeding</div>
            <Image
              src={'/academy/right-arrow.png'}
              width={44}
              height={20}
              alt="arrow"
              className="rotate-90 md:rotate-0 my-5 md:my-0"
            />
            <div className="w-fit">Own The Movement</div>
          </div>
          <div className="w-full flex justify-center mt-20">
            <button className="bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto text-center rounded-2xl text-2xl text-white py-2 px-4 font-orbitron">
              Seed Now
            </button>
          </div>
        </div>
        <LearnMore />
        <SocialLinks />
      </section>
    </AppLayout>
  );
};

export default WhatIsFullSeatPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
