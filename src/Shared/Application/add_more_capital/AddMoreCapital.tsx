'use client';

import React, { useState } from 'react';
import { Loader, X } from 'lucide-react';
import { useApplication } from '@/context/ApplicationContext';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { PiCurrencyDollarSimple, PiLink } from 'react-icons/pi';
import { FiImage } from 'react-icons/fi';
import WalletInfo from '../dealroom/WalletInfo';
import { useSession } from 'next-auth/react';
import { MorePaymentType } from '@/types/application';
import MoreCapitalApprovalModal from './MoreCapitalApprovalModal';
import MoreCapitalDeclineModal from './MoreCapitalDeclineModal';

const paymentSchema = z.object({
  amountSent: z.string().min(1, 'Amount is required'),
  transactionLink: z.string().url('Must be a valid URL'),
  screenshot: z.custom<File>((file) => file instanceof File, {
    message: 'Screenshot file is required',
  }),
});

const AddMoreCapital = () => {
  const { application, setApplication } = useApplication();
  const [amountSent, setAmountSent] = useState<string>('');
  const [transactionLink, setTransactionLink] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsSubmitting, setModalIsSubmitting] = useState(false);
  const [selectedPaymentId, setSelectedPaymentId] = useState<string | null>(
    null
  );
  const [declineModalOpen, setDeclineModalOpen] = useState(false);

  const handleOpenApprovalModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId);
    setModalIsOpen(true);
  };

  const { data: session } = useSession();

  const isFormValid = paymentSchema.safeParse({
    amountSent,
    transactionLink,
    screenshot,
  }).success;

  const MAX_FILE_SIZE_MB = 5;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    const file = e.target.files[0];
    if (file.size / (1024 * 1024) > MAX_FILE_SIZE_MB) {
      toast.info('File size exceeds 5MB. Please upload a smaller file.');
      e.target.value = '';
      return;
    }
    setScreenshot(file);
  };

  // Submit new payment by seeder
  const handleConfirm = async () => {
    if (!transactionLink || !screenshot || !application?.id || !amountSent) {
      toast.info('Please complete all fields.');
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('transactionLink', transactionLink);
    formData.append('submissionId', application.id);
    formData.append('paymentImage', screenshot);
    formData.append('amountSent', amountSent);

    try {
      const res = await fetch('/api/more-payment', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error(await res.text());

      const data = await res.json();

      setApplication((prev) => {
        if (!prev) return prev;
        const newPayment: MorePaymentType = {
          ...data.payment,
          transactionLink: data.payment.transactionLink ?? '',
        };
        return {
          ...prev,
          morePayments: [...(prev.morePayments ?? []), newPayment],
        };
      });

      toast.success('Payment submitted successfully!');
      setIsOpen(false);
      setAmountSent('');
      setTransactionLink('');
      setScreenshot(null);
    } catch (err) {
      console.error('Upload failed: ' + err);
      toast.error('Upload failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenDeclineModal = (paymentId: string) => {
    setSelectedPaymentId(paymentId);
    setDeclineModalOpen(true);
  };

  return (
    <>
      <div className="w-full my-5 bg-white p-6 rounded-4xl">
        <div className="text-[#303030] text-2xl font-semibold mb-6">
          More Funds
        </div>

        {session?.user.role === 'seeder' && (
          <button
            onClick={() => setIsOpen(true)}
            className="px-4 disabled:opacity-60 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
          >
            Add More Capital
          </button>
        )}

        {(application?.morePayments ?? []).length > 0 ? (
          <div className="mt-6 space-y-4 max-h-[300px] overflow-auto">
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
                  <div className="flex flex-col md:flex-row gap-2 justify-between">
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
            No Add Capital Requests Yet
          </div>
        )}
      </div>

      {/* Add More Capital Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white w-full max-w-[772px] relative max-h-[90vh] overflow-y-auto mx-4 md:mx-0 rounded-2xl shadow-xl">
            <div className="flex sticky top-0 justify-between items-center bg-gradient-to-r mb-4 p-4 rounded-t-2xl from-gradient-from to-gradient-to">
              <h2 className="text-3xl font-semibold text-white">
                Add More Capital
              </h2>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="p-4 text-[#525252]">
              <div className="bg-[#F4F4F4] rounded-2xl py-4 px-6">
                <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center text-center font-semibold">
                  <div>Curent Seed amount:</div>
                  <div className="text-gray-700 text-2xl font-orbitron">
                    ${application?.capital}
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-2xl">Wallet Information</h3>
                <WalletInfo
                  layoutClass="flex-col md:flex-col"
                  usdcAddress={application?.usdcAddress}
                  usdtAddress={application?.usdtAddress}
                />
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-2xl">Payment Information</h3>
                <div className="space-y-3 mt-2">
                  <div className="relative w-full">
                    <PiCurrencyDollarSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      placeholder="Enter Amount Sent"
                      className="w-full border border-gray-300 rounded-3xl pl-10 pr-4 py-2 text-sm"
                      value={amountSent}
                      onChange={(e) => setAmountSent(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full">
                    <PiLink className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Enter Transaction link"
                      className="w-full border border-gray-300 rounded-3xl pl-10 pr-4 py-2 text-sm"
                      value={transactionLink}
                      onChange={(e) => setTransactionLink(e.target.value)}
                    />
                  </div>

                  <div className="border border-dashed border-gray-400 p-4 rounded-2xl text-center text-sm">
                    <label
                      htmlFor="upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <div className="flex flex-row justify-center items-center gap-2">
                        <FiImage size={24} />
                        <p className="mt-2 font-medium text-lg">
                          Upload Payment Screenshot
                        </p>
                      </div>
                      <span className="text-xs text-gray-500">
                        PDF, JPG, PNG
                      </span>
                      <input
                        id="upload"
                        type="file"
                        accept=".jpg,.jpeg,.png,.pdf"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      {screenshot && (
                        <span className="text-xs mt-2">{screenshot.name}</span>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              <div className="space-x-3 pt-4">
                <button
                  onClick={handleConfirm}
                  disabled={isSubmitting || !isFormValid}
                  className={`px-4 bg-gradient-to-r w-full max-w-none md:max-w-[202px] from-gradient-from2 to-gradient-to2 py-2 disabled:opacity-60 text-lg rounded-md text-white flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-60' : ''
                  }`}
                >
                  {isSubmitting && <Loader className="animate-spin w-4 h-4" />}
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
