import VolunteerForm from '@/components/connect/volunteer/VolunteerForm';
import WaysToContribute from '@/components/connect/volunteer/WaysToContribute';
import WhatWeArelooking from '@/components/connect/volunteer/WhatWeArelooking';
import WhatYouReceive from '@/components/connect/volunteer/WhatYouReceive';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Volunteer() {
  const { t } = useTranslation('connect/volunteer');
  return (
    <>
      <Head>
        <title>Volunteer</title>
        <meta
          name="description"
          content="We're opening the gates to a global Volunteer Program where you can contribute directly to the future of DeWorld."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://deeproots.earth/connect/volunteer"
        />
      </Head>
      <AppLayout>
        <section className="py-16 bg-primary-light dark:bg-primary-dark text-[#696969] dark:text-[#F1F5F9]">
          <div className="mb-16 px-2 sm:px-6 lg:px-8 max-w-[1200px] mx-auto ">
            <div className="flex flex-col lg:flex-row items-center gap-10">
              <div className="w-full lg:w-1/2 lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0085a8] to-[#ad1aaf] mb-6 text-nowrap">
                  {t('hero.title1')} <br />
                  {t('hero.title2')}
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                  {t('hero.description1')}
                </p>
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0">
                  {t('hero.description2')}
                </p>
                <Link
                  className="w-fit"
                  href={'/connect/volunteer#volunteer-form'}
                >
                  <button className="bg-gradient-to-r font-orbitron from-[#0085a8] to-[#ad1aaf] text-white font-semibold py-3 px-8 rounded-2xl text-lg shadow-md hover:shadow-lg transition-all">
                    {t('hero.button')}
                  </button>
                </Link>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="rounded-4xl max-h-[503px]  shadow-lg overflow-hidden">
                  <Image
                    src="/connect/volunteer-program.jpg"
                    alt="volunter Program"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div>
              <WhatWeArelooking />
              <WhatYouReceive />
              <WaysToContribute />
              <VolunteerForm />
            </div>
          </div>
        </section>
        <SocialLinks />
      </AppLayout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'common',
        'connect/volunteer',
      ])),
    },
  };
};
