import React from 'react';
import DiamondIcon from './DiamondIcon';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FeatureItem {
  title: string;
  description: string;
}

const DeepAssets = () => {
  const { t } = useTranslation('landing_page');
  const deepAssetsFeatures = t('deepAssets.features', {
    returnObjects: true,
  }) as FeatureItem[];

  return (
    <main className="relative bg-[#FBF2E7] dark:bg-primary-dark px-5 py-20">
      <div className="absolute top-0 left-0 w-full h-[30%] md:w-[10%] md:h-full bg-[#AD1AA0] blur-[300px] md:blur-[200px] dark:hidden z-0 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="absolute bottom-[-50px] mix-blend-color-dodge right-[10%] w-[300px] h-[200px] rounded-full blur-3xl opacity-40 pointer-events-none z-0 hidden dark:block bg-[#DA6A6D]" />
        <div className="flex justify-center items-center relative z-10">
          <div className="flex justify-start  w-full lg:mr-16 items-start flex-col z-20">
            <div className="font-extrabold w-fit leading-normal text-4xl mb-3 bg-gradient-to-r from-[#0085a8] to-orange-800 bg-clip-text font-orbitron text-transparent">
              {t('deepAssets.title')}
            </div>

            {/* Mobile Image */}
            <div className="w-full lg:hidden flex my-5">
              <Image
                src="/landing/deep-assets.jpeg"
                alt="mobile Asset visual"
                className="rounded-2xl"
                width={600}
                height={400}
                layout="responsive"
              />
            </div>

            {/* Text Content */}
            <div className="flex items-start justify-center flex-col">
              <div className="font-orbitron font-[600] dark:text-[#F1F5F9] text-[#1F2937] w-fit leading-normal text-xl mb-3 ">
                {t('deepAssets.subtitle')}
              </div>
              {deepAssetsFeatures.map(({ title, description }, index) => (
                <div key={index} className="flex items-center my-1">
                  <div className="inline-block">
                    <DiamondIcon />
                  </div>
                  <p className="lg:w-[500px] font-sans md:w-[70vw]">
                    <span className="font-orbitron font-bold">{title}</span>{' '}
                    {description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 mb-6 font-sans">
              <p>{t('deepAssets.description')}</p>
            </div>

            <Link href="https://deepassets.earth/">
              <button className="py-3 font-sans text-neutral-200 text-lg px-5 bg-gradient-to-r from-[#3D81A4] dark:to-[#EF8F35] to-[#3D81A4] rounded-lg flex justify-center items-center">
                {t('deepAssets.button')}
                <ChevronRight />
              </button>
            </Link>
          </div>

          {/* Desktop Image and Background Blur */}
          <div className="hidden lg:flex w-full relative z-10">
            {/* Pink background blur behind image */}
            <div className="absolute bottom-[50px] right-[20%] w-[300px] h-[200px] rounded-full blur-3xl opacity-40 pointer-events-none z-0 hidden dark:block bg-[#DA6A6D]" />

            {/* Image */}
            <Image
              src="/landing/deep-assets.jpeg"
              alt="desktop Asset visual large"
              className="rounded-2xl object-cover relative z-10"
              width={1200}
              height={800}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DeepAssets;
