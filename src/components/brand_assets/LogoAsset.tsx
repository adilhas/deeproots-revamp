import { Download } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const LogoAsset = () => {
  const logos = [
    { name: 'White Logo', url: '/brand-assets/white-logo.png' },
    { name: 'Black Logo', url: '/brand-assets/black-logo.png' },
    { name: 'Color Logo', url: '/brand-assets/color-logo.png' },
    { name: 'Logo Vertical', url: '/brand-assets/logo-vertical.png' },
    { name: 'Logo Horizontal', url: '/brand-assets/logo-horizontal.png' },
    { name: 'Wordmark Color', url: '/brand-assets/wordmark-color.png' },
    { name: 'Wordmark Dark', url: '/brand-assets/wordmark-dark.png' },
    { name: 'Wordmark Light', url: '/brand-assets/wordmark-light.png' },
  ];

  return (
    <section id="logo-assets" className="py-16">
      <h2 className="text-3xl font-semibold">
        Logo of the DEEPROOTS ecosystem
      </h2>
      <div className="grid grid-cols-1 w-fit mx-auto md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        {logos.map(({ url, name }) => (
          <div key={name} className="rounded-2xl bg-white">
            <Image
              src={url}
              alt={name}
              width={282}
              height={285}
              className="rounded-t-2xl"
            />
            <div className="p-3 flex flex-row items-center justify-between dark:text-primary-dark">
              <div>
                <div className="text-lg">{name}</div>
                <div>Logo</div>
              </div>
              <a
                href={url}
                download
                className="bg-[#E9E9E9] p-2 rounded-lg hover:bg-gray-300 transition"
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

export default LogoAsset;
