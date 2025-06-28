import BountyRewards from '@/components/lab/security_bug_bounty/BountyRewards';
import BountyRules from '@/components/lab/security_bug_bounty/BountyRules';
import HowToSubmit from '@/components/lab/security_bug_bounty/HowToSubmit';
import SBBHero from '@/components/lab/security_bug_bounty/SBBHero';
import WhatYouCanTest from '@/components/lab/security_bug_bounty/WhatYouCanTest';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SecurityBugBountyPage = () => {
  return (
    <AppLayout>
      <Seo
        title="Security & Bug Bounty Program"
        description={`Deep Roots is built to last and we invite you to help us make it stronger. If you find a vulnerability, we'll reward you for reporting it responsibly.`}
      />
      <div className="relative pt-16 px-3 bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200 min-h-screen">
        <div className="pb-16 px-2 sm:px-6 lg:px-8 max-w-[1200px] mx-auto z-10">
          <SBBHero />
          <WhatYouCanTest />
          <BountyRewards />
          <BountyRules />
          <HowToSubmit />
        </div>
      </div>
      <SocialLinks />
    </AppLayout>
  );
};

export default SecurityBugBountyPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
