import Image from 'next/image';
import React from 'react';

const TokenTotalSupply = () => {
  return (
    <div className="py-16">
      <div className="w-fit text-3xl font-semibold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf]">
        TOTAL SUPPLY
      </div>
      <div className="w-fit mx-auto mt-4">
        <Image
          src="/academy/total-supply.png"
          alt="dRC total supply"
          width={432}
          height={432}
        />
      </div>
      <div className="max-w-[300px] font-semibold mt-6 mx-auto w-full text-center text-xl">
        Ultra-low initial circulation to protect early growth
      </div>
    </div>
  );
};

export default TokenTotalSupply;
