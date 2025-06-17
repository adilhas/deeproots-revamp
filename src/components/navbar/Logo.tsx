import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'} className="text-2xl font-bold flex justify-between">
      <div className="w-10 h-10 md:w-16 md:h-16 overflow-hidden relative">
        <Image
          alt="logo"
          src="/landing/logo-v2.svg"
          fill
          className="object-contain" // or "object-cover"
        />
      </div>
      <h3 className="pl-3 self-center hidden sm:block font-bold text-md md:text-2xl  bg-gradient-to-r from-gradient-from to-gradient-to  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
        <Link href="/">DEEPROOTS</Link>
      </h3>
    </Link>
  );
}
