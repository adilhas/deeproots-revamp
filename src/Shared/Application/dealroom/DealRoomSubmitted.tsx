import React from 'react';
// import SubmittedPaymentDetails from './SubmittedPaymentDetails';
import DealSummary from './DealSummary';
import PaymentDetails from './PaymentDetails';

const DealRoomSubmitted = () => {
  return (
    <div className="text-center">
      <div>
        {/* <SubmittedPaymentDetails /> */}
        <PaymentDetails />
        <DealSummary />
      </div>
    </div>
  );
};

export default DealRoomSubmitted;
