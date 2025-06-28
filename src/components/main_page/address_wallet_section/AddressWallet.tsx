import { useThemeContext } from '@/context/ThemeContext';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

const AddressWallet = () => {
  const { isDark } = useThemeContext();
  const { t } = useTranslation('landing_page');
  return (
    <main className="bg-[#D4D4D4] dark:bg-primary-dark">
      <div className="w-full  max-w-[1200px] mx-auto  py-20 relative lg:px-10 px-5">
        <div className="flex flex-col lg:flex-row items-stretch  gap-2 w-full">
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
                <div
                  className="inline-block"
                  style={{ opacity: 1, transform: 'none' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 dark:text-[#ad1aa0] text-[#0085a8]"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.322.75h1.176a1.75 1.75 0 0 1 1.75 1.749v1.177a10.75 10.75 0 0 1-2.925 7.374l-1.228 1.304a23.699 23.699 0 0 1-1.596 1.542v5.038c0 .615-.323 1.184-.85 1.5l-4.514 2.709a.75.75 0 0 1-1.12-.488l-.963-4.572a1.305 1.305 0 0 1-.14-.129L8.04 15.96l-1.994-1.873a1.305 1.305 0 0 1-.129-.14l-4.571-.963a.75.75 0 0 1-.49-1.12l2.71-4.514c.316-.527.885-.85 1.5-.85h5.037a23.668 23.668 0 0 1 1.542-1.594l1.304-1.23A10.753 10.753 0 0 1 20.321.75Zm-6.344 4.018v-.001l-1.304 1.23a22.275 22.275 0 0 0-3.255 3.851l-2.193 3.29 1.859 1.744a.545.545 0 0 1 .034.034l1.743 1.858 3.288-2.192a22.263 22.263 0 0 0 3.854-3.257l1.228-1.303a9.251 9.251 0 0 0 2.517-6.346V2.5a.25.25 0 0 0-.25-.25h-1.177a9.252 9.252 0 0 0-6.344 2.518ZM6.5 21c-1.209 1.209-3.901 1.445-4.743 1.49a.236.236 0 0 1-.18-.067.236.236 0 0 1-.067-.18c.045-.842.281-3.534 1.49-4.743.9-.9 2.6-.9 3.5 0 .9.9.9 2.6 0 3.5Zm-.592-8.588L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 0 0-.214.121l-2.167 3.612ZM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 0 0 .121-.214ZM17.5 8a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8Z" />
                  </svg>
                </div>
                <div className="inline-block my-5">
                  <div style={{ opacity: 1, transform: 'none' }}>
                    <h4 className="font-sans font-bold text-[#0085a8] ml-3 text-lg">
                      {t('address_wallet.startEarning')}
                    </h4>
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
