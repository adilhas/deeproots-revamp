'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { socialLinks } from '@/constants/socialLinksData';
import { getfooterLinks } from '@/constants/footerLinksV2';
import clsx from 'clsx';

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { t } = useTranslation('common');
  const footerLinksV3 = getfooterLinks(t);

  return (
    <footer
      className={clsx(
        ' dark:bg-primary-dark bg-[#D2D5DB] text-[#1C1C1C] dark:text-[#F0F0F0] px-6 py-12',
        className
      )}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Logo & Socials */}
        <div className="flex flex-col gap-8 md:flex-row w-full mb-10 justify-between items-center">
          <div
            className="flex items-center w-fit cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
              src="/landing/logo-big.png"
              alt="logo-footer"
              width={60}
              height={60}
              className="cursor-pointer w-10 h-10 md:w-14 md:h-14 rounded-full mr-5"
            />
            <h2 className="md:text-3xl w-fit text-2xl font-orbitron font-bold bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
              DEEPROOTS
            </h2>
          </div>
          <div className="flex flex-row gap-4 items-center text-xl">
            {socialLinks.map(({ Icon, name, href }) => (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                key={name}
              >
                <Icon />
              </a>
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
              <div
                className={`font-semibolb font-orbitron text-[#1F2937] cursor-pointer dark:text-white flex flex-col justify-center items-start gap-2 ${section.hoverColor} ${section.title === 'DeWorld' ? 'w-full mb-4' : 'w-max mb-8'}`}
              >
                <div className="mx-auto">{section.icon}</div>
                <div
                  className={`${section.title === 'DeWorld' ? 'mx-auto text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-2xl font-bold' : ''}`}
                >
                  {section.title}
                </div>
              </div>
              <ul
                className={`${
                  section.title === 'DeWorld'
                    ? 'grid grid-cols-2  gap-x-8 gap-y-3 p-5 rounded-2xl bg-[#FAFAFA] dark:bg-[#252525] border border-[#CBD5E1] dark:border-[#334155]'
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
                        href={`${link.href}`}
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
          <Link href={`/deepquest`}>
            <div className="flex justify-center items-center">
              <h3 className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#ad1aaf] to-[#0085a8] bg-clip-text text-transparent mb-2">
                DeepQuest (Quiz Hub)
              </h3>
            </div>
          </Link>
          <p className="text-sm dark:text-gray-400 mx-2 flex flex-wrap justify-center gap-x-2 gap-y-1">
            <Link href={`/our-story`} className="hover:underline">
              {t('footer.OurStory')}
            </Link>
            -
            <Link href={'/brand-assets'} className="hover:underline">
              {t('footer.BrandAssets')}
            </Link>
            -
            <Link href={`/code-of-honor`} className="hover:underline">
              {t('footer.CodeOfHonor')}
            </Link>
            -
            <Link href={`/identity/privacy-policy`} className="hover:underline">
              {t('footer.PrivacyPolicy')}
            </Link>
            -
            <Link
              href={`/identity/terms-of-service`}
              className="hover:underline"
            >
              {t('footer.TermsOfUse')}
            </Link>
            -
            <Link href={`/cookie-policy`} className="hover:underline">
              {t('footer.CookiePolicy')}
            </Link>
            -
            <Link href={`/public-relations`} className="hover:underline">
              {t('footer.PublicRelations')}
            </Link>
            -<Link href={`/disclaimer`}>{t('footer.Disclaimer')}</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
