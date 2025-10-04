'use client';

import React, { useState } from 'react';
import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import MoreCapitalApprovalModal from './MoreCapitalApprovalModal';
import MoreCapitalDeclineModal from './MoreCapitalDeclineModal';
import AddMoreCapitalModal from './AddMoreCapitalModal';
import ApproveAddMoreRequest from './ApproveAddMoreRequest';
import { toast } from 'react-toastify';

const AddMoreCapital = () => {
  const { application, setApplication } = useApplication();
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsSubmitting, setModalIsSubmitting] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null
  );
  const [declineModalOpen, setDeclineModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleOpenApprovalModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId);
    setModalIsOpen(true);
  };

  const { data: session } = useSession();

  const handleOpenDeclineModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId);
    setDeclineModalOpen(true);
  };

  const handleDecision = async (status: 'approved' | 'declined') => {
    if (!application?.id) {
      toast.error('Missing application ID.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/more-payment/request/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ seederId: application.id, status }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error(data.message || 'Failed to update status.');
        toast.error(`Failed to ${status} request`);
        return;
      }

      setApplication((prev) => (prev ? { ...prev, canAddFund: status } : prev));

      toast.success(
        status === 'approved'
          ? 'Request approved successfully!'
          : 'Request declined successfully!'
      );
    } catch (err) {
      console.error('Request failed:', err);
      toast.error('Something went wrong while updating the request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="w-full my-5 bg-white p-6 rounded-4xl">
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          <div className="text-[#303030] text-2xl font-semibold mb-6">
            Add Funds
          </div>

          {session?.user.role === 'seeder' &&
            application?.canAddFund === 'approved' && (
              <button
                onClick={() => setIsOpen(true)}
                className="px-4 disabled:opacity-60 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
              >
                Add More Capital
              </button>
            )}
          {session?.user.role === 'seeder' &&
            application?.canAddFund === 'not-submitted' && (
              <ApproveAddMoreRequest />
            )}
        </div>

        {session?.user.role === 'admin' &&
          application?.canAddFund === 'under-review' && (
            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <div>
                The Seeder as requested to add more funds. Do you want to accept
                this request?
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleDecision('approved')}
                  disabled={isSubmitting}
                  className="px-4 disabled:opacity-60 py-2 btn-success bg-green-500 rounded-xl text-white font-semibold"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleDecision('declined')}
                  disabled={isSubmitting}
                  className="px-4 disabled:opacity-60 py-2 btn-success bg-red-500 rounded-xl text-white font-semibold"
                >
                  Reject
                </button>
              </div>
            </div>
          )}
        {session?.user.role === 'seeder' &&
          application?.canAddFund === 'under-review' && (
            <div className="text-sm text-orange-500">
              Your add more fund request in under review. Once it is approved by
              admin you will get access to add more funds.
            </div>
          )}

        {(application?.morePayments ?? []).length > 0 ? (
          <div className=" space-y-4 max-h-[200px] overflow-auto">
            {(application?.morePayments ?? []).map((payment) => (
              <div
                key={payment.id}
                className="p-4 border rounded-xl bg-gray-50 flex flex-col md:flex-row justify-start gap-2 md:justify-between items-start md:items-center "
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    Amount: ${payment.amountSent}
                  </p>
                  <p className="text-sm text-gray-500">
                    Status:{' '}
                    <span
                      className={
                        payment.paymentStatus === 'under-review'
                          ? 'text-yellow-600'
                          : payment.paymentStatus === 'approved'
                            ? 'text-green-600'
                            : 'text-red-600'
                      }
                    >
                      {payment.paymentStatus}
                    </span>
                  </p>
                  <div className="flex flex-col md:flex-row gap-3 justify-between">
                    <a
                      href={payment.transactionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-700"
                    >
                      View Transaction Link
                    </a>
                    <a
                      href={payment.paymentImage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-700"
                    >
                      View Screenshot
                    </a>
                  </div>
                  {payment.comment && (
                    <p className="text-sm text-red-500">
                      Reason: {payment.comment}
                    </p>
                  )}
                </div>

                {session?.user.role === 'admin' &&
                  payment.paymentStatus === 'under-review' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleOpenApprovalModal(payment.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleOpenDeclineModal(payment.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 text-center min-h-[150px]">
            No Extra Funds Added Yet
          </div>
        )}
      </div>

      <AddMoreCapitalModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <MoreCapitalApprovalModal
        isOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        isSubmitting={modalIsSubmitting}
        setIsSubmitting={setModalIsSubmitting}
        paymentId={selectedPaymentId || ''}
      />
      <MoreCapitalDeclineModal
        isOpen={declineModalOpen}
        setIsOpen={setDeclineModalOpen}
        paymentId={selectedPaymentId || ''}
      />
    </>
  );
};

export default AddMoreCapital;
