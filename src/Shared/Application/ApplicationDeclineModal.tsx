'use client';

import { useApplication } from '@/context/ApplicationContext';
import React, { useState } from 'react';

const ApplicationDeclineModal = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState('');
  const { setApplication, application } = useApplication();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setReason('');
  };

  const handleConfirm = async () => {
    try {
      const res = await fetch(`/api/private-seed/${application?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          applicationStatus: 'declined',
          reason,
        }),
      });

      if (!res.ok) throw new Error('Failed to decline application');

      const updatedApp = await res.json();
      setApplication(updatedApp);
      setIsOpen(false);
    } catch (err) {
      console.error('Decline failed:', err);
      alert('Something went wrong while declining the application.');
    } finally {
      setReason('');
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button onClick={handleOpen} className="px-4 py-2 btn-text text-red-600">
        Decline
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white w-full rounded-2xl max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 p-3 rounded-t-2xl text-white text-center bg-gradient-to-r from-gradient-from to-gradient-to">
              Decline Application
            </h2>
            <div className="p-3">
              <p className="text-sm text-gray-600 mb-2">
                Are you sure you want to decline this Application?
              </p>
              <textarea
                className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring focus:ring-red-300"
                rows={4}
                placeholder="Enter reason..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 text-sm rounded-md bg-red-600 text-white hover:bg-red-700"
                >
                  Yes Reject
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApplicationDeclineModal;
