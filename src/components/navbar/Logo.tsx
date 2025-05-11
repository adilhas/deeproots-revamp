import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <div className="text-2xl font-bold flex justify-between">
      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
        <Image alt="logo" width={100} height={100} src="/landing/logo.png" />
      </div>
      <h3 className="pl-3 self-center hidden sm:block font-bold text-md md:text-lg  bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8]  dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] to-inherit[#0085a8] dark:to-neutral-500 bg-clip-text font-orbitron text-transparent">
        <Link href="/">DEEPROOTS</Link>
      </h3>
    </div>
  );
}
