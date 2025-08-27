import Image from 'next/image';
import { useTranslation } from 'next-i18next';

export default function RootscanSection() {
  const { t } = useTranslation('landing_page');
  const rawFeatures = t('rootscan.features', { returnObjects: true });
  const features: { title: string; description: string }[] = Array.isArray(
    rawFeatures
  )
    ? (rawFeatures as { title: string; description: string }[])
    : [];
  return (
    <section className="bg-[#BC965A] dark:bg-primary-dark relative overflow-hidden">
      <div className="absolute top-[-100px] right-[-100px] lg:right-[10%] w-[250px] lg:w-[500px] h-[300px] bg-[#677950] blur-[80px] opacity-60 pointer-events-none z-0 dark:hidden" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[200px] lg:h-[500px] bg-[#5F7044] dark:bg-[#364128] blur-3xl opacity-50 dark:opacity-60 lg:dark:opacity-40 pointer-events-none rounded-full z-0" />
      <div className="absolute top-[-100px] left-[-100px] w-[100px] md:w-[40%] h-[100%] bg-[#2E1401] dark:bg-[#2e1908] rounded-br-full blur-3xl opacity-40 pointer-events-none z-0" />
      <div className="absolute bottom-[0px] left-[20%]  w-[250px] lg:w-[500px] h-[300px] bg-[#BD7B18] blur-[80px] opacity-60 pointer-events-none z-0 dark:hidden" />

      <div className="relative z-10 w-full x-20 max-w-[1200px] mx-auto px-10 py-16 lg:py-24">
        <div className="lg:text-left max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <div className="w-fit mx-auto lg:mx-0 font-orbitron z-20 text-5xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-[#F0B100] to-[#00C951] bg-clip-text">
                {t('rootscan.title')}
              </div>

              {/* Mobile image */}
              <div className="w-full my-6 lg:hidden">
                <Image
                  src="/landing/rootscan-v2.png"
                  alt="Rootscan Landing"
                  className="rounded-4xl shadow-lg"
                  width={800}
                  height={500}
                  layout="responsive"
                  priority
                />
              </div>

              <div className=" w-fit font-orbitron text-xl my-2 lg:text-3xl font-bold text-transparent bg-gradient-to-r md:from-[#F0B100] md:to-[#00C951] from-[#fff] to-[#fff] bg-clip-text">
                {t('rootscan.subtitle')}
              </div>
            </div>

            <ul className="my-3 text-white">
              {features.map(({ title, description }) => (
                <li key={title}>
                  <div className="flex items-end gap-2">
                    <Image
                      alt="tree-palm"
                      src={'/landing/palm-tree.svg'}
                      width={32}
                      height={32}
                    />
                    <div>
                      <strong className="text-[#E8B203] block">{title}</strong>
                    </div>
                  </div>
                  <p>{description}</p>
                </li>
              ))}
            </ul>

            <div className="mt-3 w-fit">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://rootscan.earth"
                aria-label="Visit Rootscan website"
              >
                <button
                  aria-label="Explore Rootscan button"
                  className="px-6 font-orbitron hover:scale-105 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-yellow-500 to-green-500 text-black hover:from-yellow-400 hover:to-green-400 transition"
                >
                  {t('rootscan.cta')}
                </button>
              </a>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="relative w-full hidden lg:inline-block order-2 lg:order-2 lg:justify-self-end mx-auto lg:mx-0">
            <div className="absolute top-[20px] right-[40px] w-[250px] lg:w-[500px] h-[300px] bg-[#705E44] blur-[80px] opacity-60 pointer-events-none z-0 hidden dark:inline-block" />

            <Image
              src="/landing/rootscan-v2.png"
              alt="Rootscan Landing"
              className="rounded-4xl shadow-lg relative z-10"
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
