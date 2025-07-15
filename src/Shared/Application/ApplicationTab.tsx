import React from 'react';
import ApplicationDeclineModal from './ApplicationDeclineModal';
import ApplicationApproveModal from './ApplicationApproveModal';
import { useSession } from 'next-auth/react';
import { useApplication } from '@/context/ApplicationContext';
import { formatDate } from '@/utils/formatDate';

interface ApplicationTabType {
  valueYouCanGive: string;
  whyJoin: string;
  dateSubmitted: string;
  indOrOrg: string;
}

const ApplicationTab = ({
  valueYouCanGive,
  whyJoin,
  dateSubmitted,
  indOrOrg,
}: ApplicationTabType) => {
  const { data: session } = useSession();
  const { application } = useApplication();
  return (
    <div>
      <div className="w-full bg-white  p-4 rounded-2xl min-h-[220px] my-4">
        <div className="text-xl font-semibold">
          What unique value can you contribute to the DEEPROOTS Foundation or
          Ecosystem?
        </div>
        <div className="mt-4 text-lg text-[#525252]">{valueYouCanGive}</div>
      </div>
      <div className="w-full bg-white p-4 rounded-2xl min-h-[220px] my-4">
        <div className="text-xl font-semibold">
          Why are you personally or professionally interested in joining the
          DEEPROOTS mission?
        </div>
        <div className="mt-4 text-lg text-[#525252]">{whyJoin}</div>
      </div>
      <div className="my-4">
        <div>Date Submitted: {formatDate(dateSubmitted)}</div>
      </div>
      <div>
        <div className="space-y-6">
          {/* Application Type */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">
              Are you applying as an individual or organization?
            </h3>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-not-allowed">
                <input
                  type="radio"
                  name="applicationType"
                  value="Ind"
                  checked={indOrOrg === 'Ind'}
                  disabled
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Ind</span>
              </label>
              <label className="flex items-center cursor-not-allowed">
                <input
                  type="radio"
                  name="applicationType"
                  value="Org"
                  checked={indOrOrg !== 'Ind'} // fallback to Org
                  disabled
                  className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-gray-700">Org</span>
              </label>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-4">
            {/* Confidentiality Clause */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-gray-700">
                I agree to be contacted under a confidentiality clause.
              </span>
            </label>

            {/* KYC and NDA Willingness */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-gray-700">
                I confirm my willingness to complete KYC and sign the NDA if
                required.
              </span>
            </label>

            {/* Confidentiality Agreement */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-gray-700">
                I acknowledge that the information I provide will be treated
                under confidentiality, and I agree not to share or disclose any
                project-related details without written consent. I understand
                that full access may require additional KYC and NDA steps.
              </span>
            </label>

            {/* Non-disclosure Agreement */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-gray-700">
                I agree not to share or disclose any project-related information
                without written consent. I understand that full access may
                require KYC and NDA completion.
              </span>
            </label>

            {/* Non-US Citizen */}
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1 flex-shrink-0"
              />
              <span className="ml-3 text-gray-700">
                I confirm I am NOT a U.S. citizen, resident, or under U.S.
                jurisdiction. Participation is not available to U.S. persons or
                entities.
              </span>
            </label>
          </div>
        </div>
      </div>
      {session?.user.role === 'admin' &&
        application?.applicationStatus === 'received' && (
          <div className="my-3 flex flex-row items-center gap-3">
            <ApplicationDeclineModal />
            <ApplicationApproveModal />
          </div>
        )}
    </div>
  );
};

export default ApplicationTab;
