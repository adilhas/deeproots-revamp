import { useApplication } from '@/context/ApplicationContext';
import React, { useState } from 'react';
import DealApprovalModal from './DealApprovalModa';
import DealDeclineModal from './DealDeclineModal';
import { FileUpload } from '../FileUpload';
import { toast } from 'react-toastify';

const PaymentDetails = () => {
  const { application, setApplication } = useApplication();
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [declineReason, setDeclineReason] = useState('');
  const [declineOpen, setDeclineOpen] = useState(false);
  const [approveOpen, setApproveOpen] = useState(false);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setReceiptFile(selectedFile);
  };

  const handleRemove = () => {
    setReceiptFile(null);
  };
  const dealData = [
    {
      label: 'Amount Paid',
      value: `$${application?.paymentDetails?.amountSent}`,
    },
    {
      label: 'Transaction Hash',
      value: application?.paymentDetails?.transactionLink,
    },
    {
      label: 'Payment Date',
      value: application?.paymentDetails?.createdAt,
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

    try {
      const formData = new FormData();
      formData.append('file', receiptFile);
      formData.append('submissionId', submissionId);

      const res = await fetch('/api/payment/approve', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) {
        toast.error('Receipt upload failed');
      }

      const data = await res.json();

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
    }
  };

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Payment details
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-4">
        <div className="space-y-2">
          {dealData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 ${index !== dealData.length - 1 ? 'border-gray-100' : ''}`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                {item.label}
              </div>
              {item.label === 'Transaction Hash' ? (
                <a
                  href={typeof item.value === 'string' ? item.value : undefined}
                  target="_blank"
                  className="text-gray-800 underline font-semibold"
                >
                  {item.value}
                </a>
              ) : (
                <div className="text-gray-800 font-semibold">{item.value}</div>
              )}
            </div>
          ))}
          {application?.paymentDetails?.paymentStatus === 'approved' && (
            <div
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-3`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                Reciept
              </div>
              <a
                href={application?.paymentDetails?.receiptUrl}
                className="text-gray-800  font-semibold max-w-[20vw] truncate underline"
                target="_blank"
              >
                View Receipt
              </a>
            </div>
          )}
          {application?.paymentDetails?.paymentStatus === 'declined' && (
            <div
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center py-3`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                Comment
              </div>
              <a className="text-gray-800 font-semibold">
                {application?.paymentDetails?.declineReason}
              </a>
            </div>
          )}
        </div>
      </div>
      {application?.paymentDetails?.paymentStatus === 'not-submitted' && (
        <div className="text-center p-4 bg-[#E9E9E9] flec flex flex-row justify-between">
          <FileUpload
            label="Upload Receipt"
            description=""
            file={receiptFile}
            inputId="receipt-upload"
            accept=".pdf,image/*"
            previewPDF
            onUpload={handleUpload}
            onRemove={handleRemove}
          />

          <div>
            <DealDeclineModal
              isOpen={declineOpen}
              setIsOpen={setDeclineOpen}
              reason={declineReason}
              setReason={setDeclineReason}
              handleConfirm={handleDecline}
            />
            <DealApprovalModal
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
