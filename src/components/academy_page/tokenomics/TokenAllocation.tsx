import TotalSupply from '@/components/main_page/what_is_dRC/TotalSupply';
import TotalSupplyChart from '@/components/main_page/what_is_dRC/TotalSupplyChart';
import React from 'react';

const TokenAllocation = () => {
  return (
    <div className="py-16">
      <div className="w-fit text-3xl font-semibold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
         TOKEN ALLOCATION
      </div>
      <div className="max-w-[580px] text-center mx-auto">
        The dRC token is strategically distributed to ensure a sustainable
        growing ecosystem
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center my-16">
        <div className="md:scale-125 my-8">
          <TotalSupplyChart />
        </div>
        <div className="my-8">
          <TotalSupply />
        </div>
      </div>
    </div>
  );
};

export default TokenAllocation;
