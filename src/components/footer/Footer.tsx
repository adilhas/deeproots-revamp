import React from 'react';
import Image from 'next/image';
import { IFooter } from './types';
import { footerLinks } from '@/constants/sectionData';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="py-4">
      <div className="relative grid grid-cols-1 w-full md:pt-16 mt-16 md:ml-12 md:grid-cols-3 lg:grid-cols-5 items-start justify-center gap-8">
        <div className="flex justify-center md:absolute top-0 left-0 items-center">
          <Image
            src="/landing/logo.png"
            alt="logo-footer"
            width={56}
            height={56}
            className="cursor-pointer w-10 h-10 md:w-14 md:h-14 rounded-full mr-5 shadow-[2px_2px_5px_#ad1aaf,-2px_-2px_5px_#0085a8] dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aaf]"
          />
          <h2 className="md:text-3xl text-2xl font-orbitron font-bold bg-gradient-to-r from-[#AD1AAF] via-[#0085a8] to-[#0085a8] dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] dark:to-neutral-500 bg-clip-text text-transparent">
            DEEPROOTS
          </h2>
        </div>
        {footerLinks.map((section: IFooter, idx: number) => (
          <div
            key={idx}
            className="flex justify-center flex-col md:items-start items-center"
          >
            <div className="flex justify-center items-center my-5 gap-2">
              <div className="self-center">{section.icon}</div>
              <div className="font-semibold font-orbitron md:text-[16px] lg:text-lg text-lg self-center">
                {section.title}
              </div>
            </div>
            <ul className="space-y-4 text-center md:text-left text-sm">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
                  <a
                    href={link.href}
                    className={`cursor-pointer ${section.hoverColor}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center pt-20">
        <Link href="/#">
          <div className="flex justify-center items-center">
            <h3 className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#ad1aaf] bg-clip-text text-transparent to-[#0085a8] mb-2">
              DeepQuest (Quiz Hub)
            </h3>
          </div>
        </Link>
        <p className="text-sm dark:text-gray-400 mx-2">
          Our Story - Brands Assets - Code of Honor - Jobs - Private Policy -
          Term of Use - Cookie Policy - Public Relations
        </p>
      </div>
    </footer>
  );
};

export default Footer;
