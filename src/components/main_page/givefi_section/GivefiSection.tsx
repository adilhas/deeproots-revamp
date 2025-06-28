import Image from 'next/image';
import { Wallet, Smartphone, Rocket, Eye, BadgeCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [Wallet, Smartphone, Rocket, Eye, BadgeCheck];

export default function GivefiSection() {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('givefi_section.features', { returnObjects: true });
  const features: { title: string; description: string }[] = Array.isArray(
    rawFeatures
  )
    ? (rawFeatures as { title: string; description: string }[])
    : [];

  return (
    <section className="bg-[#C6E3D5] dark:bg-primary-dark relative overflow-hidden bg-gradient-to-br from-[#F5EDFF] to-[#B8D0FF] dark:from-primary-dark dark:to-primary-dark">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-[-50px] right-[-100px] lg:right-[30%] w-[250px] lg:w-[350px] h-[300px] bg-[#E3A4FE]"
          style={{
            filter: 'blur(166.707763671875px)',
            mixBlendMode: 'color-dodge',
            opacity: '0.5',
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[-100px] lg:left-[-100px] w-full md:w-[600px] h-[40%] bg-[#E3A4FE]  rounded-full dark:hidden"
          style={{
            filter: 'blur(166.707763671875px)',
            mixBlendMode: 'color-dodge',
            opacity: '0.5',
          }}
        />
        <div
          className="absolute bottom-[-100px] right-[-100px] w-[200px] md:w-[500px] h-[200px] lg:h-[500px] bg-[#E3A4FE]  rounded-full"
          style={{
            filter: 'blur(166.707763671875px)',
            mixBlendMode: 'color-dodge',
            opacity: '0.5',
          }}
        />
      </div>

      <div className="relative z-[1] w-full max-w-[1200px] mx-auto inset-shadow-2xs text-gray-900 dark:text-white px-6 py-16 lg:py-24">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto">
          <div className="w-fit">
            <h2 className="text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#5B26AF] to-[#E1A6FF] font-orbitron font-bold mb-6">
              {t('givefi_section.title')}
            </h2>

            {/* Mobile Image */}
            <div className="relative w-full max-w-md mx-auto aspect-square lg:hidden my-3 rounded-2xl">
              <Image
                src="/landing/givefi-bg-less.png"
                alt="GiveFi Logo"
                layout="responsive"
                width={768}
                height={768}
                className="rounded-xl object-contain"
                priority
              />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#A66EFF] to-[#6ECCFF] font-orbitron">
              {t('givefi_section.subtitle')}{' '}
            </h3>

            <ul className="space-y-3 text-black dark:text-[#F8FAFC]">
              {features.map(({ title, description }, index) => {
                const Icon = icons[index];
                return (
                  <li key={title}>
                    <div className="flex items-end gap-2">
                      <Icon
                        className="mt-1 text-[#9333EA] dark:text-[#A855F7]"
                        size={30}
                      />
                      <strong className="font-orbitron">{title}</strong>
                    </div>
                    <p className="text-[#1F2937] dark:text-[#E2E8F0]">
                      {description}
                    </p>
                  </li>
                );
              })}
            </ul>

            <a
              href="http://givefi.earth/"
              rel="noopener noreferrer"
              target="_blank"
              className="inline-block text-white mt-6 px-6 py-2 bg-gradient-to-r from-[#A66EFF] to-[#6ECCFF] rounded-lg hover:scale-105 font-bold transition"
            >
              {t('givefi_section.button')}
            </a>
          </div>

          {/* Desktop Image */}
          <div className="relative w-full mx-auto aspect-square hidden lg:block rounded-2xl">
            <Image
              src="/landing/givefi-bg-less.png"
              alt="GiveFi Logo"
              layout="responsive"
              width={768}
              height={768}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
