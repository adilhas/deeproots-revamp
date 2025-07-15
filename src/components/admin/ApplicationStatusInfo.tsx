import StatusDot from '@/Shared/StatusDot';
import { statusColorMap } from '@/utils/statusColor';
import React from 'react';

export function formatStatus(status: string): string {
  return status
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const ApplicationStatusInfo = () => {
  return (
    <div className="flex flex-row items-center gap-6 flex-wrap py-4 text-lg">
      <div>Application Status Guide:</div>
      {Object.keys(statusColorMap).map((status) => (
        <div key={status} className="flex flex-row items-center gap-2">
          <StatusDot status={status as keyof typeof statusColorMap} />
          <span>{formatStatus(status)}</span>
        </div>
      ))}
    </div>
  );
};

export default ApplicationStatusInfo;
