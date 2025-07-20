import React from 'react';
import SubmittedPaymentDetails from './SubmittedPaymentDetails';
import DealSummary from './DealSummary';

const DealRoomSubmitted = () => {
  return (
    <div className="text-center">
      <div>
        <SubmittedPaymentDetails />
        <DealSummary />
      </div>
    </div>
  );
};

export default DealRoomSubmitted;
