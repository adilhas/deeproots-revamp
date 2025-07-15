import { FileUpload } from './FileUpload';

interface IndProofFormProps {
  passportFile: File | null;
  proofOfAddressFile: File | null;
  selfieFile: File | null;
  setPassportFile: React.Dispatch<React.SetStateAction<File | null>>;
  setProofOfAddressFile: React.Dispatch<React.SetStateAction<File | null>>;
  setSelfieFile: React.Dispatch<React.SetStateAction<File | null>>;
  handleFileUpload: (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => void;
  removeFile: (
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => void;
}

const IndProofForm: React.FC<IndProofFormProps> = ({
  passportFile,
  proofOfAddressFile,
  selfieFile,
  setPassportFile,
  setProofOfAddressFile,
  setSelfieFile,
  handleFileUpload,
  removeFile,
}) => {
  return (
    <div className="space-y-8 px-6 bg-white py-4">
      <FileUpload
        label="Passport or National ID Card"
        inputLabel="Upload Image"
        description="Upload Image"
        file={passportFile}
        accept="image/*"
        inputId="passport-upload"
        onUpload={(e) => handleFileUpload(e, setPassportFile)}
        onRemove={() => removeFile(setPassportFile)}
      />
      <hr className="text-[#D4D4D4]" />

      <FileUpload
        label="Proof of Address"
        description="Submit a utility bill or bank statement with address."
        file={proofOfAddressFile}
        inputLabel="Upload Document"
        inputId="proof-upload"
        accept=".pdf,image/*"
        previewPDF
        onUpload={(e) => handleFileUpload(e, setProofOfAddressFile)}
        onRemove={() => removeFile(setProofOfAddressFile)}
      />
      <hr className="text-[#D4D4D4]" />
      <FileUpload
        label="Selfie with ID + Handwritten Note"
        description={
          <div className="space-y-2 text-sm text-gray-600">
            <p>Handwritten note should show:</p>
            <p className="text-blue-600 font-medium">
              &quot;I am applying for the DEEPROOTS Private Seed Round on
              [Date].&quot;
            </p>
          </div>
        }
        file={selfieFile}
        inputLabel="Upload Document"
        inputId="proof-upload"
        accept=".pdf,image/*"
        onUpload={(e) => handleFileUpload(e, setSelfieFile)}
        onRemove={() => removeFile(setSelfieFile)}
      />
    </div>
  );
};

export default IndProofForm;
