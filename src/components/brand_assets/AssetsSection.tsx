import { Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { PiImageSquare } from 'react-icons/pi';

const AssetsSection = () => {
  const assets = [
    { description: 'Asset 1', url: '/brand-assets/asset-1.png' },
    { description: 'Asset 2', url: '/brand-assets/asset-2.png' },
    { description: 'Asset 3', url: '/brand-assets/asset-3.png' },
    { description: 'Asset 4', url: '/brand-assets/asset-4.png' },
    { description: 'Asset 5', url: '/brand-assets/asset-5.png' },
    { description: 'Asset 6', url: '/brand-assets/asset-6.png' },
    { description: 'Asset 7', url: '/brand-assets/asset-7.png' },
    { description: 'Asset 8', url: '/brand-assets/asset-8.png' },
    { description: 'Asset 9', url: '/brand-assets/asset-9.png' },
    { description: 'Asset 10', url: '/brand-assets/asset-10.png' },
    { description: 'Asset 11', url: '/brand-assets/asset-11.png' },
    { description: 'Asset 12', url: '/brand-assets/asset-12.png' },
  ];

  return (
    <section id="assets-assets" className="py-16">
      <h2 className="text-3xl font-semibold flex flex-row items-center gap-2">
        <PiImageSquare className="w-7 h-7" /> Assets
      </h2>
      <div className="grid grid-cols-1 w-fit mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {assets.map(({ url }) => (
          <div key={url} className="rounded-2xl">
            <Image
              src={url}
              alt={url}
              width={385}
              height={385}
              className="rounded-t-2xl"
            />
            <div className="p-3 flex flex-row items-center justify-between dark:text-white text-primary-dark">
              <div>
                <div className="text-lg">Description</div>
                <div>Size</div>
              </div>
              <a
                href={url}
                download
                className="bg-[#E9E9E9] p-2 rounded-lg hover:bg-gray-300 transition text-primary-dark"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AssetsSection;
