import React from 'react';
import WalletInfo from './dealroom/WalletInfo';
import { useApplication } from '@/context/ApplicationContext';

const ContributionAddress = () => {
  const { application } = useApplication();
  return (
    <div className="my-10">
      <div className="w-full mx-auto border border-[#D4D4D4] rounded-4xl overflow-hidden">
        {/* Header */}
        <div className="text-center py-4">
          <h1 className="text-2xl w-fit mx-auto font-semibold bg-gradient-to-r from-gradient-from2 to-gradient-to2 bg-clip-text text-transparent">
            Contribution Address
          </h1>
        </div>

        <div
          className={`prose p-6 text-md bg-white text-gray-700 rounded-b-3xl leading-relaxed`}
        >
          <WalletInfo
            usdcAddress={application?.usdcAddress}
            usdtAddress={application?.usdtAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default ContributionAddress;
