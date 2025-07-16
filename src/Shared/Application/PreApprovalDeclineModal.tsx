'use client';

import { useApplication } from '@/context/ApplicationContext';
import { X } from 'lucide-react';
import React, { useState } from 'react';

const PreAppovalDeclineModal = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { setApplication, application } = useApplication();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setReason('');
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/private-seed/${application?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          preApproval: 'declined',
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
      setIsSubmitting(false);
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
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full text-[#525252] rounded-4xl min-h-[466px] flex flex-col justify-between max-w-[532px] shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Reject Approval
              </h2>
              <button
                disabled={isSubmitting}
                onClick={handleClose}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className="text-2xl max-w-[445px] w-full mx-auto">
              Are you sure you want to decline this Application?
            </p>
            <textarea
              className="w-full max-w-[484px] mx-auto border bg-white border-gray-300 rounded-3xl p-2 text-lg focus:outline-none focus:ring focus:ring-red-300 placeholder:text-[#525252] "
              rows={4}
              placeholder="Comment on Rejection"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="p-3">
              <div className="mt-6 flex flex-row justify-center space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 w-full text-lg rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={isSubmitting}
                  className="px-4 py-2 disabled:opacity-50 text-lg w-full rounded-md bg-[#F43F42] text-whites"
                >
                  {isSubmitting ? 'Rejecting...' : 'Yes Reject'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreAppovalDeclineModal;
