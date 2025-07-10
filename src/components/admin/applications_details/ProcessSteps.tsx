import React from 'react';

const ProcessSteps = () => (
  <div className="mt-8 bg-white text-[#525252] p-4 md:p-6 rounded-xl">
    <h3 className="text-lg font-bold mb-4">Process</h3>
    <ol className="space-y-4 text-sm">
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">Application Received</div>
          <div className="text-gray-400">
            KYC, Entity Type, Confidentiality Agreement Checked
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">Approved by the founder</div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">Due Diligence Package</div>
          <div className="text-gray-400">
            <ul>
              <li>
                Package Submitted by Seeder (Company deck, proof of funds,
                project alignment).
              </li>
              <li>
                KYC & NDA Sent to Seeder (Auto-trigger from CRM or backend email
                tool)
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">Compliance Check</div>
          <div className="text-gray-400">
            <ul>
              <li>NDA Received</li>
              <li>
                KYC Verified (Tick after backend uploads docs or AML/KYC review)
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">
            Final Confirmation (Approved/Denied)
          </div>
          <div className="text-gray-400">
            <ul>
              <li>Founder Approved</li>
              <li>
                Request Founder Call (If skipped earlier or second round){' '}
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">
            Capital transfer (Copy of wallet transaction)
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
      <li className="flex flex-col md:flex-row md:items-center justify-between gap-2">
        <div>
          <div className="font-medium mb-1">Access Granted</div>
          <div className="text-gray-400">
            <ul>
              <li>Whitelist Added</li>
              <li>Welcome Email with Dashboard Credentials </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-yellow-500 rounded-full" />
          <div className="w-3 h-3 bg-red-500 rounded-full" />
        </div>
      </li>
    </ol>

    <div className="mt-6 flex gap-4 justify-end">
      <button className="btn btn-sm bg-[#0383A8] text-white">
        Upload Document
      </button>
      <button className="btn btn-sm bg-[#6C43AD]">Package Document</button>
    </div>
  </div>
);

export default ProcessSteps;
