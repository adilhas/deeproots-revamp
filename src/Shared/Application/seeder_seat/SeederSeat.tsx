import React from 'react';
import DashboardHeader from '../DashboardHeader';
import { signOut, useSession } from 'next-auth/react';
import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApprovedSeederOverview from './ApprovedSeederOverview';
import SeederNotification from './SeederNotification';
import SeederPerks from './SeederPerks';
import SeederContactAccess from './SeederContactAccess';
import SeederDocuments from './SeederDocuments';
import TokenVesting from './TokenVesting';

const SeederSeat = () => {
  const { data: session } = useSession();
  return (
    <div className="border min-h-screen font-archivo bg-[#E7E7E7] text-[#303030] pb-10">
      <div className="py-3">
        <DashboardHeader
          label={session?.user.role === 'seeder' ? 'Pre seed' : 'Admin'}
          onRight={
            <button
              className="text-lg text-[#696969] underline"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          }
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-3">
        <ApplicationStatusInfo />
        <ApprovedSeederOverview />
        <SeederNotification />
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <div className="min-w-[385px]">
            <TokenVesting />
          </div>
          <div>
            <SeederPerks />
            <SeederContactAccess />
            <SeederDocuments />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeederSeat;
