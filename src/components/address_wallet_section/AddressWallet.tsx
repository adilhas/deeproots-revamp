import Image from 'next/image';

const AddressWallet = () => {
  return (
    <main className="my-20 relative md:p-10 p-5">
      <div className="flex justify-center flex-col md:flex-row items-center w-full">
        {/* Text + Mobile Image Section */}
        <div className="flex justify-start w-full md:items-center lg:ml-10 lg:items-start lg:text-start items-start flex-col">
          <div className="inline-block">
            <div style={{ opacity: 1, transform: 'none' }}>
              <h1 className="font-extrabold text-2xl text-center lg:text-start lg:text-3xl my-5 lg:leading-normal mb-3 bg-gradient-to-r from-[#0085a8] to-orange-400 bg-clip-text font-orbitron text-transparent">
                THE ADDRESS WALLET
              </h1>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="w-full lg:hidden my-10 relative aspect-[16/10]">
            <Image
              src="/landing/address-wallet.jpeg"
              alt="mobile Wallet"
              fill
              className="w-full rounded-2xl"
              priority
            />
          </div>

          {/* Icon + Tagline */}
          <div className="flex justify-center mt-6 items-center">
            <div
              className="inline-block"
              style={{ opacity: 1, transform: 'none' }}
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-10 h-10 dark:text-[#ad1aa0] text-[#0085a8]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.322.75h1.176a1.75 1.75 0 0 1 1.75 1.749v1.177a10.75 10.75 0 0 1-2.925 7.374l-1.228 1.304a23.699 23.699 0 0 1-1.596 1.542v5.038c0 .615-.323 1.184-.85 1.5l-4.514 2.709a.75.75 0 0 1-1.12-.488l-.963-4.572a1.305 1.305 0 0 1-.14-.129L8.04 15.96l-1.994-1.873a1.305 1.305 0 0 1-.129-.14l-4.571-.963a.75.75 0 0 1-.49-1.12l2.71-4.514c.316-.527.885-.85 1.5-.85h5.037a23.668 23.668 0 0 1 1.542-1.594l1.304-1.23A10.753 10.753 0 0 1 20.321.75Zm-6.344 4.018v-.001l-1.304 1.23a22.275 22.275 0 0 0-3.255 3.851l-2.193 3.29 1.859 1.744a.545.545 0 0 1 .034.034l1.743 1.858 3.288-2.192a22.263 22.263 0 0 0 3.854-3.257l1.228-1.303a9.251 9.251 0 0 0 2.517-6.346V2.5a.25.25 0 0 0-.25-.25h-1.177a9.252 9.252 0 0 0-6.344 2.518ZM6.5 21c-1.209 1.209-3.901 1.445-4.743 1.49a.236.236 0 0 1-.18-.067.236.236 0 0 1-.067-.18c.045-.842.281-3.534 1.49-4.743.9-.9 2.6-.9 3.5 0 .9.9.9 2.6 0 3.5Zm-.592-8.588L8.17 9.017c.23-.346.47-.685.717-1.017H5.066a.25.25 0 0 0-.214.121l-2.167 3.612ZM16 15.112c-.333.248-.672.487-1.018.718l-3.393 2.262.678 3.223 3.612-2.167a.25.25 0 0 0 .121-.214ZM17.5 8a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 17.5 8Z" />
              </svg>
            </div>
            <div className="inline-block">
              <div style={{ opacity: 1, transform: 'none' }}>
                <h4 className="font-sans font-bold text-[#0085a8] ml-3 text-lg">
                  Start Earning Today!
                </h4>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans mt-5 lg:w-[500px] md:w-[70vw]">
            <span className="font-orbitron mb-5 font-bold">
              Warp Around Wealth - 9 Layers of Dynamic Finance.
            </span>
          </p>
          <p className="font-sans my-3">
            More Than a Wallet, It&apos;s an Earning Machine. Activate &amp;
            Begin Your Journey to wealth!
          </p>
          <p className="font-sans mt-2 lg:w-[500px] md:w-[70vw]">
            <span className="font-orbitron font-bold">
              Manage Asset | SEED | FOUNDATION | Referral | Gaming &amp; More.
            </span>
          </p>

          {/* Button */}
          <div className="flex justify-center lg:mt-6 items-center flex-col md:flex-row">
            <button className="mt-6 font-bold lg:mt-10 bg-gradient-to-r from-[#0085a8] to-orange-400 mr-6 px-6 font-orbitron py-3 text-center hover:bg-none hover:border-2 dark:border-[#0085a8] border-[#0085a8] dark:hover:text-[#0085a8] transition-all hover:ease-in-out rounded-lg text-lg tracking-wider">
              Activate Wallet
            </button>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden lg:flex w-full">
          <Image
            src="/landing/address-wallet.jpeg"
            alt="Desktop Wallet"
            width={600}
            height={437}
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
    </main>
  );
};

export default AddressWallet;
