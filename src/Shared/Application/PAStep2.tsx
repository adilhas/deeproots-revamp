import React, { useState } from 'react';
import IndProofForm from './IndProofForm';
import OrgProofForm from './OrgProofForm';
import { useSession } from 'next-auth/react';
import { useApplication } from '@/context/ApplicationContext';
import { toast } from 'react-toastify';
import KycSubmissionModal from './KycSubmissionModal';

interface PAStep2Props {
  fullName: string;
  signatureFile: File | null;
  isChecked: boolean;
  activeTab: 'individual' | 'organization';
}

const PAStep2: React.FC<PAStep2Props> = ({
  fullName,
  signatureFile,
  isChecked,
  activeTab,
}) => {
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [proofOfAddressFile, setProofOfAddressFile] = useState<File | null>(
    null
  );
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [orgProofFile, setOrgProofFile] = useState<File | null>(null);
  const [authLetterFile, setAuthLetterFile] = useState<File | null>(null);
  const [orgSelfieFile, setOrgSelfieFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const { setApplication } = useApplication();

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const MAX_FILE_SIZE_MB = 5;
  const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        toast.error(
          `File "${file.name}" is too large! Maximum allowed size is ${MAX_FILE_SIZE_MB}MB.`
        );
        return; // Do not set the file if it's too big
      }
      setter(file);
    }
  };

  const removeFile = (
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    setter(null);
  };

  const handleSubmit = async () => {
    let totalSize = 0;
    const files = [
      signatureFile,
      passportFile,
      proofOfAddressFile,
      selfieFile,
      certificateFile,
      orgProofFile,
      authLetterFile,
      orgSelfieFile,
    ];

    for (const file of files) {
      if (file) totalSize += file.size;
    }

    if (totalSize > MAX_FILE_SIZE_BYTES) {
      toast.error(
        `Total files size exceeds the maximum allowed (${MAX_FILE_SIZE_BYTES}MB). Please remove some files.`
      );
      return;
    }

    if (!userId || !fullName.trim() || !isChecked) {
      toast.error('Missing required NDA or user details');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('fullName', fullName);
    formData.append('ndaAccepted', 'true');

    if (signatureFile) formData.append('signature', signatureFile);

    if (activeTab === 'individual') {
      if (passportFile) formData.append('passport', passportFile);
      if (proofOfAddressFile)
        formData.append('proof_of_address', proofOfAddressFile);
      if (selfieFile) formData.append('selfie_with_note', selfieFile);
    } else {
      if (certificateFile) formData.append('business_license', certificateFile);
      if (orgProofFile) formData.append('company_address', orgProofFile);
      if (authLetterFile)
        formData.append('authorization_letter', authLetterFile);
      if (orgSelfieFile) formData.append('rep_id_selfie', orgSelfieFile);
    }

    try {
      setLoading(true);
      const res = await fetch('/api/upload/kyc-submission', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) {
        toast.error('Something went wrong');
        return;
      }
      toast.success('Submission successful!');
      setApplication((prevState) => {
        if (!prevState) return prevState;

        return {
          ...prevState,
          ndaSubmission: result.nda,
          kycDocuments: result.kyc,
          preApproval: result.preApproval,
        };
      });
    } catch (err) {
      console.error(err);
      toast.error(`Upload failed: ${(err as Error).message}`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-auto bg-[#E9E9E9] rounded-4xl border border-[#D4D4D4]">
      {/* Header */}
      <div className="text-center px-2 py-4">
        <h1 className="text-2xl w-fit mx-auto font-medium bg-gradient-to-r from-gradient-from2 to-gradient-to2 bg-clip-text text-transparent">
          KYC & Documentation
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-white px-3 py-4 border-y border-[#D4D4D4]">
        <button
          className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
            activeTab === 'individual' ? 'bg-[#E9E9E9] text-black' : ''
          }`}
        >
          Individual
        </button>
        <button
          className={`flex-1 py-3 px-6 rounded-full font-medium transition-all ${
            activeTab === 'organization' ? 'bg-[#E9E9E9] text-black' : ''
          }`}
        >
          Organization
        </button>
      </div>

      {/* Form */}
      {activeTab === 'individual' ? (
        <IndProofForm
          passportFile={passportFile}
          proofOfAddressFile={proofOfAddressFile}
          selfieFile={selfieFile}
          setPassportFile={setPassportFile}
          setProofOfAddressFile={setProofOfAddressFile}
          setSelfieFile={setSelfieFile}
          handleFileUpload={handleFileUpload}
          removeFile={removeFile}
        />
      ) : (
        <OrgProofForm
          authLetterFile={authLetterFile}
          orgSelfieFile={orgSelfieFile}
          certificateFile={certificateFile}
          proofOfAddressFile={orgProofFile}
          handleFileUpload={handleFileUpload}
          setAuthLetterFile={setAuthLetterFile}
          setOrgSelfieFile={setOrgSelfieFile}
          removeFile={removeFile}
          setCertificateFile={setCertificateFile}
          setProofOfAddressFile={setOrgProofFile}
        />
      )}

      {/* Submit */}
      <div className="flex px-4 py-4 bg-[#E9E9E9] flex-col sm:flex-row justify-between items-start sm:items-center gap-4 rounded-b-4xl">
        <p className="text-lg text-[#696969] max-w-md">
          Ensure the right documents have been correctly uploaded before
          submitting.
        </p>
        {/* <button
          onClick={handleSubmit}
          disabled={
            loading ||
            (activeTab === 'individual' &&
              (!passportFile || !proofOfAddressFile || !selfieFile)) ||
            (activeTab === 'organization' &&
              (!certificateFile ||
                !orgProofFile ||
                !authLetterFile ||
                !orgSelfieFile))
          }
          className="btn bg-gradient-to-r disabled:opacity-65 from-gradient-from to-gradient-to border-0 text-white px-8 py-3 rounded-lg font-medium transition-all"
        >
          Submit
        </button> */}
        <KycSubmissionModal
          disableSubmit={
            loading ||
            (activeTab === 'individual' &&
              (!passportFile || !proofOfAddressFile || !selfieFile)) ||
            (activeTab === 'organization' &&
              (!certificateFile ||
                !orgProofFile ||
                !authLetterFile ||
                !orgSelfieFile))
          }
          isOpen={showConfirmModal}
          setIsOpen={setShowConfirmModal}
          handleConfirm={handleSubmit}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default PAStep2;
