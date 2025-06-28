import Image from 'next/image';
import {
  ShoppingCart,
  Paintbrush,
  User,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const icons = [
  <ShoppingCart className="text-blue-500 w-12 h-12 mr-3" key="cart" />,
  <Paintbrush className="text-[#ee49fc] w-12 h-12 mr-3" key="brush" />,
  <User className="text-green-500 w-12 h-12 mr-3" key="user" />,
  <ShieldCheck className="text-yellow-500 w-12 h-12 mr-3" key="shield" />,
  <Smartphone className="text-[#9a37f0] w-12 h-12 mr-3" key="phone" />,
  <Sparkles className="text-red-500 w-12 h-12 mr-3" key="sparkles" />,
];
const MetaFabricSection = () => {
  const { t } = useTranslation('landing_page');

  const features = t('metafabric_section.features', {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
  }[];
  return (
    <section className=" bg-[#B0C9D3] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[0px] lg:right-[-100px] w-[100%] md:w-[300px] h-[40%] lg:h-[400px] bg-[#928FFD] blur-3xl opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] lg:left-[-100px] w-full md:w-[500px] h-[30%] lg:h-[80%] bg-[#928FFD] blur-3xl opacity-50 dark:opacity-20 pointer-events-none rounded-full z-0 dark:hidden" />
      <div className="absolute left-1/2 top-1/2 w-[500px] h-[500px] rounded-full bg-[#fff] opacity-60 blur-3xl pointer-events-none z-0 dark:hidden transform -translate-x-1/2 -translate-y-1/2" />

      <div className="w-full  max-w-[1200px] mx-auto flex relative flex-col lg:flex-row items-start lg:items-center py-10 p-6 lg:p-12 gap-8">
        <h1 className="font-extrabold lg:max-w-[600px] text-4xl lg:hidden leading-[40px] lg:text-5xl lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron text-transparent">
          {t('metafabric_section.title')}
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

        <div className="lg:w-1/2 text-gray-800 font-sans dark:text-gray-200">
          <div className="mb-4 ">
            <h1 className="font-extrabold lg:max-w-[600px] text-4xl hidden lg:inline-block leading-[40px] lg:text-5xl lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron text-transparent">
              {t('metafabric_section.title')}
            </h1>
            <h1 className="font-extrabold text-2xl inline-block leading-[40px]  lg:leading-normal bg-gradient-to-r from-[#940AD9] via-[#CD2C9A] to-[#07A3C2] w-fit bg-clip-text font-orbitron lg:text-transparent dark:lg:text-transparent text-[#334155] dark:text-[#F1F5F9]">
              {t('metafabric_section.subtitle')}{' '}
            </h1>
          </div>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={feature.title} className="flex items-center gap-4">
                {icons[index]}
                <div>
                  <h4 className="font-semibold text-md text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://metafabric.earth/"
          >
            <button className="mt-6 px-6 py-2 bg-gradient-to-l from-[#EE49FC] to-[#32d8fd] text-white rounded-lg  font-bold hover:scale-105 transition">
              {t('metafabric_section.button')}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MetaFabricSection;
