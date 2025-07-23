import BlogSection from '@/components/blogs/BlogSection';
import SocialLinks from '@/components/main_page/social_links_section/SocialLinks';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const BlogsPage = () => {
  return (
    <AppLayout>
      <BlogSection />
      <SocialLinks />
    </AppLayout>
  );
};

export default BlogsPage;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
