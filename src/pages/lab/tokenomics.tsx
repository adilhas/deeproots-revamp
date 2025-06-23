import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

export default function Tokenomics() {
  return (
    <>
      <Head>
        <title>tokenomics</title>
        <meta name="description" content="description" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://deeproots.earth/lab/tokenomics" />
      </Head>

      <section className="pt-32 pb-16 bg-neutral-100 dark:bg-black text-center text-gray-800 dark:text-gray-100 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 font-orbitron tracking-wide">
            🚧 Page Incoming...
          </h1>
        </div>
      </section>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
