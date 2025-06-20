import FoundationBenefits from '@/components/seeding/foundation/FoundationBenefits';
import SeedingCountdown from '@/components/seeding/foundation/SeedingCountdown';
import AppLayout from '@/Shared/AppLayout';
import React from 'react';

const FoundationPage = () => {
  return (
    <AppLayout className="bg-primary-light dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
      <div className="max-w-[1200px] mx-auto  py-16 px-3">
        <h1 className="text-5xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-center w-fit mx-auto font-orbitron font-semibold">
          Full Seat Of <br />
          <span className="leading-tight">DeepRoots Foundation</span>
        </h1>
        <SeedingCountdown />
        <FoundationBenefits />
      </div>
    </AppLayout>
  );
};

export default FoundationPage;
