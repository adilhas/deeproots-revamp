import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaLink } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import React, { useState } from 'react';

interface ShareBlogProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
}

const ShareBlog: React.FC<ShareBlogProps> = ({ isOpen, onClose, shareUrl }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 px-4 md:px-1 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-[#E9E9E9] font-archivo dark:bg-[#1C1D20] text-[#303030] dark:text-[#F1F5F9] rounded-3xl shadow-xl w-full max-w-[467px] p-6 relative">
        {/* Top Bar Gradient */}
        <div className="absolute top-0 left-0 right-0 h-[24px] rounded-t-3xl bg-gradient-to-r from-gradient-from2 to-gradient-to2" />

        {/* Header */}
        <div className="flex justify-between items-center mb-6 mt-2">
          <h2 className="text-2xl font-semibold ">Share Article</h2>
          <button onClick={onClose} className=" text-xl">
            <IoClose />
          </button>
        </div>

        {/* Social Media */}
        <div className="mb-5">
          <p className="text-lg mb-2 font-medium text-start">Social media</p>
          <div className="flex items-start justify-start gap-4">
            <button
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    shareUrl
                  )}`,
                  '_blank'
                )
              }
              className="flex flex-col items-center gap-1  p-4 rounded-xl w-fit bg-[#F8F8F8] dark:bg-neutral-700"
            >
              <FaLinkedin size={24} className="text-[#0A66C2]" />
              <span className="text-xs  font-medium">LinkedIn</span>
            </button>
            <button
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                  )}&text=Check%20this%20out!`,
                  '_blank'
                )
              }
              className="flex flex-col items-center gap-1  p-4 rounded-xl w-fit bg-[#F8F8F8] dark:bg-neutral-700"
            >
              <FaXTwitter size={24} />
              <span className="text-xs  font-medium">X (Twitter)</span>
            </button>
          </div>
        </div>

        {/* Copy Link */}
        <div>
          <p className="text-sm  mb-2">Copy link</p>
          <div className="flex items-center gap-2 bg-[#F8F8F8] dark:bg-neutral-700 rounded-xl px-4 py-2">
            <FaLink className="" />
            <span className="text-sm  truncate flex-1">{shareUrl}</span>
            <button
              onClick={handleCopy}
              className=" border bo px-3 py-1 rounded-md text-sm font-medium"
            >
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareBlog;
