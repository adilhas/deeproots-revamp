import React from 'react';
import BenefitsGridDeskView from './BenefitsGridDeskView';
import BenefitsMobileView from './BenefitsMobileView';
// import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const FoundationBenefits = () => {
  // const { t } = useTranslation('seeding/foundation');

  return (
    <div>
      {/* <h2 className="font-orbitron text-center text-3xl my-10">
        {t('benefits-title')}
      </h2> */}
      <div className="text-center ">
        <Link href={'/connect/private-seed/'} className="w-fit">
          <button
            className=" bg-[#C2410C] w-fit text-white px-6 py-3 mb-8 rounded-2xl text-lg font-semibold font-orbitron hover:opacity-90 shadow-md"
            style={{ boxShadow: `0px 12px 20px 0px #0000008C` }}
          >
              Apply Now
          </button>
        </Link>
      </div>
      <BenefitsGridDeskView />
      <BenefitsMobileView />
    </div>
  );
};

export default FoundationBenefits;
