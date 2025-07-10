import React from 'react';
import DealSummary from './dealroom/DealSummary';
import DealFullSeatBenefits from './dealroom/DealFullSeatBenefits';
// import TokenUtilitisSupply from './dealroom/TokenUtilitisSupply';
import SeedRoundTerms from './dealroom/SeedRoundTerms';
import ExclusiveInvestorAdvantage from './dealroom/ExclusiveInvestorAdvantage';
import { useApplication } from '@/context/ApplicationContext';

const DealRoomTab = () => {
  const { application } = useApplication();
  return (
    <div className="pb-8 text-[#525252]">
      {application?.preApproval === 'approved' ? (
        <>
          <DealSummary />
          <DealFullSeatBenefits />
          {/* <TokenUtilitisSupply /> */}
          <SeedRoundTerms />
          <ExclusiveInvestorAdvantage />
          <div>
            <div className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                id="acknowledge"
                className="peer h-5 w-5 border-2 border-gray-400 bg-white rounded checked:bg-green-500"
              />
              <label htmlFor="acknowledge" className="text-gray-700">
                I acknowledge ...
              </label>
            </div>
            <div className="flex items-center space-x-2 my-2">
              <input
                type="checkbox"
                id="acknowledge"
                className="peer h-5 w-5 border-2 border-gray-400 bg-white rounded checked:bg-green-500"
              />
              <label htmlFor="acknowledge" className="text-gray-700">
                I agree ...
              </label>
            </div>
            <button className="btn bg-gradient-to-r my-2 from-gradient-from to-gradient-to border-0 text-white px-8 py-3 rounded-lg font-medium transition-all">
              Proceed to Secure My Allocation
            </button>
          </div>{' '}
        </>
      ) : (
        <div className="text-center">Please Complete Kyc to open deal room</div>
      )}
    </div>
  );
};

export default DealRoomTab;
