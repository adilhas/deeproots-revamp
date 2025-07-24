import { useApplication } from '@/context/ApplicationContext';
import React from 'react';
import DocsViewCard from './DocsViewCard';

const documentTypeLabels: Record<string, string> = {
  BUSINESS_LICENSE: 'Business License',
  COMPANY_ADDRESS: 'Company Address',
  AUTHORIZATION_LETTER: 'Authorization Letter',
  REP_ID_SELFIE: 'Representative ID Selfie',
};

const SeederDocuments = () => {
  const { application } = useApplication();

  return (
    <div className="w-full my-5 bg-white p-6 rounded-4xl">
      <div className="text-[#303030] text-2xl font-semibold">My Documents</div>
      <div className="flex flex-col md:flex-row flex-wrap gap-4 w-full">
        {(application?.kycDocuments ?? []).map((doc) => (
          <div key={doc.id} className="max-w-[150px] w-full">
            <DocsViewCard
              fileName={documentTypeLabels[doc.type] || doc.type}
              fileLink={doc.url}
            />
          </div>
        ))}
        <div className="max-w-[150px] w-full">
          <DocsViewCard
            fileName={'Receipt'}
            fileLink={application?.paymentDetails?.receiptUrl || ''}
          />
        </div>
      </div>
      <div className="text-[#303030] text-2xl font-semibold">Contract Info</div>
      <div className="max-w-[367px]">
        <DocsViewCard fileName={'contract'} fileLink={''} />
      </div>
    </div>
  );
};

export default SeederDocuments;
