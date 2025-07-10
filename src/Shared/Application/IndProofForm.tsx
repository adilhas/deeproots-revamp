import { Upload } from 'lucide-react';
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
    <div className="space-y-8 px-3 bg-white py-4">
      <FileUpload
        label="Passport or National ID Card"
        description="Upload image"
        file={passportFile}
        inputId="passport-upload"
        onUpload={(e) => handleFileUpload(e, setPassportFile)}
      />

      <FileUpload
        label="Proof of Address"
        description="Submit a utility bill or bank statement with address."
        file={proofOfAddressFile}
        inputId="proof-upload"
        accept=".pdf,image/*"
        previewPDF
        onUpload={(e) => handleFileUpload(e, setProofOfAddressFile)}
        onRemove={() => removeFile(setProofOfAddressFile)}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start py-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Selfie with ID + Handwritten Note
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>Handwritten note should show:</p>
            <p className="text-blue-600 font-medium">
              &quot;I am applying for the DEEPROOTS Private Seed Round on
              [Date].&quot;
            </p>
          </div>
        </div>
        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e, setSelfieFile)}
            className="hidden"
            id="selfie-upload"
          />
          <label
            htmlFor="selfie-upload"
            className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-gray-400 transition-colors"
          >
            <Upload size={24} className="text-gray-400" />
            <span className="text-gray-600">
              {selfieFile ? selfieFile.name : 'Tap to Upload'}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IndProofForm;
