import Image from 'next/image';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';

interface IViewFileLink {
  fileLink: string;
  fileName?: string;
}

const ViewFileLink = ({ fileLink, fileName }: IViewFileLink) => {
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
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={fileLink}
      className="px-2 w-full max-w-[437px]"
    >
      {/* View Signature */}
      <div
        className="flex flex-row justify-between w-full items-center gap-4 bg-white px-3 rounded-lg"
        style={{ boxShadow: `0px 4px 9px 0px #00000012` }}
      >
        <div className="flex flex-row items-center">
          <Image
            src={getFileIcon(fileLink || '')}
            width={56}
            height={56}
            alt="upload"
          />
          <div className="text-lg">{fileName}</div>
        </div>
        <div>
          <BsThreeDotsVertical className="w-6 h-6" />
        </div>
      </div>
    </a>
  );
};

export default ViewFileLink;
