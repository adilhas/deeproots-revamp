import useLocaleDirection from '@/hooks/useLocaleDirection';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  const { isArabic } = useLocaleDirection();
  return (
    <Link href={'/'} className="text-2xl font-bold flex justify-between">
      <div className="w-10 h-10 md:w-16 md:h-16 overflow-hidden relative">
        <Image
          alt="logo"
          src="/landing/logo-big.png"
          fill
          className="object-contain"
        />
      </div>
      <h3
        className={`${isArabic ? 'pr-3' : 'pl-3'} self-center hidden sm:block font-bold text-md md:text-2xl  bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-orbitron text-transparent`}
      >
        <Link href="/">DEEPROOTS</Link>
      </h3>
    </Link>
  );
}
