'use client';

import { useApplication } from '@/context/ApplicationContext';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ApplicationDeclineModal = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);

  const { setApplication, application } = useApplication();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    if (!loading) setIsOpen(false);
    setReason('');
  };

  const handleConfirm = async () => {
    setLoading(true);
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

      if (!res.ok) {
        const errText = await res.text();
        toast.error(errText || 'Failed to decline application.');
        return;
      }
      const updatedApp = await res.json();
      setApplication(updatedApp);
      setIsOpen(false);
    } catch (err) {
      console.error('Decline failed:', err);
      toast.error('Something went wrong while declining the application.');
    } finally {
      setLoading(false);
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
        <div className="fixed inset-0 px-3 md:px-1 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] min-h-[406px] flex flex-col justify-between w-full rounded-2xl max-w-md shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Decline Application
              </h2>
              <button onClick={handleClose} className="p-1 rounded-lg bg-white">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className="text-[#525252] text-2xl">
              Are you sure you want to decline this Application?
            </p>
            <div className="p-5">
              <textarea
                className="w-full border bg-white border-gray-300 rounded-2xl p-2 text-sm focus:outline-none focus:ring focus:ring-red-300"
                rows={4}
                placeholder="Comment on decline"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
            <div className="p-3">
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  disabled={loading}
                  className="px-4 py-2 w-full text-lg rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={reason === '' || loading}
                  className="px-4 py-2 w-full text-lg rounded-md disabled:bg-red-300 bg-[#F43F42] text-white hover:bg-red-700"
                >
                  {loading ? 'Rejecting...' : 'Yes Reject'}{' '}
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
