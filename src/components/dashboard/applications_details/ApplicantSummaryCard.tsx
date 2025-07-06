import React from 'react';
import { statusColorMap } from '@/utils/statusColor';

type Props = {
  submission: {
    fullName: string;
    email: string;
    country: string;
    website: string;
    applicationStatus: string;
    contact: string;
  };
};

const ApplicantSummaryCard: React.FC<Props> = ({ submission }) => {
  const bgColor =
    statusColorMap[submission.applicationStatus as keyof typeof statusColorMap];

  return (
    <div
      className="my-4 p-4 md:p-6 rounded-xl text-[#080707] grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h2 className="text-xl font-bold">{submission.fullName}</h2>
        <p className="text-lg font-semibold">{submission.email}</p>
      </div>
      <div>
        <p>{submission.contact}</p>
        <p className="">{submission.country}</p>
        <p className="">
          <span className="text-blue-900">{submission.website}</span>
        </p>
      </div>
      <div className="text-3xl font-bold ml-auto">$ 0.00</div>
    </div>
  );
};

export default ApplicantSummaryCard;
