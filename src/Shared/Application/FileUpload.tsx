import { FileText, X } from 'lucide-react';
import { FiImage } from 'react-icons/fi';

interface FileUploadProps {
  label: string;
  description?: React.ReactNode;
  file: File | null;
  accept?: string;
  inputId: string;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  previewPDF?: boolean;
  inputLabel?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  file,
  accept = 'image/*',
  inputId,
  onUpload,
  onRemove,
  inputLabel = 'Tap to upload',
  previewPDF = true,
}) => {
  const isPDF = file?.type === 'application/pdf';

  return (
    <div className="flex flex-wrap justify-between gap-6 items-center">
      <div className="w-full md:w-1/2">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
        {description && (
          <div className="text-gray-600 text-sm">{description}</div>
        )}
      </div>

      <div className="relative w-full max-w-[437px]">
        {file && previewPDF ? (
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded flex items-center justify-center relative ${
                  isPDF ? 'bg-red-600' : 'bg-blue-600'
                }`}
              >
                {isPDF ? (
                  <FileText size={16} className="text-white mb-2" />
                ) : (
                  <FiImage size={16} className="text-white mb-2" />
                )}
                <span className="absolute bottom-0 text-xs text-white font-bold">
                  {isPDF ? 'PDF' : 'IMG'}
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-800 truncate max-w-[80px]">
                  {file.name}
                </p>
                <p className="text-sm text-gray-600">
                  {(file.size / 1024).toFixed(1)} kb
                </p>
              </div>
            </div>
            {onRemove && (
              <button
                onClick={onRemove}
                className="p-1 hover:bg-gray-200 rounded"
              >
                <X size={16} className="text-gray-500" />
              </button>
            )}
          </div>
        ) : (
          <>
            <input
              type="file"
              id={inputId}
              accept={accept}
              className="hidden"
              onChange={onUpload}
            />
            <label
              htmlFor={inputId}
              className="flex items-start text-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg py-3.5 px-4 cursor-pointer hover:border-gray-400 transition-colors"
            >
              {/* <FiImage size={24} className="text-[#525252]" /> */}
              <div className="flex flex-col text-lg">
                <div className="text-[#525252]">
                  {file ? file.name : inputLabel}
                </div>
                <span className="text-[#696969]">
                  {accept === `.pdf,image/*` ? 'PDF, JPG, PNG' : 'PNG/JPG'}
                  <br />{' '}
                  <span className="text-sm">should be less than 5MB</span>
                </span>
              </div>
            </label>
          </>
        )}
      </div>
    </div>
  );
};
