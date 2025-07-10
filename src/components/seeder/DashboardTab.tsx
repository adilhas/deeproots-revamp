import React from 'react';
interface DashboardItem {
  title: string;
  description: string;
  date: string;
  status: 'Completed' | 'Pending' | 'In Progress';
  tabName?: 'application' | 'pre-approval' | 'deal-room' | 'dashboard';
}
interface DashboardTabProps {
  setCurrentTab: (
    tab: 'application' | 'pre-approval' | 'deal-room' | 'dashboard'
  ) => void;
}

const DashboardTab: React.FC<DashboardTabProps> = () => {
  const dashboardData: DashboardItem[] = [
    {
      title: 'Application',
      description:
        'Register your interest to contribute to the DEEPROOTS Ecosystem and earn full seat as a private investor',
      date: '16 August 2025',
      status: 'Completed',
      tabName: 'application',
    },
    {
      title: 'Pre-approval',
      description: 'Sign NDA Submit relvant Documents',
      date: '20 August 2025',
      status: 'Completed',
      tabName: 'pre-approval',
    },
    {
      title: 'Deal Room',
      description: 'Sign NDA Submit relvant Documents',
      date: '20 August 2025',
      status: 'Completed',
      tabName: 'deal-room',
    },
  ];
  return (
    <div>
      {dashboardData.map((data) => (
        <div
          key={data.title}
          className="bg-white text-black p-4 rounded-xl w-full"
        >
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div className="text-lg font-semibold">{data.title}</div>
            <div className="text-green-500">{data.status}</div>
          </div>
          <div className="flex items-center mb-3 flex-wrap justify-between">
            <div>{data.description}</div>
            <div className="text-sm">{data.date}</div>
          </div>
          <button className="bg-gradient-to-r font-semibold px-3 py-2 rounded-xl text-white from-gradient-from to-gradient-to">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default DashboardTab;
