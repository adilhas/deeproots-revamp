import { FileText, Upload, X } from 'lucide-react';

interface FileUploadProps {
  label: string;
  description?: string;
  file: File | null;
  accept?: string;
  inputId: string;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRemove?: () => void;
  previewPDF?: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  file,
  accept = 'image/*',
  inputId,
  onUpload,
  onRemove,
  previewPDF = false,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{label}</h3>
        {description && <p className="text-gray-600 text-sm">{description}</p>}
      </div>

      <div className="relative">
        {file && previewPDF ? (
          <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center relative">
                <FileText size={16} className="text-white" />
                <span className="absolute bottom-0 text-xs text-white font-bold">
                  PDF
                </span>
              </div>
              <div>
                <p className="font-medium text-gray-800">{file.name}</p>
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
              className="flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-gray-400 transition-colors"
            >
              <Upload size={24} className="text-gray-400" />
              <span className="text-gray-600">
                {file ? file.name : 'Tap to Upload'}
              </span>
            </label>
          </>
        )}
      </div>
    </div>
  );
};
