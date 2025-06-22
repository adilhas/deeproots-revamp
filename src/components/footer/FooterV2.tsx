'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { footerLinksV3 } from '@/constants/footerLinksV2';
import { socialLinks } from '@/constants/socialLinksData';

export default function Footer() {
  const { locale } = useRouter();

  return (
    <footer className="dark:bg-primary-dark bg-[#D2D5DB] text-[#1C1C1C] dark:text-[#F0F0F0] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* Logo & Socials */}
        <div className="flex flex-col gap-8 md:flex-row w-full mb-10 justify-between items-center">
          <div
            className="flex items-center w-fit cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="/landing/logo.png"
              alt="logo-footer"
              width={60}
              height={60}
              className="cursor-pointer w-10 h-10 md:w-14 md:h-14 rounded-full mr-5"
            />
            <h2 className="md:text-3xl w-fit text-2xl font-orbitron font-bold bg-gradient-to-r from-gradient-from to-gradient-to dark:to-neutral-500 bg-clip-text text-transparent">
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

        {/* Footer Links */}
        <div className="grid md:gap-10 gap-3 grid-cols-2 lg:grid-cols-6 text-md">
          {footerLinksV3.map((section) => (
            <div
              key={section.title}
              className={`${
                section.title === 'DeWorld' ? 'col-span-2' : 'mx-2 md:mx-0'
              } w-max mx-auto`}
            >
              <Link
                href={`/${locale}${section.link}`}
                className={`font-semibold mb-4 font-orbitron text-[#1F2937] cursor-pointer dark:text-white flex flex-col justify-center items-start hover:text-[${section.hoverColor}] gap-2 ${section.hoverColor}`}
              >
                <div className="mx-auto">{section.icon}</div>
                <div className="mx-auto">{section.title}</div>
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
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-sm hover:underline ${section.hoverColor}`}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={`/${locale}${link.href}`}
                        className={`text-sm hover:underline ${section.hoverColor}`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center pt-20">
          <Link href={`/${locale}/`}>
            <div className="flex justify-center items-center">
              <h3 className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#ad1aaf] bg-clip-text text-transparent to-[#0085a8] mb-2">
                DeepQuest (Quiz Hub)
              </h3>
            </div>
          </Link>
          <p className="text-sm dark:text-gray-400 mx-2">
            <Link href={`/${locale}/our-story`}>Our Story</Link> - Brands Assets
            - <Link href={`/${locale}/code-of-honor`}>Code of Honor</Link> -
            Privacy Policy - Term of Use -{' '}
            <Link href={`/${locale}/cookie-policy`}>Cookie Policy</Link> -{' '}
            <Link href={`/${locale}/public-relations`}>Public Relations</Link> -
            Disclaimer
          </p>
        </div>
      </div>
    </footer>
  );
}
