'use client';

import React, { useState } from 'react';
import ExclusiveInvestorAdvantage from './dealroom/ExclusiveInvestorAdvantage';
import { useApplication } from '@/context/ApplicationContext';
import SecureMyAllocation from './dealroom/SecureMyAllocation';
import { useSession } from 'next-auth/react';
import TokenUtilitisSupply from './dealroom/TokenUtilitisSupply';
import DealSummary from './dealroom/DealSummary';
import DealFullSeatBenefits from './dealroom/DealFullSeatBenefits';
import DealRoomSeedingTiers from './dealroom/DealRoomSeedTiers';
import SeedTerms from './dealroom/SeedTerms';
import DealRoomFAQs from './dealroom/DealRoomFAQs';
import DealRoomSubmitted from './dealroom/DealRoomSubmitted';
import DealRoomCountdown from './dealroom/DealRoomCountdown';
import { isPreApprovalTimeOut } from '@/utils/preApprovalUtils';

const DealRoomTab = () => {
  const { application } = useApplication();
  const { data: session } = useSession();

  const [acknowledged, setAcknowledged] = useState(
    application?.dealRoom === 'not-submitted' ? false : true
  );
  const [agreed, setAgreed] = useState(
    application?.dealRoom === 'not-submitted' ? false : true
  );
  const [confirmed, setConfirmed] = useState(
    application?.dealRoom === 'not-submitted' ? false : true
  );

  const allChecked = acknowledged && agreed && confirmed;

  if (application?.preApproval !== 'approved') {
    return (
      <div className="text-center text-2xl">
        Once the Pre-Approval step is appoved your next step will be unlocked
      </div>
    );
  }

  const isSeeder = session?.user.role === 'seeder';
  const isDealRoomExpired = isPreApprovalTimeOut(
    application?.preApprovalUpdatedAt ?? ''
  );

  if (
    isDealRoomExpired &&
    application.paymentDetails?.paymentStatus !== 'approved' &&
    application.paymentDetails?.paymentStatus !== 'declined'
  ) {
    return (
      <div className="text-center text-2xl">
        Access to this deal room expires if payment is not made within 24 hours
        of Pre-Approval.
      </div>
    );
  }

  // === DEAL ROOM SUBMITTED VIEW ===
  if (application?.dealRoom === 'under-review' && isSeeder) {
    return (
      <div>
        <div className="text-center">
          <div className="bg-gradient-to-r w-fit mx-auto font-semibold text-transparent from-gradient-from to-gradient-to bg-clip-text text-3xl">
            You’ve made your contribution!
          </div>
          <div className="w-full max-w-[524px] mx-auto mt-4 text-xl">
            You’ve completed your Seeding process, We will review your
            submission to verify payment and Approve it once verified.
          </div>
        </div>
        <DealRoomSubmitted />;
      </div>
    );
  }

  // === DEAL ROOM APPROVED SUCCESS MESSAGE ===
  if (application?.dealRoom === 'approved' && isSeeder) {
    return <DealRoomSubmitted />;
  }
  if (application?.dealRoom === 'declined' && isSeeder) {
    return <DealRoomSubmitted />;
  }

  // === DEFAULT DEAL ROOM CONTENT ===
  return (
    <div className="pb-8 text-[#525252]">
      <DealSummary />
      <DealFullSeatBenefits />
      <TokenUtilitisSupply />
      <ExclusiveInvestorAdvantage />
      <DealRoomCountdown />
      <DealRoomSeedingTiers />
      <SeedTerms />

      <div className="text-xl">
        <div className="mb-6">
          This Private Seed Deal Room is exclusively available to verified
          Foundation Seeders. Confidentiality and discretion are expected.
        </div>

        <div className="form-control my-2">
          <label className="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              id="acknowledge"
              checked={acknowledged}
              disabled={application?.dealRoom !== 'not-submitted'}
              onChange={(e) => setAcknowledged(e.target.checked)}
              className="checkbox checkbox-success bg-white"
            />
            <div className="label-text text-gray-700 text-wrap">
              I acknowledge this is a private, non-public participation
              opportunity for ecosystem access only.
            </div>
          </label>
        </div>

        <div className="form-control my-2">
          <label className="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              id="agreement"
              checked={agreed}
              disabled={application?.dealRoom !== 'not-submitted'}
              onChange={(e) => setAgreed(e.target.checked)}
              className="checkbox checkbox-success bg-white"
            />
            <div className="label-text text-gray-700 text-wrap">
              I agree to the Terms, Conditions, and Participation Guidelines for
              this Foundation Seat application.
            </div>
          </label>
        </div>

        <div className="form-control my-2">
          <label className="label cursor-pointer justify-start gap-3">
            <input
              type="checkbox"
              id="doc-submission"
              checked={confirmed}
              disabled={application?.dealRoom !== 'not-submitted'}
              onChange={(e) => setConfirmed(e.target.checked)}
              className="checkbox checkbox-success bg-white"
            />
            <div className="label-text text-gray-700 text-wrap">
              I confirm all submitted details are accurate and authorize this
              submission for review.
            </div>
          </label>
        </div>

        {application?.dealRoom === 'not-submitted' && (
          <SecureMyAllocation disabled={!allChecked} />
        )}
      </div>

      <div className="py-16 mt-20">
        <DealRoomFAQs />
      </div>
    </div>
  );
};

export default DealRoomTab;
