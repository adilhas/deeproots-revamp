import { ApplicationDataType } from '@/types/application';
import React from 'react';
import { formatDate } from '@/utils/formatDate';
import StatusBadge from './StatusBadge';
import SeederManagementNote from './SeederManagementNote';
interface DashboardItem {
  title: string;
  description: string;
  date: string;
  status: string;
  tabName: 'application' | 'pre-approval' | 'deal-room' | 'dashboard';
}
interface DashboardTabProps {
  setCurrentTab: (
    tab: 'application' | 'pre-approval' | 'deal-room' | 'dashboard'
  ) => void;
  application: ApplicationDataType;
}

const DashboardTab: React.FC<DashboardTabProps> = ({
  setCurrentTab,
  application,
}) => {
  const dashboardData: DashboardItem[] = [
    {
      title: 'Application',
      description:
        'Register your interest to contribute to the DeepRoots ecosystem and request a private Seeder Seat.',
      date: formatDate(application.createdAt),
      status: application.applicationStatus,
      tabName: 'application',
    },
    {
      title: 'Pre-approval',
      description: 'Sign NDA Submit relvant Documents',
      date: formatDate(application.ndaSubmission?.acceptedAt ?? ''),
      status:
        application.applicationStatus === 'approved'
          ? application.preApproval
          : 'no-access',
      tabName: 'pre-approval',
    },
    {
      title: 'Deal Room',
      description: 'Sign NDA Submit relvant Documents',
      date: formatDate(application.paymentDetails?.updatedAt ?? ''),
      status:
        application.preApproval === 'approved'
          ? application.dealRoom
          : 'no-access',
      tabName: 'deal-room',
    },
  ];
  console.log(application);
  return (
    <div className="flex flex-col gap-y-11">
      {dashboardData.map((data, index) => (
        <div
          key={data.title}
          className="bg-white text-black p-4 rounded-3xl w-full"
        >
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-2xl font-medium">
              {index + 1}. {data.title}
            </div>
            <StatusBadge status={data.status} />
          </div>
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-[#525252] text-lg">{data.description}</div>
            {data.status !== 'not-submitted' && data.status !== 'no-access' && (
              <div className="text-sm">{data.date}</div>
            )}
          </div>
          <button
            onClick={() => setCurrentTab(data.tabName)}
            className="bg-[#E9E9E9] font-semibold text-lg px-6 py-[10px] rounded-lg text-[#4B5563]"
          >
            View Details
          </button>
        </div>
      ))}
      <div className="bg-white text-black p-4 rounded-3xl w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center mb-3 gap-2 flex-wrap justify-between">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
            <div className="text-2xl font-medium">
              Schedule call with Founder
            </div>
            <div className="bg-[#D1FAE5] py-1 px-4 text-nowrap text-[#059669] text-lg font-semibold rounded-4xl">
              1 on 1
            </div>
          </div>
          {application.dealRoom !== 'approved' && (
            <StatusBadge status="no-access" />
          )}
        </div>
        <div className="flex items-center mb-3 flex-wrap justify-between">
          <div className="text-[#525252] text-lg">
            Have a 15 min call with founder to ask Questions and review live
            products on DEEPROOTS
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-y-11 gap-x-3">
        <div className="bg-white text-black p-4 rounded-3xl w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 mb-3 flex-wrap justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="text-2xl font-medium">Foundation seat</div>
              <div className="bg-[#F3E8FF] py-1 px-4 text-[#9333EA] text-lg font-semibold rounded-4xl">
                100 Seats
              </div>
            </div>
            {application.dealRoom !== 'approved' && (
              <StatusBadge status="no-access" />
            )}
          </div>
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-[#525252] text-lg">
              Secure your place in DEEPROOTS. <br />
              Join the Deal Room for details.
            </div>
          </div>
        </div>

        <div className="bg-white text-black p-4 rounded-3xl w-full">
          <div className="flex flex-col md:flex-row items-start gap-2 md:items-center mb-3 flex-wrap justify-between">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="text-2xl font-medium">Founder seat</div>
              <div className="bg-[#FEF3C7] py-1 px-4 text-[#D97706] text-lg font-semibold rounded-4xl">
                10 Seats
              </div>
            </div>
            {application.dealRoom !== 'approved' && (
              <StatusBadge status="no-access" />
            )}
          </div>
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-[#525252] text-lg">
              Elite access. Limited availability. <br />
              Explore more inside the Deal Room.
            </div>
          </div>
        </div>
      </div>
      <SeederManagementNote />
    </div>
  );
};

export default DashboardTab;
