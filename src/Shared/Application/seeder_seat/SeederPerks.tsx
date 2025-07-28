import { useApplication } from '@/context/ApplicationContext';
import React from 'react';
import FounderSeatPerks from './FounderSeatPerks';
import FoundationSeatPerks from './FoundationSeatPerks';

const SeederPerks = () => {
  const { application } = useApplication();
  return (
    <div className="w-full min-h-[297px] my-5 bg-white p-6 rounded-4xl">
      <div className="text-[#303030] text-2xl font-semibold mb-6">
        Perks & Access
      </div>
      {application?.seedTier === 'tier-3' ? (
        <FounderSeatPerks />
      ) : (
        <FoundationSeatPerks />
      )}
      {/* <div className="w-fit mx-auto">
        <Image
          src={'/dashboard/seeder-perks.svg'}
          width={172}
          height={133}
          alt="seeder perks"
        />
      </div>
      <div className="text-lg w-full max-w-[466px] mx-auto text-[#525252] text-center">
        You have no Perks available to claim now. You’ll find Perks and Early
        access deals here as soon as they are available
      </div> */}
    </div>
  );
};

export default SeederPerks;
