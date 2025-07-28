import { socialLinks } from '@/constants/socialLinksData';
import { X } from 'lucide-react';
import React from 'react';

const SubmitSuccessModal = () => {
  return (
    <div>
      <dialog id="form_success_submit_modal" className="modal">
        <div className="modal-box bg-white dark:bg-[#303030] text-[#525252] dark:text-[#F1F5F9] p-2 max-w-xs md:max-w-sm rounded-[40px] overflow-hidden shadow-2xl">
          <div className="dark:border p-2 rounded-4xl  dark:border-[#737373]">
            {/* Header with Checkmark Icon */}
            <form method="dialog">
              <button className="absolute top-4 right-5  hover:text-black bg-white dark:bg-[#303030] text-[#525252] dark:text-[#F1F5F9] p-1 rounded-md">
                <X className="w-5 h-5" />
              </button>
            </form>

            {/* Message */}
            <div className=" text-center">
              <h3 className="text-xl text-[#34D399]  font-bold mb-2 font-orbitron">
                Request submitted!
              </h3>
              {/* <p className=" text-sm my-3">
                Thank you. Your application is now under review.We’ll notify you
                within 1–2 business days.
              </p> */}

              <p className="text-sm my-3">
                Please check your email now to create your Full Foundation Seat
                account and complete the next step.
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
