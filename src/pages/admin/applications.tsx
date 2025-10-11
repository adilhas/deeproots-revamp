'use client';
import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import ApplicationTable from '@/components/admin/ApplicationTable';
import DashboardHeader from '@/Shared/Application/DashboardHeader';
import DeleteSubmissionModal from '@/Shared/Application/DeleteSubmissionModal';
import { ApplicationDataType } from '@/types/application';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import React, { useState } from 'react';

const Applications = () => {
  const [selectedSubmission, setSelectedSubmission] =
    useState<ApplicationDataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setSelectedSubmission(null);
    setIsModalOpen(false);
  };
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
              <LogOut className="w-6 h-6 text-black inline-block md:hidden" />{' '}
              <span className="hidden md:inline-block underline"> Log Out</span>
            </button>
          }
        />
      </div>
      <div className="max-w-[1200px] mx-auto">
        <ApplicationStatusInfo />
        <ApplicationTable
          selectedSubmission={selectedSubmission}
          setSelectedSubmission={setSelectedSubmission}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
      {selectedSubmission && (
        <DeleteSubmissionModal
          isOpen={isModalOpen}
          onClose={closeModal}
          submission={selectedSubmission}
        />
      )}
    </div>
  );
};

export default Applications;
