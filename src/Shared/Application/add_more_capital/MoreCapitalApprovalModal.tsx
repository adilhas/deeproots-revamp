/* eslint-disable no-unused-vars */
'use client';

import { useApplication } from '@/context/ApplicationContext';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface MoreCapitalApprovalModalProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSubmitting: boolean;
  setIsSubmitting: (value: boolean) => void;
  paymentId: string;
}

const MoreCapitalApprovalModal: React.FC<MoreCapitalApprovalModalProps> = ({
  isOpen,
  setIsOpen,
  isSubmitting,
  setIsSubmitting,
  paymentId,
}) => {
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const { setApplication } = useApplication();

  const handleClose = () => {
    if (!isSubmitting) setIsOpen(false);
  };

  const handleFileChange = (file: File | null) => {
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        alert('Only JPG, PNG, or PDF files are allowed');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert('File too large. Max 5MB allowed.');
        return;
      }
    }
    setReceiptFile(file);
  };

  const handleApprove = async () => {
    if (!receiptFile) {
      toast.info('Please upload receipt proof');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('paymentId', paymentId);
    formData.append('receipt', receiptFile);

    try {
      const res = await fetch('/api/more-payment/approve', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.payment) {
        console.error(data?.message);
        toast.error('Approval failed');
        return;
      }

      setApplication((prev) => {
        if (!prev) return prev;

        const updatedPayments = (prev.morePayments || []).map((p) =>
          p.id === data.payment.id ? data.payment : p
        );

        return {
          ...prev,
          morePayments: updatedPayments,
          capital: data.updatedCapital,
          seedTier: data.updatedSeedTier,
          canAddFund: data.canAddFund,
        };
      });

      toast.success('Payment approved successfully!'); // ✅ show success
      setReceiptFile(null);
      setIsOpen(false);
    } catch (err) {
      console.error('Approval failed:', err);
      toast.error('Approval failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 px-4 flex items-center justify-center bg-black/10">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] flex flex-col text-[#525252] h-auto w-full rounded-4xl max-w-[532px] shadow-xl">
            <div className="flex justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <h2 className="text-3xl font-semibold text-white">
                Verify Approval
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white disabled:opacity-50"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <p className="text-2xl w-full max-w-[445px] mx-auto mt-4">
              Are you sure the payment has been received in the official
              address?
            </p>

            <div className="p-5 space-y-4">
              <div className="w-full">
                <label
                  htmlFor="file-upload"
                  className="w-full cursor-pointer border border-gray-300 rounded-lg p-2 text-center block text-gray-700 hover:bg-gray-100"
                >
                  Upload receipt file
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*,application/pdf"
                  onChange={(e) =>
                    handleFileChange(e.target.files?.[0] || null)
                  }
                  className="hidden"
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-lg w-full rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApprove}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-lg w-full disabled:opacity-60 rounded-md bg-gradient-to-r from-gradient-from2 to-gradient-to2 text-white"
                >
                  {isSubmitting ? 'Approving...' : 'Yes, Approve Payment'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoreCapitalApprovalModal;
