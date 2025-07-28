import { useApplication } from '@/context/ApplicationContext';
import Image from 'next/image';
import React from 'react';

const FoundationSeatPerks = () => {
  const { application } = useApplication();
  return (
    <div className="flex flex-row gap-[18px]">
      <div className="bg-[#F5F5F5] w-full p-4 text-center rounded-2xl">
        <div className="w-fit h-fit mx-auto">
          <Image
            src={'/dashboard/foundation-seat.png'}
            width={160}
            height={160}
            alt="foundation seat"
          />
        </div>

        <div className="text-xl font-semibold">Foundation seat</div>
        <div className="bg-[#E9D5FF] text-center mx-auto py-1 px-4 text-[#7E22CE] text-sm w-fit font-semibold rounded-4xl">
          1 Seat Earned
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-4 text-center rounded-2xl w-full">
        <div className="w-fit h-fit mx-auto">
          <Image
            src={'/dashboard/founder-call.png'}
            width={160}
            height={160}
            alt="founder call"
          />
        </div>

        <div className="text-xl font-semibold">Founder’s call</div>
        {application?.seedTier === 'tier-1' ? (
          <div className="bg-[#BFBFBF] text-center mx-auto py-1 px-4 text-[#525252] text-sm w-fit font-semibold rounded-4xl">
            Not Earned
          </div>
        ) : (
          <div className="bg-[#E9D5FF] text-center mx-auto py-1 px-4 text-[#7E22CE] text-sm w-fit font-semibold rounded-4xl">
            Active
          </div>
        )}
      </div>
    </div>
  );
};

export default FoundationSeatPerks;
