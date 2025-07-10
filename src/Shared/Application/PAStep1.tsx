import React from 'react';
import { Upload, Calendar } from 'lucide-react';

interface PAStep1Props {
  fullName: string;
  setFullName: (val: string) => void;
  signatureFile: File | null;
  setSignatureFile: (val: File | null) => void;
  isChecked: boolean;
  setIsChecked: (val: boolean) => void;
  onContinue: () => void;
}

const PAStep1: React.FC<PAStep1Props> = ({
  fullName,
  setFullName,
  signatureFile,
  setSignatureFile,
  isChecked,
  setIsChecked,
  onContinue,
}) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSignatureFile(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 border border-[#A1A1A1] rounded-2xl">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          Non-Disclosure Agreement & Simple Agreement for Future Tokens (SAFT)
        </h1>
      </div>

      <div className="space-y-6">
        <div className="prose p-3 text-md h-[400px] overflow-y-scroll max-w-none bg-white text-gray-700 leading-relaxed">
          <p className="mb-4">[... NDA content ...]</p>
        </div>

        {/* Agreement Section */}
        <div className="border-t p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <label className="flex items-start sm:items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary mt-1 sm:mt-0"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="text-gray-700 font-medium">
                I have read and agreed to the NDA & Participation Agreement.
              </span>
            </label>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span className="font-medium">Date: July 7, 2025</span>
            </div>
          </div>

          {/* Signature Section */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Signature (Enter full Legal name)
              </label>
              <input
                type="text"
                placeholder="Enter your full legal name"
                className="input input-bordered w-full max-w-md bg-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end">
              {/* File Upload */}
              <div className="flex flex-row items-end justify-between w-full">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Signature
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="signature-upload"
                    />
                    <label
                      htmlFor="signature-upload"
                      className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-6 cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <Upload size={24} className="text-gray-400" />
                      <span className="text-gray-600">
                        {signatureFile
                          ? signatureFile.name
                          : 'Tap to Upload your signature'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <button
                onClick={onContinue}
                className="btn btn-primary bg-gradient-to-r from-gradient-from to-gradient-to border-0 text-white px-8 py-3 rounded-lg font-medium transition-all disabled:opacity-70"
                disabled={!isChecked || !fullName.trim()}
              >
                Confirm & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAStep1;
