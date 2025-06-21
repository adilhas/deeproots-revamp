import React, { JSX } from 'react';
import {
  PiCodeBlock,
  PiGlobeHemisphereWest,
  PiPenNib,
  PiUsersFour,
} from 'react-icons/pi';

interface WhoBuildsItType {
  description: string;
  icon: JSX.Element;
}

export const WhoBuildsItData: WhoBuildsItType[] = [
  {
    description: 'Developers, designers, strategists, and creators',
    icon: (
      <PiCodeBlock
        className="w-5 h-5 text-[#1F2937] dark:text-[#D4D4D4]"
        key="plant"
      />
    ),
  },
  {
    description: 'Open-source contributors and full-stack builders',
    icon: (
      <PiPenNib
        className="w-5 h-5 text-[#1570EF] dark:text-[#84CAFF]"
        key="users"
      />
    ),
  },
  {
    description: 'Backed by community, not VC control',
    icon: (
      <PiUsersFour
        className="w-5 h-5 text-[#9333EA] dark:text-[#D8B4FE]"
        key="chair"
      />
    ),
  },
  {
    description: 'Global, borderless, and mission-first',
    icon: (
      <PiGlobeHemisphereWest
        className="w-5 h-5 text-[#EA580C] dark:text-[#FDBA74]"
        key="Gavel"
      />
    ),
  },
];

const WhoBuildsIt = () => {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-6 text-black dark:text-white">
        Who Builds It
      </h2>
      <div className="grid md:grid-cols-2 max-w-[400px] md:max-w-none lg:grid-cols-4 gap-8 mx-auto bg-[#F1F1F1] dark:bg-[#525252] w-full p-3 rounded-3xl">
        {WhoBuildsItData.map((item, index) => (
          <div key={index} className={` p-3 rounded-3xl`}>
            <div>{item.icon}</div>

            <p className="mt-4">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-transparent font-orbitron text-3xl my-3 font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        We don’t just build tech. We build tools for generations.
      </div>
    </div>
  );
};

export default WhoBuildsIt;
