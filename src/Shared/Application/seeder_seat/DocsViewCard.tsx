import Image from 'next/image';
import React from 'react';

interface IDocsViewCard {
  fileLink: string;
  fileName?: string;
}

const DocsViewCard = ({ fileLink, fileName }: IDocsViewCard) => {
  const getFileIcon = (url: string): string => {
    if (!url) return '/dashboard/png-upload.svg';

    const extension = url.split('.').pop()?.split('?')[0]?.toLowerCase();

    switch (extension) {
      case 'pdf':
        return '/dashboard/pdf-upload.svg';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return '/dashboard/png-upload.svg';
      default:
        return '/dashboard/png-upload.svg';
    }
  };
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={fileLink}
      className="px-2 w-full"
    >
      {/* View Signature */}
      <div className="flex flex-col justify-between w-full items-center gap-2 py-8 h-[179px] bg-[#0B0B0B1C] px-3 rounded-lg">
        <Image
          src={getFileIcon(fileLink || '')}
          width={80}
          height={80}
          alt="upload"
        />
        <div className="text-md text-center">{fileName}</div>
      </div>
    </a>
  );
};

export default DocsViewCard;
