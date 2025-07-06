import React from 'react';

type Props = {
  submission: {
    value: string;
    whyJoin: string;
  };
};

const ApplicationAnswers: React.FC<Props> = ({ submission }) => (
  <div className="mt-6 space-y-4">
    <div className="bg-[#252525] p-4 rounded-xl">
      <p className="text-sm text-[#AEAEAE] mb-2 ">
        What unique value can you contribute to the DEEPROOTS Foundation or
        Ecosystem?
        <br />
        <span className="italic">
          (Experience, resources, skills, network, capital, etc.)
        </span>
      </p>
      <div className="bg-[#17151A] p-3 rounded-md min-h-[80px]">
        {submission.value}
      </div>
    </div>

    <div className="bg-[#252525] p-4 rounded-xl">
      <p className="text-sm text-[#AEAEAE] mb-2">
        Why are you personally or professionally interested in joining the
        DEEPROOTS mission? <br />{' '}
        <span className="italic">
          (Tell us what resonates with you about our vision.)
        </span>
      </p>
      <div className="bg-[#17151A] p-3 rounded-md min-h-[80px]">
        {submission.whyJoin}
      </div>
    </div>
  </div>
);

export default ApplicationAnswers;
