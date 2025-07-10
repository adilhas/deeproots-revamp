import React, { useState } from 'react';
import IndProofForm from './IndProofForm';
import OrgProofForm from './OrgProofForm';
import { useSession } from 'next-auth/react';
import { useApplication } from '@/context/ApplicationContext';

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
  // INDIVIDUAL files
  const [passportFile, setPassportFile] = useState<File | null>(null);
  const [proofOfAddressFile, setProofOfAddressFile] = useState<File | null>(
    null
  );
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  // ORG files
  const [certificateFile, setCertificateFile] = useState<File | null>(null);
  const [orgProofFile, setOrgProofFile] = useState<File | null>(null);
  const [authLetterFile, setAuthLetterFile] = useState<File | null>(null);
  const [orgSelfieFile, setOrgSelfieFile] = useState<File | null>(null);

  const { application, setApplication } = useApplication();

  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) setter(file);
  };

  const removeFile = (
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    setter(null);
  };

  const handleSubmit = async () => {
    if (!userId || !fullName.trim() || !isChecked) {
      alert('Missing required NDA or user details');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('fullName', fullName);
    formData.append('ndaAccepted', 'true'); // for server check

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
      const res = await fetch('/api/upload/kyc-submission', {
        method: 'POST',
        body: formData,
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message);

      alert('Submission successful!');
      console.log('result', result);
      setApplication((prevState) => {
        if (!prevState) return prevState;

        return {
          ...prevState,
          ndaSubmission: result.nda,
          kycDocuments: result.kyc,
          preApproval: result.preApproval,
        };
      });
      console.log('updated', application);
    } catch (err) {
      console.error(err);
      alert(`Upload failed: ${(err as Error).message}`);
    }
  };
  return (
    <div className="mx-auto py-6 mb-10 bg-[#E9E9E9] rounded-2xl border border-[#D4D4D4]">
      {/* Header */}
      <div className="text-center mb-8 px-2">
        <h1 className="text-2xl w-fit mx-auto font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          KYC & Documentation
        </h1>
      </div>

      {/* Tabs */}
      <div className="flex bg-white px-3 py-4">
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
      <div className="flex px-3 bg-[#E9E9E9] flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6 border-t">
        <p className="text-gray-600 text-sm max-w-md">
          Ensure the right documents have been correctly uploaded before
          submitting.
        </p>
        <button
          onClick={handleSubmit}
          className="btn bg-gradient-to-r from-gradient-from to-gradient-to border-0 text-white px-8 py-3 rounded-lg font-medium transition-all"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PAStep2;
