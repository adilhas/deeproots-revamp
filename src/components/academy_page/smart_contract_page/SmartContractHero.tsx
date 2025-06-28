import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const SmartContractHero = () => {
  const { t } = useTranslation('lab/smart_contract');
  return (
    <div className="mb-16 px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <div className="rounded-xl border-4 border-[#0085a8]/30 shadow-lg shadow-[#ad1aaf]/20 overflow-hidden">
            <Image
              src="/academy/smart-contract.jpeg"
              alt="Smart Contracts - Deep Roots"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6 leading-tight">
            {t('hero.title1')} <br />
            {t('hero.title2')}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
            {t('hero.description')}
          </p>
          <button className="bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] text-white font-bold py-3 px-8 rounded-full text-lg shadow-md hover:shadow-lg transition-all">
            {t('hero.button')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartContractHero;
