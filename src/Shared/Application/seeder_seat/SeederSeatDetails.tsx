import React from 'react';
import TokenSeedingDetails from './TokenSeedingDetails';
import BroadcastMessages from './BroadcastMessages';
import SeederPerks from './SeederPerks';
import SeederContactAccess from './SeederContactAccess';
import SeederDocuments from './SeederDocuments';
import SeederManagementNote from '../SeederManagementNote';

const SeederSeatDetails = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse gap-6">
      <div className="w-full lg:max-w-[385px] max-w-none ">
        <TokenSeedingDetails />

        <BroadcastMessages />
      </div>
      <div>
        <SeederPerks />
        <SeederContactAccess />
        <SeederDocuments />
        <SeederManagementNote />
      </div>
    </div>
  );
};

export default SeederSeatDetails;
