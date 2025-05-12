import { innofiFeatures } from '@/constants/sectionData';
import Image from 'next/image';

const InnofiSection = () => {
  return (
    <section className="w-full bg-[#F0FAFD] dark:bg-gray-900 my-20 py-28 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10">
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex justify-start lg:items-start items-center flex-col">
          <h1 className="font-extrabold text-3xl lg:text-4xl bg-gradient-to-r from-[#fb7087] via-[#76dbfa] to-[#76dbfa] bg-clip-text font-orbitron text-transparent">
            InnoFi:
          </h1>
          <h2 className="font-extrabold text-xl lg:text-2xl bg-gradient-to-l from-[#fb7087] to-[#76dbfa] bg-clip-text font-orbitron text-transparent">
            VOTE & FUND DeWorld
          </h2>
        </div>

        {/* Mobile Image */}
        <div className="w-full lg:hidden">
          <Image
            src="/landing/innofi.webp"
            alt="Education Hub"
            layout="responsive"
            width={600}
            height={500}
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          {innofiFeatures.map(({ icon, title, description }, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 hover:scale-105 dark:text-neutral-200 rounded-lg shadow-md"
            >
              <div>{icon}</div>
              <div>
                <h3 className="text-lg font-semibold font-orbitron">{title}</h3>
                <p className="text-sm">{description}</p>
              </div>
            </div>
          ))}

          {/* Mobile Vote Button */}
          <button className="mt-6 font-bold border-2 lg:hidden hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#fb7087] to-[#76dbfa] mr-6 px-6 font-orbitron py-3 text-center hover:border-2 border-[#fb7087] dark:hover:bg-none hover:text-[#fb7087] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
            VOTE
          </button>
        </div>
      </div>

      {/* Background Effect */}
      <div className="z-0 text-lg">
        <div className="w-60 h-60 absolute lg:bottom-16 lg:right-0 bg-gradient-to-r from-[#EEE1CC] to-[#F0FAFD] blur-[300px] lg:dark:blur-[250px] rounded-full" />
      </div>

      {/* Desktop Image + Button */}
      <div className="w-[800px] h-[500px] mt-36 hidden lg:flex justify-center py-72 items-center flex-col">
        <Image
          src="/landing/innofi.webp"
          alt="Education Hub"
          layout="intrinsic"
          width={600}
          height={500}
          className="object-cover rounded-2xl"
          sizes="(max-width: 1024px) 100vw, 600px"
        />
        <button className="mt-6 font-bold w-1/2 justify-center lg:my-10 border-2 hidden md:flex hover:scale-105 dark:hover:border-2 dark:bg-gradient-to-r from-[#fb7087] to-[#76dbfa] mr-6 px-6 font-orbitron py-3 text-center hover:border-2 border-[#fb7087] dark:hover:bg-none hover:text-[#fb7087] transition-all hover:ease-in-out rounded-lg text-2xl tracking-wider">
          VOTE
        </button>
      </div>
    </section>
  );
};

export default InnofiSection;
