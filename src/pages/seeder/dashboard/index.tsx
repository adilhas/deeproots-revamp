'use client';
import { useApplication } from '@/context/ApplicationContext';
import ApplicationDetails from '@/Shared/Application/ApplicationDetails';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function ContributorDashboard() {
  const { application, setApplication } = useApplication();
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchApplication = async () => {
      if (!session?.user?.applicationId) return;

      try {
        const res = await fetch(
          `/api/private-seed/${session.user.applicationId}`
        );
        const data = await res.json();
        setApplication(data);
      } catch (error) {
        console.error('Failed to fetch application', error);
      } finally {
        setLoading(false);
      }
    };

    if (status === 'authenticated') {
      fetchApplication();
    }
  }, [session, status]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading application...
      </div>
    );
  }

  if (!application) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        Failed to load application data.
      </div>
    );
  }

  return <ApplicationDetails application={application} />;
}
