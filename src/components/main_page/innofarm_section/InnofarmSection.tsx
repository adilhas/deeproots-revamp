import Image from 'next/image';
import {
  Network,
  Bot,
  ShieldCheck,
  BadgeCheck,
  GraduationCap,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [
  <Network key="network" size={30} className="text-[#E06643]" />,
  <Bot key="bot" size={30} className="text-[#E06643]" />,
  <ShieldCheck key="shield" size={30} className="text-[#E06643]" />,
  <BadgeCheck key="badge" size={30} className="text-[#E06643]" />,
  <GraduationCap key="graduation" size={30} className="text-[#E06643]" />,
];

export default function InnofarmSection() {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('innofarm_section.features', { returnObjects: true });
  const features: { title: string; description: string }[] = Array.isArray(
    rawFeatures
  )
    ? (rawFeatures as { title: string; description: string }[])
    : [];

  return (
    <section className="bg-[#C6E3D5] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[300px] h-[500px] bg-[#9DF725] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[500px] bg-[#FA7C2C] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />
      <div className="w-full  max-w-[1200px] relative flex flex-row items-center justify-between gap-8 px-6 py-16 lg:px-24 mx-auto">
        <div className="w-full lg:w-1/2  space-y-6">
          <div className="font-orbitron w-fit text-4xl md:text-5xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-[#FF8120] to-[#00903D]">
            {t('innofarm_section.title')}
          </div>
          <div className="w-full lg:hidden aspect-square h-full max-h-[450px] relative">
            <Image
              src="/landing/innofarm.png"
              alt="InnoFarm Illustration"
              className="rounded-2xl shadow-lg object-cover object-center"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="font-orbitron w-fit text-xl lg:text-3xl font-bold lg:bg-gradient-to-r  lg:text-transparent bg-clip-text lg:from-[#FF8120] lg:to-[#00903D]">
            {t('innofarm_section.subtitle')}
          </div>

          <div className="space-y-5 text-gray-700 dark:text-gray-300 text-base lg:text-lg">
            {features.map((feature, index) => (
              <div key={feature.title}>
                <h3 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  {icons[index]} {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}

            <a
              href={'https://www.innofarm.earth/'}
              rel="noopener noreferrer"
              target="_blank"
              className="text-white py-3 font-orbitron mt-8 px-6  bg-gradient-to-l   from-[#FF8120] to-[#00903D] rounded-lg hover:scale-105  font-bold  transition"
            >
              {t('innofarm_section.button')}
            </a>
          </div>
        </div>
        {/* Desktop Image - 60vw width */}
        <div className="w-1/2 hidden aspect-square h-full relative lg:block">
          <Image
            src="/landing/innofarm.png"
            alt="InnoFarm Illustration"
            className="rounded-2xl shadow-lg object-cover object-center"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
