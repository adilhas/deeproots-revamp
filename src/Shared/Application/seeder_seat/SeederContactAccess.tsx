import Link from 'next/link';
import React from 'react';

const SeederContactAccess = () => {
  return (
    <div className="w-full text-[#303030] my-5 bg-white p-6 rounded-4xl">
      <div className="my-3.5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="text-xl font-medium">Founders Call</div>
          <div className="bg-[#D1FAE5] py-1 px-4 text-nowrap text-[#059669] text-lg font-semibold rounded-4xl">
            1 on 1
          </div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row w-full justify-between gap-2 i">
          <div className="text-[#525252] text-lg">
            Have a 15 min call with founder to ask Questions and review live
            products on DEEPROOTS
          </div>
          {/* <a
            href="https://calendly.com/team-deeproots/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E9E9E9] text-center text-nowrap flex justify-center items-center w-fit py-2 px-4 rounded-lg font-semibold text-[#4B5563] text-lg"
          >
            Schedule call
          </a> */}
          <Link
            target="_blank"
            href="/seeder/founder-call"
            className="bg-[#E9E9E9] text-center text-nowrap flex justify-center items-center w-fit py-2 px-4 rounded-lg font-semibold text-[#4B5563] text-lg"
          >
            Schedule call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SeederContactAccess;
