'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApplicationDetails from '@/Shared/Application/ApplicationDetails';
import { useApplication } from '@/context/ApplicationContext';
import SeederSeat from '@/Shared/Application/seeder_seat/SeederSeat';

const ApplicationDetailsPage = () => {
  const router = useRouter();
  const { applicationId } = router.query;

  const { application, setApplication } = useApplication();

  const [loading, setLoading] = useState(true);

  const fetchSubmissionById = async (id: string) => {
    try {
      const res = await fetch(`/api/private-seed/${id}`);
      if (!res.ok) throw new Error('Failed to fetch submission');
      return await res.json();
    } catch (err) {
      console.error(err);
      return null;
    }
  };

  useEffect(() => {
    if (!applicationId || typeof applicationId !== 'string') return;
    if (application?.id === applicationId) {
      setLoading(false); // already in context
      return;
    }
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchSubmissionById(applicationId);
      setApplication(data);
      setLoading(false);
    };

    fetchData();
  }, [applicationId]);

  console.log('-->', application);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!application) {
    return (
      <div className="text-center text-red-500 py-10">
        Submission not found.
      </div>
    );
  }

  return application.dealRoom === 'approved' ? (
    <SeederSeat />
  ) : (
    <ApplicationDetails application={application} />
  );
};

export default ApplicationDetailsPage;
