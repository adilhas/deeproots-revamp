import React from 'react';
import FeatureList from './FeatureList';
import SectionHeader from './SectionHeader';
import { SlidersVertical, Globe } from 'lucide-react';
import {
  centralizedFeatures,
  decentralizedFeatures,
} from '@/constants/sectionData';

const ComparisonSection = () => {
  return (
    <section className="max-w-5xl mx-auto py-12 px-6">
      <SectionHeader />

      <div className="md:grid grid-cols-1 hidden md:grid-cols-3 gap-6">
        <FeatureList
          title="Centralized"
          icon={<SlidersVertical />}
          features={centralizedFeatures}
          color="red"
        />

        <div className="inline-block">
          <h1 className="font-extrabold text-6xl text-center mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
            VS
          </h1>
        </div>

        <FeatureList
          title="Decentralized"
          icon={<Globe />}
          features={decentralizedFeatures}
          color="green"
        />
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-1 md:hidden gap-6">
        <h1 className="font-extrabold text-2xl text-center bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
          Centralized
        </h1>
        <FeatureList
          title="Centralized"
          icon={<SlidersVertical />}
          features={centralizedFeatures}
          color="red"
        />

        <h1 className="font-extrabold text-6xl text-center mb-10 bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
          VS
        </h1>

        <h1 className="font-extrabold text-2xl text-center bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
          Decentralized
        </h1>
        <FeatureList
          title="Decentralized"
          icon={<Globe />}
          features={decentralizedFeatures}
          color="green"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
