import React from 'react';
import { DeWorldEcosysData } from './data';
import DeWorldCard from '@/components/deworld/ecosystem/DeWorldCard';

const DeWorldExosystemList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-10 mx-auto px-2 w-fit">
      {DeWorldEcosysData.map((project, index) => (
        <DeWorldCard key={index} {...project} />
      ))}
    </div>
  );
};

export default DeWorldExosystemList;
