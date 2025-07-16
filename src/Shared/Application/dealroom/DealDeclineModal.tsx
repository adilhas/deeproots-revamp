'use client';
import { X } from 'lucide-react';
import React from 'react';
interface DealDeclineModalProps {
  handleConfirm: () => void | Promise<void>;
  setReason: (value: string) => void;
  reason: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isSubmitting: boolean;
}
const DealDeclineModal: React.FC<DealDeclineModalProps> = ({
  handleConfirm,
  reason,
  setReason,
  isOpen,
  setIsOpen,
  isSubmitting,
}) => {
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
    setReason('');
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-text text-[#E11D20] text-lg"
      >
        Decline
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full text-[#525252] rounded-4xl min-h-[466px] flex flex-col justify-between max-w-[532px] shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Reject Approval
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className="text-2xl max-w-[445px] w-full mx-auto">
              Are you sure you want to decline this Application?
            </p>
            <textarea
              className="w-full max-w-[484px] mx-auto border bg-white border-gray-300 rounded-3xl p-4 text-lg focus:outline-none focus:ring focus:ring-red-300 placeholder:text-[#525252] "
              rows={4}
              placeholder="Enter reason..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
            <div className="p-3">
              <div className="mt-6 flex justify-end space-x-3">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 w-full text-lg rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={reason === '' || isSubmitting}
                  className="px-4 py-2 w-full text-lg rounded-md bg-[#F43F42] text-white disabled:bg-red-300"
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

export default DealDeclineModal;
