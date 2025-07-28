'use client';
import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApplicationTable from '@/components/admin/ApplicationTable';
import DashboardHeader from '@/Shared/Application/DashboardHeader';
import { signOut } from 'next-auth/react';
import React from 'react';

const Applications = () => {
  return (
    <div className="min-h-screen bg-[#EEEEEE] text-[#303030]">
      <div className=" py-4">
        <DashboardHeader
          label="Admin"
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
      <div className="max-w-[1200px] mx-auto">
        <ApplicationStatusInfo />
        <ApplicationTable />
      </div>
    </div>
  );
};

export default Applications;
