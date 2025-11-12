/* eslint-disable no-unused-vars */
'use client';

import { X } from 'lucide-react';
import React from 'react';

interface DealApprovalModalProps {
  handleConfirm: () => void | Promise<void>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSubmitting: boolean;
}
const DealApprovalModal: React.FC<DealApprovalModalProps> = ({
  handleConfirm,
  isOpen,
  setIsOpen,
  isSubmitting,
}) => {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-[#059669] text-lg rounded-xl text-white font-semibold w-full md:w-fit"
      >
        Submit Receipt
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 px-4 md:px-1 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] flex flex-col justify-between text-[#525252] h-[406px] w-full rounded-4xl max-w-[532px] shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Verify Approval
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className="text-2xl w-full max-w-[445px] mx-auto mb-2">
              Are you sure that Payment has been received in Official Address?
            </p>
            <div className="p-5">
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-lg w-full rounded-md "
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
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

export default DealApprovalModal;
