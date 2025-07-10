// components/ProcessSteps.tsx
import React from 'react';
const processSteps = [
  {
    title: 'Application Received',
    description: 'KYC, Entity Type, Confidentiality Agreement Checked',
  },
  {
    title: 'Approved by the founder',
  },
  {
    title: 'Due Diligence Package',
    description: (
      <ul>
        <li>
          Package Submitted by Seeder (Company deck, proof of funds, project
          alignment).
        </li>
        <li>
          KYC & NDA Sent to Seeder (Auto-trigger from CRM or backend email tool)
        </li>
      </ul>
    ),
  },
  {
    title: 'Compliance Check',
    description: (
      <ul>
        <li>NDA Received</li>
        <li>
          KYC Verified (Tick after backend uploads docs or AML/KYC review)
        </li>
      </ul>
    ),
  },
  {
    title: 'Final Confirmation (Approved/Denied)',
    description: (
      <ul>
        <li>Founder Approved</li>
        <li>Request Founder Call (If skipped earlier or second round)</li>
      </ul>
    ),
  },
  {
    title: 'Capital transfer (Copy of wallet transaction)',
  },
  {
    title: 'Access Granted',
    description: (
      <ul>
        <li>Whitelist Added</li>
        <li>Welcome Email with Dashboard Credentials</li>
      </ul>
    ),
  },
];
const ProcessSteps = () => (
  <div className="mt-8 bg-white text-[#525252] p-4 md:p-6 rounded-xl">
    <h3 className="text-lg font-bold mb-4">Process</h3>
    <ol className="space-y-4 text-sm">
      {processSteps.map((step, index) => (
        <li key={index} className="">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div className="flex flex-row items-start gap-3">
              <div className="w-4 h-4 rounded-md bg-[#D9D9D9]"></div>
              <div>
                <div className="font-medium mb-1">
                  {index + 1}. {step.title}
                </div>
                {step.description && (
                  <div className="text-gray-400">{step.description}</div>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <div className="w-3 h-3 bg-red-500 rounded-full" />
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

export default ProcessSteps;
