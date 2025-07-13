'use client';

import React from 'react';

interface DealApprovalModalProps {
  handleConfirm: () => void | Promise<void>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
const DealApprovalModal: React.FC<DealApprovalModalProps> = ({
  handleConfirm,
  isOpen,
  setIsOpen,
}) => {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-green-500 rounded-xl text-white font-semibold"
      >
        Submit Receipt
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-white w-full rounded-2xl max-w-md shadow-xl">
            <h2 className="text-xl font-semibold mb-4 p-3 rounded-t-2xl text-white text-center bg-gradient-to-r from-gradient-from to-gradient-to">
              Verify Approval
            </h2>
            <div className="p-3">
              <p className="text-sm text-gray-600 mb-2">
                Are you sure that Payment has been received in Official Address?
              </p>

              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-4 py-2 text-sm rounded-md bg-green-600 text-white hover:bg-green-700"
                >
                  Yes, Approve Payment
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
