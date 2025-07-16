import React from 'react';
import SubmittedPaymentDetails from './SubmittedPaymentDetails';
import DealSummary from './DealSummary';

const DealRoomSubmitted = () => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r w-fit mx-auto font-semibold text-transparent from-gradient-from to-gradient-to bg-clip-text text-3xl">
        You’ve made your contribution!
      </div>
      <div className="w-full max-w-[524px] mx-auto mt-4 text-xl">
        You’ve completed your Seeding process, We will review your submission to
        verify payment and Approve it once verified.
      </div>
      <div>
        <SubmittedPaymentDetails />
        <DealSummary />
      </div>
    </div>
  );
};

export default DealRoomSubmitted;
