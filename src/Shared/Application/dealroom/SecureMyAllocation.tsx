'use client';

import React, { useState } from 'react';
import { Upload, Loader } from 'lucide-react';
import WalletInfo from './WalletInfo';
import { useApplication } from '@/context/ApplicationContext';
import { z } from 'zod';
import { toast } from 'react-toastify';

interface SecureMyAllocationProps {
  disabled: boolean;
}

const paymentSchema = z.object({
  amountSent: z.string().min(1, 'Amount is required'),
  transactionLink: z.string().url('Must be a valid URL'),
  screenshot: z.custom<File>((file) => file instanceof File, {
    message: 'Screenshot file is required',
  }),
});

const SecureMyAllocation = ({ disabled }: SecureMyAllocationProps) => {
  const { application, setApplication } = useApplication();
  const [isOpen, setIsOpen] = useState(false);
  const [amountSent, setAmountSent] = useState('');
  const [transactionLink, setTransactionLink] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = paymentSchema.safeParse({
    amountSent,
    transactionLink,
    screenshot,
  }).success;

  const handleOpen = () => {
    if (disabled) return;
    setIsOpen(true);
  };
  const handleClose = () => setIsOpen(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setScreenshot(e.target.files[0]);
    }
  };

  const handleConfirm = async () => {
    if (!amountSent || !transactionLink || !screenshot || !application?.id) {
      alert('Please complete all fields.');
      return;
    }

    setIsSubmitting(true); // 👈 Start loader

    const formData = new FormData();
    formData.append('amountSent', amountSent);
    formData.append('transactionLink', transactionLink);
    formData.append('submissionId', application.id);
    formData.append('paymentImage', screenshot);

    try {
      const res = await fetch('/api/upload/payment-upload', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json();
        console.error(data.error);
        toast.error('Failed to upload payment');
      }

      const { payment } = await res.json();

      setApplication((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          paymentDetails: payment,
          dealRoom: 'under-review',
        };
      });

      toast.success('Payment submitted successfully!');
      setIsOpen(false);
    } catch (err) {
      console.error('Upload failed: ' + err);
      toast.error('Upload failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        disabled={disabled}
        className="px-4 disabled:opacity-60 py-2 btn-success bg-gradient-to-r from-gradient-from to-gradient-to rounded-xl text-white font-semibold"
      >
        Approve
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white w-full max-w-xl mx-4 md:mx-0 rounded-2xl shadow-xl">
            <h2 className="text-xl font-semibold mb-4 p-4 rounded-t-2xl text-white bg-gradient-to-r from-gradient-from to-gradient-to">
              Approve Application
            </h2>

            <div className="px-6 py-4 space-y-6">
              <div className="text-gray-700 flex w-full justify-between items-center">
                <div className="text-center text-xs font-semibold uppercase tracking-wider mb-1">
                  Time to Secure your Seat
                </div>
                <div className="flex justify-center space-x-4 font-orbitron text-center">
                  {['00', '00', '00', '00'].map((val, idx) => (
                    <div key={idx}>
                      <div className="text-xl font-bold">{val}</div>
                      <div className="text-xs text-gray-500">
                        {['Days', 'Hours', 'Mins', 'Secs'][idx]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 text-center flex w-full justify-between items-center font-semibold">
                <div>Seed amount:</div>
                <div className="text-gray-700 text-2xl font-orbitron">
                  ${application?.capital}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  Wallet Information
                </h3>
                <WalletInfo />
              </div>

              <div>
                <h3 className="font-semibold text-sm text-gray-800">
                  Payment Information
                </h3>
                <div className="space-y-3 mt-2">
                  <input
                    type="number"
                    placeholder="Enter Amount Sent"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    value={amountSent}
                    onChange={(e) => setAmountSent(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Enter Transaction link"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm"
                    value={transactionLink}
                    onChange={(e) => setTransactionLink(e.target.value)}
                  />

                  <div className="border border-dashed border-gray-400 p-4 rounded-lg text-center text-sm">
                    <label
                      htmlFor="upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <Upload size={20} />
                      <p className="mt-2 font-medium">
                        Upload Payment Screenshot
                      </p>
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

              <div className="flex justify-end space-x-3 pt-4 border-t">
                <button
                  onClick={handleClose}
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm rounded-md border border-gray-300 bg-white hover:bg-gray-100"
                >
                  Cancel
                </button>

                <button
                  onClick={handleConfirm}
                  disabled={isSubmitting || !isFormValid}
                  className={`px-4 py-2 disabled:opacity-60 text-sm rounded-md text-white flex items-center justify-center gap-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700'
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
    </>
  );
};

export default SecureMyAllocation;
