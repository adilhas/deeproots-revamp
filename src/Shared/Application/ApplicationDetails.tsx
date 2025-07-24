import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import { ApplicationDataType, StatusType } from '@/types/application';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import DashboardTab from './DashboardTab';
import ApplicationTab from './ApplicationTab';
import PreApprovalTab from './PreApprovalTab';
import DealRoomTab from './DealRoomTab';
import { Globe, Mail, Phone } from 'lucide-react';
import { PiMapPinArea, PiUser } from 'react-icons/pi';
import AdminDashboardTab from './AdminDashboardTab';
import StatusDot from '../StatusDot';
import AdminDealRoom from './AdminDealRoomTab';
import { formatCurrencyShort } from '@/utils/formatCapital';
import DashboardHeader from './DashboardHeader';

interface ApplicationDetailsProps {
  application: ApplicationDataType;
}

const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({
  application,
}) => {
  const [currentTab, setCurrentTab] = useState<
    'dashboard' | 'application' | 'pre-approval' | 'deal-room'
  >('dashboard');
  const { data: session } = useSession();

  const tabs = [
    { key: 'dashboard', label: 'Dashboard' },
    { key: 'application', label: 'Application' },
    { key: 'pre-approval', label: 'Pre-Approval' },
    { key: 'deal-room', label: 'Deal Room' },
  ] as const;

  return (
    <div className="border min-h-screen font-archivo bg-[#E7E7E7] text-[#303030] pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r py-3">
        <DashboardHeader
          label={session?.user.role === 'seeder' ? 'Pre seed' : 'Admin'}
          onRight={
            <button
              className="text-lg text-[#696969] underline"
              onClick={() => signOut()}
            >
              Log Out
            </button>
          }
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <ApplicationStatusInfo />

        {application && (
          <div className="p-6 rounded-4xl bg-gradient-to-r from-[#AD1AAF] to-[#0085A8] border border-[#999100] text-white flex flex-col md:flex-row justify-between items-start">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-y-3">
              <h2 className="text-4xl font-bold col-span-1 md:col-span-2">
                {application.fullName}
              </h2>
              <div className="text-xl flex items-center gap-2">
                <div>
                  <Mail className="w-5 h-5" />
                </div>
                <div>{application.email}</div>
              </div>
              <div className="text-xl flex items-center gap-2">
                <div>
                  <PiMapPinArea className="w-5 h-5" />
                </div>
                <div>{application.country}</div>
              </div>
              <div className="text-xl flex items-center gap-2">
                <div>
                  <Phone className="w-5 h-5" />
                </div>
                <div>{application.contact}</div>
              </div>
              {application?.website && application?.website !== '' && (
                <div className="text-xl flex items-center gap-2">
                  <div>
                    <Globe className="w-5 h-5" />
                  </div>
                  <a
                    target="_blank"
                    href={application.website}
                    className="underline"
                  >
                    {application.website}
                  </a>
                </div>
              )}
              <div className="text-xl flex items-center gap-2">
                <div>
                  <PiUser className="w-5 h-5" />
                </div>
                <div>
                  {application.indvOrOrg === 'Ind'
                    ? 'Individual (IND)'
                    : 'Organization (ORG)'}
                </div>
              </div>
            </div>

            <div className="text-start mt-6 md:mt-0 h-full flex flex-col justify-center">
              <div className="flex flex-col items-center justify-center h-full">
                {/* <div className="flex items-center gap-4">
                  {[
                    { value: '02', label: 'Days' },
                    { value: '24', label: 'Hours' },
                    { value: '03', label: 'Min' },
                    { value: '38', label: 'Sec' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-4xl font-semibold">{item.value}</div>
                      <div className="text-xs">{item.label}</div>
                    </div>
                  ))}
                </div> */}
                <div className="text-5xl font-semibold md:mt-[40%]">
                  ${formatCurrencyShort(Number(application.capital))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white  my-6 p-2 rounded-4xl md:rounded-[64px] flex flex-col md:flex-row justify-between items-center gap-x-6 gap-y-2 text-sm font-medium">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setCurrentTab(tab.key)}
              className={`p-2 rounded-[64px] flex flex-row text-[#696969]  items-center justify-start md:justify-center gap-2 w-full text-xl ${
                currentTab === tab.key
                  ? 'bg-[#E9E9E9] font-semibold border border-[#D4D4D4]'
                  : 'font-normal'
              }`}
            >
              {tab.label === 'Application' && (
                <div className="flex items-center flex-row gap-2">
                  <StatusDot
                    status={application.applicationStatus as StatusType}
                  />
                  {index}.
                </div>
              )}

              {tab.label === 'Pre-Approval' && (
                <div className="flex items-center flex-row gap-2">
                  <StatusDot status={application.preApproval as StatusType} />
                  {index}.
                </div>
              )}
              {tab.label === 'Deal Room' && (
                <div className="flex items-center flex-row gap-2">
                  <StatusDot status={application.dealRoom as StatusType} />
                  {index}.
                </div>
              )}

              {tab.label}
            </button>
          ))}
        </div>
        {currentTab === 'dashboard' &&
          (session?.user?.role === 'admin' ? (
            <AdminDashboardTab setCurrentTab={setCurrentTab} />
          ) : (
            <DashboardTab
              application={application}
              setCurrentTab={setCurrentTab}
            />
          ))}
        {currentTab === 'application' && (
          <ApplicationTab
            valueYouCanGive={application.value}
            whyJoin={application.whyJoin}
            dateSubmitted={application.createdAt}
            indOrOrg={application.indvOrOrg}
          />
        )}
        {currentTab === 'pre-approval' && <PreApprovalTab />}
        {currentTab === 'deal-room' &&
          (session?.user?.role === 'admin' ? (
            <AdminDealRoom />
          ) : (
            <DealRoomTab />
          ))}
      </div>
    </div>
  );
};

export default ApplicationDetails;
