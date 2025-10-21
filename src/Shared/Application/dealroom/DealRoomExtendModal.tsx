'use client';

import { useApplication } from '@/context/ApplicationContext';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const DealRoomExtenModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setApplication, application } = useApplication();
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
      const res = await fetch(`/api/private-seed/extend-dealroom`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submissionId: application.id,
        }),
      });

      if (!res.ok) {
        toast.error('Failed to extend dealroom');
        console.error(res);
        return;
      }
      const { data: updatedApp } = await res.json();
      setApplication(updatedApp);
      toast.success('Dealroom Extended successfully');
      setIsOpen(false);
    } catch (err) {
      console.error('Dealroom Extend failed:', err);
      toast.error('Something went wrong while Dealroom Extending.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="px-4 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
      >
        Extend Deal Room Expiry
      </button>

      {isOpen && (
        <div className="fixed px-3 md:px-1  inset-0 z-50 flex items-center text-center justify-center bg-black/10 bg-opacity-50">
          <div className="bg-[#EEEEEE] border border-[#D4D4D4] w-full min-h-[250px] flex flex-col justify-between rounded-2xl max-w-md shadow-xl">
            <div className=" flex flex-row justify-between items-center bg-gradient-to-r p-3 rounded-t-2xl from-gradient-from to-gradient-to">
              <div></div>
              <h2 className="text-2xl md:text-3xl font-semibold  text-white text-center ">
                Extend Deal Room
              </h2>
              <button
                onClick={handleClose}
                disabled={isSubmitting}
                className="p-1 rounded-lg bg-white"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <p className=" text-[#525252] text-2xl">
              Are you sure all Extend Deal Room by 24 hour?
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
                      <Loader className="animate-spin w-5 h-5" /> Extending...
                    </div>
                  ) : (
                    'Yes Extend'
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

export default DealRoomExtenModal;
