import Image from 'next/image';
import React from 'react';

const DealRoomAccessBenefits = () => {
  const data = [
    {
      name: 'TeleXcoin Dex',
      icon: '/deworld/ecosystem_icons/telexcoin-dex-light.png',
      url: 'https://www.telexcoin.earth',
    },
    {
      name: 'The Address Wallet',
      url: 'https://www.theaddress.earth',
      icon: '/deworld/ecosystem_icons/the-address-wallet-light.png',
    },
    {
      name: 'Ocean Bazaar',
      url: 'https://www.oceanbazaar.earth',
      icon: '/deworld/ecosystem_icons/ocean-bazaar-light.png',
    },
    {
      name: 'RootScan',
      url: 'https://www.rootscan.earth',
      icon: '/deworld/ecosystem_icons/rootscan-light.png',
    },
    {
      name: 'Rootopia',
      url: 'https://www.rootopia.earth',
      icon: '/deworld/ecosystem_icons/rootopia-light.png',
    },
    {
      name: 'Foudation',
      url: '',
      icon: '/deworld/ecosystem_icons/foundation-light.png',
    },
  ];
  return (
    <div className="bg-white text-[#303030] p-4 rounded-3xl w-full max-w-[384px] h-fit ">
      <div className="text-xl font-semibold mb-6">
        Complete Deal room and gain access to
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#F5F5F5] p-2 rounded-2xl text-center">
          <Image
            src={'/dashboard/foundation-seat.png'}
            width={144}
            height={144}
            alt="foundation seat"
            className="mx-auto"
          />

          <div className="text-xl font-semibold">Foundation seat</div>
          <div className="bg-[#E9D5FF] mx-auto py-1 px-4 text-[#7E22CE] text-sm w-fit font-semibold rounded-4xl">
            100 Seats
          </div>
          <div className="text-md text-[#525252] font-normal mt-4">
            Secure your place in DEEPROOTS.Join the Deal Room for details.
          </div>
        </div>
        <div className="bg-[#F5F5F5] p-2 rounded-2xl text-center">
          <Image
            src={'/dashboard/founder-seat.png'}
            width={144}
            height={144}
            alt="founder seat"
            className="mx-auto"
          />

          <div className="text-xl font-semibold">Founder seat</div>
          <div className="bg-[#FED7AA] py-1 mx-auto px-4 text-[#EA580C] text-sm w-fit font-semibold rounded-4xl">
            10 Seats
          </div>
          <div className="text-md text-[#525252] font-normal mt-4">
            Elite access. Limited availability.Explore more inside the Deal
            Room.
          </div>
        </div>
      </div>
      <div className="bg-[#F5F5F5] p-4 rounded-2xl  mt-6 w-full gap-2 items-center">
        <div className="flex flex-row">
          <Image
            src={'/dashboard/founder-call.png'}
            width={132}
            height={132}
            alt="founder call "
            className="min-w-[132px] min-h-[132px]"
          />
          <div>
            <div className="text-xl font-semibold">Founder’s call</div>

            <div className="text-md text-[#525252] font-normal mt-4">
              Have a 15 min call with founder to ask Questions and review live
              products on DEEPROOTS
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full justify-evenly mt-6 px-1 py-2.5 gap-2 bg-white rounded-lg">
          {data.map((item, index) => (
            <Image
              key={index}
              src={item.icon ?? ''}
              width={24}
              height={24}
              alt={item.name}
              className="rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealRoomAccessBenefits;
