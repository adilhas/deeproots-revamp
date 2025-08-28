import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'next-i18next';

const aboutItems = [
  { title: 'story', link: '/our-story' },
  { title: 'about', link: '/academy/about' },
  { title: 'deworld', link: '/deworld/ecosystem' },
  { title: 'drc', link: '/academy/drc' },
  { title: 'foundation', link: '/seeding/foundation' },
  { title: 'whitepaper', link: '/deeproots-whitepaper.pdf' },
  { title: 'roadmap', link: '/academy/roadmap' },
];
const AboutSection: React.FC = () => {
  const { t } = useTranslation('landing_page');

  return (
    <section className="max-w-4xl mx-auto py-[112px] z-40 px-4">
      <h1 className="font-extrabold mx-auto w-fit text-2xl text-center lg:text-start lg:text-3xl my-5 lg:leading-normal mb-10 bg-gradient-to-r from-[#0085a8] to-orange-400 bg-clip-text font-orbitron text-transparent">
        {t('about.title')}
      </h1>

      <div className="md:space-y-6 space-y-4">
        {aboutItems.map((item, index) => (
          <div
            key={index}
            className="border w-full max-w-[580px] mx-auto border-[#0085a8] rounded-lg cursor-pointer hover:scale-105 transition-all"
          >
            <Link
              href={item.link}
              aria-label={t(`about.items.${item.title} link`)}
              className="w-full text-left px-4 py-3 flex justify-between items-center cursor-pointer"
            >
              <span className="font-semibold">
                {t(`about.items.${item.title}`)}
              </span>
              <span>
                <ArrowUpRight />
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
