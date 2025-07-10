import TotalSupply from '@/components/main_page/what_is_dRC/TotalSupply';
import TotalSupplyChart from '@/components/main_page/what_is_dRC/TotalSupplyChart';
import Image from 'next/image';
import React from 'react';

const Data = [
  'Gas Chain',
  'Seeding',
  'Governance',
  'Referral',
  'Gamefi',
  'NFT & More',
];
const TokenUtilitisSupply = () => {
  return (
    <div className="mx-auto my-8 bg-white rounded-3xl border border-[#D4D4D4]">
      <div className="text-center p-4 bg-[#E9E9E9]">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gradient-from to-gradient-to w-fit mx-auto bg-clip-text text-transparent">
          Token Utilities & Total Supply
        </h1>
      </div>

      <div className="max-w-[600px] mx-auto px-2 py-8">
        <div className="mb-3 text-xl font-semibold text-center">
          dRC token wil be distributed <br /> over 41 years
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start mb-10">
        <div className="w-fit mx-auto my-5 flex flex-col">
          <TotalSupplyChart theme="light" />
          <div className="mt-6">
            <TotalSupply theme="light" />
          </div>
        </div>
        <div className="w-fit mx-auto flex flex-col h-full">
          <Image
            src={`/landing/drc-token-frame-light.png`}
            alt="drc token"
            width={250}
            height={250}
            className="mx-auto my-5"
          />
          <ul className="max-w-[400px] mx-auto text-center text-lg text-[#5C5F62] mt-6  flex flex-col h-full justify-between gap-6 px-1 w-full">
            {Data.map((item, index) => (
              <li key={index} className="py-2.5 px-8 rounded-2xl bg-[#EBEBEB]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TokenUtilitisSupply;
