import React from 'react';
import Image from 'next/image';
import { Clock3, Gamepad2, PiggyBank, Users, Wand } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

const icons = [
  <Wand key="wand" size={30} className="text-[#0085a5]" />,
  <PiggyBank key="piggybank" size={30} className="text-[#0085a5]" />,
  <Users key="users" size={30} className="text-[#0085a5]" />,
  <Clock3 key="clock3" size={30} className="text-[#0085a5]" />,
  <Gamepad2 key="gamepad2" size={30} className="text-[#0085a5]" />,
];
interface Feature {
  title: string;
  description: string;
}
const FoundationSeatsSection = () => {
  const { t } = useTranslation('landing_page');
  const features = t('foundation.features', {
    returnObjects: true,
  }) as Feature[];

  const foundationSeatsFeatures = features.map((feature, idx) => ({
    icon: icons[idx],
    title: feature.title,
    description: feature.description,
  }));
  return (
    <section className="bg-[#D5CFE0] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[350px] border-r-[350px] border-t-[500px] border-l-transparent border-r-transparent border-t-[#6A432C] opacity-20 blur-3xl pointer-events-none z-30 hidden dark:block" />

      <div className="w-full  max-w-[1200px] mx-auto py-20 px-6 md:px-16 flex flex-col lg:flex-row items-center gap-10 relative">
        <div className="w-full hidden lg:inline-block lg:w-1/2 aspect-square h-full  relative">
          <Image
            src="/landing/foundation-seats.jpeg"
            alt="Foundation"
            className="rounded-4xl shadow-lg object-cover"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl lg:text-[35px] font-bold font-orbitron text-[#0A80BD] dark:text-[#30B5FA]">
            {t('foundation.heading')}
          </h2>

          <div className="w-full lg:hidden">
            <Image
              src="/landing/foundation-seats.jpeg"
              alt="Foundation"
              className="w-full 4xl rounded-lg shadow-lg"
              width={800}
              height={500}
            />
          </div>

          <div className="flex flex-col gap-4">
            {foundationSeatsFeatures.map(
              ({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className=" p-3 hover:scale-105 bg-white/70 dark:bg-[#F7EEF314] rounded-lg shadow-md"
                  style={{ boxShadow: '0px 4px 4px 0px #00000026' }}
                >
                  <div>
                    <div className="flex gap-2 items-end">
                      {icon}
                      <h3 className="text-lg font-semibold font-orbitron text-gray-900 dark:text-white">
                        {title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {description}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
          <Link href={'/seeding/foundation'}>
            <button className=" text-white font-bold w-fit hover:scale-105  bg-[#0085a8] px-6 font-orbitron py-3 text-center  transition-all hover:ease-in-out rounded-lg text-lg">
              {t('foundation.cta')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FoundationSeatsSection;
