'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApplicationStatusInfo from '@/components/admin/ApplicationStatusInfo';
import PageHeader from '@/components/admin/applications_details/PageHeader';
import ApplicantSummaryCard from '@/components/admin/applications_details/ApplicantSummaryCard';
import ApplicationAnswers from '@/components/admin/applications_details/ApplicationAnswers';
import ApplicationSummaryTable from '@/components/admin/applications_details/ApplicationSummaryTable';
import ProcessSteps from '@/components/admin/applications_details/ProcessSteps';

type Submission = {
  id: string;
  fullName: string;
  email: string;
  contact: string;
  country: string;
  website: string;
  capital: string;
  value: string;
  whyJoin: string;
  canPassKyc: boolean;
  indvOrOrg: string;
  confidentiality: boolean;
  acknowledgement: boolean;
  applicationStatus: string;
  createdAt: string;
};

const ApplicationDetailsPage = () => {
  const router = useRouter();
  const { applicationId } = router.query;

  const [submission, setSubmission] = useState<Submission | null>(null);
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

    const fetchData = async () => {
      setLoading(true);
      const data = await fetchSubmissionById(applicationId);
      setSubmission(data);
      setLoading(false);
    };

    fetchData();
  }, [applicationId]);

  console.log('-->', submission);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg text-primary" />
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="text-center text-red-500 py-10">
        Submission not found.
      </div>
    );
  }

  return (
    <div className="bg-[#17151A] min-h-screen">
      <div className="p-6 max-w-[1200px] mx-auto">
        <PageHeader />
        <ApplicationStatusInfo />
        <ApplicantSummaryCard submission={submission} />
        <ApplicationAnswers submission={submission} />
        <ApplicationSummaryTable submission={submission} />
        <ProcessSteps />
      </div>
    </div>
  );
};

export default ApplicationDetailsPage;
