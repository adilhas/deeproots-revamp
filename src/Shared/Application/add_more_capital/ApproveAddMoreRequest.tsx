'use client';

import { useApplication } from '@/context/ApplicationContext';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ApproveAddMoreRequest = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { application, setApplication } = useApplication();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestedAmount, setRequestedAmount] = useState(''); // ✅ New state

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setRequestedAmount('');
  };

  const handleConfirm = async () => {
    if (!application?.id) {
      toast.error('Missing application ID.');
      return;
    }
    const numericAmount = Number(requestedAmount);

    if (!requestedAmount || isNaN(Number(requestedAmount))) {
      toast.error('Please enter a valid amount.');
      return;
    }
    if (numericAmount < 1000) {
      toast.error('Minimum request amount is $1000.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/more-payment/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          seederId: application.id,
          requestedAmount,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error(data.message || 'Failed to send request.');
        toast.error('Failed to send request. Please try again later.');
        return;
      }

      // Add the newly created MorePayment record to local state
      setApplication((prev) =>
        prev
          ? {
              ...prev,
              canAddFund: 'under-review',
              morePayments: [data.data, ...(prev.morePayments || [])], // append the new request
            }
          : prev
      );

      toast.success('Fund addition request sent successfully.');
      handleClose();
    } catch (err) {
      console.error('Request failed:', err);
      toast.error('Something went wrong while sending the request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold disabled:opacity-60"
      >
        Request To Add Funds
      </button>

      {isOpen && (
        <div className="fixed px-3 md:px-1 inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full md:min-h-[460px] flex flex-col justify-between rounded-2xl max-w-md shadow-xl">
            <div className="flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-lg font-semibold text-white text-center">
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

            <div className="p-4 space-y-4 text-left text-[#525252]">
              {/* <p className="text-lg">
                Once you send the request, it will be reviewed by admin. If
                approved, you’ll get access to add more funds.
              </p> */}

              {/* ✅ Amount Input */}
              <div>
                <label
                  htmlFor="amount"
                  className="block text-xl mb-1 font-semibold"
                >
                  Enter Request Amount (in USD)
                </label>
                <ul className="text-md text-gray-600 mb-2">
                  <li>• Minimum: $1,000</li>
                </ul>
                <input
                  id="amount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={requestedAmount}
                  onChange={(e) => setRequestedAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isSubmitting}
                />
                {Number(requestedAmount) > 0 &&
                  !isNaN(Number(requestedAmount)) && (
                    <p className="mt-1 text-sm text-gray-700">
                      You will receive:{' '}
                      <span className="font-semibold text-black">
                        {(Number(requestedAmount) / 5).toFixed(2)} DRC
                      </span>
                    </p>
                  )}
              </div>
            </div>

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
                      <Loader className="animate-spin w-5 h-5" /> Submitting...
                    </div>
                  ) : (
                    'Yes, Send Request'
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
