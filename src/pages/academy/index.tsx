import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Academy() {
  return (
    <AppLayout>
      <div
        style={{ padding: '40px', fontFamily: 'sans-serif' }}
        className="text-center min-h-[80vh]"
      >
        <h1 className="text-3xl">DEEPROOTS Academy</h1>
        <p className="mt-8">Our academy content is coming soon. Stay tuned.</p>
      </div>
    </AppLayout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
