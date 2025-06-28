import CareerHero from '@/components/connect/career/CareerHero';
import JobListings from '@/components/connect/career/JobListings';
import WhoWeHire from '@/components/connect/career/WhoWeHire';
import WhyDeepRoots from '@/components/connect/career/WhyDeepRoots';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { Mail } from 'lucide-react';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const CareerPage = () => {
  return (
    <AppLayout>
      <Seo
        title="Careers at DEEPROOTS"
        description="Join the Movement. Build DeWorld. Shape the Future."
      />
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-[#696969] dark:text-[#F1F5F9]">
        <div className="py-16 max-w-[1200px] mx-auto px-3">
          <CareerHero />
          <WhyDeepRoots />
          <JobListings />
          <WhoWeHire />
          <div className="my-6">
            <h2 className="text-center leading-tight text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-bold text-4xl lg:text-5xl w-fit mx-auto">
              Apply now
            </h2>
            <div className=" font-bold text-lg md:text-xl w-fit mx-auto">
              Submit your CV + portfolio
            </div>
          </div>
          <div className="mt-16 flex flex-row text-2xl items-center w-fit mx-auto gap-2 text-[#3B82F6] font-semibold">
            <Mail className="w-6 h-6" />
            hello@deeproots.earth
          </div>
        </div>
        <SocialLinks />
      </div>
    </AppLayout>
  );
};

export default CareerPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
