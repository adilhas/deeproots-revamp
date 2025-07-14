import { formatStatus } from '@/components/admin/ApplicationStatusInfo';
import { useApplication } from '@/context/ApplicationContext';
import { X, XCircle } from 'lucide-react';
import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { PiCheckCircle } from 'react-icons/pi';
interface DashboardItem {
  title: string;
  description: string;
  date: string;
  status: string | undefined;
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
      description:
        'Register your interest to contribute to the DEEPROOTS Ecosystem and earn full seat as a private investor',
      date: '16 August 2025',
      status: application?.applicationStatus,
      tabName: 'application',
    },
    {
      title: 'Pre-approval',
      description: 'Sign NDA Submit relvant Documents',
      date: '20 August 2025',
      status: application?.preApproval,
      tabName: 'pre-approval',
    },
    {
      title: 'Deal Room',
      description: 'Sign NDA Submit relvant Documents',
      date: '20 August 2025',
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
            <div className="text-lg font-semibold">{data.title}</div>
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
                <X className="w-5 h-5" /> Not Submitted
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
            <div className="text-sm">{data.date}</div>
          </div>
          <button
            onClick={() => setCurrentTab(data.tabName)}
            className={`bg-gradient-to-r font-semibold px-3 py-2 rounded-xl text-white from-gradient-from to-gradient-to `}
          >
            View Details
          </button>
        </div>
      ))}
      <div className="space-y-4 bg-white p-4 rounded-xl my-4">
        <textarea
          name="notification-text"
          className="w-full p-3 resize-none placeholder-black placeholder-bold"
          rows={2}
          placeholder="Seeders Notification"
        ></textarea>

        <div className="flex justify-end">
          <button className="bg-gradient-to-r w-full max-w-[172px] from-gradient-from to-gradient-to text-white font-semibold px-4 py-2 rounded-xl">
            Send
          </button>
        </div>
      </div>
      <div className="my-4 bg-white p-4  rounded-xl flex flex-row  justify-between">
        <div>
          <div className="text-black text-2xl font-semibold">
            Management Note
          </div>
          <p>Management Note</p>
        </div>
        <div className="flex flex-col justify-end gap-3 min-w-[172px]">
          <button className="bg-[#D4D4D4] text-[#4B5563] w-full max-w-[172px] font-semibold px-4 py-2 rounded-xl">
            Decline
          </button>
          <button className="bg-gradient-to-r from-gradient-from w-full max-w-[172px] to-gradient-to text-white font-semibold px-4 py-2 rounded-xl">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardTab;
