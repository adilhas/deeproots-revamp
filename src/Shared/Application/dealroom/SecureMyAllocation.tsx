'use client';

import React, { useState } from 'react';
import { Loader, X } from 'lucide-react';
// import WalletInfo from './WalletInfo';
import { useApplication } from '@/context/ApplicationContext';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { PiLink } from 'react-icons/pi';
import { FiImage } from 'react-icons/fi';

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
  const [amountSent] = useState(application?.capital);
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

    setIsSubmitting(true);

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
        Proceed to Secure My Seat
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
          <div className="bg-white w-full max-w-[772px] relative max-h-[90vh] overflow-y-auto mx-4 md:mx-0 rounded-2xl shadow-xl">
            <div className="flex sticky top-0 justify-between items-center bg-gradient-to-r mb-4 p-4 rounded-t-2xl from-gradient-from to-gradient-to">
              <h2 className="text-3xl  font-semibold  text-white ">
                Secure my Allocation
              </h2>
              <X
                className="w-6 h-6 text-white cursor-pointer"
                onClick={handleClose}
              />
            </div>
            <div className="p-4 text-[#525252]">
              <div className="bg-[#F4F4F4] rounded-2xl py-4 px-6">
                <div className="">
                  <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center">
                    <div className="text-center text-lg font-semibold r mb-1">
                      Time to Secure your Seat
                    </div>
                    <div className="flex justify-center space-x-4  text-center">
                      {['00', '00', '00', '00'].map((val, idx) => (
                        <div key={idx}>
                          <div className="text-3xl font-bold font-orbitron">
                            {val}
                          </div>
                          <div className="text-lg">
                            {['Days', 'Hours', 'Mins', 'Secs'][idx]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-center flex flex-col md:flex-row w-full justify-between items-start md:items-center font-semibold">
                    <div>Seed amount:</div>
                    <div className="text-gray-700 text-2xl font-orbitron">
                      ${application?.capital}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-6">
                <h3 className="font-semibold text-2xl">Wallet Information</h3>
                <WalletInfo
                  layoutClass="flex-col md:flex-col"
                  usdcAddress={application?.usdcAddress}
                  usdtAddress={application?.usdtAddress}
                />
              </div> */}

              <div className="mt-6">
                <h3 className="font-semibold text-2xl"> Payment Information</h3>
                <div className="space-y-3 mt-2">
                  {/* <div className="relative w-full">
                    <PiCurrencyDollarSimple className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="number"
                      placeholder="Enter Amount Sent"
                      className="w-full border border-gray-300 rounded-3xl pl-10 pr-4 py-2 text-sm"
                      value={amountSent}
                      onChange={(e) => setAmountSent(e.target.value)}
                    />
                  </div> */}

                  {/* Transaction Link with icon */}
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
                        <div className="translate-y-[2px]">
                          <FiImage size={24} />
                        </div>
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
    </>
  );
};

export default SecureMyAllocation;
