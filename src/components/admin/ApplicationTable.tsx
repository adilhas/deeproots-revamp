'use client';
import { statusColorMap } from '@/utils/statusColor';
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
        <table className="table w-full rounded-2xl shadow">
          <thead className="bg-[#252525] rounded-2xl">
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Seed Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((item) => {
              const bgColor =
                statusColorMap[
                  item.applicationStatus as keyof typeof statusColorMap
                ];
              return (
                <tr key={item.id} className="border-b border-[#3F3F3F]">
                  <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.capital}</td>
                  <td>
                    <div
                      className={`w-3 h-3 rounded-full`}
                      style={{ backgroundColor: bgColor }}
                    ></div>
                  </td>
                  <td>
                    <Link
                      href={`/admin/application/${item.id}`}
                      className="underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ApplicationTable;
