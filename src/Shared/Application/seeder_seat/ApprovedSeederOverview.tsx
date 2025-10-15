import { useApplication } from '@/context/ApplicationContext';
import { Globe, Mail, Phone } from 'lucide-react';
import React from 'react';
import { PiMapPinArea, PiUser } from 'react-icons/pi';

const ApprovedSeederOverview = () => {
  const { application } = useApplication();
  // console.log('application', application?.paymentDetails?.updatedAt);
  const paymentUpdatedAt = application?.paymentDetails?.updatedAt
    ? new Date(application.paymentDetails.updatedAt)
    : null;

  let progressPercent = 0;

  if (paymentUpdatedAt) {
    const vestingEnd = new Date(paymentUpdatedAt);
    vestingEnd.setFullYear(vestingEnd.getFullYear() + 1); // Add 12 months

    const now = new Date();

    const totalDuration = vestingEnd.getTime() - paymentUpdatedAt.getTime();
    const timeElapsed = now.getTime() - paymentUpdatedAt.getTime();

    progressPercent = Math.min(
      100,
      Math.max(0, (timeElapsed / totalDuration) * 100)
    );
  }
  return (
    <div className="p-6 rounded-4xl bg-gradient-to-r overflow-hidden from-[#AD1AAF] to-[#0085A8] border border-[#999100] text-white flex flex-col md:flex-row justify-between items-start gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[75%] gap-y-3">
        <div className=" col-span-1 md:col-span-2 flex flex-col md:flex-row jjustify-start items-start md:items-center gap-1">
          <h2 className="text-4xl font-bold">{application?.fullName}</h2>
          {application?.seedTier === 'tier-3' ? (
            <div className="text-[#EA580C] font-semibold bg-[#FED7AA] text-sm md:text-lg py-1 px-4 rounded-[40px] w-fit">
              You own 1 of 10 Founder Seats
            </div>
          ) : (
            <div className="text-[#9333EA] font-semibold bg-[#F3E8FF] text-sm md:text-lg py-1 px-4 rounded-[40px] w-fit">
              You own 1 of 100 Foundation Seats
            </div>
          )}
        </div>
        <div className="text-xl flex items-center gap-2">
          <div>
            <Mail className="w-5 h-5" />
          </div>
          <div>{application?.email}</div>
        </div>
        <div className="text-xl flex items-center gap-2">
          <div>
            <PiMapPinArea className="w-5 h-5" />
          </div>
          <div>{application?.country}</div>
        </div>
        <div className="text-xl flex items-center gap-2">
          <div>
            <Phone className="w-5 h-5" />
          </div>
          <div>{application?.contact}</div>
        </div>
        {application?.website && application?.website !== '' && (
          <div className="text-xl flex items-center gap-2">
            <div>
              <Globe className="w-5 h-5" />
            </div>
            <a
              target="_blank"
              href={application?.website}
              className="underline line-clamp-1 overflow-hidden"
            >
              {application?.website}
            </a>
          </div>
        )}
        <div className="text-xl flex items-center gap-2">
          <div>
            <PiUser className="w-5 h-5" />
          </div>
          <div>
            {application?.indvOrOrg === 'Ind'
              ? 'Individual (IND)'
              : 'Organization (ORG)'}
          </div>
        </div>
      </div>

      <div className="text-start mt-6 md:mt-0 p-6 rounded-3xl h-full flex flex-col justify-center w-full md:w-[25%] bg-neutral-200 shadow-xl text-gradient-from">
        {/* dRC Amount */}
        <div className="w-fit mx-auto font-bold text-4xl my-4 drop-shadow-lg">
          {Number(application?.capital) / 5} dRC
        </div>

        {/* Seeding Progress */}
        <div className="w-full text-gradient-to">
          <div className="w-full flex flex-wrap justify-between mb-2">
            <div className="font-medium">Seeding Progress</div>
            <div className="font-semibold">{progressPercent.toFixed(0)}%</div>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-3 rounded-full bg-white overflow-hidden shadow-inner">
            <div
              className="h-3 rounded-full bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] shadow-md"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovedSeederOverview;
