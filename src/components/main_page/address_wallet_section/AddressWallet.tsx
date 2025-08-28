import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const AddressWallet = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  return (
    <main className="bg-[#D4D4D4] dark:bg-primary-dark">
      <div className="w-full  max-w-[1200px] mx-auto  py-20 relative lg:px-10 px-5">
        <div className="flex flex-col lg:flex-row items-stretch  gap-2 gap-x-5 w-full">
          <div className="flex justify-between w-full lg:w-1/2   lg:ml-10  lg:text-start items-start flex-col">
            <div className="inline-block">
              <div style={{ opacity: 1, transform: 'none' }}>
                <h1 className="font-extrabold text-3xl  lg:text-start lg:text-3xl lg:leading-normal bg-gradient-to-r from-[#0085a8] to-orange-400 bg-clip-text font-orbitron text-transparent">
                  {t('address_wallet.title')}
                </h1>
              </div>
            </div>

            {/* Mobile Image */}
            <div className="w-full lg:hidden z-20 my-3 relative aspect-square">
              <Image
                src="/landing/address-wallet.jpeg"
                alt="mobile Wallet"
                fill
                className="w-full rounded-2xl"
                priority
              />
            </div>

            <div>
              <p className="font-sans my-3 lg:w-[500px]">
                <span className="font-orbitron mb-5 font-bold">
                  {t('address_wallet.subtitle')}
                </span>
              </p>
              <div className="flex justify-start  my-3 items-center">
                <div className="inline-block my-5">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <div className="font-sans font-bold text-[#0085a8] text-lg">
                      {t('address_wallet.startEarning')}
                    </div>
                  </div>
                </div>
              </div>

              <p className="font-sans my-3">
                {t('address_wallet.description')}
              </p>
              <p className="font-sans my-3 lg:w-[500px] ">
                <span className="font-orbitron font-bold">
                  {t('address_wallet.features')}
                </span>
              </p>
            </div>
            <div className="flex justify-center lg:mt-6 items-center flex-col lg:flex-row">
              <a
                href={'https://www.theaddress.earth/'}
                rel="noopener noreferrer"
                target="_blank"
                className="text-white mt-6 font-bold lg:mt-10 bg-gradient-to-r from-[#0085a8] to-orange-400 mr-6 px-6 font-orbitron py-3 text-center  dark:border-[#0085a8] border-[#0085a8] hover:scale-105 transition-all hover:ease-in-out rounded-lg text-lg tracking-wider"
                style={{
                  boxShadow: `${isDark ? '0px 15px 31px 0px #000000' : '0px 8px 28px 0px #6D5D3F'}`,
                }}
                aria-label={'Mange asset button'}
              >
                {t('address_wallet.button')}
              </a>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden lg:flex w-1/2 p-2 relative z-30">
            <div className=" absolute bottom-[-50px] hidden lg:block bg-[#FF700D] right-0 w-[500px] h-[300px] rounded-full blur-3xl opacity-40 pointer-events-none z-10" />

            <Image
              src="/landing/address-wallet.jpeg"
              alt="Desktop Wallet"
              width={600}
              height={437}
              className="rounded-2xl relative z-20"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddressWallet;
