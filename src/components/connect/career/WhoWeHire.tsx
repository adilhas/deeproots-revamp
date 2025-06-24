import React from 'react';

const WhoWeHire = () => {
  const hiringQualitites = [
    {
      title: 'Visionaries who build with heart and ownership',
      text: 'text-[#1F2937] dark:text-[#D4D4D4]',
      bgColor: 'bg-[#F1F1F1] dark:bg-[#525252]',
      borderColor: 'border-[#D4D4D4] dark:border-[#737373]',
    },
    {
      title: 'Rebels who challenge limits and drive innovation',
      text: 'text-[#1570EF] dark:text-[#84CAFF]',
      bgColor: 'bg-[#EFF8FF] dark:bg-[#194185]',
      borderColor: 'border-[#B2DDFF] dark:border-[#2E90FA]',
    },

    {
      title: 'Executors who move fast, deliver daily, and uplift the team',
      text: 'text-[#EA580C] dark:text-[#FDBA74]',
      bgColor: 'bg-[#FFEDD5] dark:bg-[#7C2D12]',
      borderColor: 'border-[#FB923C] dark:border-[#FB923C]',
    },
  ];
  return (
    <div className="mx-auto p-6">
      <div className="my-6">
        <h2 className="text-center leading-tight text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text font-bold text-4xl lg:text-5xl w-fit mx-auto">
          Who We Hire
        </h2>
        <div className=" font-bold text-lg md:text-xl w-fit mx-auto">
          Have any of these Qualities? Join Us
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 my-6 mt-12">
        {hiringQualitites.map((item) => (
          <div
            key={item.title}
            className={`flex justify-center items-center p-6 rounded-xl ${item.bgColor} ${item.borderColor} ${item.text} border-2 text-center font-semibold text-lg w-full md:w-fit mx-auto`}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoWeHire;
