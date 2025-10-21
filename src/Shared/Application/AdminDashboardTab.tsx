import { formatStatus } from '@/components/admin/ApplicationStatusInfo';
import { useApplication } from '@/context/ApplicationContext';
import { StatusType } from '@/types/application';
import { formatDate } from '@/utils/formatDate';
import { Lock, XCircle } from 'lucide-react';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PiCheckCircle } from 'react-icons/pi';
import SeederManagementNote from './SeederManagementNote';
import ProcessSteps from './ProcessSteps';
interface DashboardItem {
  title: string;
  description: string;
  date: string | undefined;
  status: StatusType | undefined;
  tabName: 'application' | 'pre-approval' | 'deal-room' | 'dashboard';
}
interface AdminDashboardProps {
  setCurrentTab: (
    tab: 'application' | 'pre-approval' | 'deal-room' | 'dashboard'
  ) => void;
}

const AdminDashboardTab: React.FC<AdminDashboardProps> = ({
  setCurrentTab,
}) => {
  const { application } = useApplication();
  const dashboardData: DashboardItem[] = [
    {
      title: 'Application',
      description: 'View Application Details',
      date: formatDate(application?.createdAt ?? ''),
      status: application?.applicationStatus,
      tabName: 'application',
    },
    {
      title: 'Pre-approval',
      description: 'Sign NDA & Submit relevant documents.',
      date: formatDate(application?.ndaSubmission?.acceptedAt ?? ''),
      status: application?.preApproval,
      tabName: 'pre-approval',
    },
    {
      title: 'Deal Room',
      description: 'Complete Payment and secure your foundation seat.',
      date: formatDate(application?.paymentDetails?.updatedAt ?? ''),
      status: application?.dealRoom,
      tabName: 'deal-room',
    },
  ];
  return (
    <div className="mb-10">
      {dashboardData.map((data) => (
        <div
          key={data.title}
          className="bg-white text-black p-4 my-3 rounded-xl w-full"
        >
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-2xl font-medium">{data.title}</div>
            {data.status === 'received' ? (
              <div className="font-semibold bg-[#DBEAFE] items-center flex flex-row justify-between gap-2 text-[#2563EB] py-1 px-2 rounded-4xl">
                <PiCheckCircle className="w-5 h-5" /> Received
              </div>
            ) : data.status === 'approved' ? (
              <div className="font-semibold bg-[#D1FAE5] items-center flex flex-row justify-between gap-2 text-[#059669] py-1 px-2 rounded-4xl">
                <PiCheckCircle className="w-5 h-5" /> Completed
              </div>
            ) : data.status === 'declined' ? (
              <div className="font-semibold bg-[#FFE4E4] items-center flex flex-row justify-between gap-2 text-[#E11D20] py-1 px-2 rounded-4xl">
                <XCircle className="w-5 h-5" /> Declined
              </div>
            ) : data.status === 'not-submitted' ? (
              <div className="font-semibold bg-[#D4D4D4] items-center flex flex-row justify-between gap-2 text-[#525252] py-1 px-2 rounded-4xl">
                <Lock className="w-5 h-5" /> Not Active
              </div>
            ) : data.status === 'under-review' ? (
              <div className="font-semibold bg-[#FFF8C7] items-center flex flex-row justify-between gap-2 text-[#CA9D39] py-1 px-2 rounded-4xl">
                <FaMagnifyingGlass className="w-5 h-5" /> Under Review
              </div>
            ) : (
              <div className="font-semibold">
                {formatStatus(data?.status ?? '')}
              </div>
            )}{' '}
          </div>
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div>{data.description}</div>
            {data.status === 'approved' && (
              <div className="text-sm">{data.date}</div>
            )}{' '}
          </div>
          {data.status !== 'not-submitted' && (
            <button
              onClick={() => setCurrentTab(data.tabName)}
              className={`bg-gradient-to-r font-semibold px-3 py-2 rounded-xl text-white from-gradient-from to-gradient-to `}
            >
              View Details
            </button>
          )}
        </div>
      ))}
      <SeederManagementNote />
      <ProcessSteps />
    </div>
  );
};

export default AdminDashboardTab;
