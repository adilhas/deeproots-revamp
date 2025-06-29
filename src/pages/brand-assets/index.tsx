import AssetMenu from '@/components/brand_assets/AssetMenu';
import AssetsSection from '@/components/brand_assets/AssetsSection';
import BAHero from '@/components/brand_assets/BAHero';
import ColorAsset from '@/components/brand_assets/ColorAsset';
import LogoAsset from '@/components/brand_assets/LogoAsset';
import TypographyAsset from '@/components/brand_assets/TypographyAsset';
import AppLayout from '@/Shared/AppLayout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

const BrandAssets = () => {
  return (
    <AppLayout>
      <div className=" bg-neutral-300 dark:bg-primary-dark text-[#404040] dark:text-neutral-200">
        <div className="max-w-[1200px] mx-auto px-3">
          <BAHero />
          <AssetMenu />
          <LogoAsset />
          <ColorAsset />
          <TypographyAsset />
          <AssetsSection />
        </div>
      </div>
    </AppLayout>
  );
};

export default BrandAssets;
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    },
  };
};
