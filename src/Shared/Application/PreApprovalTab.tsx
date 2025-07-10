import React from 'react';
import PreAprovalSubmission from './PreApprovalSubmission';
import { useApplication } from '@/context/ApplicationContext';
import PreApprovalSubmitted from './PreApprovalSubmitted';
import { useSession } from 'next-auth/react';

const PreApprovalTab = () => {
  const { application } = useApplication();
  const { data: session } = useSession();
  if (
    application?.preApproval === 'not-submitted' &&
    session?.user.role === 'admin'
  )
    return <div className="text-center">Pre Approval not submitted yet</div>;

  if (application?.applicationStatus === 'approved') {
    return (
      <div>
        {application?.preApproval === 'not-submitted' &&
        session?.user.role === 'seeder' ? (
          <PreAprovalSubmission />
        ) : (
          <PreApprovalSubmitted />
        )}
      </div>
    );
  }

  return (
    <div className="text-center">
      Once the application is approved your Approval tab will be unlocked
    </div>
  );
};

export default PreApprovalTab;
