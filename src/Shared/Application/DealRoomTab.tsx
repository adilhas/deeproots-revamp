'use client';

import React, { useState } from 'react';
import ExclusiveInvestorAdvantage from './dealroom/ExclusiveInvestorAdvantage';
import { useApplication } from '@/context/ApplicationContext';
import SeedTerms from './dealroom/SeedTerms';
import DealPaymentInstructions from './dealroom/DealPaymentInstructions';
import SecureMyAllocation from './dealroom/SecureMyAllocation';
import { useSession } from 'next-auth/react';

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
  console.log(application);
  return (
    <div className="pb-8 text-[#525252]">
      {application?.preApproval === 'approved' ? (
        <>
          {application.dealRoom === 'under-review' &&
            session?.user.role === 'seeder' && (
              <div className="text-center">
                <div className="bg-gradient-to-r w-fit mx-auto font-semibold text-transparent from-gradient-from to-gradient-to bg-clip-text text-3xl">
                  You’ve made your contribution!
                </div>
                <div>
                  You’ve completed your Seeding process, We will review your
                  submission to verify payment and Approve it once verified.
                </div>
              </div>
            )}
          {application.dealRoom === 'approved' &&
            session?.user.role === 'seeder' && (
              <div className="bg-gradient-to-r w-fit mx-auto font-semibold text-transparent from-gradient-from to-gradient-to bg-clip-text text-3xl">
                <div>Congratulations, Contribution Approved</div>
                <div>You’ve successfully seeded on DeepRoots Blockchain</div>
              </div>
            )}
          <SeedTerms />
          <DealPaymentInstructions />
          <ExclusiveInvestorAdvantage />

          <div>
            <div className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                id="acknowledge"
                checked={acknowledged}
                disabled={
                  application?.dealRoom === 'not-submitted' ? false : true
                }
                onChange={(e) => setAcknowledged(e.target.checked)}
                className="peer h-5 w-5 border-2 border-gray-400 bg-white rounded checked:bg-green-500"
              />
              <label htmlFor="acknowledge" className="text-gray-700">
                I acknowledge this is a private, non-public participation
                opportunity for ecosystem access only.
              </label>
            </div>

            <div className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                id="agreement"
                checked={agreed}
                disabled={
                  application?.dealRoom === 'not-submitted' ? false : true
                }
                onChange={(e) => setAgreed(e.target.checked)}
                className="peer h-5 w-5 border-2 border-gray-400 bg-white rounded checked:bg-green-500"
              />
              <label htmlFor="agreement" className="text-gray-700">
                I agree to the Terms, Conditions, and Participation Guidelines
                for this Foundation Seat application.
              </label>
            </div>

            <div className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                id="doc-submission"
                checked={confirmed}
                disabled={
                  application?.dealRoom === 'not-submitted' ? false : true
                }
                onChange={(e) => setConfirmed(e.target.checked)}
                className="peer h-5 w-5 border-2 border-gray-400 bg-white rounded checked:bg-green-500"
              />
              <label htmlFor="doc-submission" className="text-gray-700">
                I confirm all submitted details are accurate and authorize this
                submission for review.
              </label>
            </div>

            {application.dealRoom === 'not-submitted' && (
              <SecureMyAllocation disabled={!allChecked} />
            )}
          </div>
        </>
      ) : (
        <div className="text-center">Please Complete KYC to open deal room</div>
      )}
    </div>
  );
};

export default DealRoomTab;
