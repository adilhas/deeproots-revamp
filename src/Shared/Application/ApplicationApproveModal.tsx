'use client';

import { useApplication } from '@/context/ApplicationContext';
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
        <div className="fixed inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white w-full rounded-2xl max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 p-3 rounded-t-2xl text-white text-center bg-gradient-to-r from-gradient-from to-gradient-to">
              Approve Application
            </h2>
            <div className="p-3">
              <p className="text-sm text-gray-600 mb-2">
                Are you sure all submissions are checked?
              </p>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700"
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
