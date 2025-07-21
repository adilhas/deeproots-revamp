import AccessCriteria from '@/components/connect/private_seed/AccessCriteria';
import PrivateSeedForm from '@/components/connect/private_seed/PrivateSeedForm';
import PrivateSeedHero from '@/components/connect/private_seed/PrivateSeedHero';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import AccessBenefits from '../../components/connect/private_seed/AccessBenefits';
import AccessPerks from '../../components/connect/private_seed/AccessPerks';
import PrivateSeedFAQs from '@/components/connect/private_seed/PrivateSeedFAQs';
import Seo from '@/Shared/Seo';
// import SeedingTiers from '@/components/connect/private_seed/SeedingTiers';
// import AccessBenefitsMobile from '@/components/connect/private_seed/AccessBenefitsMobile';

export default function Volunteer() {
  return (
    <>
      <Seo
        title="Private Seed Access"
        description="Only 100 qualified individuals will be pre-approved to join the Foundation Full Seat round."
      />

      <AppLayout>
        <section className="py-16 font-archivo bg-primary-light dark:bg-primary-dark text-[#696969] dark:text-[#F1F5F9]">
          <div className="max-w-[1200px] mx-auto px-3">
            <PrivateSeedHero />
            <AccessCriteria />
            <AccessBenefits />
            {/* <AccessBenefitsMobile /> */}
            {/* <SeedingTiers /> */}
            <PrivateSeedForm />
            <AccessPerks />
            <PrivateSeedFAQs />
          </div>
        </section>
        <SocialLinks />
      </AppLayout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'connect/private_seed',
      ])),
    },
  };
};
