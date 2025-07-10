import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import React from 'react';
import PreApprovalApproveModal from './PreApprovalApproveModal';
import PreAppovalDeclineModal from './PreApprovalDeclineModal';

const PreApprovalSubmitted = () => {
  const { application } = useApplication();
  const { data: session } = useSession();
  return (
    <div className=" text-center w-fit mx-auto">
      {session?.user.role === 'seeder' && (
        <div className="my-10">
          <div>Submitted!</div>
          <div>
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
              <div className="flex flex-row items-center justify-between w-full">
                <div>NDA Agreement Status</div>
                <div className="text-green-600">Agreed</div>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between w-full">
                <div>Signature</div>
                <div>{application?.ndaSubmission?.typedSignature}</div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={application?.ndaSubmission?.signatureImage}
                  className="underline"
                >
                  Signature
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
            <div className="prose p-3 text-md bg-white text-gray-700 leading-relaxed">
              {application?.kycDocuments &&
                application?.kycDocuments.map((document) => (
                  <div
                    key={document.id}
                    className="flex flex-row items-center justify-between w-full"
                  >
                    <div>{document.type}</div>
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
