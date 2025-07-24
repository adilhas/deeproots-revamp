import { useApplication } from '@/context/ApplicationContext';
import { Globe, Mail, Phone } from 'lucide-react';
import React from 'react';
import { PiMapPinArea, PiUser } from 'react-icons/pi';

const ApprovedSeederOverview = () => {
  const { application } = useApplication();
  return (
    <div className="p-6 rounded-4xl bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] border border-[#999100] text-white flex flex-col md:flex-row justify-between items-start gap-2">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[75%] gap-y-3">
        <div className=" col-span-1 md:col-span-2 flex flex-col md:flex-row jjustify-start items-start md:items-center gap-1">
          <h2 className="text-4xl font-bold">{application?.fullName}</h2>
          <div className="text-[#9333EA] font-semibold bg-[#F3E8FF] text-md md:text-lg py-1 px-4 rounded-[40px] w-fit">
            You own 1 of 100 Foundation Seats
          </div>
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
        <div className="text-xl flex items-center gap-2">
          <div>
            <Globe className="w-5 h-5" />
          </div>
          <a target="_blank" href={application?.website} className="underline">
            {application?.website}
          </a>
        </div>
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

      <div className="text-start mt-6 md:mt-0 p-3 rounded-2xl h-full flex flex-col justify-center w-full md:w-[25%] bg-white text-[#696969]">
        <div>ID: Genesis Seat #7</div>
        <div className="w-fit mx-auto font-semibold text-3xl my-4">
          {Number(application?.capital) / 5} dRC
        </div>
        <div>
          <div className="w-full flex flex-wrap justify-between">
            <div className="font-normal">Vesting Progress</div>
            <div>15%</div>
          </div>
          <progress
            className="progress bg-[#E9E9E9] [&::-webkit-progress-value]:bg-[#3664AA] [&::-moz-progress-bar]:bg-[#3664AA] w-full"
            value={15}
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default ApprovedSeederOverview;
