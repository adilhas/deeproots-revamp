/* eslint-disable no-unused-vars */
'use client';

import { Loader, X } from 'lucide-react';
import React from 'react';

interface KycSubmissionModalProps {
  handleConfirm: () => void | Promise<void>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  loading?: boolean;
  disableSubmit: boolean;
}
const KycSubmissionModal: React.FC<KycSubmissionModalProps> = ({
  handleConfirm,
  isOpen,
  setIsOpen,
  disableSubmit,
  loading,
}) => {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        disabled={disableSubmit}
        className="btn bg-gradient-to-r text-xl disabled:opacity-65 from-gradient-from to-gradient-to border-0 text-white px-8 py-3 rounded-lg font-medium transition-all"
      >
        Submit
      </button>

      {isOpen && (
        <div className="fixed inset-0 px-4 md:px-1  z-50 flex items-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white  min-h-[406px] flex gap-3 flex-col justify-between w-full rounded-2xl max-w-[532px] shadow-xl">
            <div className="text-xl font-semibold mb-4 p-3 flex flex-row justify-between rounded-t-2xl text-white text-center bg-gradient-to-r from-gradient-from to-gradient-to">
              <div></div>
              <h2>Verify Submission</h2>
              <button onClick={handleClose}>
                <X className="w-6 h-6 text-[#1F2937] bg-white rounded-md" />
              </button>
            </div>
            <div className="px-3">
              <p className="text-xl text-[#303030]">
                Please review your information and uploaded documents before
                proceeding.By clicking submit, you confirm that:
              </p>
              <ul className="text-lg list-disc ml-4  text-[#525252] w-full mx-auto mt-4">
                <li>All information provided is accurate and complete</li>
                <li>You agree to the Pre-Approval Terms & Conditions</li>
                <li>
                  You understand this submission is for non-investment
                  participation only
                </li>
                <li>Seats are limited and not guaranteed</li>
              </ul>
            </div>
            <div className="p-3">
              <div className="mt-6 flex flex-row justify-center items-center gap-3 space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 w-full text-lg rounded-md"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className="px-4 py-2 text-lg rounded-lg bg-gradient-to-r from-gradient-from2 w-full to-gradient-to2 text-white disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex flex-row justify-center items-center gap-2">
                      <Loader className="animate-spin w-5 h-5" /> Submitting...
                    </div>
                  ) : (
                    'Yes, Submit'
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

export default KycSubmissionModal;
