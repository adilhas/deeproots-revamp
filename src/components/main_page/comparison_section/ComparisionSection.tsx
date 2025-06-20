import React from 'react';
import FeatureList from './FeatureList';
import {
  SlidersVertical,
  Globe,
  ShieldAlert,
  DollarSign,
  BadgeX,
  Hourglass,
  Lock,
  Zap,
  Eye,
  Link,
  Handshake,
  RefreshCcw,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const centralizedIcons = [
  <SlidersVertical key="SlidersVertical" />,
  <ShieldAlert key="ShieldAlert" />,
  <DollarSign key="DollarSign1" />,
  <BadgeX key="BadgeX" />,
  <DollarSign key="DollarSign2" />,
  <Hourglass key="Hourglass" />,
  <Lock key="Lock" />,
];

const decentralizedIcons = [
  <Zap key="Zap" />,
  <Eye key="Eye" />,
  <Lock key="Lock" />,
  <Link key="Link" />,
  <Globe key="Globe" />,
  <Handshake key="Handshake" />,
  <RefreshCcw key="RefreshCcw" />,
];

const ComparisonSection = () => {
  const { t } = useTranslation('landing_page');
  const centralizedFeatures = (
    t('comparison.centralized-features', {
      returnObjects: true,
    }) as string[]
  ).map((label, i) => ({
    icon: centralizedIcons[i],
    label,
  }));
  const decentralizedFeatures = (
    t('comparison.decentralized-features', {
      returnObjects: true,
    }) as string[]
  ).map((label, i) => ({
    icon: decentralizedIcons[i],
    label,
  }));

  return (
    <section className="bg-[#BFBFBF] dark:bg-[#1D1D21]">
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        {/* <SectionHeader /> */}

        <div className="lg:grid grid-cols-1 hidden lg:grid-cols-3 gap-6 items-center">
          <div>
            <h1 className="font-extrabold text-2xl text-center md:text-3xl md:mb-20 mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              {t('comparison.centralized-title')}
            </h1>
            <FeatureList
              title={t('comparison.centralized-title')}
              icon={<SlidersVertical />}
              features={centralizedFeatures}
              color="red"
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <h1 className="font-extrabold text-6xl text-center lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              {t('comparison.vs')}
            </h1>
          </div>

          <div>
            <h1 className="font-extrabold text-2xl text-center md:text-3xl md:mb-20 mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              {t('comparison.decentralized-title')}
            </h1>
            <FeatureList
              title={t('comparison.decentralized-title')}
              icon={<Globe />}
              features={decentralizedFeatures}
              color="green"
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 lg:hidden gap-6">
          <h1 className="font-extrabold text-2xl text-center bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
            {t('comparison.centralized-title')}
          </h1>
          <FeatureList
            title={t('comparison.centralized-title')}
            icon={<SlidersVertical />}
            features={centralizedFeatures}
            color="red"
          />

          <h1 className="font-extrabold text-6xl text-center mb-10 bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
            {t('comparison.vs')}
          </h1>

          <h1 className="font-extrabold text-2xl text-center bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
            {t('comparison.decentralized-title')}
          </h1>
          <FeatureList
            title={t('comparison.decentralized-title')}
            icon={<Globe />}
            features={decentralizedFeatures}
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
