import Head from 'next/head';
import AppLayout from '@/Shared/AppLayout';
import SeedingHero from '@/components/deworld/seeding_page/SeedingHero';
import SecureYourSeat from '@/components/deworld/seeding_page/SecureYourSeat';
import WhyDRCNow from '@/components/deworld/seeding_page/WhyDRCNow';
import MemberBenefits from '@/components/deworld/seeding_page/MemberBenefits';
import TokenSupplyOverview from '@/components/deworld/seeding_page/TokenSupplyOverview';
import SeedingFinalInfo from '@/components/deworld/seeding_page/SeedingFinalInfo';

const FoundationSeedingPage = () => {
  return (
    <AppLayout>
      <div className="pb-10 min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Head>
          <title>Foundation Seeding Round – Deep Roots</title>
          <meta
            name="description"
            content="Join the Foundation Seeding Round – the earliest and most exclusive access to the Deep Roots ecosystem."
          />
        </Head>

        <SeedingHero />
        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <SecureYourSeat />
          <WhyDRCNow />
          <MemberBenefits />
          <TokenSupplyOverview />
          <SeedingFinalInfo />
        </div>
      </div>
    </AppLayout>
  );
};

export default FoundationSeedingPage;
