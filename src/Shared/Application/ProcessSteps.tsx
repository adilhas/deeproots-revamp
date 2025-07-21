import { useApplication } from '@/context/ApplicationContext';
import React from 'react';
import StatusDot from '../StatusDot';
const ProcessSteps = () => {
  const { application } = useApplication();

  const processSteps = [
    {
      title: 'Application Received',
      description: 'Seeder submits application.',
      statusColor: '#4BE562',
    },
    {
      title: 'Admin Approval',
      description: 'Admin reviews & approves application.',
      statusColor:
        application?.applicationStatus === 'declined'
          ? '#E78181'
          : application?.applicationStatus !== 'approved'
            ? '#D9D9D9'
            : '#4BE562',
    },
    {
      title: 'Pre-Approval Received',
      description: 'Seeder submits KYC, NDA, SAFE docs.',
      statusColor:
        application?.preApproval === 'under-review'
          ? '#F4C560'
          : application?.preApproval === 'not-submitted'
            ? '#D9D9D9'
            : '#4BE562',
    },
    {
      title: 'Admin Approval',
      description: 'Admin reviews & approves Pre-Approval.',
      statusColor:
        application?.preApproval === 'approved'
          ? '#4BE562'
          : application?.preApproval === 'declined'
            ? '#E78181'
            : '#D9D9D9',
    },
    {
      title: 'Deal Room Received',
      description: 'Seeder accesses Deal Room, submits payment.',
      statusColor:
        application?.dealRoom !== 'not-submitted' ? '#4BE562' : '#D9D9D9',
    },

    {
      title: 'Admin Final Approval',
      description: 'Admin confirms full payment.',
      statusColor:
        application?.paymentDetails?.paymentStatus === 'approved'
          ? '#4BE562'
          : application?.paymentDetails?.paymentStatus === 'declined'
            ? '#E78181'
            : '#D9D9D9',
    },
    {
      title: 'Welcome Onboard',
      description: 'Admin sends welcome email & dashboard link.',
      statusColor: '#D9D9D9',
    },
  ];
  return (
    <div className="mt-8 bg-white text-[#525252] p-4 md:p-6 rounded-xl">
      <h3 className="text-lg font-bold pb-4 border-b border-[#D4D4D4] mb-4">
        Process
      </h3>
      <ol className="space-y-4 text-xl">
        {processSteps.map((step, index) => (
          <li key={index} className="">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div className="flex flex-row items-start gap-3">
                <div
                  className={`w-4 h-4 rounded-md mt-2`}
                  style={{ background: step.statusColor }}
                ></div>
                <div>
                  <div className="font-semibold mb-1">
                    {index + 1}. {step.title}
                  </div>
                  {step.description && (
                    <div className="font-normal text-lg">
                      {step.description}
                    </div>
                  )}
                </div>
              </div>
              <div className="md:flex gap-2 hidden">
                <StatusDot status="under-review" />
                <StatusDot status="approved" />
                <StatusDot status="declined" />
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* <div className="mt-6 flex gap-4 justify-end">
      <button className="btn btn-sm bg-[#0383A8] text-white">
        Upload Document
      </button>
      <button className="btn btn-sm bg-[#6C43AD]">Package Document</button>
    </div> */}
    </div>
  );
};

export default ProcessSteps;
