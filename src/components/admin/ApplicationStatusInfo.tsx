import StatusDot from '@/Shared/StatusDot';
import { statusColorMap } from '@/utils/statusColor';
import React from 'react';

const ApplicationStatusInfo = () => {
  return (
    <div className="flex flex-row items-center gap-6 flex-wrap py-4 text-xl">
      <div>Application Status Legend:</div>
      {Object.keys(statusColorMap).map((status) => (
        <div key={status} className="flex flex-row items-center gap-2">
          <StatusDot status={status as keyof typeof statusColorMap} />
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatusInfo;
