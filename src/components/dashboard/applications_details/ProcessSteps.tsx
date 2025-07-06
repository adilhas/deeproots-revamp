import React from 'react';

const ProcessSteps = () => (
  <div className="mt-8 bg-[#252525] p-4 md:p-6 rounded-xl">
    <h3 className="text-lg font-bold mb-4">Process</h3>
    <ol className="space-y-4 text-sm">
      {[...Array(7)].map((_, i) => (
        <li
          key={i}
          className="flex flex-col md:flex-row md:items-center justify-between gap-2"
        >
          <div>
            <div className="font-medium mb-1">{i + 1}. Step Title Here</div>
            <div className="text-gray-400">
              Description and possible subpoints (e.g.,{' '}
              <em>company deck, KYC, proof of funds</em>)
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-red-500 rounded-full" />
          </div>
        </li>
      ))}
    </ol>

    <div className="mt-6 flex gap-4 justify-end">
      <button className="btn btn-sm bg-[#0383A8] text-white">
        Upload Document
      </button>
      <button className="btn btn-sm bg-[#6C43AD]">Package Document</button>
    </div>
  </div>
);

export default ProcessSteps;
