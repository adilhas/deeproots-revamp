import React from 'react';
import WalletInfo from './WalletInfo';

const DealPaymentInstructions = () => {
  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Secure Payment Instructions
        </h1>
      </div>

      <div className="max-w-[991px] mx-auto px-2 py-4">
        For your convenience, we offer secure wallet options below. Please
        double-check the destination address before sending
      </div>

      <div className="w-full max-w-[991px] mx-auto py-3 px-3">
        <div className="text-2xl font-bold">Wallet Information</div>
        <WalletInfo />
        <div className="max-w-[991px] mx-auto px-2 py-4">
          <strong>Note</strong>: Our systems auto-detect and confirm payments
          securely.
        </div>
      </div>
    </div>
  );
};

export default DealPaymentInstructions;
