import AppLayout from '@/Shared/AppLayout';
import CPHero from '@/components/cookie_policy_page/CPHero';
import CPIntro from '@/components/cookie_policy_page/CPIntro';
import CookieUses from '@/components/cookie_policy_page/CookieUses';
import CookieDonts from '@/components/cookie_policy_page/CookieDonts';
import CookieUserControl from '@/components/cookie_policy_page/CookieUserControl';
import CookieCommitment from '@/components/cookie_policy_page/CookieCommitment';
import CookieContact from '@/components/cookie_policy_page/CookieContact';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Seo from '@/Shared/SEO';

const CookiePolicyPage = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-neutral-300 dark:bg-primary-dark">
        <Seo
          title="Cookie Policy - DEEPROOTS"
          description="Our simple, transparent approach to cookies and privacy."
        />

        <CPHero />
        <div className="max-w-4xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
          <CPIntro />
          <CookieUses />
          <CookieDonts />
          <CookieUserControl />
          <CookieCommitment />
          <CookieContact />
        </div>
      </div>
    </AppLayout>
  );
};

export default CookiePolicyPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', [
        'cookie_policy',
        'common',
      ])),
    },
  };
};
