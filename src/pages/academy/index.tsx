import { getAcademyTopicsData } from '@/components/academy_page/data';
import TopicsList from '@/components/academy_page/TopicsList';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// import { IoMdFunnel } from 'react-icons/io';

export default function Academy() {
  const { t } = useTranslation('academy/common');
  const academyTopicsData = getAcademyTopicsData(t);
  return (
    <>
      <Head>
        <title>DEEPROOTS</title>
        <meta name="description" content="description" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deeproots.earth/academy/about" />
      </Head>

      <AppLayout>
        <main className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
          <div className="w-full max-w-[1200px] mx-auto px-3">
            <div className="py-16">
              <h1
                className="text-3xl md:text-6xl font-semibold font-orbitron  w-fit text-transparent leading-tight bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text"
                dangerouslySetInnerHTML={{ __html: t('academy.heading') }}
              />
              <p className="text-[#4B5563] dark:text-[#E2E8F0]">
                {t('academy.subheading')}
              </p>
            </div>
            <div className="flex flex-row w-full md:justify-end">
              {/* <div className="flex flex-row w-full md:w-fit gap-1 items-center">
                <div className="relative w-full  md:max-w-md">
                  <input
                    type="text"
                    placeholder={t('academy.searchPlaceholder')}
                    className="w-full px-4 py-[7px] text-sm text-gray-900 dark:text-gray-100 bg-white dark:bg-[#2F2F31] border dark:border-[#2F2F31] rounded-lg border-[#FFFFFF] placeholder-gray-700 dark:placeholder-gray-300"
                  />
                </div>

                <div className=" bg-white dark:bg-[#2F2F31] h-[37px] w-10 flex items-center justify-center rounded-lg border dark:border-[#2F2F31] border-[#FFFFFF]">
                  <IoMdFunnel className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
              </div> */}
            </div>
            <div className="py-8">
              {academyTopicsData.map((data) => (
                <TopicsList key={data.title} {...data} />
              ))}
            </div>
          </div>
        </main>
      </AppLayout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'academy/common',
        'common',
      ])),
    },
  };
};
