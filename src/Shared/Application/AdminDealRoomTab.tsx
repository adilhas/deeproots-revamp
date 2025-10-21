'use client';

import React from 'react';
import { useApplication } from '@/context/ApplicationContext';
import PaymentDetails from './dealroom/PaymentDetails';
import SeederManagementNote from './SeederManagementNote';
import ExclusiveSeedTerms from './dealroom/ExclusiveSeedTerms';
import DealRoomExtenModal from './dealroom/DealRoomExtendModal';
// import DealSummaryAdmin from './DealSummaryAdmin';

const AdminDealRoom = () => {
  const { application } = useApplication();

  // console.log(application);
  if (application?.isDealRoomExpired) {
    return (
      <div>
        <div className="text-center text-2xl">
          Seeder Did not submitted payment within time limit. Deal room expired.
        </div>
        <div className="w-fit mx-auto mt-3">
          <DealRoomExtenModal />
        </div>
      </div>
    );
  }
  return (
    <div className="pb-8 text-[#525252]">
      {application?.dealRoom === 'not-submitted' ? (
        <div className="text-center text-2xl">Deal Room Not Submitted</div>
      ) : (
        <>
          {/* {application?.dealRoom === 'approved' ||
          application?.dealRoom === 'declined' ? (
            <DealSummaryAdmin />
          ) : ( */}
          <ExclusiveSeedTerms />
          {/* )} */}
          <PaymentDetails />
          <div className="mt-8">
            <SeederManagementNote />
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDealRoom;
