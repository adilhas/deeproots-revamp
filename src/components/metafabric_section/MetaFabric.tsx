import Image from 'next/image';
import { metafabricFeatures } from '@/constants/sectionData';

const MetaFabricSection = () => {
  return (
    <section className="flex relative flex-col lg:flex-row items-center py-10 p-6 lg:p-12 gap-8 bg-white dark:bg-neutral-900">
      <div className="flex justify-center items-center my-4 flex-col">
        <h1 className="font-extrabold lg:max-w-[600px] text-3xl lg:hidden leading-[40px] lg:text-4xl lg:leading-normal bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] bg-clip-text font-orbitron text-transparent">
          MetaFabric:
        </h1>
        <h1 className="font-bold text-center lg:max-w-[600px] text-xl lg:hidden lg:text-2xl lg:leading-normal bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] bg-clip-text font-orbitron text-transparent">
          Blockchain to Runway Your Style,Your NFT DeWorld
        </h1>
      </div>

      <div className="w-full lg:w-[60vw]">
        <Image
          src="/landing/metafabric.webp"
          alt="MetaFabric Fashion"
          className="rounded-2xl shadow-lg"
          width={1200}
          height={800}
          layout="responsive"
        />
      </div>

      <div className="w-60 h-60 top-32 right-12 blur-[350px] md:blur-[200px] bg-[#b875f3] rounded-full absolute" />

      <div className="lg:w-[40vw] text-gray-800 font-sans dark:text-gray-200">
        <h1 className="font-extrabold lg:max-w-[600px] text-3xl hidden lg:block leading-[40px] lg:text-start lg:text-4xl lg:leading-normal bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] bg-clip-text font-orbitron text-transparent">
          MetaFabric:
        </h1>
        <h1 className="font-extrabold lg:max-w-[600px] text-xl leading-[40px] hidden lg:block lg:text-start lg:text-2xl lg:leading-normal bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] bg-clip-text font-orbitron text-transparent">
          Blockchain to Runway Your Style,
        </h1>
        <h1 className="font-extrabold lg:max-w-[600px] text-xl leading-[40px] hidden lg:block lg:text-start lg:text-2xl lg:leading-normal mb-3 bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] bg-clip-text font-orbitron text-transparent">
          Your NFT DeWorld
        </h1>

        <ul className="space-y-4">
          {metafabricFeatures.map((feature) => (
            <li key={feature.text} className="flex items-center gap-3">
              {feature.icon}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>

        <button className="mt-6 px-6 py-2 bg-gradient-to-l from-[#ee49fc] to-[#32d8fd] text-white rounded-lg hover:border-2 hover:bg-none hover:dark:text-neutral-200 hover:text-neutral-900 font-bold hover:border-[#ee49fc] transition">
          Explore MetaFabric
        </button>
      </div>
    </section>
  );
};

export default MetaFabricSection;
