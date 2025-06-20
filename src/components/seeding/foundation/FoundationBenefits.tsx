import React from 'react';
import BenefitsGridDeskView from './BenefitsGridDeskView';
import BenefitsMobileView from './BenefitsMobileView';

const FoundationBenefits = () => {
  return (
    <div>
      <h2 className="font-orbitron text-center text-3xl my-10">Benefits</h2>
      <BenefitsGridDeskView />
      <BenefitsMobileView />
    </div>
  );
};

export default FoundationBenefits;
