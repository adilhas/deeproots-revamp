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
    </div>
  );
};

export default SeederPerks;
