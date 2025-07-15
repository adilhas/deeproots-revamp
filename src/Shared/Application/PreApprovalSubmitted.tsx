import { useApplication } from '@/context/ApplicationContext';
import { useSession } from 'next-auth/react';
import React from 'react';
import PreApprovalApproveModal from './PreApprovalApproveModal';
import PreAppovalDeclineModal from './PreApprovalDeclineModal';
import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
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
  const getFileIcon = (url: string): string => {
    if (!url) return '/dashboard/png-upload.svg'; // default fallback

    const extension = url.split('.').pop()?.split('?')[0]?.toLowerCase();

    switch (extension) {
      case 'pdf':
        return '/dashboard/pdf-upload.svg';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '/dashboard/png-upload.svg';
      default:
        return '/dashboard/png-upload.svg'; // fallback icon
    }
  };
  return (
    <div className=" text-center w-full mx-auto">
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
      <div className="w-full">
        <div className="w-full mx-auto pt-6 border border-[#A1A1A1] rounded-2xl">
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
                <div className="font-semibold text-xl text-[#303030]">
                  Signature
                </div>
                <div className="flex flex-col text-start">
                  <div className="text-lg">Full Legal Name</div>
                  <div className="font-semibold text-xl text-[#303030]">
                    {application?.ndaSubmission?.typedSignature}
                  </div>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={application?.ndaSubmission?.signatureImage}
                  className="px-2 w-full max-w-[437px]"
                >
                  {/* View Signature */}
                  <div
                    className="flex flex-wrap justify-between w-full items-center gap-4 bg-white px-3 py-1 m-3 rounded-lg"
                    style={{ boxShadow: `0px 4px 9px 0px #00000012` }}
                  >
                    <div className="flex flex-row items-center">
                      <Image
                        src={getFileIcon(
                          application?.ndaSubmission?.signatureImage || ''
                        )}
                        width={56}
                        height={56}
                        alt="upload"
                      />
                      <div className="text-lg">Signature</div>
                    </div>
                    <div>
                      <BsThreeDotsVertical className="w-6 h-6" />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="w-full mx-auto pt-6 border border-[#A1A1A1] rounded-2xl">
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
                      className="px-2 w-full max-w-[437px]"
                    >
                      {/* View Signature */}
                      <div
                        className="flex flex-wrap justify-between w-full items-center gap-4 bg-white px-3 py-1 m-3 rounded-lg"
                        style={{ boxShadow: `0px 4px 9px 0px #00000012` }}
                      >
                        <div className="flex flex-row items-center">
                          <Image
                            src={getFileIcon(document.url || '')}
                            width={56}
                            height={56}
                            alt="upload"
                          />
                          <div className="text-lg">
                            {documentTypeLabels[document.type] || document.type}
                          </div>
                        </div>
                        <div>
                          <BsThreeDotsVertical className="w-6 h-6" />
                        </div>
                      </div>
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
