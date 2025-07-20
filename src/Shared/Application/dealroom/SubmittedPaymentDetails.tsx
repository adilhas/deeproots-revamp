import { useApplication } from '@/context/ApplicationContext';
import React from 'react';
import ViewFileLink from '../ViewFileLink';
import { formatDate } from '@/utils/formatDate';

const SubmittedPaymentDetails = () => {
  const { application } = useApplication();

  const dealData = [
    {
      label: 'Contribution Amount',
      value: `$${application?.paymentDetails?.amountSent}`,
    },
    {
      label: 'Transaction Link',
      value: application?.paymentDetails?.transactionLink,
    },
    {
      label: 'Payment Screenshot',
      value: application?.paymentDetails?.paymentImage,
    },
    {
      label: 'Payment Date',
      value: formatDate(application?.paymentDetails?.createdAt ?? ''),
    },
  ];

  return (
    <div className="mx-auto my-8 bg-white rounded-3xl overflow-hidden border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Submitted Payment details
        </h1>
      </div>

      <div className="max-w-[790px] mx-auto px-2 py-4">
        <div className="">
          {dealData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-start sm:items-center ${index !== dealData.length - 1 ? 'border-gray-100' : ''}`}
            >
              <div className="text-[#525252] font-medium mb-2 sm:mb-0">
                {item.label}
              </div>
              {item.label === 'Transaction Link' ? (
                <a
                  href={typeof item.value === 'string' ? item.value : undefined}
                  target="_blank"
                  className="text-[#2563EB] underline font-semibold mb-4 md:my-4 max-w-[60%] truncate"
                >
                  {item.value}
                </a>
              ) : item.label === 'Payment Screenshot' ? (
                <div className="max-w-[300px] w-full">
                  <ViewFileLink
                    fileLink={item.value ?? ''}
                    fileName="screenshot"
                  />
                </div>
              ) : (
                <div className="text-gray-800 font-semibold mb-4 md:my-4">
                  {item.value}
                </div>
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
              <div className="max-w-[300px] w-full">
                <ViewFileLink
                  fileName="receipt"
                  fileLink={application?.paymentDetails?.receiptUrl ?? ''}
                />
              </div>
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
    </div>
  );
};

export default SubmittedPaymentDetails;
