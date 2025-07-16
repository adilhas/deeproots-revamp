'use client';

import { useApplication } from '@/context/ApplicationContext';
import { X } from 'lucide-react';
import React, { useState } from 'react';

const ApplicationApprovedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setApplication, application } = useApplication();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    try {
      const res = await fetch(`/api/private-seed/${application?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationStatus: 'approved',
        }),
      });

      if (!res.ok) throw new Error('Failed to approve application');

      const updatedApp = await res.json();
      setApplication(updatedApp);
      setIsOpen(false);
    } catch (err) {
      console.error('Approval failed:', err);
      alert('Something went wrong while approving the application.');
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-green-500 rounded-xl text-white font-semibold"
      >
        Approve
      </button>

      {isOpen && (
        <div className="fixed  inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full min-h-[406px] flex flex-col justify-between rounded-2xl max-w-md shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Approve Application
              </h2>
              <button onClick={handleClose} className="p-1 rounded-lg bg-white">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className=" text-[#525252] text-2xl">
              Are you sure all submissions are checked?
            </p>
            <div className="p-3">
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 w-full text-lg rounded-md text-[#E11D20] bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 w-full text-lg rounded-md bg-[#059669] text-white hover:bg-green-700"
                >
                  Yes Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationApprovedModal;
