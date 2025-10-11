import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type DashboardHeaderProps = {
  onRight?: ReactNode;
  label: string;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  onRight,
  label,
}) => {
  const { data: session } = useSession();
  const isAdmin = session?.user.role === 'admin';
  return (
    <div className="w-full max-w-[1200px] bg-[#DDDDDD] px-8 rounded-3xl mx-auto flex flex-row items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <Link href={isAdmin ? '/admin/applications' : '/'}>
          <Image
            src={'/dashboard/dashboard-logo.png'}
            width={52}
            height={52}
            alt="dashboard logo"
          />
        </Link>
        <Link href={isAdmin ? '/admin/applications' : '/'}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-x-2">
            <div className="text-xl hidden md:inline-block md:text-2xl font-medium font-orbitron text-transparent bg-gradient-to-r from-gradient-from2 to-gradient-to2 bg-clip-text">
              DEEPROOTS
            </div>
            <div className="text-sm md:text-lg bg-[#FFFFFF29] text-[#525252] border border-[#A1A1A1] px-2 py-[2px] flex items-center justify-center rounded-2xl font-medium">
              {label}
            </div>
          </div>
        </Link>
      </div>
      <div>{onRight}</div>
    </div>
  );
};

export default DashboardHeader;
