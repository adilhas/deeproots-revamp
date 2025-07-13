import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import { ApplicationDataType, StatusType } from '@/types/application';
import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';
import DashboardTab from './DashboardTab';
import ApplicationTab from './ApplicationTab';
import PreApprovalTab from './PreApprovalTab';
import DealRoomTab from './DealRoomTab';
import Image from 'next/image';
import { Globe, Mail, Phone } from 'lucide-react';
import { PiMapPinArea, PiUser } from 'react-icons/pi';
import AdminDashboardTab from './AdminDashboardTab';
import StatusDot from '../StatusDot';
import AdminDealRoom from './AdminDealRoomTab';

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
    <div className="border min-h-screen bg-[#E7E7E7] text-gray-800 pb-10">
      {/* Header */}
      <div className="bg-gradient-to-r py-3">
        <div className="w-full max-w-[1200px] bg-[#DDDDDD] px-4 rounded-3xl mx-auto flex flex-row items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <Image
              src={'/dashboard/dashboard-logo.png'}
              width={52}
              height={52}
              alt="dashboard logo"
            />
            <div className="text-2xl font-bold font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              DEEPROOTS
            </div>
            <div className="text-xl bg-white/10 text-[#525252] border border-[#A1A1A1] px-3 py-1 flex items-center justify-center rounded-full font-semibold">
              Pre seed
            </div>
          </div>
          <button
            className="text-lg text-black underline"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3">
        <ApplicationStatusInfo />

        {application && (
          <div className="p-6 rounded-4xl bg-gradient-to-r from-gradient-from to-gradient-to text-white flex flex-col md:flex-row justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold">{application.fullName}</h2>
              <div className="text-xl flex items-center gap-2 my-4">
                <div>
                  <Mail className="w-5 h-5" />
                </div>
                <div>{application.email}</div>
              </div>
              <div className="text-xl flex items-center gap-2 my-4">
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
            <div>
              <div className="text-xl flex items-center gap-2 my-4">
                <div>
                  <Phone className="w-5 h-5" />
                </div>
                <div>{application.contact}</div>
              </div>
              <div className="text-xl flex items-center gap-2 my-4">
                <div>
                  <PiMapPinArea className="w-5 h-5" />
                </div>
                <div>{application.country}</div>
              </div>
              <div className="text-xl flex items-center gap-2 my-4">
                <div>
                  <Globe className="w-5 h-5" />
                </div>
                <div>{application.website}</div>
              </div>
            </div>
            <div className="text-start mt-6 md:mt-0">
              <div className="text-xl font-bold">
                <div className="flex items-center gap-4">
                  {[
                    { value: '02', label: 'Days' },
                    { value: '24', label: 'Hours' },
                    { value: '03', label: 'Min' },
                    { value: '38', label: 'Sec' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-xl font-bold">{item.value}</div>
                      <div className="text-xs">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-2xl font-bold mt-2">
                ${application.capital}
              </div>
            </div>
          </div>
        )}

        <div className="bg-white  my-6 p-2 rounded-full flex flex-row justify-between items-center gap-6 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setCurrentTab(tab.key)}
              className={`p-2 rounded-2xl flex flex-row items-center justify-center gap-2 w-full text-xl ${
                currentTab === tab.key ? 'bg-gray-300 font-semibold' : ''
              }`}
            >
              {tab.label === 'Application' && (
                <StatusDot
                  status={application.applicationStatus as StatusType}
                />
              )}
              {tab.label === 'Pre-Approval' && (
                <StatusDot status={application.preApproval as StatusType} />
              )}
              {tab.label === 'Deal Room' && (
                <StatusDot status={application.dealRoom as StatusType} />
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
