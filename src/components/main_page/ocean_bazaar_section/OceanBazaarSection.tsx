import Image from 'next/image';
import { ShoppingCart, Upload, Wallet, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'next-i18next';

const icons = [
  <ShoppingCart
    key="shopping-cart"
    className="mt-1 text-[#fead46]"
    size={30}
  />,
  <Upload key="upload" className="mt-1 text-[#fead46]" size={30} />,
  <Wallet key="wallet" className="mt-1 text-[#fead46]" size={30} />,
  <Clock key="clock" className="mt-1 text-[#fead46]" size={30} />,
  <ShieldCheck key="shield-check" className="mt-1 text-[#fead46]" size={30} />,
];

export default function OceanBazaarSection() {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('ocean_bazaar_section.features', {
    returnObjects: true,
  });
  const features: { title: string; description: string }[] = Array.isArray(
    rawFeatures
  )
    ? (rawFeatures as { title: string; description: string }[])
    : [];

  return (
    <section className="bg-[#D4FFFE] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[500px] bg-[#0A4764] blur-3xl opacity-30 pointer-events-none z-0 dark:inline-block lg:dark:hidden" />
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[400px] bg-[#30AFEC] blur-[150px] opacity-30 pointer-events-none z-0 hidden lg:dark:inline-block" />
      <div className="absolute top-[-100px] right-[35%] w-[350px] h-[500px] bg-[#30AFEC] blur-[80px] opacity-30 pointer-events-none z-0 hidden lg:dark:inline-block" />

      <div className="absolute top-[-100px] right-[38%] aspect-square w-[300px] h-[700px]  pointer-events-none z-0 hidden lg:dark:inline-block">
        <div className="relative w-full h-full">
          <Image
            src="/landing/ocean-bazaar-bg-blur.png"
            alt="Oceanbazaar Background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-black dark:text-white px-6 py-16 lg:py-24">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-16 items-center">
          <div className="order-1 lg:order-1 lg:justify-self-start lg:pr-10">
            <div className="font-orbitron lg:text-5xl text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r w-fit from-[#1BC1FF] to-[#fead46]">
              {t('ocean_bazaar_section.title')}
            </div>

            {/* Mobile Image - Hidden on Desktop */}
            <div className="w-full my-6 lg:hidden">
              <Image
                src="/landing/ocean-bazaar.png"
                alt="Ocean Bazaar Landing"
                className="rounded-xl shadow-lg"
                width={800}
                height={500}
                layout="responsive"
                priority
              />
            </div>
            <div className="font-orbitron text-xl lg:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r w-fit from-[#1BC1FF] to-[#fead46] dark:lg:text-transparent dark:text-white">
              {t('ocean_bazaar_section.subtitle')}
            </div>

            <ul className="space-y-3 text-gray-800 dark:text-gray-400">
              {features.map((feature, index) => (
                <li key={feature.title}>
                  <div className="flex items-end gap-2">
                    {icons[index]}
                    <strong className="text-black dark:text-white">
                      {feature.title}
                    </strong>
                  </div>
                  <p>{feature.description}</p>
                </li>
              ))}
            </ul>

            <div className="flex justify-start mt-6 ">
              <a
                href={'https://www.oceanbazaar.earth/'}
                rel="noopener noreferrer"
                target="_blank"
                className="text-neutral-800 px-6 py-2 bg-gradient-to-r from-[#1bc1ff] to-[#fead46] rounded-lg hover:scale-105 font-bold transition"
              >
                {t('ocean_bazaar_section.button')}
              </a>
            </div>
          </div>

          {/* Desktop Image - Right Aligned */}
          <div className="w-full  hidden lg:inline-block order-2 lg:order-2 lg:justify-self-end mx-auto  lg:mx-0 ">
            <Image
              src="/landing/ocean-bazaar.png"
              alt="Ocean Bazaar Landing"
              className="rounded-xl shadow-lg"
              width={1200}
              height={800}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
