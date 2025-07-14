import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import React from 'react';
import PreApprovalApproveModal from './PreApprovalApproveModal';
import PreAppovalDeclineModal from './PreApprovalDeclineModal';
const documentTypeLabels: Record<string, string> = {
  PASSPORT: 'Passport or National ID Card',
  PROOF_OF_ADDRESS: 'Proof of Address',
  SELFIE_WITH_NOTE: 'Selfie with ID + Handwritten Note',
  BUSINESS_LICENSE: 'Business License',
  COMPANY_ADDRESS: 'Company Address',
  AUTHORIZATION_LETTER: 'Authorization Letter',
  REP_ID_SELFIE: 'Representative ID with Selfie',
};

const PreApprovalSubmitted = () => {
  const { application } = useApplication();
  const { data: session } = useSession();
  return (
    <div className=" text-center w-fit mx-auto">
      {session?.user.role === 'seeder' &&
        application?.preApproval === 'under-review' && (
          <div className="my-10">
            <div className=" w-fit mx-auto text-transparent bg-gradient-to-r from-gradient-from to-gradient-to text-2xl bg-clip-text font-semibold">
              Submitted!
            </div>
            <div className="w-full max-w-[400px] mx-auto">
              You’ve successfully submitted, Stay tuned to your email to know if
              your submission is Approved or Rejected.
            </div>
          </div>
        )}
      <div>
        <div className="max-w-4xl mx-auto pt-6 border border-[#A1A1A1] rounded-2xl">
          {/* Header */}
          <div className="text-center mb-8 px-3">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              Non-Disclosure Agreement & Simple Agreement for Future Tokens
              (SAFT)
            </h1>
          </div>

          <div className="space-y-6">
            <div className="prose p-3 rounded-b-2xl text-md bg-white text-gray-700 leading-relaxed">
              <div className="flex flex-row mb-3 items-center justify-between w-full">
                <div>NDA Agreement Status</div>
                <div className="text-[#059669] bg-[#D1FAE5] py-1 px-2 rounded-4xl">
                  Agreed
                </div>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between w-full">
                <div>Signature</div>
                <div className="flex flex-col text-start">
                  <div className="text-sm">Full Legal Name:</div>
                  <div className="font-semibold text-black">
                    {application?.ndaSubmission?.typedSignature}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={application?.ndaSubmission?.signatureImage}
                  className="underline"
                >
                  View Signature
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="max-w-4xl mx-auto pt-6 border border-[#A1A1A1] rounded-2xl">
          {/* Header */}
          <div className="text-center mb-8 px-3">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              KYC & Documentation
            </h1>
          </div>

          <div className="space-y-6">
            <div
              className={`prose p-3 text-md bg-white text-gray-700 leading-relaxed ${
                session?.user.role === 'admin' &&
                application?.preApproval === 'under-review'
                  ? ''
                  : 'rounded-b-2xl'
              }`}
            >
              {application?.kycDocuments &&
                application?.kycDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-row items-center justify-between w-full my-3"
                  >
                    <div className="font-semibold text-lg text-black">
                      {documentTypeLabels[document.type] || document.type}
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={document.url}
                      className="underline"
                    >
                      View
                    </a>
                  </div>
                ))}
            </div>
            {session?.user.role === 'admin' &&
              application?.preApproval === 'under-review' && (
                <div className="flex justify-between items-center p-3">
                  <div>Approve or reject KYC</div>
                  <div>
                    <PreAppovalDeclineModal />
                    <PreApprovalApproveModal />
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreApprovalSubmitted;
