import React from 'react';
import FeatureList from './FeatureList';
import { SlidersVertical, Globe } from 'lucide-react';
import {
  centralizedFeatures,
  decentralizedFeatures,
} from '@/constants/sectionData';

const ComparisonSection = () => {
  return (
    <section className="bg-[#BFBFBF] dark:bg-[#1D1D21]">
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        {/* <SectionHeader /> */}

        <div className="lg:grid grid-cols-1 hidden lg:grid-cols-3 gap-6 items-center">
          <div>
            <h1 className="font-extrabold text-2xl text-center md:text-3xl md:mb-20 mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              Centralized
            </h1>
            <FeatureList
              title="Centralized"
              icon={<SlidersVertical />}
              features={centralizedFeatures}
              color="red"
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <h1 className="font-extrabold text-6xl text-center lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              VS
            </h1>
          </div>

          <div>
            <h1 className="font-extrabold text-2xl text-center md:text-3xl md:mb-20 mb-10 lg:leading-normal bg-gradient-to-r from-[#0085a8] to-[#a45204] bg-clip-text font-orbitron text-transparent">
              Decentralized
            </h1>
            <FeatureList
              title="Decentralized"
              icon={<Globe />}
              features={decentralizedFeatures}
              color="green"
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="grid grid-cols-1 lg:hidden gap-6">
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
      </div>
    </section>
  );
};

export default ComparisonSection;
