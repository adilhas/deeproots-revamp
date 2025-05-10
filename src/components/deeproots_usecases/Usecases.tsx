import React from 'react';

const useCases = [
  {
    title: 'High-Frequency Trading & DEX',
    description: 'Lightning-fast execution.',
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-14 h-10 m-3 group-hover:scale-105 dark:text-[#ad1]/80 text-[#0085a8]/80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z" />
      </svg>
    ),
  },
  // Add more items here as needed
];

const UseCases = () => {
  return (
    <div className="flex justify-center items-center flex-col my-20">
      <div className="inline-block">
        <h1 className="font-extrabold mx-5 text-2xl mb-14 leading-[40px] lg:text-start lg:text-3xl my-5 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#ad1] bg-clip-text font-orbitron text-transparent">
          DeepRoots Use Cases - Game-Changing Internet
        </h1>
      </div>
      <div className="w-full overflow-hidden py-10 scrollbar-hide touch-pan-x">
        <div className="flex space-x-6">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="backdrop-blur-md transition-opacity dark:shadow-2xl group hover:scale-105 rounded-lg px-6 py-14 text-center flex shadow-xl items-center gap-4 min-w-[450px]"
            >
              <div className="dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1] shadow-[1px_1px_2px_#ad1aa0,-1px_-1px_2px_#0085a8] rounded-md">
                {item.icon}
              </div>
              <div className="text-start ml-8">
                <h3 className="text-lg font-bold mb-3 font-orbitron w-full text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
