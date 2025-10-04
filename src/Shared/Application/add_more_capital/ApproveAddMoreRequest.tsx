'use client';

import { useApplication } from '@/context/ApplicationContext';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ApproveAddMoreRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { application, setApplication } = useApplication();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleConfirm = async () => {
    if (!application?.id) {
      toast.error('Missing application ID.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/more-payment/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ seederId: application.id }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error(data.message || 'Failed to update status.');
        toast.error(
          'Failed to send request. Please try again after few minutes'
        );
      }

      setApplication((prev) =>
        prev ? { ...prev, canAddFund: 'under-review' } : prev
      );

      toast.success('Request Send Successfully.');
    } catch (err) {
      console.error('Request failed:', err);
      toast.error('Something went wrong while approving the application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 disabled:opacity-60 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
      >
        Request to add more funds
      </button>

      {isOpen && (
        <div className="fixed px-3 md:px-1  inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full min-h-[406px] flex flex-col justify-between rounded-2xl max-w-md shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-2xl font-semibold  text-white text-center ">
                Request More Funds
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className=" text-[#525252] text-xl px-2">
              Once you send request it will be reviewed by admin. If Admin
              approves it you will get access to add more funds.
            </p>
            <div className="p-3">
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 w-full text-lg rounded-md text-[#E11D20] hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 w-full text-lg disabled:opacity-60 rounded-md bg-[#059669] text-white hover:bg-green-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex flex-row justify-center items-center gap-2">
                      <Loader className="animate-spin w-5 h-5" /> Approving...
                    </div>
                  ) : (
                    'Yes Send'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ApproveAddMoreRequest;
