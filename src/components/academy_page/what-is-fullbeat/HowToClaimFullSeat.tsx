import { Lock } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PiBank, PiOfficeChair, PiPuzzlePiece } from 'react-icons/pi';

const HowToClaimFullSeat = () => {
  return (
    <div className="my-20">
      <div className="flex flex-row items-center gap-3 font-semibold mb-8">
        <PiPuzzlePiece className="w-10 h-10 text-[#F97316] dark:text-[#FDBA74] p-2 bg-[#FFEDD5] rounded-md dark:bg-[#7C2D12]" />
        <div className="text-3xl text-black dark:text-white">
          How to Claim Your Full Seat
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full gap-2 mx-auto justify-between">
        <div
          className={`bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl`}
        >
          <div className="mb-4">
            <PiBank
              className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
              key="bank"
            />
          </div>

          <p className="text-[#737373] dark:text-[#F8FAFC]">
            Join the Foundation Seeding Round
          </p>
        </div>
        <Image
          src={'/academy/right-arrow.png'}
          width={44}
          height={20}
          alt="arrow"
          className="rotate-90 md:rotate-0 my-5 md:my-0"
        />
        <div
          className={`bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl`}
        >
          <div className="mb-4">
            <Lock
              className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
              key="bank"
            />
          </div>

          <p className="text-[#737373] dark:text-[#F8FAFC]">
            Lock your dRC tokens
          </p>
        </div>
        <Image
          src={'/academy/right-arrow.png'}
          width={44}
          height={20}
          alt="arrow"
          className="rotate-90 md:rotate-0 my-5 md:my-0"
        />
        <div
          className={`bg-[#F1F1F1] dark:bg-[#525252] w-[300px] h-[130px] border border-[#D4D4D4] dark:border-[#737373] p-6 rounded-3xl`}
        >
          <div className="mb-4">
            <PiOfficeChair
              className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
              key="bank"
            />
          </div>

          <p className="text-[#737373] dark:text-[#F8FAFC]">
            Get assigned a Full Seat with benefits tied to your round
          </p>
        </div>
      </div>
      <div className="font-bold w-fit text-xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text mt-8">
        Early rounds offer higher discounts, better rewards, and priority
        access.
      </div>
    </div>
  );
};

export default HowToClaimFullSeat;
