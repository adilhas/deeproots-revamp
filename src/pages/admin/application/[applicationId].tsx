'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApplicationDetails from '@/Shared/Application/ApplicationDetails';
import { useApplication } from '@/context/ApplicationContext';
import SeederSeat from '@/Shared/Application/seeder_seat/SeederSeat';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import AuthLoader from '@/components/AuthLoader';

const ApplicationDetailsPage = () => {
  const router = useRouter();
  const { applicationId } = router.query;
  const { data: session } = useSession();

  const { application, setApplication } = useApplication();

  const [loading, setLoading] = useState(true);

  const fetchSubmissionById = async (id: string) => {
    try {
      const res = await fetch(`/api/private-seed/${id}`);
      if (!res.ok) toast.error('Failed to fetch submission');
      return await res.json();
    } catch {
      toast.error('An unexpected error occurred');
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
      // console.log({ data });
      setApplication(data);
      setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [applicationId]);

  if (loading) {
    return <AuthLoader />;
  }

  if (!application) {
    return (
      <div className="text-center text-red-500 py-10">
        Submission not found.
      </div>
    );
  }

  return application.dealRoom === 'approved' &&
    session?.user?.role === 'seeder' ? (
    <SeederSeat />
  ) : (
    <ApplicationDetails application={application} />
  );
};

export default ApplicationDetailsPage;
