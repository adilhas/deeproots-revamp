import PhasesList from '@/components/academy_page/roadmap/PhasesList';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Roadmap() {
  const { t } = useTranslation('academy/roadmap');
  const { isArabic } = useLocaleDirection();

  return (
    <>
      <Seo title="DEEPROOTS - roadmap" description="Our Roadmap 2025–2027" />

      <AppLayout className="bg-primary-light dark:bg-primary-dark relative ">
        <div className="relative min-h-screen text-[#404040] dark:text-neutral-200 w-full overflow-hidden">
          <div
            className={`absolute inset-0 max-h-[2803px] w-[1966.4029541015625]  top-[50px] z-0 hidden lg:inline-block ${isArabic ? 'right-0 scale-x-[-1]' : 'left-0'}`}
          >
            <Image
              src="/roadmap-tree.png"
              alt="roadmap-tree"
              fill
              priority
              className="object-contain object-top-left"
            />
            <div className="absolute top-[-20px] w-[300px] h-[100px] bg-primary-dark blur-sm  pointer-events-none z-0 hidden dark:inline-block  " />
          </div>

          <PhasesList />
          <div className="lg:my-20 py-16 text-center max-w-[800px] mx-auto px-3">
            <h2 className="w-fit font-orbitron font-bold mx-auto text-3xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              {t('roadmap.techNote.title')}
            </h2>
            <p className="">{t('roadmap.techNote.description')}</p>
          </div>
        </div>
      </AppLayout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'academy/roadmap',
        'common',
      ])),
    },
  };
};
