import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApplicationTable from '@/components/admin/ApplicationTable';
import ProcessSteps from '@/Shared/Application/ProcessSteps';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#303030]">
      <div className="bg-gradient-to-r bg-gradient-from to-gradient-to py-4">
        <div className="w-full max-w-[1200px] mx-auto flex flex-row items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image
              src={'/dashboard/dashboard-logo.svg'}
              width={42}
              height={42}
              alt="dashboard logo"
            />
            <div className="text-2xl font-bold font-orbitron text-white">
              DEEPROOTS
            </div>
            <div className="text-xl bg-white/10 text-white border border-white px-3 py-1 flex items-center justify-center rounded-full font-semibold">
              Pre seed
            </div>
          </div>
          <button
            className="text-lg text-white underline"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <ApplicationStatusInfo />
        <ApplicationTable />
        <ProcessSteps />
      </div>
    </div>
  );
};

export default Applications;
