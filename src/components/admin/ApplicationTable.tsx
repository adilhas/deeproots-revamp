'use client';
import AnnouncementManager from '@/Shared/Application/AnnouncementManager';
import MainSiteAnnouncementManager from '@/Shared/Application/MainSiteAnnouncemntManager';
import StatusDot from '@/Shared/StatusDot';
import { ApplicationDataType, StatusType } from '@/types/application';
import { formatDate } from '@/utils/formatDate';
import { ArrowRight, Search, Trash2 } from 'lucide-react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type ApplicationTableProps = {
  selectedSubmission: ApplicationDataType | null;
  setSelectedSubmission: React.Dispatch<
    React.SetStateAction<ApplicationDataType | null>
  >;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ApplicationTable: React.FC<ApplicationTableProps> = ({
  setSelectedSubmission,
  setIsModalOpen,
}) => {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<ApplicationDataType[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchAllSubmissions = async () => {
    try {
      const res = await fetch('/api/private-seed');
      if (!res.ok) throw new Error('Failed to fetch submissions');
      const data = await res.json();
      return data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchAllSubmissions();
      setSubmissions(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredSubmissions = submissions.filter(
    (item) =>
      item.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const getStageStatus = (application: ApplicationDataType) => {
    let status: StatusType;
    let stage;

    if (
      application.applicationStatus !== 'approved' ||
      application.preApproval === 'not-submitted'
    ) {
      stage = 'Application';
      status = application.applicationStatus;
    } else if (
      application.preApproval !== 'approved' ||
      application.dealRoom === 'not-submitted'
    ) {
      stage = 'Pre-Approval';
      status = application.preApproval;
    } else {
      stage = 'Deal Room';
      status = application.dealRoom;
    }

    return { status, stage };
  };
  const openDeleteModal = (submission: ApplicationDataType) => {
    setSelectedSubmission(submission);
    setIsModalOpen(true);
  };

  return (
    <div className=" w-full p-4">
      <div className="flex flex-col md:flex-row gap-2 items-start my-2">
        <AnnouncementManager />
        <MainSiteAnnouncementManager />
      </div>
      <div className="flex justify-between items-center mb-4 gap-8">
        {/* here add send notification to all */}
        {/* <BroadcastNotification /> */}
        <div className="relative w-full max-w-[474px] mb-4">
          {/* Left Icon */}
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-[#525252]" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Search by Seeder Name or Email"
            className="w-full rounded-3xl bg-white placeholder:text-[#525252] py-2 pl-10 pr-10 text-sm border border-gray-300 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Right Icon */}
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center cursor-pointer">
            <ArrowRight className="w-4 h-4 text-[#525252]" />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      ) : filteredSubmissions.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No applications found.
        </div>
      ) : (
        <div className="p-4 bg-white rounded-4xl overflow-x-auto">
          <table className="table w-full rounded-4xl">
            <thead className="bg-[#E9E9E9] rounded-4xl text-[#303030]">
              <tr className="rounded-2xl">
                <th className="rounded-l-2xl">Date</th>
                <th>Email</th>
                <th>Name</th>
                <th>Seed Amount</th>
                <th>Stage</th>
                <th>Status</th>
                <th className="rounded-r-2xl text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubmissions.map((item) => {
                const { stage, status } = getStageStatus(item);
                return (
                  <tr
                    key={item.id}
                    className="cursor-pointer hover:bg-neutral-200"
                    onClick={() => router.push(`/admin/application/${item.id}`)}
                  >
                    <td className=" rounded-l-2xl ">
                      {formatDate(item.createdAt)}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.fullName}</td>
                    <td>{item.capital}</td>
                    <th>{stage}</th>
                    <td>
                      <StatusDot status={status} />
                    </td>
                    <td
                      className="rounded-r-2xl text-center"
                      onClick={(e) => e.stopPropagation()} // prevent row click
                    >
                      <button
                        onClick={() => openDeleteModal(item)}
                        className="p-2 text-red-500 hover:text-red-700"
                        title="Delete submission"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationTable;
