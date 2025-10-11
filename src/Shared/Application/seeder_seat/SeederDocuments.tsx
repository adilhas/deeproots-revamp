import { useApplication } from '@/context/ApplicationContext';
import React from 'react';
import ViewFileLink from '../ViewFileLink';
import { formatCurrencyShort } from '@/utils/formatCapital';

const SeederDocuments = () => {
  const { application } = useApplication();
  const approvedPayments = Array.isArray(application?.morePayments)
    ? application.morePayments.filter(
        (pay) => pay.status === 'payment_approved'
      )
    : [];

  return (
    <div className="w-full my-5 bg-white p-6 rounded-4xl flex flex-col gap-2 items-start justify-between">
      <div className="text-[#303030] text-2xl font-semibold">My Documents</div>
      <div className=" w-full max-h-[200px] overflow-auto">
        {approvedPayments &&
          approvedPayments.length > 0 &&
          approvedPayments.map((pay) => (
            <ViewFileLink
              key={pay.id}
              fileName={`$${formatCurrencyShort(Number(pay.amountSent))} Receipt`}
              fileLink={pay.receiptUrl || ''}
            />
          ))}
        <ViewFileLink
          fileName={`$${formatCurrencyShort(Number(application?.paymentDetails?.amountSent))} Receipt`}
          fileLink={application?.paymentDetails?.receiptUrl || ''}
        />
      </div>
    </div>
  );
};

{
  /* <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
        {(application?.kycDocuments ?? []).map((doc) => (
          <div key={doc.id} className="max-w-[150px] w-full">
            <DocsViewCard
              fileName={documentTypeLabels[doc.type] || doc.type}
              fileLink={doc.url}
            />
          </div>
        ))}
        <div className="max-w-[437px] w-full">
          <ViewFileLink
            fileName={'Receipt'}
            fileLink={application?.paymentDetails?.receiptUrl || ''}
          />
          <DocsViewCard
            fileName={'Receipt'}
            fileLink={application?.paymentDetails?.receiptUrl || ''}
          />
        </div>
      </div>
      <div className="text-[#303030] text-2xl font-semibold">Contract Info</div>
      <div className="max-w-[367px]">
        <DocsViewCard fileName={'contract'} fileLink={''} />
      </div> */
}

export default SeederDocuments;
