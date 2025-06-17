'use client';

import Image from 'next/image';
import { footerLinksV3 } from '@/constants/footerLinksV2';
import Link from 'next/link';
import { socialLinks } from '@/constants/socialLinksData';

export default function Footer() {
  return (
    <footer className="dark:bg-primary-dark bg-[#e8e8e9] text-[#1C1C1C] dark:text-[#F0F0F0] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-8 md:flex-row w-full mb-10 justify-between items-center">
          <div
            className="flex items-center w-fit cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
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
          <div className="flex flex-row gap-4 items-center text-xl">
            {socialLinks.map(({ Icon, name, href }) => (
              <Link href={href} key={name}>
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        <div className="grid md:gap-10 gap-3 grid-cols-2 lg:grid-cols-6 text-md">
          {footerLinksV3.map((section) => (
            <div
              key={section.title}
              className={`${section.title === 'DeWorld' ? 'col-span-2' : 'mx-2 md:mx-0'}  w-max mx-auto`}
            >
              <Link
                href={section.link}
                className={`font-semibold mb-4 font-orbitron text-[#1F2937] cursor-pointer dark:text-white flex flex-col justify-center items-start hover:text-[${section.hoverColor}] items-start gap-2 ${section.hoverColor}`}
              >
                <div className={`mx-auto`}>{section.icon}</div>
                <div className={`mx-auto`}>{section.title}</div>
              </Link>
              <ul
                className={`${
                  section.title === 'DeWorld'
                    ? 'grid grid-cols-2 gap-x-8 gap-y-3 p-5 rounded-2xl bg-[#FAFAFA] dark:bg-[#252525] border border-[#CBD5E1] dark:border-[#334155]'
                    : 'space-y-2'
                } text-[#4B5563] dark:text-[#F1F5F9]`}
              >
                {section.links.map((link, idx) => (
                  <li key={`${link.label}-${idx}`}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : '_self'}
                      rel={
                        link.href.startsWith('http')
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`text-sm hover:underline ${section.hoverColor}`}
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
          <Link href="/">
            <div className="flex justify-center items-center">
              <h3 className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#ad1aaf] bg-clip-text text-transparent to-[#0085a8] mb-2">
                DeepQuest (Quiz Hub)
              </h3>
            </div>
          </Link>
          <p className="text-sm dark:text-gray-400 mx-2">
            <Link href={'/our-story'}>Our Story</Link> - Brands Assets -{' '}
            <Link href={'/code-of-honor'}>Code of Honor</Link> - Jobs - Private
            Policy - Term of Use -{' '}
            <Link href={'/cookie-policy'}>Cookie Policy</Link> -{' '}
            <Link href={'/public-relations'}>Public Relations</Link>
          </p>
        </div>
        {/* <div className="text-center text-sm mt-10">
          ©2025 Deep Roots Ltd. | All rights Reserved
        </div> */}
      </div>
    </footer>
  );
}
