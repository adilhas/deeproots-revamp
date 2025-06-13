import Image from 'next/image';
import { metafabricFeatures } from '@/constants/sectionData';
import Link from 'next/link';

const MetaFabricSection = () => {
  return (
    <section className="bg-[#B0C9D3] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] lg:right-[-100px] w-[100%] md:w-[300px] h-[40%] lg:h-[500px] bg-[#928FFD] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] lg:left-[-100px] w-full md:w-[500px] h-[30%] lg:h-[80%] bg-[#928FFD] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />

      <div className="w-full  max-w-[1200px] mx-auto flex relative flex-col lg:flex-row items-start lg:items-center py-10 p-6 lg:p-12 gap-8">
        <h1 className="font-extrabold lg:max-w-[600px] text-4xl lg:hidden leading-[40px] lg:text-5xl lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron text-transparent">
          MetaFabric
        </h1>

        <div className="w-full lg:w-1/2 aspect-square h-full  relative">
          <Image
            src="/landing/metafabric.webp"
            alt="MetaFabric Fashion"
            className="rounded-2xl shadow-lg object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        {/* <h1 className="font-extrabold lg:max-w-[600px] text-2xl lg:hidden leading-[40px]  lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron text-transparent">
          Blockchain to Runway Your Style,Your NFT DeWorld
        </h1> */}

        {/* <div className="w-60 h-60 top-32 right-12 blur-[350px] md:blur-[200px] bg-[#b875f3] rounded-full absolute" /> */}

        <div className="lg:w-1/2 text-gray-800 font-sans dark:text-gray-200">
          <div className="mb-4 ">
            <h1 className="font-extrabold lg:max-w-[600px] text-4xl hidden lg:inline-block leading-[40px] lg:text-5xl lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron text-transparent">
              MetaFabric
            </h1>
            <h1 className="font-extrabold text-2xl inline-block leading-[40px]  lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron lg:text-transparent dark:lg:text-transparent text-[#334155] dark:text-[#F1F5F9]">
              Blockchain to Runway Your Style,Your NFT DeWorld
            </h1>
          </div>
          <ul className="space-y-4">
            {metafabricFeatures.map((feature) => (
              <li key={feature.text} className="flex items-center gap-4">
                {feature.icon}
                <div>
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {feature.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <Link href="https://metafabric.earth/">
            <button className="mt-6 px-6 py-2 bg-gradient-to-l from-[#EE49FC] to-[#32d8fd] text-white rounded-lg  font-bold hover:scale-105 transition">
              Explore MetaFabric
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MetaFabricSection;
