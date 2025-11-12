/* eslint-disable no-unused-vars */
import React from 'react';
import { FileUpload } from './FileUpload';

interface OrgProofFormProps {
  certificateFile: File | null;
  proofOfAddressFile: File | null;
  setCertificateFile: React.Dispatch<React.SetStateAction<File | null>>;
  setProofOfAddressFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleFileUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => void;
  removeFile: (
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => void;
  setAuthLetterFile: React.Dispatch<React.SetStateAction<File | null>>;
  setOrgSelfieFile: React.Dispatch<React.SetStateAction<File | null>>;
  authLetterFile: File | null;
  orgSelfieFile: File | null;
}

const OrgProofForm: React.FC<OrgProofFormProps> = ({
  certificateFile,
  proofOfAddressFile,
  setCertificateFile,
  setProofOfAddressFile,
  handleFileUpload,
  removeFile,
  authLetterFile,
  setAuthLetterFile,
  orgSelfieFile,
  setOrgSelfieFile,
}) => {
  return (
    <div className="space-y-8 px-6 bg-white py-4">
      <FileUpload
        label="Business License / Company Registration Certificate"
        description="Upload File"
        file={certificateFile}
        accept=".pdf,image/*"
        inputId="org-certificate-upload"
        onUpload={(e) => handleFileUpload(e, setCertificateFile)}
        onRemove={() => removeFile(setCertificateFile)}
        previewPDF
      />
      <hr className="text-[#D4D4D4]" />
      <FileUpload
        label="Company Proof of Address (Utility Bill, Lease, etc.)"
        description="Submit relevant document with address."
        file={proofOfAddressFile}
        accept=".pdf,image/*"
        inputId="org-proof-upload"
        onUpload={(e) => handleFileUpload(e, setProofOfAddressFile)}
        onRemove={() => removeFile(setProofOfAddressFile)}
        previewPDF
      />
      <hr className="text-[#D4D4D4]" />
      <FileUpload
        label="Letter of Authorization (Signed by Legal Representative)"
        description="Attach document (Pdf / Docs)"
        file={authLetterFile}
        accept=".pdf,image/*"
        inputId="auth-upload"
        onUpload={(e) => handleFileUpload(e, setAuthLetterFile)}
        onRemove={() => removeFile(setAuthLetterFile)}
      />
      <hr className="text-[#D4D4D4]" />
      <FileUpload
        label="Representative’s Passport or ID + Selfie with Handwritten Note"
        description={
          <div className="space-y-2 text-sm text-gray-600">
            <p>Handwritten note should show:</p>
            <p className="text-blue-600 font-medium">
              &quot;I am applying for the DEEPROOTS Private Seed Round on behalf
              of [Company Name] on [Date].&quot;
            </p>
          </div>
        }
        file={orgSelfieFile}
        accept=".pdf,image/*"
        inputId="selfie-upload"
        onUpload={(e) => handleFileUpload(e, setOrgSelfieFile)}
        onRemove={() => removeFile(setOrgSelfieFile)}
      />
    </div>
  );
};

export default OrgProofForm;
