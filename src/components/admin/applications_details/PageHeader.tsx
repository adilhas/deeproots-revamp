import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => (
  <div className="w-full flex flex-row items-center justify-between py-3">
    <h1 className="text-3xl font-semibold flex flex-row items-center gap-2">
      <Link className="w-fit" href="/admin/applications">
        <ArrowLeft className="w-8 h-8" />
      </Link>
      Application Details
    </h1>
    <Image src="/landing/logo-big.png" width={64} height={64} alt="logo" />
  </div>
);

export default PageHeader;
