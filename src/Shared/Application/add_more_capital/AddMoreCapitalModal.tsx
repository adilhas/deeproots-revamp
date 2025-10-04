// components/modals/AddMoreCapitalModal.tsx

'use client';

import React, { useState } from 'react';
import { Loader, X } from 'lucide-react';
import { toast } from 'react-toastify';
import { PiCurrencyDollarSimple, PiLink } from 'react-icons/pi';
import { FiImage } from 'react-icons/fi';
import WalletInfo from '../dealroom/WalletInfo';
import { z } from 'zod';
import { useApplication } from '@/context/ApplicationContext';

const paymentSchema = z.object({
  amountSent: z.string().refine(
    (val) => {
      const num = Number(val);
      return !isNaN(num) && num >= 1000;
    },
    {
      message: 'Amount must be at least 1000',
    }
  ),

  transactionLink: z
    .string()
    .url(
      'Transaction link must be a valid URL (e.g., https://www.domain.com/)'
    ),

  screenshot: z.custom<File>((file) => file instanceof File, {
    message: 'Screenshot file is required',
  }),
});

interface Props {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const AddMoreCapitalModal: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const { application, setApplication } = useApplication();
  const [amountSent, setAmountSent] = useState('');
  const [transactionLink, setTransactionLink] = useState('');
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const MAX_FILE_SIZE_MB = 5;

  const isFormValid = paymentSchema.safeParse({
    amountSent,
    transactionLink,
    screenshot,
  }).success;

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
        return {
          ...prev,
          canAddFund: 'not-submitted',
          morePayments: [data.payment, ...(prev.morePayments ?? [])],
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

  const result = paymentSchema.safeParse({
    amountSent,
    transactionLink,
    screenshot,
  });

  const formErrors = result.success ? {} : result.error.flatten().fieldErrors;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white w-full max-w-[772px] relative max-h-[90vh] overflow-y-auto mx-4 md:mx-0 rounded-2xl shadow-xl">
        <div className="flex sticky top-0 justify-between items-center bg-gradient-to-r mb-4 p-4 rounded-t-2xl from-gradient-from to-gradient-to">
          <h2 className="text-3xl font-semibold text-white">Add More Funds</h2>
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
            {!isFormValid && formErrors.amountSent && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.amountSent[0]}
              </p>
            )}
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
              {formErrors.transactionLink && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.transactionLink}
                </p>
              )}

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
                  <span className="text-xs text-gray-500">PDF, JPG, PNG</span>
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
  );
};

export default AddMoreCapitalModal;
