import React from 'react';
import DRCDesktop from './DRCDesktop';
import DRCMobile from './DRCMobile';

const WhatIsdRCSection = () => {
  return (
    <div className=" ">
      <div className="py-16  max-w-[1200px] mx-auto">
        <div className="hidden lg:block px-4">
          <DRCDesktop />
        </div>
        <div className="lg:hidden block px-4">
          <DRCMobile />
        </div>
      </div>
    </div>
  );
};

export default WhatIsdRCSection;
