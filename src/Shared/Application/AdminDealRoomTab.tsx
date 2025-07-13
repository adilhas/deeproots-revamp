'use client';

import React from 'react';
import { useApplication } from '@/context/ApplicationContext';
import SeedTerms from './dealroom/SeedTerms';
import PaymentDetails from './dealroom/PaymentDetails';

const AdminDealRoom = () => {
  const { application } = useApplication();

  console.log(application);
  return (
    <div className="pb-8 text-[#525252]">
      {application?.dealRoom === 'not-submitted' ? (
        <div className="text-center">Deal Room Not Submitted</div>
      ) : (
        <>
          <SeedTerms />
          <PaymentDetails />
        </>
      )}
    </div>
  );
};

export default AdminDealRoom;
