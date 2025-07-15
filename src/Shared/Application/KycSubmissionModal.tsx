'use client';

import { X } from 'lucide-react';
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
        <div className="fixed inset-0  z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white  h-[406px] flex gap-3 flex-col justify-between w-full rounded-2xl max-w-[532px] shadow-xl">
            <div className="text-xl font-semibold mb-4 p-3 flex flex-row justify-between rounded-t-2xl text-white text-center bg-gradient-to-r from-gradient-from to-gradient-to">
              <div></div>
              <h2>Verify Submission</h2>
              <button onClick={handleClose}>
                <X className="w-6 h-6 text-[#1F2937] bg-white rounded-md" />
              </button>
            </div>
            <div className="px-3">
              <p className="text-2xl text-[#303030]">
                Are you sure you want to submit your Pre-Approval information?
              </p>
              <p className="text-lg  text-[#525252] w-full max-w-[389px] mx-auto mt-4">
                Check to ensure all required documents are uploaded.
              </p>
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
                  className="px-4 py-2 text-lg rounded-lg bg-gradient-to-r from-gradient-from2 w-full to-gradient-to2 text-white hover:bg-green-700"
                >
                  Yes, Submit
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
