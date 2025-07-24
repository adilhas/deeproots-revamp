import Image from 'next/image';
import React from 'react';

const SeederPerks = () => {
  return (
    <div className="w-full min-h-[297px] my-5 bg-white p-6 rounded-4xl">
      <div className="text-[#303030] text-2xl font-semibold">
        Perks & Access
      </div>
      <div className="w-fit mx-auto">
        <Image
          src={'/dashboard/seeder-perks.svg'}
          width={172}
          height={133}
          alt="seeder perks"
        />
      </div>
      <div className="text-lg w-full max-w-[466px] mx-auto text-[#525252] text-center">
        You have no Perks available to claim now. You’ll find Perks and Early
        access deals here as soon as they are available
      </div>
    </div>
  );
};

export default SeederPerks;
