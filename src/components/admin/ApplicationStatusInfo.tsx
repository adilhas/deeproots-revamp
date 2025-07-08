import { statusColorMap } from '@/utils/statusColor';
import React from 'react';

const ApplicationStatusInfo = () => {
  return (
    <div className="flex flex-row items-center gap-4 flex-wrap">
      {Object.entries(statusColorMap).map(([status, color]) => (
        <div key={status} className="flex flex-row items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: color }}
          ></div>
          <span>{status}</span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatusInfo;
