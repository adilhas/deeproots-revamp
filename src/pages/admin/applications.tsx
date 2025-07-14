import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApplicationTable from '@/components/admin/ApplicationTable';
import ProcessSteps from '@/Shared/Application/ProcessSteps';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#303030]">
      <div className=" py-4">
        <div className=" py-3">
          <div className="w-full max-w-[1200px] bg-[#DDDDDD] px-4 rounded-3xl mx-auto flex flex-row items-center justify-between py-3">
            <div className="flex items-center gap-3">
              <Image
                src={'/dashboard/dashboard-logo.png'}
                width={52}
                height={52}
                alt="dashboard logo"
              />
              <div className="text-2xl font-bold font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
                DEEPROOTS
              </div>
              <div className="text-xl bg-white/10 text-[#525252] border border-[#A1A1A1] px-3 py-1 flex items-center justify-center rounded-full font-semibold">
                Pre seed
              </div>
            </div>
            <button
              className="text-lg text-black underline"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          </div>
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
