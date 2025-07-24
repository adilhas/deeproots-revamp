import React from 'react';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BiEnvelope } from 'react-icons/bi';

const SeederContactAccess = () => {
  return (
    <div className="w-full text-[#303030] min-h-[297px] my-5 bg-white p-6 rounded-4xl">
      <div className=" text-2xl font-semibold">Contact</div>
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
          <button className="bg-[#E9E9E9] text-nowrap w-fit py-2 px-4 rounded-lg font-semibold text-[#4B5563] text-lg">
            Schedule call
          </button>
        </div>
      </div>

      <div className="my-3.5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="text-xl font-medium">Question Submission</div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row w-full justify-between gap-2 i">
          <div className="text-[#525252] text-lg">
            Submit your question to the founder team and Get Answers Quickly.
          </div>
          <button className="bg-[#E9E9E9] text-nowrap w-fit flex flex-rew items-center gap-2 py-2 px-4 rounded-lg font-semibold text-[#4B5563] text-lg">
            <AiOutlineQuestionCircle className="w-6 h-6" /> Ask Question
          </button>
        </div>
      </div>

      <div className="my-3.5">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="text-xl font-medium">Support</div>
        </div>
        <div className="mt-3 flex flex-col lg:flex-row w-full justify-between gap-2 i">
          <div className="text-[#525252] text-lg">
            Ran into a problem? Contact support.
          </div>
          <button className="bg-[#E9E9E9] text-nowrap w-fit flex flex-rew items-center gap-2 py-2 px-4 rounded-lg font-semibold text-[#4B5563] text-lg">
            <BiEnvelope className="w-6 h-6" /> Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeederContactAccess;
