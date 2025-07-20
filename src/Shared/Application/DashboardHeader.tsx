import Image from 'next/image';
import React, { ReactNode } from 'react';

type DashboardHeaderProps = {
  onRight?: ReactNode;
  label: string;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onRight,
  label,
}) => {
  return (
    <div className="w-full max-w-[1200px] bg-[#DDDDDD] px-8 rounded-3xl mx-auto flex flex-row items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <Image
          src={'/dashboard/dashboard-logo.png'}
          width={52}
          height={52}
          alt="dashboard logo"
        />
        <div className="flex flex-col md:flex-row items-start md:items-center gap-x-2">
          <div className="text-xl md:text-2xl font-medium font-orbitron text-transparent bg-gradient-to-r from-gradient-from2 to-gradient-to2 bg-clip-text">
            DEEPROOTS
          </div>
          <div className="text-sm md:text-lg bg-[#FFFFFF29] text-[#525252] border border-[#A1A1A1] px-2 py-[2px] flex items-center justify-center rounded-2xl font-medium">
            {label}
          </div>
        </div>
      </div>
      <div>{onRight}</div>
    </div>
  );
};

export default DashboardHeader;
