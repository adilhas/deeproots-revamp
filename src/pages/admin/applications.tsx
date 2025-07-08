import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApplicationTable from '@/components/admin/ApplicationTable';
import Image from 'next/image';
import React from 'react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-[#17151A]">
      <div className="max-w-[1200px] mx-auto">
        <div className="w-full flex flex-row items-center justify-between py-3">
          <h1 className="text-3xl font-semibold">Seeding Application</h1>
          <Image
            src={'/landing/logo-big.png'}
            width={64}
            height={64}
            alt="logo"
          />
        </div>
        <ApplicationStatusInfo />
        <ApplicationTable />
      </div>
    </div>
  );
};

export default Applications;
