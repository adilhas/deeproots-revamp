'use client';

import Image from 'next/image';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Brain,
  Code2,
  Globe,
  Lightbulb,
  Rocket,
  Users,
  BookOpen,
} from 'lucide-react';

import ShareValueHeader from './ShareValueHeader';

const icons = [
  <Brain key="brain" size={30} className="text-[#52b797]" />,
  <Code2 key="code2" size={30} className="text-[#52b797]" />,
  <Globe key="globe" size={30} className="text-[#52b797]" />,
  <Lightbulb key="lightbulb" size={30} className="text-[#52b797]" />,
  <Rocket key="rocket" size={30} className="text-[#52b797]" />,
  <Users key="users" size={30} className="text-[#52b797]" />,
  <BookOpen key="bookopen" size={30} className="text-[#52b797]" />,
];
const ShareValueSection = () => {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('share_value_section.features', {
    returnObjects: true,
  });
  const features: { title: string; description: string }[] = Array.isArray(
    rawFeatures
  )
    ? (rawFeatures as { title: string; description: string }[])
    : [];

  return (
    <main className="py-16 p-6 md:p-10 bg-[#E8F4D4] dark:bg-primary-dark relative">
      <div className="absolute top-0 bg-[#47866F] left-0 w-[100px] md:w-[500px] h-[300px] blur-3xl opacity-60 pointer-events-none z-10 dark:hidden" />
      <div className="absolute bottom-[-10px] bg-[#E88874] right-[-100px] w-[200px] md:w-[500px] h-[300px] blur-3xl opacity-50 pointer-events-none rounded-full z-10 dark:hidden" />

      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row items-start xl:items-center justify-center">
        <div className="flex flex-col xl:hidden">
          <h1 className="font-extrabold w-fit text-2xl xl:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
            {t('share_value_section.title')}
          </h1>
        </div>

        <div className="my-8 xl:my-0 w-fit mx-auto">
          <div className="relative w-full  xl:w-[600px] rounded-2xl overflow-hidden z-20">
            <Image
              src="/landing/share-value.webp"
              alt="Education Hub"
              width={600}
              height={500}
              className="object-cover rounded-2xl"
              sizes="(max-width: 1280px) 100vw, 600px"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col xl:hidden">
          <h2 className="font-bold text-xl my-3 mb-6 w-fit font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
            {t('share_value_section.subtitle')}
          </h2>
        </div>

        <div className="xl:w-1/2 mx-8">
          <div className="hidden xl:flex flex-col mb-4">
            <ShareValueHeader />
          </div>

          <div className="flex flex-col gap-4 text-left">
            {features.map((feature, index) => (
              <p key={index} className="font-sans text-md">
                <span className="font-bold flex items-center gap-2 font-orbitron">
                  {icons[index]} {feature.title}
                </span>
                {feature.description}
              </p>
            ))}
          </div>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://sharevalue.earth/"
            className="w-fit"
          >
            <button className="mt-8 py-4 px-7 w-fit font-orbitron font-bold text-lg text-neutral-200 bg-gradient-to-r from-[#E07C76] to-[#52b797] hover:scale-105 rounded-lg">
              {t('share_value_section.button')}
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default ShareValueSection;
