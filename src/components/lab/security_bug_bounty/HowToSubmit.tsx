import React from 'react';

const HowToSubmit = () => {
  return (
    <div>
      <div>
        <h2 className="text-transparent text-3xl font-semibold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text w-fit mx-auto">
          How to Submit
        </h2>
        <p className="text-center w-fit mx-auto text-xl font-semibold">
          Follow the Format Below to submit
        </p>
      </div>
      <div className="max-w-[700px] mt-8 w-full mx-auto p-6 rounded-2xl bg-white dark:bg-[#1C1C1C] border border-white dark:border-[#303030]">
        <div className="w-fit mx-auto">
          <div className="flex flex-col md:flex-row items-start md:gap-2 my-3">
            <div className="w-20 font-semibold">Email:</div>
            <div className="text-[#3B82F6]">security@deeproots.earth</div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:gap-2 my-3">
            <div className="w-20 font-semibold">Subject:</div>
            <div className="text-[#3B82F6]">Bug Report – [Component Name]</div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:gap-2 my-3">
            <div className="w-20 font-semibold">Include:</div>
            <ul className="list-disc ml-4">
              <li>Description of bug</li>
              <li>Steps to reproduce</li>
              <li>POC/Screenshots/Code</li>
              <li>Your contact wallet for reward</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSubmit;
