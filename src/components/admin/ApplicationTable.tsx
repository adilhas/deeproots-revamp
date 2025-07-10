'use client';
import StatusDot from '@/Shared/StatusDot';
import { StatusType } from '@/types/application';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type Submission = {
  id: string;
  fullName: string;
  email: string;
  capital: string;
  applicationStatus: string;
  createdAt: string;
};

const ApplicationTable = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="overflow-x-auto w-full p-4">
      <h2 className="text-2xl font-bold mb-4">Applications</h2>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary" />
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          No applications found.
        </div>
      ) : (
        <div className="p-3 bg-white rounded-2xl">
          <table className="table w-full rounded-2xl ">
            <thead className="bg-[#E9E9E9] rounded-2xl text-[#303030]">
              <tr className="rounded-2xl">
                <th className="rounded-l-2xl">Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Seed Amount</th>
                <th>Status</th>
                <th className="rounded-r-2xl">Action</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((item) => {
                return (
                  <tr key={item.id} className="border-b border-[#d5d4d5]">
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>{item.fullName}</td>
                    <td>{item.email}</td>
                    <td>{item.capital}</td>
                    <td>
                      <StatusDot
                        status={item.applicationStatus as StatusType}
                      />
                    </td>
                    <td>
                      <Link
                        href={`/admin/application/${item.id}`}
                        className="underline"
                      >
                        View Details
                      </Link>
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
