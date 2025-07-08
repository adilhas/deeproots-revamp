import React from 'react';

type Props = {
  submission: {
    canPassKyc: boolean;
    indvOrOrg: string;
    confidentiality: boolean;
  };
};

const ApplicationSummaryTable: React.FC<Props> = ({ submission }) => (
  <div className="mt-6 overflow-x-auto bg-[#252525] px-2 rounded-xl">
    <table className="table w-full  px-3">
      <thead>
        <tr>
          <th>KYC / NDA</th>
          <th>Entity Type</th>
          <th>Confidentiality</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{submission.canPassKyc ? 'Yes' : 'No'}</td>
          <td>
            {submission.indvOrOrg === 'Ind' ? 'Individual' : 'Organization'}
          </td>
          <td>{submission.confidentiality ? 'Yes' : 'No'}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ApplicationSummaryTable;
