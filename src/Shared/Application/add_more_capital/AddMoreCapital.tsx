'use client';

import React, { useState } from 'react';
import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import MoreCapitalApprovalModal from './MoreCapitalApprovalModal';
import MoreCapitalDeclineModal from './MoreCapitalDeclineModal';
import AddMoreCapitalModal from './AddMoreCapitalModal';
import ApproveAddMoreRequest from './ApproveAddMoreRequest';
import { toast } from 'react-toastify';

const paymentStatusMap: Record<string, { label: string; color: string }> = {
  requested: { label: 'Requested', color: 'text-blue-500' },
  request_approved: { label: 'Request Approved', color: 'text-blue-600' },
  request_rejected: { label: 'Request Rejected', color: 'text-red-600' },
  payment_submitted: { label: 'Payment Submitted', color: 'text-yellow-600' },
  payment_approved: { label: 'Payment Approved', color: 'text-green-600' },
  payment_rejected: { label: 'Payment Rejected', color: 'text-red-600' },
};

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

  const handleDecision = async (
    status: 'approved' | 'declined',
    paymentId: string
  ) => {
    if (!paymentId) {
      toast.error('Missing payment request ID.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/more-payment/request/status', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          morePaymentId: paymentId,
          status,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        console.error(data.message || 'Failed to update status.');
        toast.error(`Failed to ${status} request`);
        return;
      }

      const newStatus: 'request_approved' | 'request_rejected' =
        status === 'approved' ? 'request_approved' : 'request_rejected';
      setApplication((prev) => {
        if (!prev) return prev;

        const updatedPayments = (prev.morePayments || []).map((payment) =>
          payment.id === paymentId ? { ...payment, status: newStatus } : payment
        );

        return {
          ...prev,
          morePayments: updatedPayments as typeof prev.morePayments,
          canAddFund: status === 'approved' ? 'under-review' : 'not-submitted',
        };
      });

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
  // console.log(application);

  return (
    <>
      <div className="w-full my-5 bg-white p-6 rounded-4xl">
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-[#303030] text-2xl font-semibold">Add Funds</div>

          {session?.user.role === 'seeder' &&
            application?.canAddFund === 'not-submitted' && (
              <ApproveAddMoreRequest />
            )}
        </div>

        {session?.user.role === 'seeder' &&
          application?.morePayments.some(
            (payment) => payment.status === 'requested'
          ) && (
            <div className="text-sm text-orange-500 mb-2">
              Your add more fund request in submitted. Once it is approved by
              admin you will get access to submit more funds.
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
                  <p className="font-semibold text-lg text-gray-800">
                    Amount: ${payment.requestedAmount}
                  </p>
                  <p className="text-md text-gray-500">
                    Status:{' '}
                    <span
                      className={`${
                        paymentStatusMap[payment.status]?.color ||
                        'text-gray-500'
                      } font-semibold`}
                    >
                      {paymentStatusMap[payment.status]?.label || 'Unknown'}
                    </span>
                  </p>
                  {(payment.status === 'payment_submitted' ||
                    payment.status === 'payment_approved' ||
                    payment.status === 'payment_rejected') && (
                    <div className="flex flex-col md:flex-row gap-3 justify-between">
                      <a
                        href={payment.transactionLink ?? ''}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700"
                      >
                        View Transaction
                      </a>
                      <a
                        href={payment.paymentImage ?? ''}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-blue-700"
                      >
                        View Screenshot
                      </a>
                    </div>
                  )}
                  {payment.adminComment && (
                    <p className="text-sm text-red-500">
                      {payment.adminComment}
                    </p>
                  )}
                </div>

                {session?.user.role === 'admin' &&
                  payment.status === 'payment_submitted' && (
                    <div className="flex flex-col lg:flex-row gap-2">
                      <button
                        onClick={() => handleOpenApprovalModal(payment.id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Approve Payment
                      </button>
                      <button
                        onClick={() => handleOpenDeclineModal(payment.id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject Payment
                      </button>
                    </div>
                  )}

                {session?.user.role === 'admin' &&
                  payment.status === 'requested' && (
                    <div className="flex flex-col lg:flex-row gap-2">
                      <button
                        onClick={() => handleDecision('approved', payment.id)}
                        disabled={isSubmitting}
                        className="px-3 py-1 disabled:opacity-50 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                        Approve Request
                      </button>
                      <button
                        onClick={() => handleDecision('declined', payment.id)}
                        disabled={isSubmitting}
                        className="px-3 py-1 disabled:opacity-50 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        Reject Request
                      </button>
                    </div>
                  )}
                {session?.user.role === 'seeder' &&
                  payment.status === 'request_approved' && (
                    <button
                      onClick={() => {
                        setIsOpen(true);
                        setSelectedPaymentId(payment.id);
                      }}
                      className="px-4 disabled:opacity-60 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
                    >
                      Add Fund
                    </button>
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

      <AddMoreCapitalModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedPaymentId={selectedPaymentId || ''}
      />

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
