import Image from 'next/image';
import React from 'react';

const ShareValueSection = () => {
  return (
    <main className="my-16 p-6 md:p-10">
      <div className="flex flex-col lg:flex-row items-center justify-center text-center">
        {/* Mobile Header */}
        <div className="flex justify-center items-center lg:hidden my-8 flex-col">
          <div className="inline-block">
            <div>
              <h1 className="font-extrabold text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
                SHARE VALUE
              </h1>
            </div>
          </div>
          <div className="inline-block">
            <div>
              <h1 className="font-extrabold text-xl mt-3 lg:text-2xl font-orbitron mb-5 bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
                Learn, Create, Innovate – A DeWorld Education Hub
              </h1>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="inline-block">
          <div className="relative w-full lg:w-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/landing/share-value.webp"
              alt="Education Hub"
              layout="intrinsic"
              width={600}
              height={500}
              className="object-cover rounded-2xl"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:ml-24">
          {/* Desktop Header */}
          <div className="lg:flex justify-center items-start hidden mb-4 flex-col">
            <div className="inline-block">
              <div>
                <h1 className="font-extrabold text-2xl lg:text-4xl font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
                  SHARE VALUE
                </h1>
              </div>
            </div>
            <div className="inline-block">
              <div>
                <h1 className="font-bold text-xl mt-3 font-orbitron bg-gradient-to-r from-[#E07C76] to-[#52b797] bg-clip-text text-transparent">
                  Learn, Create, Innovate – A DeWorld Education Hub
                </h1>
              </div>
            </div>
          </div>

          {/* Feature List */}
          <div className="flex text-left flex-col gap-4">
            <p className="font-sans text-lg">
              <span className="font-bold">AI-Powered Learning</span> -
              Empowering anyone, anywhere to learn and innovate in the
              decentralized world.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Decentralized Tech Resources</span> -
              Access tools to build on blockchain and decentralized
              technologies.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Global Access</span> - Programs for
              all sectors, enabling global innovation and contribution to
              DeWorld.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Innovation Hub</span> - A platform for
              hackathons, collaboration, and idea-sharing.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Empowering Creators</span> - Turn
              ideas into reality and shape the future of DeWorld.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Mentorship &amp; Idea Sharing</span> -
              Lead groups, share ideas, and gain knowledge by teaching others.
            </p>
            <p className="font-sans text-lg">
              <span className="font-bold">Knowledge Exchange</span> - Learn by
              teaching, and help grow the DeWorld community.
            </p>
          </div>

          {/* CTA Button */}
          <button className="py-4 font-bold mt-8 font-orbitron text-neutral-200 text-lg px-7 w-1/3 bg-gradient-to-r from-[#E07C76] to-[#52b797] hover:text-neutral-900 rounded-lg flex justify-center items-center">
            Learn
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShareValueSection;
