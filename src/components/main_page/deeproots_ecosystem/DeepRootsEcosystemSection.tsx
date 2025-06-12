import React from 'react';
import UseCasesDeskView from './UseCasesDeskView';
import UseCaseMobileView from './UseCaseMobileView';

const DeepRootsEcosystemSection = () => {
  return (
    <section className="px-8">
      <h2 className="font-[600] w-fit leading-normal text-md md:text-5xl font-orbitron text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
        DeepRoots Ecosystem
      </h2>
      <div className="text-md md:text-3xl font-orbitron">
        From World to{' '}
        <span className="text-transparent bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text">
          DeWorld
        </span>
      </div>
      <div className="hidden lg:block">
        <UseCasesDeskView />
      </div>
      <div className="lg:hidden block">
        <UseCaseMobileView />
      </div>
    </section>
  );
};

export default DeepRootsEcosystemSection;
