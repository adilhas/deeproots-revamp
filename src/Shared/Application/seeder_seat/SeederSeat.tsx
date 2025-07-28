import React, { useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import { signOut, useSession } from 'next-auth/react';
import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApprovedSeederOverview from './ApprovedSeederOverview';
import SeederNotification from './SeederNotification';
// import SeederPerks from './SeederPerks';
// import SeederContactAccess from './SeederContactAccess';
// import SeederDocuments from './SeederDocuments';
// import TokenSeedingDetails from './TokenSeedingDetails';
import { PiCopy } from 'react-icons/pi';
import { Check } from 'lucide-react';
import BroadcastModal from './BroadcastModal';
// import SeederManagementNote from '../SeederManagementNote';
import { useBroadcast } from '@/context/BroadcastContext';
// import BroadcastMessages from './BroadcastMessages';
import SeederSeatDetails from './SeederSeatDetails';
// import SeederManagementNote from '../SeederManagementNote';

const SeederSeat = () => {
  const { data: session } = useSession();
  // const isAdmin = session?.user?.role === 'admin';
  const { setBroadcasts } = useBroadcast();

  const email = 'admin@deeproots.earth';
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  useEffect(() => {
    const fetchBroadcasts = async () => {
      try {
        const res = await fetch('/api/broadcast');
        if (!res.ok) throw new Error('Failed to fetch broadcasts');
        const data = await res.json();
        setBroadcasts(data);
      } catch (error) {
        console.error('Broadcast fetch error:', error);
      }
    };

    fetchBroadcasts();
  }, [setBroadcasts]);

  return (
    <div className="min-h-screen font-archivo bg-[#E7E7E7] text-[#303030] pb-10">
      <div className="py-3 sticky md:static top-0 z-50 ">
        <DashboardHeader
          label={session?.user.role === 'seeder' ? 'Pre seed' : 'Admin'}
          onRight={
            <div className="flex flex-row items-center justify-end gap-2">
              <BroadcastModal />

              <button
                className="text-lg text-[#696969] underline"
                onClick={() => signOut()}
              >
                Log Out
              </button>
            </div>
          }
        />
      </div>
      <div className="max-w-[1200px] mx-auto px-3">
        <ApplicationStatusInfo />
        <ApprovedSeederOverview />
        <SeederNotification />
        <SeederSeatDetails />
      </div>
      <div className="text-center mt-14">
        <div className="text-xl w-fit mx-auto">
          Need help? Contact Team via mail at
        </div>
        <div className="flex flex-row w-full max-w-[234px] justify-between items-center mx-auto mt-2">
          <div className="text-md font-bold text-[#2563EB]">
            admin@deeproots.earth
          </div>
          <div>
            <button onClick={handleCopy}>
              {copied ? (
                <Check className="w-5 h-5 text-green-600" />
              ) : (
                <PiCopy className="w-5 h-5 text-[#737373] hover:text-[#2563EB]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeederSeat;
