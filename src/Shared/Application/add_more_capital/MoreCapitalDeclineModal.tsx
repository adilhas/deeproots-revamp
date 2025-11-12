/* eslint-disable no-unused-vars */
'use client';

import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useApplication } from '@/context/ApplicationContext'; // adjust import

interface MoreCapitalDeclineModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  paymentId: string;
}

const MoreCapitalDeclineModal: React.FC<MoreCapitalDeclineModalProps> = ({
  isOpen,
  setIsOpen,
  paymentId,
}) => {
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setApplication } = useApplication();

  const handleClose = () => {
    setIsOpen(false);
    setReason('');
  };

  const handleReject = async () => {
    if (!reason) return;

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/more-payment/reject', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentId, comment: reason }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data?.message || 'Reject failed');

      // Update local state
      setApplication((prev) => {
        if (!prev) return prev;

        const updatedPayments = (prev.morePayments || []).map((p) =>
          p.id === data.payment.id ? data.payment : p
        );

        return {
          ...prev,
          canAddFund: 'not-submitted',
          morePayments: updatedPayments,
        };
      });

      toast.success('Payment rejected successfully');
      handleClose();
    } catch (err) {
      console.error('Reject failed:', err);
      toast.error('Reject failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 px-4 md:px-1 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full text-[#525252] rounded-4xl min-h-[466px] flex flex-col justify-between max-w-[532px] shadow-xl">
            <div className="flex justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold text-white text-center">
                Reject Payment
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <p className="text-2xl max-w-[445px] w-full mx-auto px-2 mt-6">
              Are you sure you want to reject this payment?
            </p>

            <textarea
              className="w-full max-w-[484px] mx-auto border bg-white border-gray-300 rounded-3xl p-4 text-lg focus:outline-none focus:ring focus:ring-red-300 placeholder:text-[#525252] mt-4"
              rows={4}
              placeholder="Enter reason..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="p-3 mt-4">
              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 w-full text-lg rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReject}
                  disabled={!reason || isSubmitting}
                  className="px-4 py-2 w-full text-lg rounded-md bg-[#F43F42] text-white disabled:bg-red-300"
                >
                  {isSubmitting ? 'Rejecting...' : 'Yes, Reject'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreCapitalDeclineModal;
