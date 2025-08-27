import { Calendar, Download } from 'lucide-react';
import { useApplication } from '@/context/ApplicationContext';
import { formatDate } from '@/utils/formatDate';
import { FiImage } from 'react-icons/fi';
import React from 'react';
import { toast } from 'react-toastify';
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

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
  const { application } = useApplication();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg'];

    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      toast.info('File size must be less than 5MB');
      event.target.value = '';
      setSignatureFile(null);
      return;
    }
    if (!allowedTypes.includes(file.type)) {
      toast.info('Only PDF, PNG, and JPG files are allowed');
      event.target.value = '';
      setSignatureFile(null);
      return;
    }

    setSignatureFile(file);
  };

  return (
    <div className="w-full mx-auto border border-[#A1A1A1] rounded-2xl">
      {/* Header */}
      <div className="text-center py-[18px] px-2">
        <h1 className="text-2xl font-semibold bg-gradient-to-r px-2 from-gradient-from2 to-gradient-to2 w-fit mx-auto bg-clip-text text-transparent">
          Non-Disclosure Agreement & Simple Agreement for Future Tokens (SAFT)
        </h1>
      </div>

      <div className="">
        <div className="relative w-full h-[575px] border-y border-[#A1A1A1] bg-white">
          {/* PDF Renderer */}
          <Worker workerUrl="/pdf-worker/pdf.worker.min.js">
            <Viewer
              fileUrl="/NDA_SAFT_agreement.pdf"
              defaultScale={SpecialZoomLevel.PageWidth}
            />
          </Worker>

          {/* Custom Download Button */}
          <a
            href="/NDA_SAFT_agreement.pdf"
            download="NDA_SAFT_Document.pdf"
            className="absolute bottom-4 right-4 flex items-center gap-3 bg-black text-white text-lg rounded-xl py-2 px-4 shadow-lg disabled:opacity-50"
          >
            <Download className="w-6 h-6" />
            <span className="hidden md:inline-block"> Download Document</span>
          </a>
        </div>

        {/* Agreement Section */}
        <div className=" p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <label className="flex items-start sm:items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-primary mt-1 sm:mt-0"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <span className="text-[#525252] font-medium">
                I have read and agreed to the NDA & Participation Agreement.
              </span>
            </label>

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} />
              <span className="font-medium">
                Date: {formatDate(application?.createdAt ?? '')}
              </span>
            </div>
          </div>

          <div className=" bg-gradient-to-r text-2xl my-8 from-gradient-from2 to-gradient-to2 w-fit font-medium bg-clip-text text-transparent">
            Signature
          </div>

          {/* Signature Section */}
          <div className="flex flex-col  md:flex-row items-end gap-4 w-full">
            <div className="w-full max-w-[503px]">
              <label className="block text-lg w-full font-medium mb-3">
                E-Signature (Enter full Legal name)
              </label>
              <input
                type="text"
                placeholder="Enter your full legal name"
                className="input rounded-3xl input-bordered placeholder-[#525252] text-lg w-full bg-white"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end w-full max-w-[437px]">
              {/* File Upload */}
              <div className="flex flex-row items-end justify-between w-full">
                <div className="w-full">
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
                      className="flex items-start justify-center gap-2 border-2 border-dashed border-gray-300 rounded-2xl py-4 cursor-pointer hover:border-gray-400 transition-colors"
                    >
                      <FiImage size={24} className="text-[#3F3F3F]" />
                      <span className="">
                        {signatureFile ? (
                          signatureFile.name
                        ) : (
                          <div className="text-lg text-center">
                            <div className="text-[#525252]">
                              Upload Digital Signature
                            </div>
                            <div className="text-[#696969] font-normal">
                              PNG / JPG <br />{' '}
                              <span className="text-sm">
                                should be less than 5MB
                              </span>
                            </div>
                          </div>
                        )}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Continue Button */}
          <div className="w-full flex justify-end mt-8">
            <button
              onClick={onContinue}
              className="w-full max-w-none md:max-w-[236px] bg-gradient-to-r from-gradient-from2 to-gradient-to2 border-0 text-white px-6 py-[10px]  rounded-lg font-medium transition-all disabled:opacity-70"
              disabled={
                !isChecked || !fullName.trim() || signatureFile === null
              }
            >
              Sign & Continue to KYC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PAStep1;
