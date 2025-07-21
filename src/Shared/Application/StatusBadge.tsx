import { formatStatus } from '@/components/admin/ApplicationStatusInfo';
import { X, XCircle } from 'lucide-react';
import React, { JSX } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PiCheckCircle, PiLockSimple } from 'react-icons/pi';

const StatusBadge = ({ status }: { status: string }) => {
  const commonClass =
    'font-semibold items-center flex flex-row justify-between gap-2 py-1 px-2 rounded-4xl text-lg';
  const variants: Record<string, JSX.Element> = {
    'no-access': (
      <div className={`${commonClass} bg-[#D4D4D4] text-[#525252]`}>
        <PiLockSimple className="w-5 h-5" /> No Access
      </div>
    ),
    received: (
      <div className={`${commonClass} bg-[#DBEAFE] text-[#2563EB]`}>
        <PiCheckCircle className="w-5 h-5" /> Received
      </div>
    ),
    approved: (
      <div className={`${commonClass} bg-[#D1FAE5] text-[#059669]`}>
        <PiCheckCircle className="w-5 h-5" /> Completed
      </div>
    ),
    declined: (
      <div className={`${commonClass} bg-[#FFE4E4] text-[#E11D20]`}>
        <XCircle className="w-5 h-5" /> Declined
      </div>
    ),
    'not-submitted': (
      <div className={`${commonClass} bg-[#D4D4D4] text-[#525252]`}>
        <X className="w-5 h-5" /> Not Submitted
      </div>
    ),
    'under-review': (
      <div className={`${commonClass} bg-[#FFF8C7] text-[#CA9D39]`}>
        <FaMagnifyingGlass className="w-5 h-5" /> Under Review
      </div>
    ),
  };

  return (
    variants[status] || (
      <div className="font-semibold">{formatStatus(status)}</div>
    )
  );
};

export default StatusBadge;
