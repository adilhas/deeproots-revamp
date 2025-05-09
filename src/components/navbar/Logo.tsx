import Image from 'next/image';

export default function Logo() {
  return (
    <div className="text-2xl font-bold flex justify-between">
      <div className="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden">
        <Image alt="logo" width={100} height={100} src="/landing/logo.png" />
      </div>
      <div className="self-center hidden md:block">DeepRoots</div>
    </div>
  );
}
