'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="text-2xl font-bold flex flex-row items-center gap-2 justify-between">
      <Link
        href="/"
        aria-label="deeproots homepage link"
        className="w-10 h-10 md:w-16 md:h-16 relative overflow-hidden"
      >
        <Image
          alt="deeproots logo"
          src="/landing/logo-big.png"
          fill
          className="object-contain"
        />
      </Link>
      <Link
        href="/"
        aria-label="deeproots homepage link"
        className="self-center hidden sm:block font-bold text-md md:text-2xl bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-orbitron text-transparent"
      >
        DEEPROOTS
      </Link>
    </div>
  );
}
