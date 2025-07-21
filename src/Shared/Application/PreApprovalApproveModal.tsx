'use client';

import { useApplication } from '@/context/ApplicationContext';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

interface IPreApprovalApproveModal {
  usdtAddress: string;
  usdcAddress: string;
}

const PreApprovalApproveModal = ({
  usdcAddress,
  usdtAddress,
}: IPreApprovalApproveModal) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const { setApplication, application } = useApplication();
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => {
    setIsOpen(false);
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
          preApproval: 'approved',
          usdtAddress,
          usdcAddress,
        }),
      });

      const updatedApp = await res.json();
      if (!res.ok) {
        toast.error(updatedApp?.message || 'Failed to approve application.');
        return;
      }
      setApplication(updatedApp);
      setIsOpen(false);
      toast.success('Pre-Approval approved successfully!');
    } catch (err) {
      console.error('Approval failed:', err);
      toast.error('Something went wrong while approving the application.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-green-500 rounded-xl text-white font-semibold"
      >
        Approve
      </button>

      {isOpen && (
        <div className="fixed inset-0 px-4 md:px-1 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] flex flex-col justify-between text-[#525252] min-h-[406px] w-full rounded-4xl max-w-[532px] shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-3xl font-semibold  text-white text-center ">
                Verify Approval
              </h2>
              <button
                disabled={isSubmitting}
                onClick={handleClose}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className="text-2xl max-w-[445px] mx-auto text-center">
              Are you sure you have checked all documents and verified
              correctness?
            </p>
            <div className="p-3">
              <div className="mt-6 flex flex-row justify-end space-x-3">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 w-full text-lg  rounded-md text-[#E11D20]  hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  disabled={isSubmitting}
                  className="px-4 disabled:opacity-50 py-2 w-full text-lg bg-[#059669] rounded-lg text-white "
                >
                  {isSubmitting ? (
                    <div className="flex flex-row justify-center items-center gap-2">
                      <Loader className="animate-spin w-5 h-5" /> Approving...
                    </div>
                  ) : (
                    'Yes, Approve'
                  )}{' '}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PreApprovalApproveModal;
