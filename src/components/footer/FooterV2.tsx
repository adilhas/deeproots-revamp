'use client';

import Image from 'next/image';
import { footerLinksV2 } from '@/constants/footerLinksV2';

export default function Footer() {
  return (
    <footer className="dark:bg-primary-dark bg-[#e8e8e9] text-[#1C1C1C] dark:text-[#F0F0F0] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-start items-center px-4 w-fit mb-10">
          <Image
            src="/landing/logo.png"
            alt="logo-footer"
            width={56}
            height={56}
            className="cursor-pointer w-10 h-10 md:w-14 md:h-14 rounded-full mr-5 shadow-[2px_2px_5px_#ad1aaf,-2px_-2px_5px_#0085a8] dark:shadow-[2px_2px_2px_#0085a8,-2px_-2px_2px_#ad1aaf]"
          />
          <h2 className="md:text-3xl text-2xl font-orbitron font-bold bg-gradient-to-r from-[#0F172A] via-[#0F172A] to-[#0F172A] dark:bg-gradient-to-r dark:from-[#AD1AAF] dark:via-[#0085a8] dark:to-neutral-500 bg-clip-text text-transparent">
            Deep Roots
          </h2>
        </div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-6 text-md">
          <div className="col-span-2">
            <h4 className="font-semibold mb-4 text-[#1F2937] dark:text-white">
              DeWorld
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[#4B5563] dark:text-[#F1F5F9] p-5 rounded-2xl bg-[#FAFAFA] dark:bg-[#0F172A] border border-[#CBD5E1] dark:border-[#334155]">
              {footerLinksV2.DeWorld.map((item, idx) => (
                <a
                  key={`${item.label}-${idx}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/* Other Sections */}
          {(['Technology', 'Learn', 'Company', 'Community'] as const).map(
            (section) => (
              <div key={section} className="mx-2 md:mx-0">
                <h4 className="font-semibold mb-4 text-[#1F2937] dark:text-white">
                  {section}
                </h4>
                <ul className="space-y-2  text-[#4B5563] dark:text-[#F1F5F9]">
                  {footerLinksV2[section].map((link, idx) => (
                    <li key={`${link.label}-${idx}`}>
                      <a
                        href={link.href}
                        target={
                          link.href.startsWith('http') ? '_blank' : '_self'
                        }
                        rel={
                          link.href.startsWith('http')
                            ? 'noopener noreferrer'
                            : undefined
                        }
                        className="text-sm hover:underline"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-10">
          ©2025 Deep Roots Ltd. | All rights Reserved
        </div>
      </div>
    </footer>
  );
}
