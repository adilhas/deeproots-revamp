'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApplicationStatusInfo from '@/components/dashboard/ApplicationStatusInfo';
import PageHeader from '@/components/dashboard/applications_details/PageHeader';
import ApplicantSummaryCard from '@/components/dashboard/applications_details/ApplicantSummaryCard';
import ApplicationAnswers from '@/components/dashboard/applications_details/ApplicationAnswers';
import ApplicationSummaryTable from '@/components/dashboard/applications_details/ApplicationSummaryTable';
import ProcessSteps from '@/components/dashboard/applications_details/ProcessSteps';

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
  disclosureTerm: boolean;
  applicationStatus: string;
  createdAt: string;
  nonUsCitizen: boolean;
};

const ApplicationDetailsPage = () => {
  const [submission, setSubmission] = useState<Submission>({
    id: 'cmct0gfrw0001vokcz8mw327z',
    fullName: 'mike',
    email: 'test@test.com',
    contact: '+19087654321',
    country: 'India',
    website: 'https://www.asd.com',
    capital: '10000',
    value: 'asdasd',
    whyJoin: 'asdasd',
    canPassKyc: true,
    indvOrOrg: 'Ind',
    confidentiality: true,
    acknowledgement: true,
    disclosureTerm: true,
    nonUsCitizen: true,
    applicationStatus: 'Received',
    createdAt: '2025-07-07T11:21:22.463Z',
  });

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
