import React from 'react';
import TokenSeedingDetails from './TokenSeedingDetails';
import BroadcastMessages from './BroadcastMessages';
import SeederPerks from './SeederPerks';
import SeederContactAccess from './SeederContactAccess';
import SeederDocuments from './SeederDocuments';
import SeederManagementNote from '../SeederManagementNote';
import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';

const SeederSeatDetails = () => {
  const { application } = useApplication();
  const { data: session } = useSession();
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-6 w-full">
      <div className="w-full lg:max-w-[385px] max-w-none ">
        <TokenSeedingDetails />

        <BroadcastMessages />
      </div>
      <div className="w-full">
        <SeederPerks />
        {application?.seedTier !== 'tier-1' &&
          session?.user.role === 'seeder' && <SeederContactAccess />}
        <SeederDocuments />
        <SeederManagementNote />
      </div>
    </div>
  );
};

export default SeederSeatDetails;
