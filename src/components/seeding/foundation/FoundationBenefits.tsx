import React from 'react';
import BenefitsGridDeskView from './BenefitsGridDeskView';
import BenefitsMobileView from './BenefitsMobileView';
import { useTranslation } from 'next-i18next';

const FoundationBenefits = () => {
  const { t } = useTranslation('seeding/foundation');

  return (
    <div>
      <h2 className="font-orbitron text-center text-3xl my-10">
        {t('benefits-title')}
      </h2>
      <BenefitsGridDeskView />
      <BenefitsMobileView />
    </div>
  );
};

export default FoundationBenefits;
