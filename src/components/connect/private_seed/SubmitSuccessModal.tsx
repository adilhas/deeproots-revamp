import { socialLinks } from '@/constants/socialLinksData';
import { X } from 'lucide-react';
import React from 'react';
import { FiCheck } from 'react-icons/fi';

const SubmitSuccessModal = () => {
  return (
    <div>
      <dialog id="form_success_submit_modal" className="modal">
        <div className="modal-box bg-white dark:bg-[#303030] text-[#525252] dark:text-[#F1F5F9] p-2 max-w-xs md:max-w-sm rounded-3xl overflow-hidden shadow-2xl">
          {/* Header with Checkmark Icon */}
          <div className="bg-[#EEDDF9] border border-[#C084FC] dark:bg-[#581C87] rounded-2xl flex items-center justify-center h-32 relative">
            <div className="bg-white rounded-full p-2">
              <FiCheck className="w-8 h-8 text-green-600" />
            </div>
            <form method="dialog">
              <button className="absolute top-4 right-4  hover:text-black bg-white dark:bg-[#303030] text-[#525252] dark:text-[#F1F5F9] p-1 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Message */}
          <div className=" text-center">
            <h3 className="text-xl text-[#303030] dark:text-[#F8FAFC] font-bold mb-2 font-orbitron">
              Application successfully submitted.
            </h3>
            <p className=" text-sm mb-4">
              Thank you for applying. Your application will be reviewed within
              3–5 business days under strict confidentiality.
            </p>

            <p className=" text-sm mb-4">
              Stay tuned to our socials and community Channels
            </p>

            {/* Social icons */}
            <div className="flex justify-center gap-4 text-xl mb-1">
              {socialLinks.map(({ Icon, name, href }) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={href}
                  key={name}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Backdrop */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SubmitSuccessModal;
