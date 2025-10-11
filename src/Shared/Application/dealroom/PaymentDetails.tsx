import { useApplication } from '@/context/ApplicationContext';
import React, { useState } from 'react';
import DealApprovalModal from './DealApprovalModal';
import DealDeclineModal from './DealDeclineModal';
import { toast } from 'react-toastify';
import { formatDate, formateDateUTCTime } from '@/utils/formatDate';
import ViewFileLink from '../ViewFileLink';
import { FiImage } from 'react-icons/fi';
import { useSession } from 'next-auth/react';

const PaymentDetails = () => {
  const { application, setApplication } = useApplication();
  const { data: session } = useSession();
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [declineReason, setDeclineReason] = useState('');
  const [declineOpen, setDeclineOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDeclining, setIsDeclining] = useState(false);
  const MAX_FILE_SIZE_MB = 5;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    const allowedMimeTypes = ['application/pdf', 'image/png', 'image/jpeg'];

    if (selectedFile) {
      const fileSizeMB = selectedFile.size / (1024 * 1024);

      if (fileSizeMB > MAX_FILE_SIZE_MB) {
        toast.info('File size exceeds 5MB. Please upload a smaller file.');
        e.target.value = '';
        return;
      }
      if (!selectedFile.type || !allowedMimeTypes.includes(selectedFile.type)) {
        toast.info('Only PDF, PNG, and JPEG files are allowed.');
        e.target.value = '';
        return;
      }
      setReceiptFile(selectedFile);
    }
  };

  const dealData = [
    {
      label: 'Amount Paid',
      value: `$${application?.paymentDetails?.amountSent}`,
    },
    {
      label: 'Transaction Link',
      value: application?.paymentDetails?.transactionLink,
    },
    {
      label: 'Payment Date',
      value: formatDate(application?.paymentDetails?.createdAt ?? ''),
    },
    {
      label: 'Payment Screenshot',
      value: application?.paymentDetails?.paymentImage,
    },
    {
      label: 'Payment Status',
      value: (
        <>
          <span className="bg-[#BFDBFE] text-[#2563EB] py-1 px-2 rounded-4xl">
            User Paid{' '}
          </span>
          {application?.paymentDetails?.paymentStatus === 'approved' && (
            <span className="bg-[#BBF7D0] text-[#059669] py-1 px-2 rounded-4xl ml-1">
              {' '}
              Approved
            </span>
          )}
          {application?.paymentDetails?.paymentStatus === 'declined' && (
            <span className="bg-[#FECDCE] text-[#E11D20] py-1 px-2 rounded-4xl ml-1">
              {' '}
              Rejected
            </span>
          )}
        </>
      ),
    },
  ];

  const handleConfirm = async () => {
    if (!receiptFile) {
      toast.info('Please upload a receipt before submitting.');
      return;
    }
    const submissionId = application?.id;
    if (!submissionId) {
      toast.error('Missing submission ID.');
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('file', receiptFile);
      formData.append('submissionId', submissionId);

      const res = await fetch('/api/payment/approve', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
        return;
      }

      setApplication((prevState) => {
        if (!prevState || !prevState.paymentDetails) return prevState;

        return {
          ...prevState,
          dealRoom: 'approved',
          paymentDetails: {
            ...prevState.paymentDetails,
            receiptUrl: data.receiptUrl,
            paymentStatus: data.paymentStatus,
          },
        };
      });

      setReceiptFile(null);

      toast.success('Payment Accepted successfully');
    } catch (err) {
      console.error('❌ Upload failed:', err);
      toast.error('There was an error uploading the receipt.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDecline = async (): Promise<void> => {
    if (!declineReason.trim()) {
      toast.info('Please enter a decline reason');
      return;
    }

    const submissionId = application?.id;
    if (!submissionId) {
      toast.error('Missing submission ID.');
      return;
    }
    setIsDeclining(true);

    try {
      const res = await fetch('/api/payment/decline', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ submissionId, declineReason }),
      });

      const data = await res.json();

      setApplication((prevState) => {
        if (!prevState || !prevState.paymentDetails) return prevState;

        return {
          ...prevState,
          dealRoom: 'declined',
          paymentDetails: {
            ...prevState.paymentDetails,
            paymentStatus: data.paymentStatus,
            declineReason: data.declineReason,
          },
        };
      });

      setDeclineOpen(false);
      toast.success('Payment declined successfully');
    } catch (err) {
      console.error('❌ Decline request failed:', err);
      toast.error('There was an error declining the payment.');
    } finally {
      setIsDeclining(false);
    }
  };

  return (
    <div className="mx-auto my-8 bg-white rounded-4xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Payment details
        </h1>
      </div>

      <div className="max-w-[794px] mx-auto px-2 py-4">
        <div className=" flex flex-col gap-y-3">
          {dealData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start gap-x-4 sm:items-center ${index !== dealData.length - 1 ? 'border-gray-100' : ''}`}
            >
              <div className="text-[#525252] font-medium sm:mb-0">
                {item.label}
              </div>
              {item.label === 'Transaction Link' ? (
                <a
                  href={typeof item.value === 'string' ? item.value : undefined}
                  target="_blank"
                  className="text-[#2563EB] underline font-semibold md:ml-4  truncate"
                >
                  {item.value}
                </a>
              ) : item.label === 'Payment Screenshot' ? (
                <div className="w-full max-w-[300px]">
                  <ViewFileLink
                    fileLink={typeof item.value === 'string' ? item.value : ''}
                    fileName="screenshot"
                  />
                </div>
              ) : (
                <div className="text-gray-800 font-semibold">{item.value}</div>
              )}
            </div>
          ))}
          {application?.paymentDetails?.paymentStatus === 'approved' && (
            <>
              <div
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center`}
              >
                <div className="text-[#525252] font-medium sm:mb-0">
                  Approved Date
                </div>
                <a className="text-gray-800 font-semibold">
                  {formatDate(application?.paymentDetails?.updatedAt)}
                </a>
              </div>
              <div
                className={`flex flex-col md:flex-row justify-between items-start sm:items-center`}
              >
                <div className="text-[#525252] font-medium sm:mb-0">
                  Reciept
                </div>
                <div className="w-full max-w-[300px]">
                  <ViewFileLink
                    fileLink={application?.paymentDetails?.receiptUrl}
                    fileName="receipt"
                  />
                </div>
              </div>
            </>
          )}

          {application?.paymentDetails?.paymentStatus === 'declined' && (
            <>
              <div
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center`}
              >
                <div className="text-[#525252] font-medium sm:mb-0">
                  Reject Date
                </div>
                <a className="text-gray-800 font-semibold">
                  {formateDateUTCTime(application?.paymentDetails?.updatedAt)}
                </a>
              </div>
              <div
                className={`flex flex-col sm:flex-row justify-between items-start sm:items-center`}
              >
                <div className="text-[#525252] font-medium sm:mb-0">
                  Comment
                </div>
                <a className="text-gray-800 font-semibold">
                  {application?.paymentDetails?.declineReason}
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      {application?.paymentDetails?.paymentStatus === 'not-submitted' &&
        session?.user.role === 'admin' && (
          <div className="text-center p-4 bg-[#E9E9E9]  flex flex-col md:flex-row  justify-between w-full">
            <div className="">
              <div className="flex flex-col  md:flex-row items-end justify-between w-full">
                <div className="flex flex-col md:flex-row items-start gap-4 w-full">
                  <div className="text-[#696969] text-lg mt-2">
                    Upload Receipt
                  </div>
                  <div className="relative w-full">
                    <input
                      type="file"
                      accept=".pdf,image/*"
                      onChange={handleUpload}
                      className="hidden"
                      id="File-upload"
                    />
                    <label
                      htmlFor="File-upload"
                      className="flex items-start w-full md:w-[437px] justify-center gap-2 border-2 border-dashed border-gray-300 rounded-2xl py-4 cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <span className="">
                        {receiptFile ? (
                          receiptFile.name
                        ) : (
                          <div className="text-lg text-center">
                            <div className="text-[#525252] text-lg flex items-center gap-2">
                              <FiImage
                                size={24}
                                className="text-[#3F3F3F] font-semibold"
                              />
                              Upload File
                            </div>
                            <div className="text-[#696969] font-normal">
                              PNG, JPG, PDF
                            </div>
                          </div>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start mt-4 md:mt-1">
              <DealDeclineModal
                isSubmitting={isDeclining}
                isOpen={declineOpen}
                setIsOpen={setDeclineOpen}
                reason={declineReason}
                setReason={setDeclineReason}
                handleConfirm={handleDecline}
              />
              <DealApprovalModal
                isSubmitting={isSubmitting}
                isOpen={approveOpen}
                setIsOpen={setApproveOpen}
                handleConfirm={handleConfirm}
              />
            </div>
          </div>
        )}
    </div>
  );
};

export default PaymentDetails;
