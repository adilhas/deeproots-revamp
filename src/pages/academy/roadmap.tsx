import PhasesList from '@/components/academy_page/roadmap/PhasesList';
import useLocaleDirection from '@/hooks/useLocaleDirection';
import AppLayout from '@/Shared/AppLayout';
import Seo from '@/Shared/Seo';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

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
          <div className="lg:my-18 py-16 text-center max-w-[800px] mx-auto px-3 space-y-8">
            <div className="w-fit h-fit mx-auto">
              <Image
                src={'/academy/LockKey.svg'}
                width={32}
                height={32}
                alt="lock"
              />
            </div>
            <h2 className="w-fit font-orbitron font-bold mx-auto text-3xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              Private Ecosystem Disclosure Protocol
            </h2>
            <div>
              <p className="">
                All strategic partnerships, early ecosystem collaborators, and
                flagship dApp alignments including developers, producers,
                artists, studios, and script contributors are
                disclosed exclusively to verified Foundation Members.
              </p>
              <p className="my-4">
                Access is provided via the private Foundation Dashboard during
                the closed contribution phases.
              </p>
              <p>
                No public announcements will be made prior to full ecosystem
                activation.
              </p>
            </div>
          </div>
          <div className="lg:my-18 py-16 text-center max-w-[800px] mx-auto px-3 space-y-8">
            <div className="w-fit h-fit mx-auto">
              <Image
                src={'/academy/CodeBlock.svg'}
                width={32}
                height={32}
                alt="lock"
              />
            </div>
            <h2 className="w-fit font-orbitron font-bold mx-auto text-3xl text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
              {t('roadmap.techNote.title')}
            </h2>
            <div>
              <p className="mb-4">
                Deep Roots will operate in closed development mode until 2027.
              </p>
              <p>
                In Year 3, we will open full documentation, SDKs, and dev tools
                to empower builders across the ecosystem once the foundation is
                fully established, audited, and secured.
              </p>
            </div>
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
